"use client";

import * as React from "react";
import * as THREE from "three";

export interface SceneCanvasProps {
  className?: string;
  interactive?: boolean;
}

export function SceneCanvas({
  className = "",
  interactive = true,
}: SceneCanvasProps) {
  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1. Scene & Camera Setup
    const scene = new THREE.Scene();
    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.z = 7;

    // 2. WebGL Renderer Setup
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // 3. Central 3D Geometry: Glowing Wireframe Torus Knot
    const torusGeometry = new THREE.TorusKnotGeometry(1.6, 0.45, 128, 32);
    const torusMaterial = new THREE.MeshStandardMaterial({
      color: 0x6366f1,
      emissive: 0x4f46e5,
      emissiveIntensity: 0.35,
      wireframe: true,
      roughness: 0.2,
      metalness: 0.8,
    });
    const torusMesh = new THREE.Mesh(torusGeometry, torusMaterial);
    scene.add(torusMesh);

    // 4. Outer Particle Field (Star / Cyber Field)
    const particleCount = 1200;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const color1 = new THREE.Color(0x06b6d4); // Cyan
    const color2 = new THREE.Color(0xa855f7); // Purple
    const color3 = new THREE.Color(0x6366f1); // Indigo

    for (let i = 0; i < particleCount; i++) {
      // Spherical distribution
      const radius = 3.5 + Math.random() * 6.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);

      const mixedColor = Math.random() > 0.5 ? color1 : Math.random() > 0.5 ? color2 : color3;
      colors[i * 3] = mixedColor.r;
      colors[i * 3 + 1] = mixedColor.g;
      colors[i * 3 + 2] = mixedColor.b;
    }

    particleGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.035,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // 5. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0xa855f7, 4, 50);
    pointLight1.position.set(5, 5, 5);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x06b6d4, 3, 50);
    pointLight2.position.set(-5, -5, -2);
    scene.add(pointLight2);

    // 6. Interactive Mouse Tracking
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      if (!interactive) return;
      targetX = (e.clientX / window.innerWidth) * 2 - 1;
      targetY = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // 7. Responsive Resize Handler
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("resize", handleResize);

    // 8. Animation Render Loop
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Smooth damping mouse movement
      currentX += (targetX - currentX) * 0.05;
      currentY += (targetY - currentY) * 0.05;

      // Rotate torus mesh
      torusMesh.rotation.x = elapsedTime * 0.35 + currentY * 0.5;
      torusMesh.rotation.y = elapsedTime * 0.45 + currentX * 0.5;

      // Slowly rotate particle field
      particles.rotation.y = -elapsedTime * 0.08;
      particles.rotation.x = elapsedTime * 0.03;

      renderer.render(scene, camera);
    };

    animate();

    // 9. Memory Cleanup on Unmount
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }

      torusGeometry.dispose();
      torusMaterial.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      renderer.dispose();
    };
  }, [interactive]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full pointer-events-none select-none ${className}`}
    />
  );
}
