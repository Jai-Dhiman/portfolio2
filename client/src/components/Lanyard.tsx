/* eslint-disable react/no-unknown-property */
import React, { useEffect, useRef, useState } from "react";
import { Canvas, extend, useFrame } from "@react-three/fiber";
import {
  useGLTF,
  useTexture,
  Environment,
  Lightformer,
} from "@react-three/drei";
import {
  BallCollider,
  CuboidCollider,
  Physics,
  RigidBody,
  useRopeJoint,
  useSphericalJoint,
  RigidBodyProps,
} from "@react-three/rapier";
import { MeshLineGeometry, MeshLineMaterial } from "meshline";
import * as THREE from "three";

// Import assets
import cardGLB from "../assets/lanyard/card.glb";
import profilePic from "../assets/lanyard/profilepic.png";

extend({ MeshLineGeometry, MeshLineMaterial });

// TypeScript declarations for extended three.js components
declare global {
  namespace JSX {
    interface IntrinsicElements {
      meshLineGeometry: any;
      meshLineMaterial: any;
    }
  }
}

interface LanyardProps {
  position?: [number, number, number];
  gravity?: [number, number, number];
  fov?: number;
  transparent?: boolean;
}

export default function Lanyard({
  position = [0, 0, 30],
  gravity = [0, -40, 0],
  fov = 35,
  transparent = false,
}: LanyardProps) {
  const [hasError, setHasError] = useState(false);
  const [isLowPerformance, setIsLowPerformance] = useState(false);

  // Check device performance
  useEffect(() => {
    const checkPerformance = () => {
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      const isLowMemory = (navigator as any).deviceMemory && (navigator as any).deviceMemory < 4;
      const isSlowCPU = navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4;

      if (isMobile || isLowMemory || isSlowCPU) {
        setIsLowPerformance(true);
      }
    };

    checkPerformance();
  }, []);

  if (hasError || isLowPerformance) {
    return <div className="w-full h-screen" />;
  }

  return (
    <div className="relative z-0 w-full h-screen flex justify-center items-center transform scale-100 origin-center">
      <Canvas
        camera={{ position, fov }}
        gl={{
          alpha: transparent,
          antialias: false, // Disable for better performance
          powerPreference: "high-performance",
        }}
        onCreated={({ gl }) => {
          gl.setClearColor(new THREE.Color(0x000000), transparent ? 0 : 1);
          gl.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Limit pixel ratio
        }}
        onError={() => setHasError(true)}
      >
        <ambientLight intensity={10} />
        <Physics gravity={gravity} timeStep={1 / 30}>
          <Band />
        </Physics>
        <Environment blur={0.75}>
          <Lightformer
            intensity={2.5}
            color="white"
            position={[0, -1, 5]}
            rotation={[0, 0, Math.PI / 3]}
            scale={[50, 0.1, 1]}
          />
          <Lightformer
            intensity={2.5}
            color="white"
            position={[-1, -1, 1]}
            rotation={[0, 0, Math.PI / 3]}
            scale={[50, 0.1, 1]}
          />
        </Environment>
      </Canvas>
    </div>
  );
}

interface BandProps {
  maxSpeed?: number;
  minSpeed?: number;
}

