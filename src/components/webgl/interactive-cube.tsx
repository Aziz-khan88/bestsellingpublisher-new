"use client";

import * as React from "react";
import * as THREE from "three";
import { Button } from "@/components/ui/button";
import { Box, RefreshCw } from "lucide-react";

export function InteractiveCube() {
  const mountRef = React.useRef<HTMLDivElement>(null);
  const [wireframe, setWireframe] = React.useState(true);
  const materialRef = React.useRef<THREE.MeshStandardMaterial | null>(null);

  React.useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const width = mount.clientWidth;
    const height = mount.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 4;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    const geometry = new THREE.IcosahedronGeometry(1.2, 1);
    const material = new THREE.MeshStandardMaterial({
      color: 0x06b6d4,
      emissive: 0x0891b2,
      emissiveIntensity: 0.2,
      wireframe: true,
      roughness: 0.1,
      metalness: 0.9,
    });
    materialRef.current = material;

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const light1 = new THREE.DirectionalLight(0xffffff, 2);
    light1.position.set(2, 4, 3);
    scene.add(light1);

    const light2 = new THREE.PointLight(0xa855f7, 3, 10);
    light2.position.set(-2, -3, 2);
    scene.add(light2);

    let reqId: number;
    const animate = () => {
      reqId = requestAnimationFrame(animate);
      mesh.rotation.x += 0.01;
      mesh.rotation.y += 0.015;
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      if (!mount) return;
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(reqId);
      window.removeEventListener("resize", handleResize);
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  const toggleWireframe = () => {
    if (materialRef.current) {
      materialRef.current.wireframe = !wireframe;
      setWireframe(!wireframe);
    }
  };

  return (
    <div className="flex flex-col gap-4 p-5 rounded-2xl bg-slate-900/50 border border-white/10 backdrop-blur-md">
      <div className="flex items-center justify-between pb-2 border-b border-white/5">
        <div className="flex items-center gap-2">
          <Box className="w-4 h-4 text-cyan-400" />
          <span className="text-sm font-semibold text-white">WebGL 3D Icosahedron</span>
        </div>
        <Button size="sm" variant="outline" onClick={toggleWireframe} icon={<RefreshCw className="w-3.5 h-3.5" />}>
          {wireframe ? "Solid Mesh" : "Wireframe"}
        </Button>
      </div>
      <div ref={mountRef} className="h-44 w-full rounded-xl bg-black/40 overflow-hidden" />
    </div>
  );
}
