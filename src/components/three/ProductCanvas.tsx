import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ProductCanvas({ triggerDraw }: { triggerDraw: boolean }) {
  const nodeBoxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!nodeBoxRef.current) return;
    const boxEl = nodeBoxRef.current;
    
    // booting up the webgl renderer
    const flowScene = new THREE.Scene();
    const flowCam = new THREE.PerspectiveCamera(45, boxEl.clientWidth / boxEl.clientHeight, 0.1, 100);
    const flowRenderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    flowRenderer.setSize(boxEl.clientWidth, boxEl.clientHeight);
    flowRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    boxEl.appendChild(flowRenderer.domElement);

    const totalOrbs = 5;
    const allOrbs: THREE.Mesh[] = [];
    const orbShape = new THREE.SphereGeometry(0.5, 32, 32);
    
    const standardSkin = new THREE.MeshBasicMaterial({ color: 0xFFC801 });
    const brightSkin = new THREE.MeshBasicMaterial({ color: 0xFFFFFF });

    const spacingGap = 2;
    const pivotX = -((totalOrbs - 1) * spacingGap) / 2;

    const orbCoords = [];

    // stamping out the nodes
    for (let i = 0; i < totalOrbs; i++) {
      const orbMesh = new THREE.Mesh(orbShape, standardSkin.clone());
      const locX = pivotX + (i * spacingGap);
      orbMesh.position.set(locX, 0, 0);
      
      // hide initially for the scroll trigger effect
      orbMesh.scale.setScalar(0.001); 
      
      flowScene.add(orbMesh);
      allOrbs.push(orbMesh);
      orbCoords.push(new THREE.Vector3(locX, 0, 0));
    }

    const cordShape = new THREE.BufferGeometry().setFromPoints(orbCoords);
    const cordSkin = new THREE.LineBasicMaterial({ color: 0xFF9932, linewidth: 2, transparent: true, opacity: 0 });
    const connectionLine = new THREE.Line(cordShape, cordSkin);
    flowScene.add(connectionLine);

    flowCam.position.z = 10;

    const pointerCaster = new THREE.Raycaster();
    const cursorVector = new THREE.Vector2(-2, -2); 

    const trackCursor = (ev: MouseEvent) => {
      const bounds = boxEl.getBoundingClientRect();
      // clamping to see if they're hovering near the pipe
      cursorVector.x = ((ev.clientX - bounds.left) / bounds.width) * 2 - 1;
      cursorVector.y = -((ev.clientY - bounds.top) / bounds.height) * 2 + 1;
    };

    window.addEventListener('mousemove', trackCursor);

    let frameLoopId: number;
    let birthTick: number | null = null;

    const cycleFrame = () => {
      const currentTick = Date.now();
      const tickDelta = currentTick * 0.002;
      
      pointerCaster.setFromCamera(cursorVector, flowCam);
      const hits = pointerCaster.intersectObjects(allOrbs);
      const activeHit = hits.length > 0 ? hits[0].object : null;

      // Handle staggered reveal animation if triggered
      if (triggerDraw) {
        if (!birthTick) birthTick = currentTick;
        const activeLifespan = currentTick - birthTick;
        
        // fade line in
        const lineFade = Math.min(activeLifespan / 1000, 1);
        cordSkin.opacity = lineFade;

        allOrbs.forEach((orb, idx) => {
          // staggered pop in
          const delayCap = idx * 150;
          if (activeLifespan > delayCap) {
            const orbLife = activeLifespan - delayCap;
            // quick scale up
            const targetSize = Math.min(orbLife / 400, 1);
            // standard breathing size
            const breath = 1.1 + (Math.sin(tickDelta + idx) * 0.1);
            
            // if we're done growing, use breath
            if (targetSize >= 1) {
              orb.scale.setScalar(breath);
            } else {
              orb.scale.setScalar(targetSize * breath);
            }
          }

          if (orb === activeHit) {
            (orb.material as THREE.MeshBasicMaterial).color.setHex(0xFFE580); 
          } else {
            (orb.material as THREE.MeshBasicMaterial).color.setHex(0xFFC801); 
          }
        });
      }

      flowRenderer.render(flowScene, flowCam);
      frameLoopId = requestAnimationFrame(cycleFrame);
    };

    cycleFrame();

    const handleBoxStretch = () => {
      if (!boxEl) return;
      flowCam.aspect = boxEl.clientWidth / boxEl.clientHeight;
      flowCam.updateProjectionMatrix();
      flowRenderer.setSize(boxEl.clientWidth, boxEl.clientHeight);
    };

    window.addEventListener('resize', handleBoxStretch);

    return () => {
      window.removeEventListener('resize', handleBoxStretch);
      window.removeEventListener('mousemove', trackCursor);
      cancelAnimationFrame(frameLoopId);
      
      orbShape.dispose();
      standardSkin.dispose();
      brightSkin.dispose();
      cordShape.dispose();
      cordSkin.dispose();
      allOrbs.forEach(s => (s.material as THREE.Material).dispose());
      
      if (boxEl.contains(flowRenderer.domElement)) {
        boxEl.removeChild(flowRenderer.domElement);
      }
      flowRenderer.dispose();
    };
  }, [triggerDraw]);

  return <div ref={nodeBoxRef} className="w-full h-full absolute inset-0 z-0 pointer-events-none" />;
}
