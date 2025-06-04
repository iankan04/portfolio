import { Suspense, useState, useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import Loader from '../components/Loader';
import Sky from '../models/Sky';
import HomeInfo from '../components/HomeInfo';

import Building from '../models/Building';
import { soundoff, soundon } from '../assets/icons';

const Home = () => {
  const audioRef = useRef(new Audio('/assets/street.mp3'));
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(0);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  useEffect(() => {
    if (isPlayingMusic) {
      audioRef.current.play();
    }

    return () => {
      audioRef.current.pause();
    }
  }, [isPlayingMusic])

  const adjustBuildingForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [1, 1, -25];
    let rotation = [0.25, 2.4, 0];
    
    if (window.innerWidth < 768) {
      screenScale = [3, 3, 3];
    } else if (window.innerWidth < 1024) {
      screenPosition = [1, 0, -25]
      screenScale = [3, 3, 3];
    } else {
      screenScale = [4, 3.7, 4];
    }
    
    return [screenScale, screenPosition, rotation];
  }
  
  const [buildingScale, buildingPosition, buildingRotation] = adjustBuildingForScreenSize();
  
  return (
    <section className="w-full h-screen relative">
      <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        {currentStage != -1 && <HomeInfo currentStage={currentStage}/>}
      </div>
      <Canvas 
        className={`w-full h-screen bg-transparen ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
        camera={{ near: 0.1, far: 1000 }}
        >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={1}/>
          <ambientLight intensity={0.5}/>
          <hemisphereLight skyColor="#b1e1ff" groupdColor="#000000" intensity={1}/>
          
          <Sky isRotating={isRotating}/>
          <Building
            position={buildingPosition}
            scale={buildingScale}
            rotation={buildingRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          />
        </Suspense>
      </Canvas>

      <div className="absolute bottom-2 left-2">
        <img 
          src={!isPlayingMusic ? soundoff : soundon} 
          alt="sound" 
          className="w-10 h-10 cursor-pointer object-contain"
          onClick={() => setIsPlayingMusic(!isPlayingMusic)}
        />

      </div>
    </section>
  )
}

export default Home
