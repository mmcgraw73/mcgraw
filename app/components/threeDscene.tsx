import * as THREE from 'three';
import React, { useRef, useEffect } from 'react';

const ThreeDScene = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x87CEEB);
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    (mountRef.current as HTMLElement | null)?.appendChild(renderer.domElement);

    // Add a plane to the scene
    const geometry = new THREE.PlaneGeometry(5, 5);

    const material = new THREE.RawShaderMaterial({
      vertexShader: `
        uniform mat4 projectionMatrix;
        uniform mat4 viewMatrix;
        uniform mat4 modelMatrix;

        attribute vec3 position;

        void main()
        {
            gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        precision mediump float;

        // fBm function
        float random(vec2 st) {
            return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
        }

        float noise(vec2 st) {
            vec2 i = floor(st);
            vec2 f = fract(st);

            float a = random(i);
            float b = random(i + vec2(1.0, 0.0));
            float c = random(i + vec2(0.0, 1.0));
            float d = random(i + vec2(1.0, 1.0));

            vec2 u = f * f * (3.0 - 2.0 * f);

            return mix(a, b, u.x) +
                   (c - a) * u.y * (1.0 - u.x) +
                   (d - b) * u.x * u.y;
        }

        float fbm(vec2 st) {
            float value = 0.0;
            float amplitude = 0.5;
            float frequency = 0.0;
            for (int i = 0; i < 6; i++) {
                value += amplitude * noise(st);
                st *= 2.0;
                amplitude *= 0.5;
            }
            return value;
        }

        void main()
        {
            vec2 st = gl_FragCoord.xy / vec2(800.0, 600.0);
            float color = fbm(st * 3.0);
            gl_FragColor = vec4(vec3(color), 1.0);
        }
      `
    });

    const plane = new THREE.Mesh(geometry, material);

    // Rotate the plane to lay flat on the ground
    plane.rotation.x = -Math.PI / 2;

    // Position the plane on the ground
    plane.position.y = -9;

    scene.add(plane);

    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0x404040); // Soft white light
    scene.add(ambientLight);

    // Add directional light
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1); // White light with full intensity
    directionalLight.position.set(5, 10, 7.5); // Position the light
    scene.add(directionalLight);

    // Position the camera
    camera.position.z = 26;
    camera.position.y = 1;
    camera.lookAt(0, 2, 1);

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // Render loop
    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      (mountRef.current as HTMLElement | null)?.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} />;
};

export default ThreeDScene;
