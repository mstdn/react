import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useGame } from 'ecctrl'
import * as THREE from "three"
import { CuboidCollider, RigidBody } from "@react-three/rapier"

export function GTA(props) 
{
    const { nodes, materials } = useGLTF('./assets/models/gta.glb')
    const circleRef = useRef()
    const date = useRef(0)
    const setMoveToPoint = useGame((state) => state.setMoveToPoint)

  return (
    <group scale={5}>
        <mesh ref={circleRef} rotation-x={-Math.PI / 2}>
            <ringGeometry args={[0.2, 0.3]} />
            <meshBasicMaterial color={0x000000} transparent opacity={0.25} />
        </mesh>
        <RigidBody 
            type="fixed" 
            // colliders={ false }
            colliders="trimesh" 
            ccd={ true }
            {...props}
        >
            <group 
                dispose={null}
                onPointerMove={({ point }) => 
                {
                    circleRef.current.position.z = point.z
                    circleRef.current.position.x = point.x
                    circleRef.current.position.y = point.y + 0.01
                }}
                    onPointerDown={() => {
                    date.current = Date.now()
                    }}
                onPointerUp={({ point }) => {
                if (Date.now() - date.current < 200) {
                    // a quick click
                    setMoveToPoint(point)
                }}}    
            >
                <group>
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.VC_Map_VC_Map_Upscaled_0.geometry}
                    material={materials.VC_Map_Upscaled}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.VC_Map_VC_Map_Upscaled_0_1.geometry}
                    material={materials.VC_Map_Upscaled}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.VC_Map_VC_Map_Upscaled_0_2.geometry}
                    material={materials.VC_Map_Upscaled}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.VC_Map_VC_Map_Upscaled_0_3.geometry}
                    material={materials.VC_Map_Upscaled}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.VC_Map_VC_Map_Upscaled_0_4.geometry}
                    material={materials.VC_Map_Upscaled}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.VC_Map_VC_Map_Upscaled_0_5.geometry}
                    material={materials.VC_Map_Upscaled}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.VC_Map_VC_Map_Upscaled_0_6.geometry}
                    material={materials.VC_Map_Upscaled}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.VC_Map_VC_Map_Upscaled_0_7.geometry}
                    material={materials.VC_Map_Upscaled}
                    />
                </group>
            </group>
        </RigidBody>
    </group>
  )
}

useGLTF.preload('./assets/models/gta.glb')
