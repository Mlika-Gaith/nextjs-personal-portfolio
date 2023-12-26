import React, { useRef, useEffect } from "react";
import styles from "./sphere.module.css"
import {Canvas, useFrame} from '@react-three/fiber'
import {Center, ContactShadows, Environment, OrbitControls} from '@react-three/drei'
import { useGLTF } from "@react-three/drei";

export function Scene(props: any) {
    const modelRef = useRef<THREE.Mesh>(null);

    useEffect(() => {
        if (modelRef.current) {
            const modelPosition = modelRef.current.position;
            props.setCameraPosition([
                modelPosition.x,
                modelPosition.y - 2.5,
                modelPosition.z + 2.5
            ]);
        }
    }, []);
    return(
        <Canvas className={styles.canvas} shadows
                camera={{ position: props.cameraPosition, fov: 50 }}>
            <Center>
                <ambientLight/>
                <spotLight intensity={0.5} angle={0.4} penumbra={0.5} position={[5, 1, 10]}/>
                <ContactShadows
                    rotation={[-Math.PI / 2, 0, 0]}
                    position={[0, -1.8, 0]}
                    opacity={0.4}
                    width={5}
                    height={10}
                    blur={0.01}
                    far={10}
                />
                <Model/>
                <Environment preset="dawn" blur={0.9}/>
                <OrbitControls enableZoom={false}/>
            </Center>

        </Canvas>
    )
}


function Model(props: any ) {
    const group = useRef()
    const { nodes, materials } = useGLTF("/assets/3d/planet.glb");
    // change colors
    materials.material.color.setHSL(0, 1, 0.1) // RGB for dark red: (139, 0, 0)
    // For the other materials, if you want to set them to black, use RGB (0, 0, 0)
    materials.material_1.color.setRGB(0, 0, 0);
    materials.material_2.color.setRGB(0, 0, 0);
    useFrame(({clock})=>{
        const elapsedTime = clock.getElapsedTime();
        group.current.rotation.y += 0.005
        const hue = (elapsedTime * 10) % 360;

    })
    return (
        <group {...props} dispose={null} scale={0.0145} ref={group}>
            <group
                position={[-1.334, -0.782, 1.171]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={100}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.COMBINE_LP_LAM_0.geometry}
                    material={materials.material}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.COMBINE_LP_1_0.geometry}
                    material={materials.material_1}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.COMBINE_LP_2_0.geometry}
                    material={materials.material_2}
                />
            </group>
        </group>
    );
}

useGLTF.preload("/assets/3d/planet.glb");