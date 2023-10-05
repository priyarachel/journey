import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Slum } from "./Slum";
import { useRef, Suspense } from "react";

export const Experience = () => {
  const scroll = useScroll();
  const slum = useRef();

  useFrame((state) => {
    if (slum.current) {
      let r1 = scroll.range(0, 1 / 3);
      console.log(state.camera.position);
      //state.camera.lookAt(slum.current.position);
      state.camera.position.set(r1 * 25, r1 * 2, r1 * -15);
    }

    return null;
  });

  return (
    <>
      <ambientLight intensity={5}></ambientLight>
      <Suspense fallback={null}>
        <Slum position={[25, 0, -20]} ref={slum}></Slum>
      </Suspense>
    </>
  );
};
