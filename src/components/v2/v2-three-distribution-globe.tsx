"use client";

import * as React from "react";
import * as THREE from "three";
import { Globe2, BookOpen, Sparkles, TrendingUp, ShieldCheck } from "lucide-react";

interface HubCity {
  name: string;
  country: string;
  lat: number;
  lon: number;
  projection: string;
}

const PUBLISHING_HUBS: HubCity[] = [
  { name: "New York", country: "USA (Amazon KDP & Barnes & Noble)", lat: 40.7128, lon: -74.006, projection: "40,000+ Retail Outlets" },
  { name: "London", country: "UK (IngramSpark & Waterstones)", lat: 51.5074, lon: -0.1278, projection: "250K+ European Readers" },
  { name: "Frankfurt", country: "Germany (Global Translation Fair)", lat: 50.1109, lon: 8.6821, projection: "International Rights" },
  { name: "Tokyo", country: "Japan (Asia-Pacific Retail Network)", lat: 35.6762, lon: 139.6503, projection: "Digital Worldwide" },
  { name: "Sydney", country: "Australia (Oceania Trade Distribution)", lat: -33.8688, lon: 151.2093, projection: "National Libraries" },
  { name: "Toronto", country: "Canada (Indigo & Kobo Global)", lat: 43.6532, lon: -79.3832, projection: "Print & eBook Sync" },
];

function latLonToVector3(lat: number, lon: number, radius: number): THREE.Vector3 {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);
  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);
  return new THREE.Vector3(x, y, z);
}

