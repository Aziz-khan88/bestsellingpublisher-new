"use client";

import * as React from "react";
import Image from "next/image";
import * as THREE from "three";
import { RotateCw, ChevronLeft, ChevronRight, Award, BookOpen, Sparkles } from "lucide-react";

export interface RealBookTheme {
  id: string;
  title: string;
  author: string;
  subtitle: string;
  genre: string;
  badge: string;
  image: string;
  spineColor: number;
  backColor: number;
  neonAccent: number;
}

export const REAL_BSP_BOOKS: RealBookTheme[] = [
  {
    id: "son-of-the-sea",
    title: "Son Of The Sea: Rising, Healing & Still Me",
    author: "Dylan Sandhu",
    subtitle: "A Powerful Memoir of Overcoming Catastrophic Adversity",
    genre: "Autobiography & Memoir",
    badge: "Official Best Selling Publisher Title",
    image: "/live-books/son-of-the-sea.webp",
    spineColor: 0x071b30,
    backColor: 0x041120,
    neonAccent: 0x00e5ff,
  },
  {
    id: "dark-lake",
    title: "Dark Lake",
    author: "Richard Schinnow",
    subtitle: "A Chilling Winter Mystery & Suspense Novel",
    genre: "Mystery & Fiction",
    badge: "Amazon Category Bestseller",
    image: "/live-books/dark-lake.webp",
    spineColor: 0x0b1522,
    backColor: 0x060d16,
    neonAccent: 0x38bdf8,
  },
  {
    id: "history-of-money",
    title: "The History of Money",
    author: "John Indelicato",
    subtitle: "The Secretive Creation of the Federal Reserve Bank",
    genre: "History & Non-Fiction",
    badge: "Collector's Hardcover Feature",
    image: "/live-books/history-of-money.webp",
    spineColor: 0x1f190a,
    backColor: 0x120f06,
    neonAccent: 0xf59e0b,
  },
  {
    id: "fleagiliad",
    title: "Fleagiliad: Literary Vampire",
    author: "Paul Marlee",
    subtitle: "An Epic Philosophical Literary Fiction Journey",
    genre: "Literary Fiction",
    badge: "International Review Top Pick",
    image: "/live-books/fleagiliad.webp",
    spineColor: 0x140a26,
    backColor: 0x0a0414,
    neonAccent: 0xa855f7,
  },
];

// Procedural page edge texture
function createPageEdgeTexture(): THREE.CanvasTexture {
  const canvas = document.createElement("canvas");
  canvas.width = 256;
  canvas.height = 256;
  const ctx = canvas.getContext("2d");
  if (!ctx) return new THREE.CanvasTexture(canvas);

  ctx.fillStyle = "#FAF7EE";
  ctx.fillRect(0, 0, 256, 256);

  for (let y = 0; y < 256; y += 2) {
    const shade = 230 + Math.floor(Math.sin(y * 8) * 14);
    ctx.fillStyle = `rgb(${shade}, ${shade - 5}, ${shade - 12})`;
    ctx.fillRect(0, y, 256, 1);
  }

  const grad = ctx.createLinearGradient(0, 0, 30, 0);
  grad.addColorStop(0, "rgba(0,0,0,0.18)");
  grad.addColorStop(1, "rgba(0,0,0,0)");
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 30, 256);

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(1, 4);
  texture.needsUpdate = true;
  return texture;
}

// Procedural spine texture with real book title and author
function createSpineTexture(theme: RealBookTheme): THREE.CanvasTexture {
  const canvas = document.createElement("canvas");
  canvas.width = 128;
  canvas.height = 1024;
  const ctx = canvas.getContext("2d");
  if (!ctx) return new THREE.CanvasTexture(canvas);

  const bgGrad = ctx.createLinearGradient(0, 0, 128, 0);
  bgGrad.addColorStop(0, "#01040A");
  bgGrad.addColorStop(0.3, "#0A1E38");
  bgGrad.addColorStop(0.7, "#0A1E38");
  bgGrad.addColorStop(1, "#01040A");
  ctx.fillStyle = bgGrad;
  ctx.fillRect(0, 0, 128, 1024);

  // Vertical text along spine
  ctx.save();
  ctx.translate(64, 512);
  ctx.rotate(-Math.PI / 2);
  ctx.fillStyle = "#FFFFFF";
  ctx.font = "bold 28px 'Playfair Display', Georgia, serif";
  ctx.textAlign = "center";
  ctx.letterSpacing = "2px";

  const shortTitle = theme.title.split(":")[0];
  ctx.fillText(shortTitle.toUpperCase(), 0, 0);

  ctx.fillStyle = "#FFDF73";
  ctx.font = "600 20px 'Inter', sans-serif";
  ctx.letterSpacing = "4px";
  ctx.fillText(theme.author.toUpperCase(), 0, 30);
  ctx.restore();

  // Top and bottom decorative foil bands
  ctx.fillStyle = "#FFDF73";
  ctx.fillRect(16, 40, 96, 4);
  ctx.fillRect(16, 980, 96, 4);

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.needsUpdate = true;
  return texture;
}

