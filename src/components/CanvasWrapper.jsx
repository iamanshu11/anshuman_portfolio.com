import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'
import PCModel from './PCModel'

const CanvasWrapper = () => {
  return (
    <Canvas
      camera={{ position: [3, 1.5, 4], fov: 45 }}
      style={{ height: '100%', width: '100%' }}
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <OrbitControls enableZoom={false} enablePan={false} />
      <Environment preset="city" />
      <PCModel />
    </Canvas>
  )
}

export default CanvasWrapper
