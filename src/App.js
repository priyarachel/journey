import "./App.css";
import { Canvas } from "@react-three/fiber";
import { Preload, ScrollControls } from "@react-three/drei";
import { Experience } from "./component/Experience";

function App() {
  return (
    <Canvas camera={{ position: [0, 0, 0], fov: 75 }}>
      <ScrollControls pages={3} damping={0.2}>
        <Experience></Experience>
      </ScrollControls>
      <Preload />
    </Canvas>
  );
}

export default App;
