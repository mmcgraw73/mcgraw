'use client';
import dynamic from "next/dynamic";
const Vanta = dynamic(() => import("../app/components/vantabg"), { ssr: false });

export default function Home() {
  return (
    <main className="flex min-h-screen min-w-screen flex-col overflow-hidden pt-20">
      <Vanta />
      <div className="flex flex-col p-10">
        <span className="text-3xl border-b w-full md:w-1/4">m.mcgraw</span>
        <span className="pt-2 w-full md:w-1/4">As a seasoned frontend engineer, I specialize in crafting visually stunning and highly functional web applications using modern technologies such as Vue.js, React, TypeScript, and JavaScript.</span>
        <span className="pt-2 w-full md:w-1/4">With a keen eye for design and a passion for user experience, I seamlessly blend aesthetic appeal with robust functionality.</span> 
        <span className="pt-2 w-full md:w-1/4">Whether its building dynamic single-page applications or designing responsive layouts, I am dedicated to delivering high-quality solutions that drive engagement and satisfaction.</span>
        <span className="text-sm text-orange-500 self-end">this portfolio is currently being built with next.js & typeScript</span>
        <span className="text-sm text-orange-500 self-end">check back often for additional content and updates</span>
        <span className="text-sm text-orange-500 self-end">src @github</span>
      </div>
    </main>
  );
}
