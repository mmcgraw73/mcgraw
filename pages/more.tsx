'use client';

import React from 'react';
import Vanta from "../app/components/vantabg";
import DateTrivia from '@/app/components/datetrivia';
import TriviaGame from '@/app/components/triviagame';
import ThreeDScene from '@/app/components/threeDscene';

export default function More() {
  let date = new Date().toLocaleDateString();
  return (
    <main className="flex min-h-screen min-w-screen flex-col">
      {/* <Vanta /> */}
      <div className="flex flex-col p-10 w-1/2 h-20 pt-20">
      <div className="flex items-center">
        <span className="text-3xl">shall we play a game?</span><span className="blinking-cursor">|</span>
                </div>
          <span className="text-xl my-4">
            <TriviaGame />
            <div>
      {/* <h1>3D Scene with Three.js</h1>
      <ThreeDScene /> */}
    </div>
          </span>
          

        
        </div>
        <div id="monitor">
    
    {/* <div id="bezel">
        
        <div id="crt" className="off"> 
            
            <div className="scanline"></div>
            
            <div className="terminal"></div>
        </div>
    </div> */}
</div>
      </main>
  );
}
