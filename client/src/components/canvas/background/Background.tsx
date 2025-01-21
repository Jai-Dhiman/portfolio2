import { useFrame } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';
import '@react-three/drei';

export function Background() {
  const meshRef = useRef<THREE.Mesh>(null)
  const uniformsRef = useRef({
    uTime: { value: 0 },
    uColorA: { value: new THREE.Color('#a5a9a0') },
    uColorB: { value: new THREE.Color('#B1B5AC') },
  })

  const vertexShader = `
    varying vec2 vUv;
    
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `

  const fragmentShader = `
    uniform float uTime;
    uniform vec3 uColorA;
    uniform vec3 uColorB;
    varying vec2 vUv;

    void main() {
      vec2 distortedUv = vUv + 0.1 * vec2(
        sin(vUv.y * 10.0 + uTime * 0.5),
        cos(vUv.x * 10.0 + uTime * 0.5)
      );
      
      vec3 color = mix(uColorA, uColorB, distortedUv.x);
      gl_FragColor = vec4(color, 1.0);
    }
  `

  const shaderMaterial = useMemo(
    () =>
      new THREE.ShaderMaterial({
        uniforms: uniformsRef.current,
        vertexShader,
        fragmentShader,
      }),
    []
  )

  useFrame((state) => {
    if (!meshRef.current) return
    uniformsRef.current.uTime.value = state.clock.elapsedTime
  })

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[2, 2]} />
      <primitive object={shaderMaterial} attach="material" />
    </mesh>
  )
}