import { useRef } from 'react'
import { useFrame, useLoader } from '@react-three/fiber'
import { Torus, MeshDistortMaterial } from '@react-three/drei'
import { TextureLoader } from 'three/src/loaders/TextureLoader'

function Light() {
    const ref = useRef()

    const [colorMap, normalMap, roughnessMap] = useLoader(TextureLoader, [
        'textures/torus/Marble012_1K_Color.jpg',
        'textures/torus/Marble012_1K_NormalGL.jpg',
        'textures/torus/Marble012_1K_Roughness.jpg',
    ])

    useFrame(() => (ref.current.rotation.z -= 0.003))

    return (
        <Torus 
            ref={ref} 
            args={[1, 0.22, 20, 100]}
            position={[0, 0, 0]}
            rotation={[0, 0, 0]}
        >
            <MeshDistortMaterial 
                distort={0.25} 
                speed={2} 
                map={colorMap}
                normalMap={normalMap}
                roughnessMap={roughnessMap} 
            />
        </Torus>
    )
}

function Sphere() {
    return (
        <mesh>
            <sphereGeometry />
            <meshBasicMaterial color="black" />
            <Light />
        </mesh>
    );
}
  
export default Sphere;