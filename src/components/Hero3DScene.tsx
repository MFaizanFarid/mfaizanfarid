import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface Hero3DSceneProps {
  className?: string;
}

export const Hero3DScene: React.FC<Hero3DSceneProps> = ({ className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animationFrameId: number;
    const width = container.clientWidth || 500;
    const height = container.clientHeight || 500;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, 8.5);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    // Group for entire interactive assembly
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // 1. Central 3D Laptop / Terminal Object
    const laptopGroup = new THREE.Group();

    // Base of laptop
    const baseGeo = new THREE.BoxGeometry(3.2, 0.12, 2.2);
    const baseMat = new THREE.MeshStandardMaterial({
      color: 0x181c2b,
      metalness: 0.85,
      roughness: 0.25,
    });
    const laptopBase = new THREE.Mesh(baseGeo, baseMat);
    laptopBase.position.y = -0.6;
    laptopGroup.add(laptopBase);

    // Keyboard glow plate
    const keyGeo = new THREE.PlaneGeometry(2.8, 1.4);
    const keyMat = new THREE.MeshBasicMaterial({
      color: 0x312e81,
      wireframe: true,
    });
    const keyboard = new THREE.Mesh(keyGeo, keyMat);
    keyboard.rotation.x = -Math.PI / 2;
    keyboard.position.set(0, -0.53, 0.2);
    laptopGroup.add(keyboard);

    // Screen Lid (tilted back ~110 degrees)
    const screenLidGroup = new THREE.Group();
    screenLidGroup.position.set(0, -0.54, -1.05);

    const lidGeo = new THREE.BoxGeometry(3.2, 2.1, 0.08);
    const lidMat = new THREE.MeshStandardMaterial({
      color: 0x0f1422,
      metalness: 0.9,
      roughness: 0.2,
    });
    const lid = new THREE.Mesh(lidGeo, lidMat);
    lid.position.set(0, 1.05, 0);
    screenLidGroup.add(lid);

    // Glowing Display
    const displayGeo = new THREE.PlaneGeometry(2.95, 1.85);

    // Create dynamic canvas for screen code graphic
    const screenCanvas = document.createElement('canvas');
    screenCanvas.width = 512;
    screenCanvas.height = 320;
    const ctx = screenCanvas.getContext('2d');
    if (ctx) {
      ctx.fillStyle = '#060814';
      ctx.fillRect(0, 0, 512, 320);

      // Window header dots
      ctx.fillStyle = '#ef4444';
      ctx.beginPath();
      ctx.arc(24, 22, 6, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#eab308';
      ctx.beginPath();
      ctx.arc(42, 22, 6, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#22c55e';
      ctx.beginPath();
      ctx.arc(60, 22, 6, 0, Math.PI * 2);
      ctx.fill();

      // Code simulation lines
      ctx.fillStyle = '#8b5cf6';
      ctx.font = 'bold 15px monospace';
      ctx.fillText('const developer = {', 24, 60);

      ctx.fillStyle = '#06b6d4';
      ctx.font = '13px monospace';
      ctx.fillText('  name: "M Faizan Farid",', 34, 90);
      ctx.fillText('  role: "Web Developer & Designer",', 34, 115);
      ctx.fillText('  skills: ["React", "Three.js", "PHP"],', 34, 140);
      ctx.fillText('  passion: "3D Digital Craftsmanship",', 34, 165);
      ctx.fillText('  available: true,', 34, 190);

      ctx.fillStyle = '#8b5cf6';
      ctx.font = 'bold 15px monospace';
      ctx.fillText('};', 24, 225);

      ctx.fillStyle = '#10b981';
      ctx.font = '14px monospace';
      ctx.fillText('> npm run build:success ⚡ [ready]', 24, 265);
    }
    const screenTexture = new THREE.CanvasTexture(screenCanvas);
    const displayMat = new THREE.MeshBasicMaterial({
      map: screenTexture,
    });
    const display = new THREE.Mesh(displayGeo, displayMat);
    display.position.set(0, 1.05, 0.05);
    screenLidGroup.add(display);

    screenLidGroup.rotation.x = 0.25; // Open angle
    laptopGroup.add(screenLidGroup);

    mainGroup.add(laptopGroup);

    // 2. Surrounding Holographic Orbit Rings & Polyhedra
    const ring1Geo = new THREE.TorusGeometry(3.8, 0.02, 16, 100);
    const ring1Mat = new THREE.MeshBasicMaterial({
      color: 0x8b5cf6,
      transparent: true,
      opacity: 0.65,
    });
    const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    ring1.rotation.x = Math.PI / 3;
    mainGroup.add(ring1);

    const ring2Geo = new THREE.TorusGeometry(4.3, 0.015, 16, 100);
    const ring2Mat = new THREE.MeshBasicMaterial({
      color: 0x06b6d4,
      transparent: true,
      opacity: 0.45,
    });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.y = Math.PI / 4;
    ring2.rotation.x = -Math.PI / 6;
    mainGroup.add(ring2);

    // Floating Geometric Gems
    const icosaGeo = new THREE.IcosahedronGeometry(0.5, 0);
    const icosaMat = new THREE.MeshStandardMaterial({
      color: 0xa855f7,
      wireframe: true,
      roughness: 0.1,
    });
    const gem1 = new THREE.Mesh(icosaGeo, icosaMat);
    gem1.position.set(3.2, 1.8, -0.5);
    mainGroup.add(gem1);

    const octaGeo = new THREE.OctahedronGeometry(0.4, 0);
    const octaMat = new THREE.MeshStandardMaterial({
      color: 0x06b6d4,
      wireframe: true,
      roughness: 0.1,
    });
    const gem2 = new THREE.Mesh(octaGeo, octaMat);
    gem2.position.set(-3.1, 1.2, 0.8);
    mainGroup.add(gem2);

    const sphereGeo = new THREE.SphereGeometry(0.28, 16, 16);
    const sphereMat = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      metalness: 0.9,
      roughness: 0.1,
    });
    const orb = new THREE.Mesh(sphereGeo, sphereMat);
    orb.position.set(-2.5, -1.8, 0.5);
    mainGroup.add(orb);

    // 3. Floating Ambient Particle Field
    const particleCount = window.innerWidth < 768 ? 60 : 140;
    const particleGeo = new THREE.BufferGeometry();
    const particlePos = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePos[i] = (Math.random() - 0.5) * 12;
      particlePos[i + 1] = (Math.random() - 0.5) * 9;
      particlePos[i + 2] = (Math.random() - 0.5) * 8;
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePos, 3));

    const particleMat = new THREE.PointsMaterial({
      color: 0x818cf8,
      size: 0.05,
      transparent: true,
      opacity: 0.7,
    });
    const particlePoints = new THREE.Points(particleGeo, particleMat);
    mainGroup.add(particlePoints);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x8b5cf6, 3, 20);
    pointLight1.position.set(4, 4, 4);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x06b6d4, 2.5, 20);
    pointLight2.position.set(-4, -2, 3);
    scene.add(pointLight2);

    // Mouse Tracking with smooth easing
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      targetX = x * 0.45;
      targetY = y * 0.35;
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });

    // Handle Resize
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

    // Animation Loop
    const timer = new THREE.Timer();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      timer.update();
      const elapsedTime = timer.getElapsed();

      // Smooth mouse interpolation
      currentX += (targetX - currentX) * 0.05;
      currentY += (targetY - currentY) * 0.05;

      // Gentle floating levitation
      laptopGroup.position.y = Math.sin(elapsedTime * 1.5) * 0.12;

      // Group rotation
      mainGroup.rotation.y = currentX + Math.sin(elapsedTime * 0.4) * 0.1;
      mainGroup.rotation.x = currentY + Math.cos(elapsedTime * 0.4) * 0.08;

      // Ring rotations
      ring1.rotation.z = elapsedTime * 0.35;
      ring2.rotation.z = -elapsedTime * 0.25;

      // Floating objects rotation & bobbing
      gem1.rotation.x += 0.01;
      gem1.rotation.y += 0.015;
      gem1.position.y = 1.8 + Math.sin(elapsedTime * 2) * 0.15;

      gem2.rotation.x -= 0.012;
      gem2.rotation.z += 0.01;
      gem2.position.y = 1.2 + Math.cos(elapsedTime * 2.2) * 0.15;

      orb.position.y = -1.8 + Math.sin(elapsedTime * 1.8) * 0.12;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      resizeObserver.disconnect();
      cancelAnimationFrame(animationFrameId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      id="hero-3d-scene-container"
      ref={containerRef}
      className={`relative w-full h-[400px] sm:h-[480px] lg:h-[560px] flex items-center justify-center select-none ${className}`}
    >
      {/* Visual background atmospheric glow */}
      <div className="absolute w-72 h-72 rounded-full bg-violet-600/20 blur-[90px] pointer-events-none -z-10" />
      <div className="absolute w-60 h-60 rounded-full bg-cyan-500/15 blur-[80px] pointer-events-none -z-10 translate-x-12 translate-y-12" />
    </div>
  );
};