export function V2ThreeDistributionGlobe() {
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const [selectedHub, setSelectedHub] = React.useState<HubCity>(PUBLISHING_HUBS[0]);
  const [projectionFilter, setProjectionFilter] = React.useState<"retail" | "readers" | "royalties">("retail");

  React.useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Remove any leftover canvas from previous renders/HMR
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }

    const rect = container.getBoundingClientRect();
    const width = rect.width || container.clientWidth || 600;
    const height = rect.height || container.clientHeight || 420;

    const scene = new THREE.Scene();
    // Perfectly centered perspective camera looking straight at (0, 0, 0)
    const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 100);
    camera.position.set(0, 0, 4.3);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height, false);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    renderer.domElement.style.display = "block";
    container.appendChild(renderer.domElement);

    // ==========================================
    // LIGHTING
    // ==========================================
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.4);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0x00e5ff, 2.2);
    keyLight.position.set(3, 4, 3);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0x0055aa, 1.2);
    fillLight.position.set(-3, -2, -2);
    scene.add(fillLight);

    // ==========================================
    // 1. GLOBE ROOT GROUP
    // ==========================================
    const globeRadius = 1.15;
    const globeGroup = new THREE.Group();
    globeGroup.position.set(0, 0, 0);
    scene.add(globeGroup);

    // Base Sphere
    const sphereGeo = new THREE.SphereGeometry(globeRadius, 48, 48);
    const sphereMat = new THREE.MeshStandardMaterial({
      color: 0x020a1c,
      roughness: 0.8,
      metalness: 0.2,
    });
    const sphereMesh = new THREE.Mesh(sphereGeo, sphereMat);
    globeGroup.add(sphereMesh);

    // Subtle Cyan Latitude/Longitude Mesh
    const wireGeo = new THREE.WireframeGeometry(new THREE.SphereGeometry(globeRadius * 1.002, 22, 22));
    const wireMat = new THREE.LineBasicMaterial({
      color: 0x00a3e0,
      transparent: true,
      opacity: 0.2,
    });
    const wireMesh = new THREE.LineSegments(wireGeo, wireMat);
    globeGroup.add(wireMesh);

    // Planetary Surface Density Particles (Continental Clusters)
    const particleCount = 1400;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = globeRadius * 1.008;
      particlePositions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      particlePositions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      particlePositions[i * 3 + 2] = r * Math.cos(phi);
    }
    particleGeo.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0x00e5ff,
      size: 0.026,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
    });
    const surfaceParticles = new THREE.Points(particleGeo, particleMat);
    globeGroup.add(surfaceParticles);

    // Atmosphere Glow Ring
    const auraGeo = new THREE.RingGeometry(globeRadius * 1.01, globeRadius * 1.25, 64);
    const auraMat = new THREE.MeshBasicMaterial({
      color: 0x00e5ff,
      transparent: true,
      opacity: 0.16,
      side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending,
    });
    const auraMesh = new THREE.Mesh(auraGeo, auraMat);
    auraMesh.position.z = -0.05;
    scene.add(auraMesh);



    // ==========================================
    // 3. PUBLISHING HUBS & BEZIER FLIGHT ARCS
    // ==========================================
    const hubPoints: THREE.Vector3[] = [];

    PUBLISHING_HUBS.forEach((hub) => {
      const pos = latLonToVector3(hub.lat, hub.lon, globeRadius * 1.01);
      hubPoints.push(pos);

      // Core Hub Pin
      const pinGeo = new THREE.SphereGeometry(0.04, 16, 16);
      const pinMat = new THREE.MeshBasicMaterial({ color: 0x00e5ff });
      const pin = new THREE.Mesh(pinGeo, pinMat);
      pin.position.copy(pos);
      globeGroup.add(pin);

      // Beacon Ring
      const beaconGeo = new THREE.RingGeometry(0.045, 0.08, 24);
      const beaconMat = new THREE.MeshBasicMaterial({
        color: 0x67e8f9,
        transparent: true,
        opacity: 0.75,
        side: THREE.DoubleSide,
      });
      const beacon = new THREE.Mesh(beaconGeo, beaconMat);
      beacon.position.copy(pos);
      beacon.lookAt(0, 0, 0);
      globeGroup.add(beacon);
    });

    // Flight Arcs connecting hubs
    const arcCurves: THREE.QuadraticBezierCurve3[] = [];
    const arcsGroup = new THREE.Group();

    for (let i = 0; i < hubPoints.length; i++) {
      const nextIdx = (i + 1) % hubPoints.length;
      const start = hubPoints[i];
      const end = hubPoints[nextIdx];

      const mid = new THREE.Vector3()
        .addVectors(start, end)
        .multiplyScalar(0.5)
        .normalize()
        .multiplyScalar(globeRadius * 1.38);

      const curve = new THREE.QuadraticBezierCurve3(start, mid, end);
      arcCurves.push(curve);

      const points = curve.getPoints(36);
      const curveGeo = new THREE.BufferGeometry().setFromPoints(points);
      const curveMat = new THREE.LineBasicMaterial({
        color: 0x00e5ff,
        transparent: true,
        opacity: 0.55,
        blending: THREE.AdditiveBlending,
      });
      const arcLine = new THREE.Line(curveGeo, curveMat);
      arcsGroup.add(arcLine);
    }
    globeGroup.add(arcsGroup);

    // Traveling Energy Photons
    const photonGeo = new THREE.SphereGeometry(0.028, 12, 12);
    const photonMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const photons: THREE.Mesh[] = [];

    arcCurves.forEach(() => {
      const photon = new THREE.Mesh(photonGeo, photonMat);
      photons.push(photon);
      globeGroup.add(photon);
    });

    // ==========================================
    // 4. MOUSE DRAG ROTATION CONTROLS
    // ==========================================
    let isDragging = false;
    let prevMouse = { x: 0, y: 0 };
    const dom = renderer.domElement;

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      prevMouse = { x: e.clientX, y: e.clientY };
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const dx = e.clientX - prevMouse.x;
      const dy = e.clientY - prevMouse.y;
      prevMouse = { x: e.clientX, y: e.clientY };

      globeGroup.rotation.y += dx * 0.008;
      globeGroup.rotation.x = Math.max(-0.5, Math.min(0.5, globeGroup.rotation.x + dy * 0.006));
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        isDragging = true;
        prevMouse = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    };

    const onTouchMove = (e: TouchEvent) => {
      if (!isDragging || e.touches.length !== 1) return;
      const dx = e.touches[0].clientX - prevMouse.x;
      const dy = e.touches[0].clientY - prevMouse.y;
      prevMouse = { x: e.touches[0].clientX, y: e.touches[0].clientY };

      globeGroup.rotation.y += dx * 0.01;
      globeGroup.rotation.x = Math.max(-0.5, Math.min(0.5, globeGroup.rotation.x + dy * 0.008));
    };

    const onTouchEnd = () => {
      isDragging = false;
    };

    dom.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    dom.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("touchend", onTouchEnd);

    // ==========================================
    // ANIMATION LOOP
    // ==========================================
    let animId: number;
    let clock = 0;

    const animate = () => {
      animId = requestAnimationFrame(animate);
      clock += 0.016;

      // Auto-spin globe gently when not interacting
      if (!isDragging) {
        globeGroup.rotation.y += 0.0025;
      }

      // Animate photons along distribution curves
      arcCurves.forEach((curve, i) => {
        const t = (clock * 0.35 + i * 0.16) % 1;
        const pt = curve.getPoint(t);
        photons[i].position.copy(pt);
      });

      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      if (!container) return;
      const rect = container.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;
      if (w > 0 && h > 0) {
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h, false);
      }
    };

    const resizeObserver = new ResizeObserver(() => {
      handleResize();
    });
    resizeObserver.observe(container);
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animId);
      resizeObserver.disconnect();
      dom.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      dom.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
      window.removeEventListener("resize", handleResize);

      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
      renderer.dispose();
      scene.clear();
    };
  }, []);

  return (
    <div className="relative w-full h-[460px] sm:h-[520px] rounded-2xl overflow-hidden bg-[#071326] border border-cyan-400/25 shadow-[inset_0_0_40px_rgba(0,163,224,0.15)] flex flex-col justify-between">
      {/* 3D WebGL Canvas (Centered & Responsive) */}
      <div ref={containerRef} className="absolute inset-0 w-full h-full flex items-center justify-center cursor-grab active:cursor-grabbing z-10 overflow-hidden" />

      {/* Top Floating Badges */}
      <div className="relative z-20 flex items-center justify-between p-3.5 sm:p-4 pointer-events-none">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-cyan-200 text-[11px] font-bold uppercase tracking-wider text-[#00A3E0] shadow-md">
          <Globe2 className="w-3.5 h-3.5 text-[#00A3E0] animate-pulse" />
          <span>Live 3D Distribution Mesh</span>
        </span>

        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-slate-200 text-[11px] text-slate-700 font-mono font-medium shadow-md">
          <Sparkles className="w-3 h-3 text-[#00A3E0]" />
          <span>190+ Countries Projected</span>
        </span>
      </div>

      {/* Floating Active Hub Indicator */}
      <div className="relative z-20 px-3.5 sm:px-4 pointer-events-none">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-white/95 backdrop-blur-md border border-cyan-200 text-[11px] text-slate-800 shadow-md">
          <BookOpen className="w-3.5 h-3.5 text-[#00A3E0]" />
          <span>Projected: <strong className="text-[#00A3E0]">{selectedHub.name}</strong> · {selectedHub.projection}</span>
        </div>
      </div>

      {/* Bottom Hub Pinned Ticker (Floating pill overlay, never cuts off the sphere) */}
      <div className="relative z-20 m-3 sm:m-4 p-2.5 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2 shadow-xl">
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className="text-[10px] uppercase font-bold text-[#00A3E0] tracking-wider shrink-0 mr-1">
            Active Hubs:
          </span>
          {PUBLISHING_HUBS.map((hub) => (
            <button
              key={hub.name}
              onClick={() => setSelectedHub(hub)}
              className={`px-2 py-0.5 rounded-md text-[10.5px] font-medium transition-colors cursor-pointer ${
                selectedHub.name === hub.name
                  ? "bg-[#00A3E0] text-white font-bold shadow-xs"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {hub.name}
            </button>
          ))}
        </div>

        <span className="text-[10px] text-slate-500 font-mono shrink-0 text-right">
          Drag to orbit 360°
        </span>
      </div>
    </div>
  );
}
