'use client';

import React from 'react';
import Vanta from "../app/components/vantabg";
export default function Crypto() {
  return (
    <main className="flex min-h-screen min-w-screen flex-col">
      <Vanta />
      <div className="flex flex-col p-10 w-1/3">
        <div className="flex flex-col">
          <div className="h-auto w- border-1 neon-border p-8 mt-10 bg-light-green border-radius">
          <section className="">
            
            <div className="flex flex-col">
          <i className="ri-btc-line"></i>

              <h2 className="text-2xl font-bold">cryptostache</h2>
              <span className='text-xs text-orange-400'>a well manicured crypto dashboard</span>
            </div>
            
          </section>
            
            <section className="mt-4">
              
            <ul className="list-none lowercase">
              <li className="flex flex-row">
                <i className="fa-solid fa-mustache pt-1 pr-2"></i><span>real-time updates with crypto apis 2.0</span>
              </li>
              <li className="flex flex-row items-center">
                <i className="fa-solid fa-mustache pr-2 "></i><span>dataviz by Victory</span>
              </li>
              <li className="flex flex-row">
                <i className="fa-solid fa-mustache pt-1 pr-2 mb-3"></i><span>cutomizable crypto news feed by tbd</span>
              </li>
            </ul>
          </section>
          <section className="mt-10">
            <h2 className="text-2xl font-bold">technologies used</h2>
            <ul className="list-disc list-inside mt-2 border-t-2 border-orange-400">
              <li className="mt-3">react</li>
              <li className="mt-3">typescript</li>
              <li className="mt-3">tremor</li>
            </ul>
            

          </section>
          </div>
          
          
          {/* <section className="mt-10">
            <h2 className="text-2xl font-bold">Conclusion</h2>
            <p className="mt-2">
              The crypto dashboard project aims to provide users with a comprehensive tool to monitor and manage their cryptocurrency investments. With real-time data and advanced features, it is a valuable resource for both novice and experienced investors.
            </p>
          </section> */}
        </div>
      </div>
    </main>
  );
}
