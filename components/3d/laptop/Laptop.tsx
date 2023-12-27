import * as THREE from 'three'
import React, {FC, MutableRefObject, Suspense, useEffect, useRef, useState} from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Html,Environment, useGLTF, ContactShadows } from '@react-three/drei'
import { useSpring } from '@react-spring/core'
import { a as three } from '@react-spring/three'
import {a as web, Interpolation} from '@react-spring/web'
import {HomeScreen} from "@components/3d/laptop/components";
import styles from "./laptop.module.css"

type Props={
    open: boolean,
    hinge: Interpolation<number, 1.575 | -0.425>,
}

const Model: FC<Props> = ({ open, hinge, ...props }) => {
    // assert None null
    const group: MutableRefObject<THREE.Group<THREE.Object3DEventMap>> =
        useRef<THREE.Group<THREE.Object3DEventMap>>(null!);

    // Load model
    const { nodes, materials } = useGLTF('/assets/3d/mac-draco.glb')


    // Take care of cursor state on hover
    const [hovered, setHovered] = useState(false)
    useEffect(() => void (document.body.style.cursor = hovered ? 'pointer' : 'auto'), [hovered])

    // Make it float in the air when it's opened
    useFrame((state) => {
        const t = state.clock.getElapsedTime()
        if(group.current){
            group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, open ? Math.cos(t / 10) / 10 + 0.25 : 0, 0.1)
            group.current.rotation.z = THREE.MathUtils.lerp(group.current.rotation.z, open ? Math.sin(t / 10) / 10 : 0, 0.1)
            group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, open ? (-2 + Math.sin(t)) / 3 : -4.3, 0.1)
        }
    })


    const [screenWidth, setScreenWidth] = useState(window.innerWidth)
    useEffect(() => {
        const handleResize = () => setScreenWidth(window.innerWidth);
        window.addEventListener('resize', handleResize)
        console.log(screenWidth)
        return () => {
            window.removeEventListener('resize', handleResize);
        }

    }, []);

    const getLaptopPosition = () =>{
        if (screenWidth > 1100) {
            return new THREE.Vector3(-0.18, 0.09, 0.06);
        }
        return new THREE.Vector3(0, 0.05, -0.09);
    }

    return (
        <group ref={group} {...props}
               onPointerOver={(e) => (e.stopPropagation(), setHovered(true))}
               onPointerOut={(e) => setHovered(false)}
               dispose={null} scale={1.65}>
            <three.group rotation-x={hinge} position={[0, -0.04, 0.41]}>
                <group position={[0, 2.96, -0.13]} rotation={[Math.PI / 2, 0, 0]}>
                    <mesh material={materials.aluminium} geometry={(nodes['Cube008'] as THREE.Mesh).geometry} />
                    <mesh material={materials['matte.001']} geometry={(nodes['Cube008_1'] as THREE.Mesh).geometry} />
                    <mesh geometry={(nodes['Cube008_2'] as THREE.Mesh).geometry} />
                    {/** HOME SCREEN HERE */}
                    <Html className={styles.content} rotation-x={-Math.PI / 2} position={getLaptopPosition()}  transform occlude>
                        <div className={styles.wrapper} onPointerDown={(e) => e.stopPropagation()}>
                            <HomeScreen />
                        </div>
                    </Html>
                </group>
            </three.group>
            <mesh material={materials.keys} geometry={(nodes.keyboard as THREE.Mesh).geometry} position={[1.79, 0, 3.45]} />
            <group position={[0, -0.1, 3.39]}>
                <mesh material={materials.aluminium} geometry={(nodes['Cube002'] as THREE.Mesh).geometry} />
                <mesh material={materials.trackpad} geometry={(nodes['Cube002_1'] as THREE.Mesh).geometry} />
            </group>
            <mesh material={materials.touchbar} geometry={(nodes.touchbar as THREE.Mesh).geometry} position={[0, -0.03, 1.2]} />
        </group>
    )
}

export default function Scene() {
    // This flag controls open state, alternates between true & false
    const [open, setOpen] = useState(false)
    // We turn this into a spring animation that interpolates between 0 and 1
    const props = useSpring({ open: Number(open) })
    return (
        <web.main style={{ height:'100%', width:'100%',background: props.open.to([0, 1], ['#111111', '#A4161A'])}}>
            <Canvas dpr={[1, 2]} camera={{ position: [0, 0, -30], fov: 35 }} className={styles.canvas}>
                <three.pointLight position={[10, 10, 10]}
                                  intensity={1.5}
                                  color={props.open.to([0, 1], ['#111111', '#A4161A'])} />
                    <group rotation={[0, Math.PI, 0]}
                           onClick={(e) =>
                               (e.stopPropagation(), setOpen(!open))}>
                        <Model open={open} hinge={props.open.to([0, 1], [1.575, -0.425])} />
                    </group>
                    <Environment preset="city" />
                <ContactShadows position={[0, -4.5, 0]} opacity={0.4} scale={20} blur={1.75} far={4.5} />
            </Canvas>
        </web.main>
    )
}
