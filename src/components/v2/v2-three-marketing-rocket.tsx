"use client";

import * as React from "react";
import * as THREE from "three";
import { Rocket, TrendingUp, Sparkles, Zap, Flame, Globe2 } from "lucide-react";

type VelocityMode = "launch" | "growth" | "bestseller";

interface ModeConfig {
  label: string;
  sublabel: string;
  speedMultiplier: number;
  particlesMultiplier: number;
  growthScale: number;
  badge: string;
}

const VELOCITY_MODES: Record<VelocityMode, ModeConfig> = {
  launch: {
    label: "1X Launch",
    sublabel: "Initial Category Ascent",
    speedMultiplier: 1.0,
    particlesMultiplier: 1.0,
    growthScale: 0.85,
    badge: "+350% Reach",
  },
  growth: {
    label: "5X Growth",
    sublabel: "Rapid Reader Velocity",
    speedMultiplier: 1.8,
    particlesMultiplier: 1.6,
    growthScale: 1.15,
    badge: "+850% Reach",
  },
  bestseller: {
    label: "10X Bestseller",
    sublabel: "Top 100 Ranking Orbit",
    speedMultiplier: 2.8,
    particlesMultiplier: 2.4,
    growthScale: 1.45,
    badge: "+1,500% Bestseller Velocity",
  },
};

