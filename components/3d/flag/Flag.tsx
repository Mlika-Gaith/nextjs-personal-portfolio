
import React, {useEffect, useRef} from "react";
import {useGLTF, useAnimations, Center, OrbitControls, ContactShadows} from "@react-three/drei";
import styles from "./flag.module.css"
import {Canvas} from "@react-three/fiber";

export function FlagScene(props: any){
    return(
        <Canvas className={styles.canvas} shadows camera={{position:[-2,3,10], fov:50}}>
            <Center>
                <ambientLight intensity={1.1}/>
                {/* Directional Light for Sun-like Effect */}
                <ContactShadows
                    rotation-x={Math.PI / 2}
                    position={[0, -4, 0]}
                    opacity={0.5} // Adjust the opacity as needed
                    width={10} // Adjust the width and height based on your scene dimensions
                    height={10}
                    blur={0.2} // Adjust the blur level for the desired effect
                    far={10} // Adjust the far distance
                />
                <directionalLight
                    position={[5, 15, 10]}
                    intensity={1}
                    castShadow
                    shadow-mapSize-width={2048}
                    shadow-mapSize-height={2048}
                    shadow-camera-far={50}
                    shadow-camera-left={-10}
                    shadow-camera-right={10}
                    shadow-camera-top={10}
                    shadow-camera-bottom={-10}
                />
                {/* Additional Point or Spot Lights if needed */}
                <pointLight position={[-10, -10, -10]}/>
                <spotLight
                    position={[10, 10, 10]}
                    angle={0.4}
                    penumbra={1}
                    intensity={1}
                    castShadow
                    shadow-mapSize={[2048, 2048]}
                    shadow-bias={-0.0001}
                />
                <Model/>
                <OrbitControls enableZoom={false} enableRotate={false}/>
            </Center>
        </Canvas>
    )
}

function Model(props: any) {
    const group = useRef();
    const {nodes, materials, animations} = useGLTF("/assets/3d/tunisia_anim.glb");
    const { actions } = useAnimations(animations, group);
    // animations
    useEffect(()=>{
        const animation = actions['Take 001'];
        if (animation){
            animation.play();
        }
    },[actions])
    return (
        <group ref={group} {...props} dispose={null} scale={3}>
            <group name="Sketchfab_Scene">
                <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
                    <group
                        name="fec8d7142be04934bd1be0c701ab0878fbx"
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={0.025}
                    >
                        <group name="Object_2">
                            <group name="RootNode">
                                <group
                                    name="pole"
                                    position={[0, -3.763, 0]}
                                    rotation={[-Math.PI / 2, 0, 0]}
                                >
                                    <mesh
                                        name="pole_flag_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.pole_flag_0.geometry}
                                        material={materials.flag}
                                    />
                                </group>
                                <group
                                    name="polemini"
                                    position={[0, 11.569, 0]}
                                    rotation={[-Math.PI / 2, 0, 0]}
                                >
                                    <mesh
                                        name="polemini_flag_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.polemini_flag_0.geometry}
                                        material={materials.flag}
                                    />
                                </group>
                                <group name="GeoSphere001" position={[0.041, 53.445, 0.049]}>
                                    <mesh
                                        name="GeoSphere001_flag_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.GeoSphere001_flag_0.geometry}
                                        material={materials.flag}
                                    />
                                </group>
                                <group
                                    name="Rectangle003"
                                    position={[0, -47.114, 0]}
                                    rotation={[-Math.PI / 2, 0, 0]}
                                >
                                    <mesh
                                        name="Rectangle003_flag_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.Rectangle003_flag_0.geometry}
                                        material={materials.flag}
                                    />
                                </group>
                                <group
                                    name="Direct001"
                                    position={[-29.023, 38.495, 88.636]}
                                    rotation={[1.021, -0.095, 0.153]}
                                >
                                    <group name="Object_13" rotation={[Math.PI / 2, 0, 0]}>
                                        <group name="Object_14" />
                                    </group>
                                </group>
                                <group
                                    name="Direct001Target"
                                    position={[-8.463, -33.063, -24.326]}
                                    rotation={[0, -Math.PI / 2, 0]}
                                />
                                <group
                                    name="Spot001"
                                    position={[-29.685, 1.776, 1.106]}
                                    rotation={[1.618, 0.286, 1.55]}
                                >
                                    <group name="Object_17" rotation={[Math.PI / 2, 0, 0]}>
                                        <group name="Object_18" />
                                    </group>
                                </group>
                                <group
                                    name="Spot001Target"
                                    position={[19.198, 16.172, 0.733]}
                                    rotation={[-0.86, -0.765, -1.086]}
                                />
                                <group name="sim" position={[30.131, 26.671, -0.27]}>
                                    <mesh
                                        name="0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes["0"].geometry}
                                        material={materials.flag}
                                        morphTargetDictionary={nodes["0"].morphTargetDictionary}
                                        morphTargetInfluences={nodes["0"].morphTargetInfluences}
                                    />
                                </group>
                            </group>
                        </group>
                    </group>
                </group>
            </group>
        </group>
    );
}

useGLTF.preload("/assets/3d/tunisia_anim.glb");