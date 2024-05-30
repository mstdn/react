import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useGame } from 'ecctrl'
import * as THREE from "three"
import { CuboidCollider, RigidBody } from "@react-three/rapier"

export function PokeCity(props) 
{
    const { nodes, materials } = useGLTF('./assets/models/viridian_city.glb')
    const circleRef = useRef()
    const date = useRef(0)
    const setMoveToPoint = useGame((state) => state.setMoveToPoint)

  return (
  <>
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
                <group scale={0.01}>
                    <group position={[98.355, 130.598, 2079.17]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.fire_red_pokemon_center_fire_red_buildings_0.geometry}
                        material={materials.fire_red_buildings}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.fire_red_pokemon_center__3863_0.geometry}
                        material={materials['3863']}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.fire_red_pokemon_center_chip_wood_a_0.geometry}
                        material={materials.chip_wood_a}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.fire_red_pokemon_center_fr_tree_a_0.geometry}
                        material={materials.fr_tree_a}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.fire_red_pokemon_center_fr_tree_a_0_1.geometry}
                        material={materials.fr_tree_a}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.fire_red_pokemon_center__3772_0.geometry}
                        material={materials['3772']}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.fire_red_pokemon_center_plant_0.geometry}
                        material={materials.plant}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.fire_red_pokemon_center_viridian_tree_a_0.geometry}
                        material={materials.viridian_tree_a}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.fire_red_pokemon_center_fire_red_buildings_1_0.geometry}
                        material={materials.fire_red_buildings_1}
                    />
                    </group>
                </group>
            </group>
        </RigidBody>
  </>
   
  )
}

useGLTF.preload('./assets/models/viridian_city.glb')