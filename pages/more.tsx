'use client';

import React from 'react';
import Vanta from "../app/components/vantabg";

export default function More() {
  return (
    <main className="flex min-h-screen min-w-screen flex-col">
      {/* <Vanta /> */}
      <div className="flex flex-col p-10 w-1/2 h-20 pt-20">
        <span className="text-3xl">m.mcgraw</span>
        <div className="flex items-center">
          <span className="text-xl">currently coding here...</span>
          <span className="blinking-cursor">|</span>
        </div>
        
        </div>
        <div id="monitor">
    
    <div id="bezel">
        
        <div id="crt" className="off"> 
            
            <div className="scanline"></div>
            
            <div className="terminal"></div>
        </div>
    </div>
</div>
      </main>
  );
}