function Band({ maxSpeed = 50, minSpeed = 0 }: BandProps) {
  // Using "any" for refs since the exact types depend on Rapier's internals
  const band = useRef<any>(null);
  const fixed = useRef<any>(null);
  const j1 = useRef<any>(null);
  const j2 = useRef<any>(null);
  const j3 = useRef<any>(null);
  const card = useRef<any>(null);

  const vec = new THREE.Vector3();
  const ang = new THREE.Vector3();
  const rot = new THREE.Vector3();
  const dir = new THREE.Vector3();

  const segmentProps: any = {
    type: "dynamic" as RigidBodyProps["type"],
    canSleep: true,
    colliders: false,
    angularDamping: 4,
    linearDamping: 4,
  };

  const { nodes, materials } = useGLTF(cardGLB) as any;
  const profileTexture = useTexture(profilePic);

  // Fix texture orientation and scaling
  profileTexture.flipY = false; // Try flipping Y
  profileTexture.repeat.set(1.45, 1.45); // Zoom out more
  profileTexture.offset.set(0.365, 0.05); // Center the texture
  profileTexture.center.set(0.5, 0.5); // Set rotation center
  profileTexture.rotation = 0; // Rotate 180 degrees to fix orientation

  const [curve] = useState(
    () =>
      new THREE.CatmullRomCurve3([
        new THREE.Vector3(),
        new THREE.Vector3(),
        new THREE.Vector3(),
        new THREE.Vector3(),
        new THREE.Vector3(),
      ])
  );
  const [dragged, drag] = useState<false | THREE.Vector3>(false);
  const [hovered, hover] = useState(false);

  const [isSmall, setIsSmall] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      return window.innerWidth < 1024;
    }
    return false;
  });

  useEffect(() => {
    const handleResize = (): void => {
      setIsSmall(window.innerWidth < 1024);
    };

    window.addEventListener("resize", handleResize);
    return (): void => window.removeEventListener("resize", handleResize);
  }, []);

  useRopeJoint(fixed, j1, [[0, 0, 0], [0, 0, 0], 1]);
  useRopeJoint(j1, j2, [[0, 0, 0], [0, 0, 0], 1]);
  useRopeJoint(j2, j3, [[0, 0, 0], [0, 0, 0], 1]);
  useSphericalJoint(j3, card, [
    [0, 0, 0],
    [0, 1.45, 0],
  ]);

  useEffect(() => {
    if (hovered) {
      document.body.style.cursor = dragged ? "grabbing" : "grab";
      return () => {
        document.body.style.cursor = "auto";
      };
    }
  }, [hovered, dragged]);

  useFrame((state, delta) => {
    if (dragged && typeof dragged !== "boolean") {
      vec.set(state.pointer.x, state.pointer.y, 0.5).unproject(state.camera);
      dir.copy(vec).sub(state.camera.position).normalize();
      vec.add(dir.multiplyScalar(state.camera.position.length()));
      [card, j1, j2, j3, fixed].forEach((ref) => ref.current?.wakeUp());
      card.current?.setNextKinematicTranslation({
        x: vec.x - dragged.x,
        y: vec.y - dragged.y,
        z: vec.z - dragged.z,
      });
    }
    if (fixed.current) {
      [j1, j2].forEach((ref) => {
        if (!ref.current.lerped)
          ref.current.lerped = new THREE.Vector3().copy(
            ref.current.translation()
          );
        const clampedDistance = Math.max(
          0.1,
          Math.min(1, ref.current.lerped.distanceTo(ref.current.translation()))
        );
        ref.current.lerped.lerp(
          ref.current.translation(),
          delta * (minSpeed + clampedDistance * (maxSpeed - minSpeed))
        );
      });

      // Update curve points to include card position for proper rope connection
      const cardPos = card.current.translation();
      // Account for the card's visual offset and connect to the hook area
      // Connect higher up to avoid overlapping with the card hook
      const cardTopPos = new THREE.Vector3(
        cardPos.x,
        cardPos.y + 0.25, // Higher to connect above the hook area
        cardPos.z
      );

      curve.points[0].copy(cardTopPos); // Start from top of card
      curve.points[1].copy(j3.current.translation());
      curve.points[2].copy(j2.current.lerped);
      curve.points[3].copy(j1.current.lerped);
      curve.points[4] = new THREE.Vector3(); // Add extra point
      curve.points[4].copy(fixed.current.translation());

      band.current.geometry.setPoints(curve.getPoints(32));
      ang.copy(card.current.angvel());
      rot.copy(card.current.rotation());
      card.current.setAngvel({ x: ang.x, y: ang.y - rot.y * 0.25, z: ang.z });
    }
  });

  curve.curveType = "chordal";

  return (
    <>
      <group position={[0, 6, 0]}>
        <RigidBody
          ref={fixed}
          {...segmentProps}
          type={"fixed" as RigidBodyProps["type"]}
          position={[0, 0, 0]}
        />
        <RigidBody
          position={[0, -0.5, 0]}
          ref={j1}
          {...segmentProps}
          type={"dynamic" as RigidBodyProps["type"]}
        >
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody
          position={[0, -1, 0]}
          ref={j2}
          {...segmentProps}
          type={"dynamic" as RigidBodyProps["type"]}
        >
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody
          position={[0, -1.5, 0]}
          ref={j3}
          {...segmentProps}
          type={"dynamic" as RigidBodyProps["type"]}
        >
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody
          position={[0, -2, 0]}
          ref={card}
          {...segmentProps}
          type={
            dragged
              ? ("kinematicPosition" as RigidBodyProps["type"])
              : ("dynamic" as RigidBodyProps["type"])
          }
        >
          <CuboidCollider args={[0.8, 1.125, 0.01]} />
          <group
            scale={1.2}
            position={[0, -1.2, -0.05]}
            onPointerOver={() => hover(true)}
            onPointerOut={() => hover(false)}
            onPointerUp={(e: any) => {
              e.target.releasePointerCapture(e.pointerId);
              drag(false);
            }}
            onPointerDown={(e: any) => {
              e.target.setPointerCapture(e.pointerId);
              drag(
                new THREE.Vector3()
                  .copy(e.point)
                  .sub(vec.copy(card.current.translation()))
              );
            }}
          >
            {nodes && materials ? (
              <>
                <mesh geometry={nodes.card.geometry}>
                  <meshPhysicalMaterial
                    map={profileTexture}
                    clearcoat={1}
                    clearcoatRoughness={0.15}
                    roughness={0.9}
                    metalness={0.8}
                  />
                </mesh>
                <mesh
                  geometry={nodes.clip.geometry}
                  material={materials.metal}
                  material-roughness={0.3}
                />
                <mesh geometry={nodes.clamp.geometry} material={materials.metal} />
              </>
            ) : (
              // Fallback if GLB doesn't load
              <mesh>
                <boxGeometry args={[1.6, 2.25, 0.02]} />
                <meshPhysicalMaterial
                  color="#ffffff"
                  clearcoat={1}
                  clearcoatRoughness={0.15}
                  roughness={0.9}
                  metalness={0.8}
                />
              </mesh>
            )}
          </group>
        </RigidBody>
      </group>
      <mesh ref={band}>
        <meshLineGeometry />
        <meshLineMaterial
          color="black"
          depthTest={true}
          resolution={isSmall ? [1000, 2000] : [1000, 1000]}
          lineWidth={1}
          transparent={false}
          opacity={1}
        />
      </mesh>
    </>
  );
}