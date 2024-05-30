import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Ghost(props) {
  const { nodes, materials } = useGLTF('./assets/models/ghost_w_tophat.glb')
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <group position={[0, 155.777, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Eyes_Eyes_0.geometry}
            material={materials.Eyes}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Eyes_Ghost_White_0.geometry}
            material={materials.Ghost_White}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body_Ghost_White_0.geometry}
          material={materials.Ghost_White}
          position={[0, 155.777, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Hat_Hat_Black_0.geometry}
          material={materials.Hat_Black}
          position={[0, 299.13, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rim_Rim_Red_0.geometry}
          material={materials.Rim_Red}
          position={[0, 235.411, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
      </group>
    </group>
  )
}

useGLTF.preload('./assets/models/ghost_w_tophat.glb')

