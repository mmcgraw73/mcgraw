'use client';

import React from 'react';
import Vanta from "../app/components/vantabg";

export default function More() {
  return (
    <main className="flex min-h-screen min-w-screen flex-col">
      <Vanta />
      <div className="flex flex-col p-10">
        <span className="text-3xl">m.mcgraw</span>
        <span className="text-xl">more</span>
        </div>
      </main>
  );
}