export function V2ThreeMarketingRocket() {
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const [activeMode, setActiveMode] = React.useState<VelocityMode>("bestseller");
  const activeModeRef = React.useRef<VelocityMode>("bestseller");
  const scrollOffsetRef = React.useRef(0);

  React.useEffect(() => {
    activeModeRef.current = activeMode;
  }, [activeMode]);

  // Scroll Interaction Listener
  React.useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      scrollOffsetRef.current = scrollY * 0.0006;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  React.useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Purge any stale child canvases from previous renders/HMR
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }

    const rect = container.getBoundingClientRect();
    const width = rect.width || container.clientWidth || 700;
    const height = rect.height || container.clientHeight || 480;

    // =========================================================================
    // 1. SCENE, CAMERA, RENDERER, FOG & LIGHTING
    // =========================================================================
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x020818, 0.042);

    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(0, 0.15, 5.5);
    camera.lookAt(0, 0.1, 0);

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

    // Master Group for Mouse Parallax & Scene Tilting
    const masterGroup = new THREE.Group();
    scene.add(masterGroup);

    // Atmospheric Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.25);
    scene.add(ambientLight);

    const keySunLight = new THREE.DirectionalLight(0x00e5ff, 2.8);
    keySunLight.position.set(5, 7, 6);
    scene.add(keySunLight);

    const rimLight = new THREE.DirectionalLight(0x38bdf8, 1.6);
    rimLight.position.set(-5, -3, -4);
    scene.add(rimLight);

    // Thruster Dynamic Glow PointLight (moves with rocket)
    const thrusterLight = new THREE.PointLight(0x00e5ff, 2.4, 5);
    scene.add(thrusterLight);

    // =========================================================================
    // 2. SPACE ENVIRONMENT (Starfield & Nebula Cloud Dust)
    // =========================================================================
    // Deep Space Starfield
    const starCount = 550;
    const starGeo = new THREE.BufferGeometry();
    const starPositions = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount; i++) {
      starPositions[i * 3] = (Math.random() - 0.5) * 18;
      starPositions[i * 3 + 1] = (Math.random() - 0.5) * 12;
      starPositions[i * 3 + 2] = -1.5 - Math.random() * 8.0;
    }
    starGeo.setAttribute("position", new THREE.BufferAttribute(starPositions, 3));
    const starMat = new THREE.PointsMaterial({
      color: 0x93c5fd,
      size: 0.026,
      transparent: true,
      opacity: 0.75,
    });
    const starsMesh = new THREE.Points(starGeo, starMat);
    masterGroup.add(starsMesh);

    // Nebula Cloud Dust Particles
    const nebulaCount = 100;
    const nebulaGeo = new THREE.BufferGeometry();
    const nebulaPositions = new Float32Array(nebulaCount * 3);
    for (let i = 0; i < nebulaCount; i++) {
      nebulaPositions[i * 3] = (Math.random() - 0.5) * 14;
      nebulaPositions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      nebulaPositions[i * 3 + 2] = -2.0 - Math.random() * 5.0;
    }
    nebulaGeo.setAttribute("position", new THREE.BufferAttribute(nebulaPositions, 3));
    const nebulaMat = new THREE.PointsMaterial({
      color: 0x00e5ff,
      size: 0.085,
      transparent: true,
      opacity: 0.35,
      blending: THREE.AdditiveBlending,
    });
    const nebulaMesh = new THREE.Points(nebulaGeo, nebulaMat);
    masterGroup.add(nebulaMesh);

    // =========================================================================
    // 3. REALISTIC 3D EARTH (Placed in Background Layer)
    // =========================================================================
    // Earth stays in the background (z = -3.8) behind rocket and trajectory
    const earthGroup = new THREE.Group();
    earthGroup.position.set(2.0, -0.6, -3.8);
    masterGroup.add(earthGroup);

    const earthRadius = 2.35;
    const earthGeo = new THREE.SphereGeometry(earthRadius, 48, 48);
    const earthMat = new THREE.MeshStandardMaterial({
      color: 0x020f28,
      roughness: 0.85,
      metalness: 0.15,
    });
    const earthMesh = new THREE.Mesh(earthGeo, earthMat);
    earthGroup.add(earthMesh);

    // Earth Continental Grid & Global Distribution Clusters
    const earthWireGeo = new THREE.WireframeGeometry(new THREE.SphereGeometry(earthRadius * 1.002, 28, 28));
    const earthWireMat = new THREE.LineBasicMaterial({
      color: 0x00a3e0,
      transparent: true,
      opacity: 0.16,
    });
    const earthWire = new THREE.LineSegments(earthWireGeo, earthWireMat);
    earthGroup.add(earthWire);

    // Glowing Night-Side City Lights (Global Readership Hubs)
    const cityCount = 900;
    const cityGeo = new THREE.BufferGeometry();
    const cityPositions = new Float32Array(cityCount * 3);
    for (let i = 0; i < cityCount; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = earthRadius * 1.006;
      cityPositions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      cityPositions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      cityPositions[i * 3 + 2] = r * Math.cos(phi);
    }
    cityGeo.setAttribute("position", new THREE.BufferAttribute(cityPositions, 3));
    const cityMat = new THREE.PointsMaterial({
      color: 0x67e8f9,
      size: 0.032,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
    });
    const cityPoints = new THREE.Points(cityGeo, cityMat);
    earthGroup.add(cityPoints);

    // Earth Atmospheric Glow Halo
    const auraGeo = new THREE.RingGeometry(earthRadius * 1.008, earthRadius * 1.22, 64);
    const auraMat = new THREE.MeshBasicMaterial({
      color: 0x00e5ff,
      transparent: true,
      opacity: 0.22,
      side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending,
    });
    const auraMesh = new THREE.Mesh(auraGeo, auraMat);
    auraMesh.position.z = -0.04;
    earthGroup.add(auraMesh);

    // =========================================================================
    // 4. 3D GROWTH TRAJECTORY (Spline Path with Neon Tube & Height Bars)
    // =========================================================================
    // Upward curve sweeping from lower-left to upper-right
    const trajectoryPoints = [
      new THREE.Vector3(-3.2, -1.6, 0.6),
      new THREE.Vector3(-1.8, -1.0, 0.9),
      new THREE.Vector3(-0.4, -0.2, 1.1),
      new THREE.Vector3(1.0, 0.8, 0.8),
      new THREE.Vector3(2.5, 1.8, 0.4),
    ];
    const trajCurve = new THREE.CatmullRomCurve3(trajectoryPoints);

    // Glowing Neon Trajectory Tube
    const tubeGeo = new THREE.TubeGeometry(trajCurve, 90, 0.024, 12, false);
    const tubeMat = new THREE.MeshBasicMaterial({
      color: 0x00e5ff,
      transparent: true,
      opacity: 0.85,
    });
    const tubeMesh = new THREE.Mesh(tubeGeo, tubeMat);
    masterGroup.add(tubeMesh);

    // Outer Neon Aura Tube
    const tubeAuraGeo = new THREE.TubeGeometry(trajCurve, 90, 0.05, 12, false);
    const tubeAuraMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.3,
      blending: THREE.AdditiveBlending,
    });
    const tubeAuraMesh = new THREE.Mesh(tubeAuraGeo, tubeAuraMat);
    masterGroup.add(tubeAuraMesh);

    // 3D Milestone Growth Bars Under the Trajectory
    const milestoneData = [
      { t: 0.15, label: "10K Reads", height: 0.5 },
      { t: 0.35, label: "50K Reads", height: 0.95 },
      { t: 0.55, label: "150K Reads", height: 1.45 },
      { t: 0.75, label: "300K Reads", height: 1.95 },
      { t: 0.92, label: "500K+ Reads", height: 2.5 },
    ];

    const growthBars: { mesh: THREE.Mesh; baseHeight: number; pt: THREE.Vector3 }[] = [];
    const baselineY = -2.1;

    milestoneData.forEach((item) => {
      const pt = trajCurve.getPoint(item.t);
      const h = pt.y - baselineY;
      const barGeo = new THREE.BoxGeometry(0.18, h, 0.18);
      const barMat = new THREE.MeshStandardMaterial({
        color: 0x00e5ff,
        transparent: true,
        opacity: 0.4,
        metalness: 0.85,
        roughness: 0.2,
      });
      const barMesh = new THREE.Mesh(barGeo, barMat);
      barMesh.position.set(pt.x, baselineY + h / 2, pt.z - 0.05);
      masterGroup.add(barMesh);

      // Neon edges
      const edgeGeo = new THREE.EdgesGeometry(barGeo);
      const edgeMat = new THREE.LineBasicMaterial({
        color: 0x67e8f9,
        transparent: true,
        opacity: 0.85,
      });
      const edgeLines = new THREE.LineSegments(edgeGeo, edgeMat);
      barMesh.add(edgeLines);

      // Glowing cap plane
      const capGeo = new THREE.PlaneGeometry(0.18, 0.18);
      const capMat = new THREE.MeshBasicMaterial({
        color: 0x38bdf8,
        side: THREE.DoubleSide,
      });
      const capMesh = new THREE.Mesh(capGeo, capMat);
      capMesh.rotation.x = Math.PI / 2;
      capMesh.position.set(0, h / 2 + 0.005, 0);
      barMesh.add(capMesh);

      growthBars.push({ mesh: barMesh, baseHeight: h, pt });
    });

    // Traveling Energy Photons up the trajectory
    const photonCount = 4;
    const photons: THREE.Mesh[] = [];
    const photonGeo = new THREE.SphereGeometry(0.048, 12, 12);
    const photonMat = new THREE.MeshBasicMaterial({ color: 0xffffff });

    for (let i = 0; i < photonCount; i++) {
      const photon = new THREE.Mesh(photonGeo, photonMat);
      masterGroup.add(photon);
      photons.push(photon);
    }

    // =========================================================================
    // 5. MODERN AEROSPACE LAUNCH VEHICLE (SpaceX Falcon / Starship Aesthetic)
    // =========================================================================
    const rocketGroup = new THREE.Group();
    masterGroup.add(rocketGroup);

    // Advanced Aerospace Materials
    const aeroWhiteMat = new THREE.MeshStandardMaterial({
      color: 0xf8fafc,
      roughness: 0.22,
      metalness: 0.2,
    });
    const carbonInterstageMat = new THREE.MeshStandardMaterial({
      color: 0x0f172a,
      roughness: 0.45,
      metalness: 0.85,
    });
    const heatShieldMat = new THREE.MeshStandardMaterial({
      color: 0x030712,
      roughness: 0.8,
      metalness: 0.1,
    });
    const titaniumFinMat = new THREE.MeshStandardMaterial({
      color: 0x475569,
      roughness: 0.3,
      metalness: 0.95,
    });
    const inconelNozzleMat = new THREE.MeshStandardMaterial({
      color: 0x1e293b,
      roughness: 0.35,
      metalness: 0.9,
    });
    const cyanAccentMat = new THREE.MeshBasicMaterial({
      color: 0x00e5ff,
    });
    const combustionThroatMat = new THREE.MeshBasicMaterial({
      color: 0xfff0aa,
    });

    // 1. First Stage Core Booster (Lower Main Fuselage)
    const boosterHeight = 1.15;
    const boosterGeo = new THREE.CylinderGeometry(0.23, 0.23, boosterHeight, 32);
    const boosterMesh = new THREE.Mesh(boosterGeo, aeroWhiteMat);
    boosterMesh.position.y = -0.12;
    rocketGroup.add(boosterMesh);

    // Aerodynamic Raceways (External cable conduits running along fuselage)
    const racewayGeo = new THREE.BoxGeometry(0.035, boosterHeight * 0.9, 0.04);
    const raceway1 = new THREE.Mesh(racewayGeo, aeroWhiteMat);
    raceway1.position.set(0.232, -0.12, 0);
    rocketGroup.add(raceway1);
    const raceway2 = new THREE.Mesh(racewayGeo, aeroWhiteMat);
    raceway2.position.set(-0.232, -0.12, 0);
    rocketGroup.add(raceway2);

    // 4 Landing Leg Fairing Blisters around the base
    for (let i = 0; i < 4; i++) {
      const legBlisterGeo = new THREE.BoxGeometry(0.045, 0.38, 0.06);
      const legBlister = new THREE.Mesh(legBlisterGeo, carbonInterstageMat);
      const angle = (i * Math.PI) / 2;
      legBlister.position.set(Math.cos(angle) * 0.235, -0.52, Math.sin(angle) * 0.235);
      legBlister.rotation.y = -angle;
      rocketGroup.add(legBlister);
    }

    // 2. Carbon-Fiber Interstage Ring
    const interstageGeo = new THREE.CylinderGeometry(0.232, 0.232, 0.22, 32);
    const interstageMesh = new THREE.Mesh(interstageGeo, carbonInterstageMat);
    interstageMesh.position.y = 0.52;
    rocketGroup.add(interstageMesh);

    // Cyan Avionics Telemetry Ring
    const avionicsRingGeo = new THREE.TorusGeometry(0.234, 0.012, 16, 32);
    const avionicsRing = new THREE.Mesh(avionicsRingGeo, cyanAccentMat);
    avionicsRing.position.y = 0.62;
    avionicsRing.rotation.x = Math.PI / 2;
    rocketGroup.add(avionicsRing);

    // 3. Four Titanium Hypersonic Grid Fins (Falcon 9 Steering Fins)
    for (let i = 0; i < 4; i++) {
      const finGroup = new THREE.Group();
      const angle = (i * Math.PI) / 2 + Math.PI / 4;
      finGroup.position.set(Math.cos(angle) * 0.24, 0.52, Math.sin(angle) * 0.24);
      finGroup.rotation.y = -angle;

      // Outer Fin Frame
      const frameGeo = new THREE.BoxGeometry(0.18, 0.12, 0.02);
      const frameMesh = new THREE.Mesh(frameGeo, titaniumFinMat);
      finGroup.add(frameMesh);

      // Open Lattice Grid Inserts (wireframe mesh)
      const gridGeo = new THREE.WireframeGeometry(new THREE.BoxGeometry(0.16, 0.1, 0.018, 4, 3, 1));
      const gridMat = new THREE.LineBasicMaterial({ color: 0x94a3b8, transparent: true, opacity: 0.75 });
      const gridMesh = new THREE.LineSegments(gridGeo, gridMat);
      finGroup.add(gridMesh);

      rocketGroup.add(finGroup);
    }

    // 4. Second Stage & Payload Fairing
    const upperStageGeo = new THREE.CylinderGeometry(0.23, 0.23, 0.45, 32);
    const upperStageMesh = new THREE.Mesh(upperStageGeo, aeroWhiteMat);
    upperStageMesh.position.y = 0.85;
    rocketGroup.add(upperStageMesh);

    // Parabolic Payload Fairing Nose Cone
    const fairingGeo = new THREE.ConeGeometry(0.23, 0.72, 32);
    const fairingMesh = new THREE.Mesh(fairingGeo, aeroWhiteMat);
    fairingMesh.position.y = 1.35;
    rocketGroup.add(fairingMesh);

    // Starship-style Black Thermal Tile Heat-Shield on one side
    const heatShieldGeo = new THREE.CylinderGeometry(0.235, 0.235, 0.8, 32, 1, false, 0, Math.PI);
    const heatShieldMesh = new THREE.Mesh(heatShieldGeo, heatShieldMat);
    heatShieldMesh.position.set(0, 0.2, 0);
    heatShieldMesh.rotation.y = Math.PI / 2;
    rocketGroup.add(heatShieldMesh);

    // Modern Aerospace Mission Decal Stripe ("BSP-ORBITAL")
    const decalGeo = new THREE.PlaneGeometry(0.08, 0.7);
    const decalMat = new THREE.MeshBasicMaterial({ color: 0x00e5ff, transparent: true, opacity: 0.9, side: THREE.DoubleSide });
    const decalStripe = new THREE.Mesh(decalGeo, decalMat);
    decalStripe.position.set(0, 0.05, 0.235);
    rocketGroup.add(decalStripe);

    // 5. Multi-Engine Octaweb Cluster (5 Bell Nozzles: 1 center + 4 perimeter)
    const engineClusterGroup = new THREE.Group();
    engineClusterGroup.position.y = -0.7;
    rocketGroup.add(engineClusterGroup);

    // Engine Mount Base Plate
    const basePlateGeo = new THREE.CylinderGeometry(0.23, 0.23, 0.08, 32);
    const basePlate = new THREE.Mesh(basePlateGeo, carbonInterstageMat);
    engineClusterGroup.add(basePlate);

    const enginePositions = [
      new THREE.Vector3(0, -0.06, 0),        // Center gimbal engine
      new THREE.Vector3(0.105, -0.06, 0),    // Right engine
      new THREE.Vector3(-0.105, -0.06, 0),   // Left engine
      new THREE.Vector3(0, -0.06, 0.105),    // Front engine
      new THREE.Vector3(0, -0.06, -0.105),   // Back engine
    ];

    enginePositions.forEach((pos) => {
      // Machined Bell Nozzle
      const bellGeo = new THREE.CylinderGeometry(0.045, 0.075, 0.2, 16, 1, true);
      const bellMesh = new THREE.Mesh(bellGeo, inconelNozzleMat);
      bellMesh.position.copy(pos);
      engineClusterGroup.add(bellMesh);

      // Glowing Combustion Throat
      const throatGeo = new THREE.CircleGeometry(0.042, 16);
      const throatMesh = new THREE.Mesh(throatGeo, combustionThroatMat);
      throatMesh.rotation.x = Math.PI / 2;
      throatMesh.position.set(pos.x, pos.y + 0.08, pos.z);
      engineClusterGroup.add(throatMesh);
    });

    // =========================================================================
    // 6. MULTI-ENGINE SUPERSONIC JET PROPULSION & SHOCK DIAMONDS
    // =========================================================================
    // Main Supersonic Thrust Core (Combined fiery plasma plume)
    const flameCoreGeo = new THREE.ConeGeometry(0.20, 1.1, 16);
    const flameCoreMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.95,
    });
    const flameCoreMesh = new THREE.Mesh(flameCoreGeo, flameCoreMat);
    flameCoreMesh.position.y = -1.35;
    flameCoreMesh.rotation.x = Math.PI;
    rocketGroup.add(flameCoreMesh);

    // Outer Aerodynamic Expansion Flame (Neon cyan / golden plasma envelope)
    const flameOuterGeo = new THREE.ConeGeometry(0.28, 1.65, 16);
    const flameOuterMat = new THREE.MeshBasicMaterial({
      color: 0x00e5ff,
      transparent: true,
      opacity: 0.5,
      blending: THREE.AdditiveBlending,
    });
    const flameOuterMesh = new THREE.Mesh(flameOuterGeo, flameOuterMat);
    flameOuterMesh.position.y = -1.6;
    flameOuterMesh.rotation.x = Math.PI;
    rocketGroup.add(flameOuterMesh);

    // Atmospheric Supersonic Shock Diamonds (3 luminous expansion diamonds)
    const shockDiamonds: THREE.Mesh[] = [];
    for (let i = 0; i < 3; i++) {
      const diamondGeo = new THREE.OctahedronGeometry(0.045 - i * 0.008, 0);
      const diamondMat = new THREE.MeshBasicMaterial({
        color: 0xfff0bb,
        transparent: true,
        opacity: 0.85,
        blending: THREE.AdditiveBlending,
      });
      const diamondMesh = new THREE.Mesh(diamondGeo, diamondMat);
      diamondMesh.position.y = -0.98 - i * 0.22;
      rocketGroup.add(diamondMesh);
      shockDiamonds.push(diamondMesh);
    }

    // Exhaust Jet Propulsion Particle Sparks (160 particles)
    const exhaustCount = 160;
    const exhaustGeo = new THREE.BufferGeometry();
    const exhaustPositions = new Float32Array(exhaustCount * 3);
    const exhaustVelocities: { x: number; y: number; z: number; life: number; maxLife: number }[] = [];

    for (let i = 0; i < exhaustCount; i++) {
      exhaustPositions[i * 3] = 0;
      exhaustPositions[i * 3 + 1] = 0;
      exhaustPositions[i * 3 + 2] = 0;
      exhaustVelocities.push({
        x: (Math.random() - 0.5) * 0.16,
        y: -1.2 - Math.random() * 2.2,
        z: (Math.random() - 0.5) * 0.16,
        life: Math.random(),
        maxLife: 0.8 + Math.random() * 0.5,
      });
    }
    exhaustGeo.setAttribute("position", new THREE.BufferAttribute(exhaustPositions, 3));
    const exhaustMat = new THREE.PointsMaterial({
      color: 0x00e5ff,
      size: 0.052,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
    });
    const exhaustParticles = new THREE.Points(exhaustGeo, exhaustMat);
    rocketGroup.add(exhaustParticles);

    // =========================================================================
    // 7. FLOATING 3D HARDCOVER BOOKS IN ZERO-G
    // =========================================================================
    const createBook = (coverColor: number) => {
      const bGroup = new THREE.Group();
      // Hardcover
      const cGeo = new THREE.BoxGeometry(0.38, 0.52, 0.075);
      const cMat = new THREE.MeshStandardMaterial({
        color: coverColor,
        metalness: 0.65,
        roughness: 0.25,
      });
      const cMesh = new THREE.Mesh(cGeo, cMat);
      bGroup.add(cMesh);

      // Paper Pages
      const pGeo = new THREE.BoxGeometry(0.35, 0.49, 0.06);
      const pMat = new THREE.MeshStandardMaterial({
        color: 0xf8fafc,
        roughness: 0.8,
      });
      const pMesh = new THREE.Mesh(pGeo, pMat);
      pMesh.position.x = 0.02;
      bGroup.add(pMesh);

      // Spine & Cover Neon Edge Glow
      const edgeGeo = new THREE.EdgesGeometry(cGeo);
      const edgeMat = new THREE.LineBasicMaterial({
        color: 0x00e5ff,
        transparent: true,
        opacity: 0.6,
      });
      const edgeLines = new THREE.LineSegments(edgeGeo, edgeMat);
      bGroup.add(edgeLines);

      return bGroup;
    };

    // Book 1: Lower-left near launch zone
    const book1 = createBook(0x0284c7);
    book1.position.set(-2.2, -0.85, 1.2);
    book1.rotation.set(0.3, 0.4, -0.2);
    masterGroup.add(book1);

    // Book 2: Mid-flight near growth curve
    const book2 = createBook(0x00c8f8);
    book2.position.set(-0.4, 0.95, 0.6);
    book2.rotation.set(-0.25, -0.5, 0.35);
    masterGroup.add(book2);

    // Book 3: High-orbit zone
    const book3 = createBook(0x0f172a);
    book3.position.set(1.65, 0.35, -0.5);
    book3.rotation.set(0.2, -0.3, 0.15);
    masterGroup.add(book3);

    // =========================================================================
    // 8. MOUSE PARALLAX & DRAG CONTROLS
    // =========================================================================
    let isDragging = false;
    let prevMouse = { x: 0, y: 0 };
    let targetRotation = { x: 0, y: 0 };
    const dom = renderer.domElement;

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      prevMouse = { x: e.clientX, y: e.clientY };
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging) {
        // Subtle hover tilt
        const r = dom.getBoundingClientRect();
        const nx = ((e.clientX - r.left) / r.width - 0.5) * 0.35;
        const ny = ((e.clientY - r.top) / r.height - 0.5) * 0.25;
        targetRotation.y = nx;
        targetRotation.x = ny;
        return;
      }
      const dx = e.clientX - prevMouse.x;
      const dy = e.clientY - prevMouse.y;
      prevMouse = { x: e.clientX, y: e.clientY };

      masterGroup.rotation.y += dx * 0.007;
      masterGroup.rotation.x = Math.max(-0.4, Math.min(0.4, masterGroup.rotation.x + dy * 0.005));
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    dom.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);

    // =========================================================================
    // 9. 60 FPS CONTINUOUS ANIMATION LOOP
    // =========================================================================
    let animId: number;
    let clock = 0;
    const yAxis = new THREE.Vector3(0, 1, 0);

    const animate = () => {
      animId = requestAnimationFrame(animate);
      clock += 0.016;

      const currentConfig = VELOCITY_MODES[activeModeRef.current];
      const speed = currentConfig.speedMultiplier;

      // 1. Mouse Parallax Lerp
      if (!isDragging) {
        masterGroup.rotation.x += (targetRotation.x - masterGroup.rotation.x) * 0.05;
        masterGroup.rotation.y += (targetRotation.y - masterGroup.rotation.y) * 0.05;
      }

      // 2. Rotate Earth Continuously in Background
      earthGroup.rotation.y += 0.0008;

      // 3. Move Rocket Along the 3D Growth Trajectory Curve
      // Smooth continuous flight progression along the curve [0.28, 0.76] + scroll influence
      const baseProgress = 0.52 + Math.sin(clock * 0.45 * speed) * 0.22;
      const scrollInfluence = (scrollOffsetRef.current % 0.15);
      const tProgress = Math.min(0.85, Math.max(0.20, baseProgress + scrollInfluence));

      // Calculate position along curve
      const rocketPos = trajCurve.getPointAt(tProgress);
      // Add engine vibration shiver
      const vibration = Math.sin(clock * 45 * speed) * 0.007;
      rocketGroup.position.set(rocketPos.x, rocketPos.y + vibration, rocketPos.z);

      // Orient rocket forward along the curve tangent
      const tangent = trajCurve.getTangentAt(tProgress).normalize();
      rocketGroup.quaternion.setFromUnitVectors(yAxis, tangent);

      // Position thruster dynamic light right behind nozzle
      thrusterLight.position.copy(rocketGroup.position);
      thrusterLight.intensity = 2.0 + Math.sin(clock * 25) * 0.7;

      // 4. Pulse Booster Flame & Supersonic Shock Diamonds
      const flamePulse = 1.0 + Math.sin(clock * 32 * speed) * 0.18;
      flameCoreMesh.scale.set(flamePulse, flamePulse * (1 + (speed - 1) * 0.45), flamePulse);
      flameOuterMesh.scale.set(flamePulse * 1.1, flamePulse * 1.25, flamePulse * 1.1);

      shockDiamonds.forEach((sd, idx) => {
        const s = (1.0 + Math.sin(clock * 40 * speed + idx * 1.5) * 0.25);
        sd.scale.set(s, s * 1.4, s);
      });

      // 5. Animate Exhaust Plasma Sparks
      const pPos = exhaustParticles.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < exhaustCount; i++) {
        const vel = exhaustVelocities[i];
        vel.life += 0.032 * speed;
        if (vel.life >= vel.maxLife) {
          vel.life = 0;
          pPos[i * 3] = (Math.random() - 0.5) * 0.08;
          pPos[i * 3 + 1] = -0.85;
          pPos[i * 3 + 2] = (Math.random() - 0.5) * 0.08;
        } else {
          pPos[i * 3] += vel.x * 0.05;
          pPos[i * 3 + 1] += vel.y * 0.055 * speed;
          pPos[i * 3 + 2] += vel.z * 0.05;
        }
      }
      exhaustParticles.geometry.attributes.position.needsUpdate = true;

      // 6. Pulse 3D Growth Milestone Bars
      const targetScale = currentConfig.growthScale;
      growthBars.forEach((bar, idx) => {
        const pulse = 1.0 + Math.sin(clock * 2.5 + idx * 0.6) * 0.04;
        const sY = targetScale * pulse;
        bar.mesh.scale.y = sY;
        const currentH = bar.baseHeight * sY;
        bar.mesh.position.y = baselineY + currentH / 2;
      });

      // 7. Travel Energy Photons along trajectory
      photons.forEach((p, idx) => {
        const t = (clock * 0.38 * speed + idx * 0.25) % 1;
        const pt = trajCurve.getPoint(t);
        p.position.copy(pt);
      });

      // 8. Bob and Rotate Zero-G Books
      book1.rotation.y += 0.006;
      book1.position.y = -0.85 + Math.sin(clock * 1.4) * 0.04;

      book2.rotation.x += 0.005;
      book2.rotation.z += 0.004;
      book2.position.y = 0.95 + Math.cos(clock * 1.2) * 0.05;

      book3.rotation.y += 0.007;
      book3.position.y = 0.35 + Math.sin(clock * 1.6) * 0.04;

      renderer.render(scene, camera);
    };
    animate();

    // =========================================================================
    // 10. RESIZE OBSERVER & RIGOROUS DISPOSAL
    // =========================================================================
    const handleResize = () => {
      if (!container) return;
      const r = container.getBoundingClientRect();
      const w = r.width;
      const h = r.height;
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
      window.removeEventListener("resize", handleResize);

      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
      renderer.dispose();
      scene.clear();
    };
  }, []);

  return (
    <div className="relative w-full h-[460px] sm:h-[520px] rounded-2xl overflow-hidden bg-[#020815] border border-cyan-400/25 shadow-[inset_0_0_40px_rgba(0,163,224,0.15)] flex flex-col justify-between select-none">
      {/* 3D WebGL Canvas */}
      <div ref={containerRef} className="absolute inset-0 w-full h-full flex items-center justify-center cursor-grab active:cursor-grabbing z-10 overflow-hidden" />

      {/* Top Floating Badges */}
      <div className="relative z-20 flex items-center justify-between p-3.5 sm:p-4 pointer-events-none">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#040E20]/90 backdrop-blur-md border border-cyan-400/35 text-[11px] font-bold uppercase tracking-wider text-[#00E5FF] shadow-lg shadow-cyan-500/20">
          <Rocket className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
          <span>Live 3D Book Launch Engine</span>
        </span>

        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#040E20]/85 backdrop-blur-md border border-cyan-500/30 text-[11px] text-cyan-200 font-mono">
          <Globe2 className="w-3 h-3 text-[#00E5FF]" />
          <span>Global Reach & Trajectory</span>
        </span>
      </div>

      {/* Dynamic Floating Projection Badge */}
      <div className="relative z-20 px-3.5 sm:px-4 pointer-events-none">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-[#07172F]/90 backdrop-blur-md border border-cyan-400/30 text-[11px] text-cyan-200 shadow-md">
          <TrendingUp className="w-3.5 h-3.5 text-[#00E5FF]" />
          <span>
            Trajectory Status: <strong>{VELOCITY_MODES[activeMode].label}</strong> · {VELOCITY_MODES[activeMode].badge}
          </span>
        </div>
      </div>

      {/* Bottom Interactive Velocity Controls Bar */}
      <div className="relative z-20 m-3 sm:m-4 p-2.5 rounded-xl bg-[#040E20]/90 backdrop-blur-md border border-cyan-500/25 flex flex-col sm:flex-row sm:items-center justify-between gap-2 shadow-xl">
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className="text-[10px] uppercase font-bold text-[#00E5FF] tracking-wider shrink-0 mr-1 flex items-center gap-1">
            <Zap className="w-3 h-3 text-cyan-400" />
            Launch Velocity:
          </span>
          {(Object.keys(VELOCITY_MODES) as VelocityMode[]).map((mode) => {
            const config = VELOCITY_MODES[mode];
            const isActive = activeMode === mode;
            return (
              <button
                key={mode}
                onClick={() => setActiveMode(mode)}
                className={`px-2.5 py-1 rounded-md text-[11px] font-medium transition-all cursor-pointer flex items-center gap-1 ${
                  isActive
                    ? "bg-[#00A3E0] text-white font-bold shadow-md shadow-cyan-500/30"
                    : "bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white"
                }`}
              >
                {isActive && <Flame className="w-3 h-3 text-white animate-bounce" />}
                <span>{config.label}</span>
              </button>
            );
          })}
        </div>

        <span className="text-[10px] text-slate-400 font-mono shrink-0 text-right">
          Interactive 3D · Earth & Trajectory Space
        </span>
      </div>
    </div>
  );
}
