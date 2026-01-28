import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment } from "@react-three/drei";
import Header from "../components/Header"; 
import Footer from "../components/Footer";

const cars = [
  {
    name: "Suzuki Ertiga",
    path: "/3DModel/suzuki_ertiga/scene.gltf",
    tagline: "The Family Adventure",
    specs: {
      engine: "1.5L K15B Petrol",
      power: "103 HP @ 6,000 rpm",
      torque: "138 Nm @ 4,400 rpm",
      transmission: "5-Speed Manual / 4-Speed AT",
      seating: "7 Seater",
      mileage: "19.01 km/l",
      fuelTank: "45 Litres",
      length: "4,395 mm"
    }
  },
  {
    name: "Suzuki Swift",
    path: "/3DModel/suzuki_swift/scene.gltf",
    tagline: "Born to Perform",
    specs: {
      engine: "1.2L K12N Petrol",
      power: "89 HP @ 6,000 rpm",
      torque: "113 Nm @ 4,200 rpm",
      transmission: "5-Speed Manual / AMT",
      seating: "5 Seater",
      mileage: "22.38 km/l",
      fuelTank: "37 Litres",
      length: "3,845 mm"
    }
  }
];

import { GLTF } from "three-stdlib";
import * as THREE from "three";

const Car = ({ path }: { path: string }) => {
  const gltf = useGLTF(path) as GLTF & { scene: THREE.Object3D };
  // Clone the scene to prevent reusing the same object
  const clonedScene = React.useMemo(() => gltf.scene.clone(), [gltf.scene]);
  return <primitive object={clonedScene} />;
};

cars.forEach(c => useGLTF.preload(c.path));