export function V2ThreeHeroBook() {
  const mountRef = React.useRef<HTMLDivElement | null>(null);
  const [bookIdx, setBookIdx] = React.useState<number>(0);
  const [isHovered, setIsHovered] = React.useState<boolean>(false);
  const [isInteracting, setIsInteracting] = React.useState<boolean>(false);

  const currentBook = REAL_BSP_BOOKS[bookIdx];

  // 3D component refs
  const bookGroupRef = React.useRef<THREE.Group | null>(null);
  const frontCoverMatRef = React.useRef<THREE.MeshStandardMaterial | null>(null);
  const spineMatRef = React.useRef<THREE.MeshStandardMaterial | null>(null);
  const backMatRef = React.useRef<THREE.MeshStandardMaterial | null>(null);
  const neonRingRef = React.useRef<THREE.Mesh | null>(null);
  const spotLightRef = React.useRef<THREE.SpotLight | null>(null);

  // Mouse rotation control refs
  const isDraggingRef = React.useRef<boolean>(false);
  const prevMouseRef = React.useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const targetRotationRef = React.useRef<{ x: number; y: number }>({ x: 0.1, y: -0.45 });
  const currentRotationRef = React.useRef<{ x: number; y: number }>({ x: 0.1, y: -0.45 });

  // Update book cover texture when book changes
  React.useEffect(() => {
    if (frontCoverMatRef.current && spineMatRef.current && backMatRef.current) {
      // Load real book cover image texture
      const loader = new THREE.TextureLoader();
      loader.load(
        currentBook.image,
        (loadedTex) => {
          loadedTex.colorSpace = THREE.SRGBColorSpace;
          loadedTex.needsUpdate = true;
          if (frontCoverMatRef.current) {
            frontCoverMatRef.current.map = loadedTex;
            frontCoverMatRef.current.needsUpdate = true;
          }
        },
        undefined,
        (err) => {
          console.warn("Failed loading cover texture", err);
        }
      );

      // Spine & Back updates
      const spineTex = createSpineTexture(currentBook);
      spineMatRef.current.map = spineTex;
      spineMatRef.current.color.set(currentBook.spineColor);
      spineMatRef.current.needsUpdate = true;

      backMatRef.current.color.set(currentBook.backColor);

      if (spotLightRef.current) {
        spotLightRef.current.color.set(currentBook.neonAccent);
      }
      if (neonRingRef.current) {
        const mat = neonRingRef.current.material as THREE.MeshStandardMaterial;
        mat.color.set(currentBook.neonAccent);
        mat.emissive.set(currentBook.neonAccent);
      }
    }
  }, [bookIdx, currentBook]);

  React.useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }

    const scene = new THREE.Scene();
    const width = container.clientWidth || 550;
    const height = container.clientHeight || 700;

    // Camera positioned closer with optimized FOV for larger book prominence
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(0, 0.15, 4.05);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    container.appendChild(renderer.domElement);

    // ==========================================
    // LIGHTING RIG
    // ==========================================
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.1);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xfff5e6, 2.5);
    keyLight.position.set(3.2, 4.2, 3.5);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.width = 1024;
    keyLight.shadow.mapSize.height = 1024;
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0x00e5ff, 1.6);
    fillLight.position.set(-3.5, 2.5, 2);
    scene.add(fillLight);

    const stageUplight = new THREE.SpotLight(0x00e5ff, 4.8, 6, Math.PI / 4, 0.35);
    stageUplight.position.set(0, -1.8, 0.3);
    stageUplight.target.position.set(0, 0, 0);
    scene.add(stageUplight);
    scene.add(stageUplight.target);
    spotLightRef.current = stageUplight;

    // ==========================================
    // NEON STAGE / DOCKED PEDESTAL
    // ==========================================
    const stageGroup = new THREE.Group();
    stageGroup.position.set(0, -1.36, 0);

    const baseGeo = new THREE.CylinderGeometry(1.85, 2.05, 0.22, 64);
    const baseMat = new THREE.MeshStandardMaterial({
      color: 0x040d1c,
      metalness: 0.88,
      roughness: 0.2,
    });
    const baseMesh = new THREE.Mesh(baseGeo, baseMat);
    baseMesh.receiveShadow = true;
    stageGroup.add(baseMesh);

    const ringGeo = new THREE.TorusGeometry(1.88, 0.038, 16, 64);
    const ringMat = new THREE.MeshStandardMaterial({
      color: 0x00e5ff,
      emissive: 0x00e5ff,
      emissiveIntensity: 2.4,
      roughness: 0.1,
    });
    const ringMesh = new THREE.Mesh(ringGeo, ringMat);
    ringMesh.rotation.x = Math.PI / 2;
    ringMesh.position.y = 0.11;
    stageGroup.add(ringMesh);
    neonRingRef.current = ringMesh;

    const topGeo = new THREE.CylinderGeometry(1.65, 1.78, 0.16, 64);
    const topMat = new THREE.MeshStandardMaterial({
      color: 0x061429,
      metalness: 0.92,
      roughness: 0.15,
    });
    const topMesh = new THREE.Mesh(topGeo, topMat);
    topMesh.position.y = 0.16;
    topMesh.receiveShadow = true;
    stageGroup.add(topMesh);

    scene.add(stageGroup);

    // ==========================================
    // 3D HARDCOVER BOOK MESH ASSEMBLY (Increased Size)
    // ==========================================
    const bookGroup = new THREE.Group();
    bookGroup.position.set(0, 0.05, 0);

    // Increased book dimensions by ~20% for superior presence
    const bookWidth = 1.65;
    const bookHeight = 2.48;
    const bookThickness = 0.32;

    // 1. Stacked Pages
    const pagesGeo = new THREE.BoxGeometry(
      bookWidth - 0.04,
      bookHeight - 0.06,
      bookThickness - 0.04
    );
    const pageTex = createPageEdgeTexture();
    const pageMat = new THREE.MeshStandardMaterial({
      map: pageTex,
      color: 0xfaf7ee,
      roughness: 0.8,
      metalness: 0.02,
    });
    const pagesMesh = new THREE.Mesh(pagesGeo, pageMat);
    pagesMesh.position.set(0.015, 0, 0);
    pagesMesh.castShadow = true;
    pagesMesh.receiveShadow = true;
    bookGroup.add(pagesMesh);

    // 2. Front Hardcover with REAL book cover image texture
    const frontGeo = new THREE.BoxGeometry(bookWidth, bookHeight, 0.022);
    const initialFrontMat = new THREE.MeshStandardMaterial({
      roughness: 0.35,
      metalness: 0.15,
    });
    frontCoverMatRef.current = initialFrontMat;

    // Load initial cover
    new THREE.TextureLoader().load(REAL_BSP_BOOKS[0].image, (tex) => {
      tex.colorSpace = THREE.SRGBColorSpace;
      tex.needsUpdate = true;
      initialFrontMat.map = tex;
      initialFrontMat.needsUpdate = true;
    });

    const frontMesh = new THREE.Mesh(frontGeo, initialFrontMat);
    frontMesh.position.set(0, 0, bookThickness / 2);
    frontMesh.castShadow = true;
    bookGroup.add(frontMesh);

    // 3. Back Hardcover
    const backGeo = new THREE.BoxGeometry(bookWidth, bookHeight, 0.022);
    const backMat = new THREE.MeshStandardMaterial({
      color: REAL_BSP_BOOKS[0].backColor,
      roughness: 0.45,
      metalness: 0.15,
    });
    backMatRef.current = backMat;
    const backMesh = new THREE.Mesh(backGeo, backMat);
    backMesh.position.set(0, 0, -bookThickness / 2);
    backMesh.castShadow = true;
    bookGroup.add(backMesh);

    // 4. Spine Plate with Real Book Title & Author
    const spineGeo = new THREE.BoxGeometry(0.022, bookHeight, bookThickness);
    const spineTex = createSpineTexture(REAL_BSP_BOOKS[0]);
    const spineMat = new THREE.MeshStandardMaterial({
      map: spineTex,
      color: REAL_BSP_BOOKS[0].spineColor,
      roughness: 0.35,
      metalness: 0.2,
    });
    spineMatRef.current = spineMat;
    const spineMesh = new THREE.Mesh(spineGeo, spineMat);
    spineMesh.position.set(-bookWidth / 2, 0, 0);
    spineMesh.castShadow = true;
    bookGroup.add(spineMesh);

    // Initial Angle
    bookGroup.rotation.x = 0.1;
    bookGroup.rotation.y = -0.45;
    scene.add(bookGroup);
    bookGroupRef.current = bookGroup;

    // Ambient Stardust Particles
    const particleCount = 85;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    for (let p = 0; p < particleCount * 3; p += 3) {
      positions[p] = (Math.random() - 0.5) * 5.0;
      positions[p + 1] = (Math.random() - 0.5) * 4.5;
      positions[p + 2] = (Math.random() - 0.5) * 3.5;
    }
    particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0x00e5ff,
      size: 0.035,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // ==========================================
    // INTERACTION HANDLERS
    // ==========================================
    const handleMouseDown = (e: MouseEvent) => {
      isDraggingRef.current = true;
      setIsInteracting(true);
      prevMouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (isDraggingRef.current) {
        const deltaX = e.clientX - prevMouseRef.current.x;
        const deltaY = e.clientY - prevMouseRef.current.y;
        prevMouseRef.current = { x: e.clientX, y: e.clientY };

        targetRotationRef.current.y += deltaX * 0.008;
        targetRotationRef.current.x = Math.max(
          -0.3,
          Math.min(0.4, targetRotationRef.current.x + deltaY * 0.006)
        );
      } else {
        const rect = container.getBoundingClientRect();
        const normX = (e.clientX - rect.left) / rect.width - 0.5;
        const normY = (e.clientY - rect.top) / rect.height - 0.5;
        targetRotationRef.current.y = -0.45 + normX * 0.45;
        targetRotationRef.current.x = 0.1 + normY * 0.25;
      }
    };

    const handleMouseUp = () => {
      isDraggingRef.current = false;
      setIsInteracting(false);
    };

    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        isDraggingRef.current = true;
        setIsInteracting(true);
        prevMouseRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (isDraggingRef.current && e.touches.length === 1) {
        const deltaX = e.touches[0].clientX - prevMouseRef.current.x;
        const deltaY = e.touches[0].clientY - prevMouseRef.current.y;
        prevMouseRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };

        targetRotationRef.current.y += deltaX * 0.01;
        targetRotationRef.current.x = Math.max(
          -0.3,
          Math.min(0.4, targetRotationRef.current.x + deltaY * 0.008)
        );
      }
    };

    const handleTouchEnd = () => {
      isDraggingRef.current = false;
      setIsInteracting(false);
    };

    const domEl = renderer.domElement;
    domEl.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    domEl.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("touchend", handleTouchEnd);

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", handleResize);

    // ==========================================
    // ANIMATION LOOP
    // ==========================================
    let animId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      currentRotationRef.current.x +=
        (targetRotationRef.current.x - currentRotationRef.current.x) * 0.08;
      currentRotationRef.current.y +=
        (targetRotationRef.current.y - currentRotationRef.current.y) * 0.08;

      if (bookGroupRef.current) {
        if (!isDraggingRef.current) {
          const floatOffset = Math.sin(elapsedTime * 1.5) * 0.03;
          bookGroupRef.current.position.y = 0.05 + floatOffset;
        }
        bookGroupRef.current.rotation.x = currentRotationRef.current.x;
        bookGroupRef.current.rotation.y = currentRotationRef.current.y;
      }

      if (neonRingRef.current) {
        const pulse = 2.0 + Math.sin(elapsedTime * 3) * 0.5;
        (neonRingRef.current.material as THREE.MeshStandardMaterial).emissiveIntensity =
          pulse;
      }

      particles.rotation.y = elapsedTime * 0.05;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      domEl.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      domEl.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
      window.removeEventListener("resize", handleResize);

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      scene.clear();
    };
  }, []);

  const nextBook = () => {
    setBookIdx((prev) => (prev + 1) % REAL_BSP_BOOKS.length);
  };

  const prevBook = () => {
    setBookIdx((prev) => (prev - 1 + REAL_BSP_BOOKS.length) % REAL_BSP_BOOKS.length);
  };

  return (
    <div
      className="relative w-full h-full flex flex-col items-center justify-center select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Three.js Canvas Container */}
      <div
        ref={mountRef}
        className="w-full h-[560px] sm:h-[640px] lg:h-[720px] cursor-grab active:cursor-grabbing relative"
      />

      {/* Floating 3D Interaction Badge */}
      <div className="absolute top-4 right-4 z-20 pointer-events-none">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#051124]/90 backdrop-blur-md border border-cyan-400/40 text-[#00E5FF] text-xs font-bold uppercase tracking-wider shadow-xl">
          <RotateCw className="w-4 h-4 animate-spin text-cyan-400" style={{ animationDuration: "12s" }} />
          <span>Interactive 3D Hardcover</span>
        </div>
      </div>

      {/* Hover Drag Hint */}
      <div
        className={`absolute bottom-28 z-20 pointer-events-none transition-opacity duration-300 ${
          isHovered && !isInteracting ? "opacity-90" : "opacity-0"
        }`}
      >
        <span className="px-3.5 py-1.5 rounded-full bg-slate-950/85 text-xs text-slate-200 font-medium border border-white/15 backdrop-blur-md shadow-lg">
          Click & Drag to Rotate in 3D
        </span>
      </div>

      {/* ======================================================== */}
      {/* NEW REDESIGNED INTERACTIVE TITLE DOCK                    */}
      {/* ======================================================== */}
      <div className="absolute bottom-2 sm:bottom-3 left-2 right-2 sm:left-4 sm:right-4 max-w-xl mx-auto z-20">
        <div className="relative w-full rounded-2xl bg-gradient-to-r from-[#030c1e]/95 via-[#061633]/95 to-[#030c1e]/95 border border-cyan-500/35 shadow-[0_14px_45px_rgba(0,0,0,0.85)] p-3 sm:p-3.5 backdrop-blur-xl">
          {/* Active Book Info & Prev/Next Controls */}
          <div className="flex items-center justify-between gap-3 mb-2.5">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-0.5">
                <span className="text-xs sm:text-[13px] font-bold uppercase tracking-wider text-[#00E5FF]">
                  {currentBook.genre}
                </span>
                <span className="text-slate-500 text-xs">•</span>
                <span className="text-xs sm:text-[13px] text-slate-300 font-medium truncate">
                  By {currentBook.author}
                </span>
              </div>
              <h4 className="text-sm sm:text-base lg:text-lg font-serif font-bold text-white truncate">
                {currentBook.title}
              </h4>
            </div>

            {/* Navigation Arrows */}
            <div className="flex items-center gap-1.5 shrink-0">
              <button
                onClick={prevBook}
                aria-label="Previous Published Title"
                className="w-8 h-8 rounded-lg bg-white/10 hover:bg-cyan-500/25 text-white flex items-center justify-center transition-colors cursor-pointer border border-white/10 hover:border-cyan-400/50"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextBook}
                aria-label="Next Published Title"
                className="w-8 h-8 rounded-lg bg-white/10 hover:bg-cyan-500/25 text-white flex items-center justify-center transition-colors cursor-pointer border border-white/10 hover:border-cyan-400/50"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* 4 Interactive Thumbnail Dock Tabs */}
          <div className="grid grid-cols-4 gap-2 pt-2.5 border-t border-white/10">
            {REAL_BSP_BOOKS.map((book, idx) => {
              const isActive = idx === bookIdx;
              return (
                <button
                  key={book.id}
                  onClick={() => setBookIdx(idx)}
                  className={`flex items-center gap-2 p-1.5 rounded-xl text-left transition-all duration-300 cursor-pointer border ${
                    isActive
                      ? "bg-cyan-500/20 border-cyan-400 shadow-md shadow-cyan-500/25 ring-1 ring-cyan-400/30"
                      : "bg-white/5 border-white/5 hover:bg-white/10 hover:border-white/20"
                  }`}
                >
                  <div className="relative w-6 h-9 rounded-sm shrink-0 overflow-hidden shadow-sm">
                    <Image
                      src={book.image}
                      alt={book.title}
                      fill
                      sizes="24px"
                      className="object-cover"
                    />
                  </div>
                  <div className="hidden sm:block min-w-0 flex-1">
                    <span
                      className={`text-[11px] font-bold block truncate leading-tight ${
                        isActive ? "text-[#00E5FF]" : "text-slate-200"
                      }`}
                    >
                      {book.title.split(":")[0]}
                    </span>
                    <span className="text-[10px] text-slate-400 block truncate leading-tight mt-0.5">
                      {book.author}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
