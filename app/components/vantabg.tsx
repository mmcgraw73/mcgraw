import React, { useEffect, useRef, useState } from "react";

// Extend the Window interface to include VANTA and THREE
declare global {
  interface Window {
    VANTA: any;
    THREE: any;
  }
}

const Vanta = () => {
  const vantaRef = useRef<HTMLDivElement>(null);
  const [vantaEffect, setVantaEffect] = useState<any>(null);

  useEffect(() => {
  // Only proceed if vantaEffect is not already initialized
  if (vantaEffect) return;

  const loadScript = (src: string, callback: () => void): (() => void) => {
    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    script.onload = () => callback();
    document.body.appendChild(script);
    return () => document.body.removeChild(script);
  };

  const threeScriptCleanup = loadScript('https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js', () => {
    loadScript('/vanta.net.js', () => {
      if (vantaRef.current && window.VANTA && window.THREE && !vantaEffect) {
        const effect = window.VANTA.NET({
          el: vantaRef.current,
          THREE: window.THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 0.50,
          scaleMobile: 1.00,
          points: 7.00,
          maxDistance: 19.00,
          spacing: 20.00,
          backgroundColor: 0x2b2b2b,
          color: 0x78f2f2,
        });
        setVantaEffect(effect);
      }
    });
  });

  return () => {
    threeScriptCleanup();
    if (vantaEffect && typeof vantaEffect.destroy === 'function') {
      vantaEffect.destroy();
    }
  };
}, [vantaEffect]); // Add vantaEffect as a dependency to re-run the effect only if vantaEffect changes

  return (
  <div
    ref={vantaRef}
    style={{
      position: 'fixed',
      width: '100vw',
      height: '100vh',
      top: 0,
      left: 0,
      zIndex: -1,
      opacity: 0.3,
    }}
  />
);
}

export default Vanta;
