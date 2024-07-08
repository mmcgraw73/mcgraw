'use client';

import Vanta from "../app/components/vantabg";
import Nav from "../app/components/nav";

export default function Work() {
  return (
    <main className="flex min-h-screen min-w-screen flex-col">
    <Nav />
    <Vanta />
    <div className="flex flex-col p-20">
      <span className="text-3xl">m.mcgraw</span>
      <span className="text-xl">work</span>
    </div>
    
    </main>
  );
}