export default function CarShowroom() {
  const [index, setIndex] = useState(0);
  const [showSpecs, setShowSpecs] = useState(false);

  const currentCar = cars[index];

  return (
    <div className="relative w-full min-h-screen flex flex-col bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 font-sans">
      
      {/* Website Header */}
      <Header />
      
      {/* Car Showroom Section - Full viewport height */}
      <div className="relative w-full h-screen overflow-hidden">
      
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-zinc-800/20 via-transparent to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-zinc-800/10 via-transparent to-transparent pointer-events-none" />
        
        {/* Noise texture overlay */}
        <div className="absolute inset-0 opacity-[0.015] pointer-events-none mix-blend-overlay"
             style={{
               backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
               backgroundRepeat: 'repeat',
               backgroundSize: '200px 200px'
             }}
        />

        {/* Car Title Header - Moved down to avoid website header overlap */}
        <header className="absolute top-24 left-0 right-0 z-20 px-12 py-6 flex justify-between items-start">
          <div>
            <h1 className="text-7xl font-light tracking-tight text-white mb-2 drop-shadow-2xl">
              {currentCar.name}
            </h1>
            <p className="text-zinc-400 text-xl tracking-widest uppercase font-light" 
               style={{ fontFamily: "'Montserrat', sans-serif" }}>
              {currentCar.tagline}
            </p>
          </div>
          
          <div className="text-right">
            <div className="text-zinc-500 text-sm tracking-widest uppercase mb-1">Model</div>
            <div className="text-white text-2xl font-light">
              {String(index + 1).padStart(2, '0')} / {String(cars.length).padStart(2, '0')}
            </div>
          </div>
        </header>

        {/* 3D Canvas */}
        <Canvas
          camera={{ position: [4, 2, 6], fov: 50 }}
          className="w-full h-full"
        >
          <Suspense fallback={null}>
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 15, 10]} angle={0.3} penumbra={1} intensity={1.5} castShadow />
            <spotLight position={[-10, 10, -10]} angle={0.3} penumbra={1} intensity={0.8} />
            <Car path={currentCar.path} />
            <Environment preset="city" />
          </Suspense>
          <OrbitControls
            enablePan={true}
            enableZoom={true}
            minPolarAngle={Math.PI / 4}
            maxPolarAngle={Math.PI / 2}
            minAzimuthAngle={-Math.PI / 4}
            maxAzimuthAngle={Math.PI / 4}
          />
        </Canvas>

        {/* Spec Overlay - Fade in when button clicked */}
        <div 
          className={`absolute left-12 top-1/2 -translate-y-1/2 transition-all duration-700 ease-out ${
            showSpecs ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8 pointer-events-none'
          }`}
          style={{ maxWidth: '420px' }}
        >
          <div className="bg-zinc-950/80 backdrop-blur-xl border border-zinc-800/50 rounded-2xl p-8 shadow-2xl">
            <h3 className="text-zinc-400 text-xs tracking-[0.2em] uppercase mb-6 font-medium">
              Technical Specifications
            </h3>
            
            <div className="space-y-5">
              {Object.entries(currentCar.specs).map(([key, value], idx) => (
                <div 
                  key={key}
                  className="flex justify-between items-baseline border-b border-zinc-800/50 pb-3 transition-all duration-500"
                  style={{ 
                    animationDelay: `${idx * 50}ms`,
                    animation: showSpecs ? 'fadeInUp 0.6s ease-out forwards' : 'none',
                    opacity: showSpecs ? 1 : 0
                  }}
                >
                  <span className="text-zinc-500 text-sm capitalize tracking-wide">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </span>
                  <span className="text-white font-light text-base tracking-wide ml-4 text-right">
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="absolute right-12 top-1/2 -translate-y-1/2 flex flex-col gap-6">
          {/* Left Arrow */}
          <button
            onClick={() => setIndex((index - 1 + cars.length) % cars.length)}
            className="group relative w-16 h-16 flex items-center justify-center text-white text-4xl font-light
                       bg-zinc-900/60 backdrop-blur-md border border-zinc-700/30 rounded-full
                       hover:bg-zinc-800/80 hover:border-zinc-600/50 hover:scale-110 
                       transition-all duration-300 shadow-xl hover:shadow-2xl"
          >
            <span className="transform group-hover:-translate-x-0.5 transition-transform duration-300">‹</span>
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/0 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>

          {/* Dots Indicator */}
          <div className="flex flex-col gap-3 items-center py-2">
            {cars.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`transition-all duration-500 rounded-full ${
                  i === index
                    ? "w-2 h-8 bg-white shadow-lg shadow-white/20"
                    : "w-2 h-2 bg-zinc-600 hover:bg-zinc-400"
                }`}
              />
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => setIndex((index + 1) % cars.length)}
            className="group relative w-16 h-16 flex items-center justify-center text-white text-4xl font-light
                       bg-zinc-900/60 backdrop-blur-md border border-zinc-700/30 rounded-full
                       hover:bg-zinc-800/80 hover:border-zinc-600/50 hover:scale-110 
                       transition-all duration-300 shadow-xl hover:shadow-2xl"
          >
            <span className="transform group-hover:translate-x-0.5 transition-transform duration-300">›</span>
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/0 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </div>

        {/* View Specs Button - Inside car section */}
        <div className="absolute bottom-8 left-0 right-0 px-12 flex justify-center items-end z-10">
          <button 
            onClick={() => setShowSpecs(!showSpecs)}
            className="px-8 py-3 bg-white text-zinc-950 font-medium tracking-wider uppercase text-sm
                       hover:bg-zinc-100 transition-all duration-300 rounded-full shadow-xl
                       hover:shadow-2xl hover:scale-105 border border-zinc-200">
            {showSpecs ? 'Hide Specs' : 'View Specs'}
          </button>
        </div>
      </div>

      {/* Website Footer - Smaller size */}
      <div className="w-full bg-zinc-950">
        <Footer />
      </div>

      {/* Custom CSS animations */}
      <style>{`
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        * {
          font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, sans-serif;
        }
      `}</style>
    </div>
  );
}
