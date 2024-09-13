import React, { useRef, useLayoutEffect } from "react";
import { useScroll, useGLTF, GradientTexture} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { folder, useControls } from "leva";
import gsap from "gsap";
import { OrbitControls } from "three-stdlib";

export function Axe(props) {
  // const {
  //   positionX,
  //   positionY,
  //   positionZ,
  //   rotationX,
  //   rotationY,
  //   rotationZ,
  //   scale,
  // } = useControls("Axe", {
  //   position: folder({
  //     positionX: {
  //       value: -1.23,
  //     },
  //     positionY: {
  //       value: 0,
  //     },
  //     positionZ: {
  //       value: 0,
  //     },
  //   }),
  //   rotation: folder({
  //     rotationX: {
  //       value: -0.2,
  //     },
  //     rotationY: {
  //       value: -2.49,
  //     },
  //     rotationZ: {
  //       value: 0,
  //     },
  //   }),
  //   scale: {
  //     value: 0.01,
  //   },
  // });
  const { nodes, materials } = useGLTF("/free_axe_sylvaxe.glb");
  const axe = useRef();
  const axeScale = useRef();
  const scroll = useScroll();
  const tl = useRef();
  useFrame((state, delta) => {
    tl.current.seek(scroll.offset * tl.current.duration());
  });
  useLayoutEffect(() => {
    tl.current = gsap.timeline({
      defaults: { duration: 0.3, ease: "power1.inOut" },
    });

    tl.current
      .to(axe.current.position, { x: 4 }, 0.1)
      .to(axe.current.position, { y: 0 }, 0.1)
      .to(axe.current.position, { z: 1.5 }, 0.1)
      .to(axe.current.rotation, { x: -0.2 }, 0.1)
      .to(axe.current.rotation, { y: -4.3 }, 0.1)
      .to(axe.current.rotation, { z: 0 }, 0.1)
      .to(axeScale.current.scale, { x: 0.0115, y: 0.0115, z: 0.0115 }, 0.1)

      // .to(axe.current.position, { x: 4 }, 1.5)
      // .to(axe.current.position, { y: 0 }, 1.5)
      // .to(axe.current.position, { z: 1.5 }, 1.5)
      // .to(axe.current.rotation, { x: -0.4 }, 1.5)
      // .to(axe.current.rotation, { y: -4.3 }, 1.5)
      // .to(axe.current.rotation, { z: 0 }, 1.5)
      // .to(axeScale.current.scale, { x: 0.0115, y: 0.0115, z: 0.0115 }, 1.5)

      .to(axe.current.position, { x: -4.7 }, 0.4)
      .to(axe.current.position, { y: -0.16 }, 0.4)
      .to(axe.current.position, { z: 1.44 }, 0.4)
      .to(axe.current.rotation, { x: -0.2 }, 0.4)
      .to(axe.current.rotation, { y: -1.97 }, 0.4)
      .to(axe.current.rotation, { z: 0 }, 0.4)
      .to(axeScale.current.scale, { x: 0.01, y: 0.01, z: 0.01 }, 0.4)

      .to(axe.current.position, { x: -0.13 }, 0.7)
      .to(axe.current.position, { y: -1.09 }, 0.7)
      .to(axe.current.position, { z: 0.5 }, 0.7)
      .to(axe.current.rotation, { x: -0.57 }, 0.7)
      .to(axe.current.rotation, { y: -3.11 }, 0.7)
      .to(axe.current.rotation, { z: -1.62 }, 0.7)
      .to(axeScale.current.scale, { x: 0.01, y: 0.01, z: 0.01 }, 0.7);
  }, []);
  return (
    <group
      {...props}
      dispose={null}
      position={[-1.23, 0, 0]}
      rotation={[-0.2, -2.49, 0]}
      ref={axe}
    >
      <group>
        <group rotation={[-Math.PI, 0, 0]} scale={0.01} ref={axeScale}>
          <mesh
            geometry={nodes.Sylvaxe_Sylvaxe_0.geometry}
            material={materials.Sylvaxe}
            rotation={[Math.PI / 2, 0, 0]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/free_axe_sylvaxe.glb");
