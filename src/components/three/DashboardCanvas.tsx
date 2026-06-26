import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function DashboardCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    
    // Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, container.clientWidth / container.clientHeight, 0.1, 100);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Icosahedron Wireframe
    const geometry = new THREE.IcosahedronGeometry(2.5, 1);
    const wireframe = new THREE.WireframeGeometry(geometry);
    
    const material = new THREE.LineBasicMaterial({ color: 0x114C5A, linewidth: 2 });
    const mesh = new THREE.LineSegments(wireframe, material);
    
    scene.add(mesh);

    camera.position.z = 6;

    // Animation loop
    let animationFrameId: number;
    const render = () => {
      mesh.rotation.y += 0.005;
      mesh.rotation.x += 0.002;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    // Resize handler
    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      
      // Cleanup
      geometry.dispose();
      wireframe.dispose();
      material.dispose();
      
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return <div ref={containerRef} className="w-full h-full absolute inset-0 z-0 pointer-events-none" />;
}
