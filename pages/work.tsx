'use client';

import React from 'react';
import Vanta from "../app/components/vantabg";
import Nav from "../app/components/nav";

// Example data array
const works = [
  { id: 1, title: 'mcgraw.io', description: 'Jun 2024 - ' },
  { id: 2, title: 'listen360', description: 'May 2019 - Jun 2024' },
  { id: 3, title: 'cricket wireless', description: 'Dec 2017 - May 2019' },
  // Add more projects as needed
];

export default function Work() {
  return (
    <main className="flex min-h-screen min-w-screen flex-col">
      <Nav />
      <Vanta />
      <div className="flex flex-col p-10">
        <span className="text-3xl">m.mcgraw</span>
        <span className="text-xl">work</span>
        {/* Grid layout for work items */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {works.map((work) => (
            <div key={work.id} className="mb-4 w-full md:w-300px panel-bg p-4 rounded-lg shadow">
              <h3 className="text-2xl">{work.title}</h3>
              <p>{work.description}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
