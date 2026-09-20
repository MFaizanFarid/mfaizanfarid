import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const Contact3DScene: React.FC<{ className?: string }> = ({ className = '' }) => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let animId: number;
    const width = container.clientWidth || 300;
    const height = container.clientHeight || 300;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    // Torus Knot with Wireframe and glowing vertices
    const knotGeo = new THREE.TorusKnotGeometry(1.2, 0.35, 90, 16);
    const knotMat = new THREE.MeshStandardMaterial({
      color: 0x8b5cf6,
      roughness: 0.2,
      metalness: 0.8,
      wireframe: false,
    });
    const knot = new THREE.Mesh(knotGeo, knotMat);
    group.add(knot);

    // Wireframe overlay
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0x06b6d4,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const knotWire = new THREE.Mesh(knotGeo, wireMat);
    knotWire.scale.set(1.02, 1.02, 1.02);
    group.add(knotWire);

    // Particle halo
    const particleCount = 60;
    const pGeo = new THREE.BufferGeometry();
    const pPos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      const angle = Math.random() * Math.PI * 2;
      const radius = 2.2 + Math.random() * 0.8;
      pPos[i] = Math.cos(angle) * radius;
      pPos[i + 1] = Math.sin(angle) * radius;
      pPos[i + 2] = (Math.random() - 0.5) * 1.5;
    }
    pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
    const pMat = new THREE.PointsMaterial({
      color: 0xa78bfa,
      size: 0.06,
      transparent: true,
      opacity: 0.8,
    });
    const particles = new THREE.Points(pGeo, pMat);
    group.add(particles);

    // Lights
    const ambient = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambient);

    const light1 = new THREE.DirectionalLight(0x06b6d4, 2.5);
    light1.position.set(3, 3, 2);
    scene.add(light1);

    const light2 = new THREE.DirectionalLight(0x8b5cf6, 2.5);
    light2.position.set(-3, -3, 2);
    scene.add(light2);

    const timer = new THREE.Timer();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      timer.update();
      const time = timer.getElapsed();

      group.rotation.x = time * 0.4;
      group.rotation.y = time * 0.5;
      particles.rotation.z = -time * 0.2;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    return () => {
      resizeObserver.disconnect();
      cancelAnimationFrame(animId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className={`relative w-full h-[260px] sm:h-[300px] flex items-center justify-center select-none ${className}`}
    />
  );
};
