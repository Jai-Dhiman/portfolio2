import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { Background } from './background/Background'

export function Scene() {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen -z-10">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Background />
        </Suspense>
      </Canvas>
    </div>
  )
}