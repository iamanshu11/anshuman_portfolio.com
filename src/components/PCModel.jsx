import { useGLTF } from '@react-three/drei'

const PCModel = () => {
  const pc = useGLTF('/models/desktop_pc.glb') // Make sure the model path is correct

  return (
    <primitive
      object={pc.scene}
      scale={1.5}
      position={[0, -1.5, 0]}
      rotation={[0.1, Math.PI, 0]}
    />
  )
}

export default PCModel
