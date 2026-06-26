import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function HeroCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    
    // Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 2000;
    
    const posArray = new Float32Array(particlesCount * 3);
    const colorsArray = new Float32Array(particlesCount * 3);

    const color1 = new THREE.Color('#FFC801');
    const color2 = new THREE.Color('#FF9932');

    for (let i = 0; i < particlesCount * 3; i+=3) {
      // Spread particles over a large volume
      posArray[i] = (Math.random() - 0.5) * 20;
      posArray[i+1] = (Math.random() - 0.5) * 20;
      posArray[i+2] = (Math.random() - 0.5) * 20;

      // Mix colors
      const mixedColor = color1.clone().lerp(color2, Math.random());
      colorsArray[i] = mixedColor.r;
      colorsArray[i+1] = mixedColor.g;
      colorsArray[i+2] = mixedColor.b;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colorsArray, 3));

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.05,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    camera.position.z = 5;

    // Mouse interactions
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const windowHalfX = window.innerWidth / 2;
    const windowHalfY = window.innerHeight / 2;

    const onDocumentMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX - windowHalfX);
      mouseY = (event.clientY - windowHalfY);
    };

    document.addEventListener('mousemove', onDocumentMouseMove);

    // Animation Loop
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const render = () => {
      const elapsedTime = clock.getElapsedTime();

      targetX = mouseX * 0.001;
      targetY = mouseY * 0.001;

      // Base rotation
      particlesMesh.rotation.y = elapsedTime * 0.05;
      
      // Parallax rotation
      particlesMesh.rotation.y += 0.05 * (targetX - particlesMesh.rotation.y);
      particlesMesh.rotation.x += 0.05 * (targetY - particlesMesh.rotation.x);

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    // Resize handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mousemove', onDocumentMouseMove);
      cancelAnimationFrame(animationFrameId);
      
      // Cleanup ThreeJS
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 z-0 pointer-events-none overflow-hidden" 
      style={{ top: 0, left: 0, width: '100%', height: '100%' }}
    />
  );
}
