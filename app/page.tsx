'use client';

import Vanta from "./components/vantabg";


export default function Home() {
  return (
    <main className="flex min-h-screen min-w-screen flex-col justify-between">
    <Vanta />
    <div className="flex flex-col p-20">
      <span className="text-3xl">m.mcgraw</span>
      <span className="text-xl">a frontend engineer</span>
    </div>

    </main>
  );
}
