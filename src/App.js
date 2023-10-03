import logo from './logo.svg';
import './App.css';
import { Canvas } from '@react-three/fiber';
import { Experience } from './component/Experience';

function App() {
  return (
    <div className="App">
      <Canvas>
        <Experience></Experience>
      </Canvas>
    </div>
  );
}

export default App;
