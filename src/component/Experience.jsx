import { OrbitControls } from "@react-three/drei";
import { Slum } from "./Slum";

export const Experience = () => {
    return (
        <>
        <ambientLight intensity={1}></ambientLight>
          <OrbitControls></OrbitControls>
        <Slum></Slum>
        </>
    )
}