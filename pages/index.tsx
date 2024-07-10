'use client';

import dynamic from "next/dynamic";

const Vanta = dynamic(() => import("../app/components/vantabg"), { ssr: false });

export default function Home() {
  return (
    <main className="flex min-h-screen min-w-screen flex-col overflow-hidden pt-20">
      <Vanta />
      <div className="flex flex-col p-10">
        <span className="text-3xl border-b w-1/4">m.mcgraw</span>
        <span className="pt-2 w-1/4">a senior frontend engineer with an eye for design and decade of experience in web development and ui technologies</span>
        <span className="text-sm text-orange-500 self-end">this portfolio is currently being built with Next.js & TypeScript</span>
        <span className="text-sm text-orange-500 self-end">check back soon for more updates</span>
        <span className="text-sm text-orange-500 self-end">src @github</span>
      </div>
    </main>
  );
}
