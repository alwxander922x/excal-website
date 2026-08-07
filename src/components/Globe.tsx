import { useEffect, useRef } from "react"
import { useTheme } from "@/context/ThemeContext"

type Ring = [number, number][] // [lon, lat]

// Coarse continent outlines — enough to read as a world map at this scale.
const LAND: Ring[] = [
  // North America
  [[-168,65],[-165,55],[-150,60],[-130,55],[-125,40],[-117,32],[-105,22],[-97,16],[-88,15],[-83,10],[-80,25],[-81,31],[-75,35],[-70,42],[-60,47],[-55,52],[-65,60],[-80,70],[-95,70],[-125,70],[-140,70],[-155,71]],
  // Greenland
  [[-45,60],[-20,70],[-25,80],[-45,83],[-60,80],[-58,68]],
  // South America
  [[-81,0],[-75,-5],[-70,-18],[-70,-30],[-73,-45],[-75,-53],[-68,-55],[-65,-45],[-62,-38],[-58,-34],[-53,-33],[-48,-25],[-40,-20],[-35,-8],[-35,-5],[-45,0],[-50,4],[-60,8],[-70,10],[-78,8]],
  // Africa
  [[-17,15],[-17,21],[-10,27],[0,33],[10,37],[20,32],[32,31],[35,23],[38,18],[43,12],[51,12],[48,5],[41,-2],[40,-10],[35,-18],[35,-25],[28,-33],[20,-35],[18,-30],[13,-20],[12,-10],[9,0],[3,5],[-5,5],[-10,5],[-15,10]],
  // Eurasia
  [[-10,36],[-9,43],[-2,49],[2,51],[4,53],[8,54],[10,57],[13,55],[19,54],[21,56],[24,57],[28,60],[30,60],[31,65],[25,66],[22,69],[28,71],[40,68],[50,68],[60,70],[70,72],[78,73],[90,76],[105,77],[115,74],[130,73],[140,72],[150,70],[160,69],[170,67],[180,66],[180,60],[165,60],[160,55],[155,52],[145,45],[140,45],[135,42],[130,38],[126,35],[122,30],[120,25],[110,20],[105,15],[100,10],[98,8],[95,15],[90,20],[88,22],[80,15],[77,8],[72,20],[65,25],[60,25],[56,26],[50,28],[45,30],[40,35],[36,36],[30,36],[26,38],[20,40],[15,38],[12,37],[8,38],[0,38],[-5,36]],
  // Australia
  [[114,-22],[113,-26],[115,-34],[120,-34],[129,-32],[135,-35],[140,-38],[147,-38],[150,-37],[153,-28],[153,-25],[146,-19],[142,-11],[136,-12],[130,-11],[125,-14],[122,-17]],
  // British Isles
  [[-6,50],[-3,54],[-3,58],[-6,58],[-8,55],[-6,50]],
  // Madagascar
  [[43,-12],[50,-15],[48,-25],[44,-25],[43,-18]],
  // Japan
  [[130,32],[136,35],[141,40],[145,44],[142,45],[137,37],[131,33]],
  // New Zealand
  [[172,-34],[178,-38],[174,-42],[168,-46],[166,-45],[171,-40]],
]

function pointInRing(lon: number, lat: number, ring: Ring): boolean {
  let inside = false
  for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
    const [xi, yi] = ring[i]
    const [xj, yj] = ring[j]
    if (yi > lat !== yj > lat && lon < ((xj - xi) * (lat - yi)) / (yj - yi) + xi) inside = !inside
  }
  return inside
}

function isLand(lon: number, lat: number): boolean {
  for (const ring of LAND) if (pointInRing(lon, lat, ring)) return true
  return false
}

const MARKERS = [
  { lon: 28.8, lat: 47.0, label: "MOLDOVA" },
  { lon: -98, lat: 39, label: "USA" },
]

// Two hand-tuned palettes: a deep-space scene for dark mode, and a clean,
// paper-white look for light mode — same geometry, different rendering.
const PALETTES = {
  dark: {
    bgFill: null as string | null,
    star: (a: number) => `rgba(226,240,233,${a})`,
    glow: ["rgba(95,190,140,0.34)", "rgba(60,150,110,0.13)", "rgba(40,120,90,0)"],
    bodyGrad: ["rgba(28,86,62,0.95)", "rgba(12,38,28,0.97)", "rgba(5,14,11,0.99)"],
    rim: "rgba(140,230,180,0.55)",
    rimShadow: "rgba(110,215,160,0.85)",
    land: (alpha: number) => `rgba(233,247,239,${alpha})`,
    orbit: "rgba(120,220,170,",
    markerRing: "rgba(150,240,190,",
    markerDot: "rgba(170,255,205,",
    markerShadow: "rgba(140,240,185,0.9)",
    chipBg: "rgba(6,18,13,",
    chipBorder: "rgba(150,240,190,",
    chipText: "rgba(226,255,240,",
  },
  light: {
    bgFill: "rgba(242,242,242,1)",
    star: () => "rgba(0,0,0,0)",
    glow: ["rgba(23,77,56,0.10)", "rgba(23,77,56,0.03)", "rgba(23,77,56,0)"],
    bodyGrad: ["rgba(255,255,255,0.9)", "rgba(240,240,240,0.9)", "rgba(224,224,224,0.9)"],
    rim: "rgba(23,77,56,0.35)",
    rimShadow: "rgba(23,77,56,0)",
    land: (alpha: number) => `rgba(23,77,56,${Math.min(alpha + 0.15, 0.9)})`,
    orbit: "rgba(23,77,56,",
    markerRing: "rgba(23,77,56,",
    markerDot: "rgba(23,77,56,",
    markerShadow: "rgba(23,77,56,0.4)",
    chipBg: "rgba(255,255,255,",
    chipBorder: "rgba(23,77,56,",
    chipText: "rgba(23,32,28,",
  },
} as const

export function Globe({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const pal = PALETTES[theme]
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const isMobile = window.matchMedia("(max-width: 767px)").matches

    // Land dots on the unit sphere, precomputed once — the loop only rotates them.
    const lons: number[] = []
    const lats: number[] = []
    const step = isMobile ? 3.4 : 2.3
    for (let lat = -78; lat <= 84; lat += step) {
      const lonStep = step / Math.max(0.25, Math.cos((lat * Math.PI) / 180))
      for (let lon = -180; lon < 180; lon += lonStep) {
        if (!isLand(lon, lat)) continue
        lons.push(lon)
        lats.push(lat)
      }
    }
    const n = lons.length
    const px = new Float32Array(n)
    const py = new Float32Array(n)
    const pz = new Float32Array(n)
    for (let i = 0; i < n; i++) {
      const lo = (lons[i] * Math.PI) / 180
      const la = (lats[i] * Math.PI) / 180
      px[i] = Math.cos(la) * Math.sin(lo)
      py[i] = Math.sin(la)
      pz[i] = Math.cos(la) * Math.cos(lo)
    }

    // Static starfield
    const starCount = isMobile ? 70 : 140
    const stars = Array.from({ length: starCount }, () => ({
      x: Math.random(),
      y: Math.random(),
      r: Math.random() * 1.1 + 0.3,
      a: Math.random() * 0.5 + 0.15,
      tw: Math.random() * Math.PI * 2,
    }))

    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    let raf = 0
    let angle = 200 // start with the Atlantic facing us
    let running = false
    let W = 0
    let H = 0
    const t0 = performance.now()

    function resize() {
      const rect = canvas!.getBoundingClientRect()
      W = rect.width
      H = rect.height
      canvas!.width = W * dpr
      canvas!.height = H * dpr
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    function rotated(i: number, sinA: number, cosA: number) {
      const x0 = px[i]
      const z0 = pz[i]
      return { x: x0 * cosA + z0 * sinA, y: py[i], z: -x0 * sinA + z0 * cosA }
    }

    // `lon` already has the current rotation baked in
    function project(lon: number, lat: number) {
      const lo = (lon * Math.PI) / 180
      const la = (lat * Math.PI) / 180
      return { x: Math.cos(la) * Math.sin(lo), y: Math.sin(la), z: Math.cos(la) * Math.cos(lo) }
    }

    function renderFrame() {
      const now = performance.now()
      const R = Math.min(W, H) * 0.4
      const cx = W / 2
      const cy = H / 2
      const a = (angle * Math.PI) / 180
      const sinA = Math.sin(a)
      const cosA = Math.cos(a)

      ctx!.clearRect(0, 0, W, H)
      if (pal.bgFill) { ctx!.fillStyle = pal.bgFill; ctx!.fillRect(0, 0, W, H) }

      // --- starfield (dark theme only — pal.star returns transparent in light) ---
      for (const s of stars) {
        const twinkle = reduceMotion ? 1 : 0.65 + 0.35 * Math.sin(now / 1400 + s.tw)
        ctx!.beginPath()
        ctx!.arc(s.x * W, s.y * H, s.r, 0, Math.PI * 2)
        ctx!.fillStyle = pal.star(s.a * twinkle)
        ctx!.fill()
      }

      // --- atmosphere glow around the limb ---
      const glow = ctx!.createRadialGradient(cx, cy, R * 0.92, cx, cy, R * 1.35)
      glow.addColorStop(0, pal.glow[0])
      glow.addColorStop(0.45, pal.glow[1])
      glow.addColorStop(1, pal.glow[2])
      ctx!.beginPath()
      ctx!.arc(cx, cy, R * 1.35, 0, Math.PI * 2)
      ctx!.fillStyle = glow
      ctx!.fill()

      // --- sphere body, lit from lower-right ---
      const body = ctx!.createRadialGradient(cx + R * 0.45, cy + R * 0.5, R * 0.1, cx, cy, R)
      body.addColorStop(0, pal.bodyGrad[0])
      body.addColorStop(0.55, pal.bodyGrad[1])
      body.addColorStop(1, pal.bodyGrad[2])
      ctx!.beginPath()
      ctx!.arc(cx, cy, R, 0, Math.PI * 2)
      ctx!.fillStyle = body
      ctx!.fill()

      // bright rim arc on the lit side
      ctx!.save()
      ctx!.beginPath()
      ctx!.arc(cx, cy, R, Math.PI * 0.05, Math.PI * 0.95)
      ctx!.strokeStyle = pal.rim
      ctx!.lineWidth = 1.6
      ctx!.shadowColor = pal.rimShadow
      ctx!.shadowBlur = 18
      ctx!.stroke()
      ctx!.restore()

      // --- continents ---
      for (let i = 0; i < n; i++) {
        const p = rotated(i, sinA, cosA)
        if (p.z < 0.02) continue
        // lit toward lower-right
        const lit = Math.max(0, p.x * 0.45 + -p.y * 0.5 + p.z * 0.6)
        const alpha = 0.16 + p.z * 0.34 + lit * 0.42
        ctx!.beginPath()
        ctx!.arc(cx + p.x * R, cy - p.y * R, 0.85 + p.z * 0.75, 0, Math.PI * 2)
        ctx!.fillStyle = pal.land(alpha > 0.92 ? 0.92 : alpha)
        ctx!.fill()
      }

      // --- orbital arcs ---
      const arcSpin = reduceMotion ? 0 : now / 9000
      for (let k = 0; k < 2; k++) {
        const tilt = k === 0 ? -0.42 : 0.55
        const rr = R * (k === 0 ? 1.22 : 1.34)
        ctx!.save()
        ctx!.translate(cx, cy)
        ctx!.rotate(tilt + arcSpin * (k === 0 ? 1 : -0.6))
        ctx!.beginPath()
        ctx!.ellipse(0, 0, rr, rr * 0.3, 0, 0, Math.PI * 2)
        const g = ctx!.createLinearGradient(-rr, 0, rr, 0)
        g.addColorStop(0, pal.orbit + "0)")
        g.addColorStop(0.5, pal.orbit + (k === 0 ? "0.42)" : "0.26)"))
        g.addColorStop(1, pal.orbit + "0)")
        ctx!.strokeStyle = g
        ctx!.lineWidth = 1.1
        ctx!.stroke()
        ctx!.restore()
      }

      // --- markers with labels ---
      const pulse = reduceMotion ? 0.45 : ((now - t0) / 2400) % 1
      for (const m of MARKERS) {
        const p = project(m.lon + angle, m.lat)
        if (p.z <= 0.08) continue
        const sx = cx + p.x * R
        const sy = cy - p.y * R
        const fade = Math.min(1, (p.z - 0.08) * 3)

        // pulse ring
        ctx!.beginPath()
        ctx!.arc(sx, sy, 4 + pulse * 16, 0, Math.PI * 2)
        ctx!.strokeStyle = pal.markerRing + `${(1 - pulse) * 0.5 * fade})`
        ctx!.lineWidth = 1.3
        ctx!.stroke()

        // dot
        ctx!.save()
        ctx!.shadowColor = pal.markerShadow
        ctx!.shadowBlur = 12
        ctx!.beginPath()
        ctx!.arc(sx, sy, 3.4, 0, Math.PI * 2)
        ctx!.fillStyle = pal.markerDot + `${fade})`
        ctx!.fill()
        ctx!.restore()

        // label chip
        const fs = isMobile ? 9 : 10.5
        ctx!.font = `800 ${fs}px ui-monospace, "SFMono-Regular", Consolas, monospace`
        const tw = ctx!.measureText(m.label).width
        const padX = 6
        const chipW = tw + padX * 2
        const chipH = fs + 9
        const lx = sx - chipW / 2
        const ly = sy - chipH - 12
        ctx!.fillStyle = pal.chipBg + `${0.85 * fade})`
        ctx!.fillRect(lx, ly, chipW, chipH)
        ctx!.strokeStyle = pal.chipBorder + `${0.5 * fade})`
        ctx!.lineWidth = 1
        ctx!.strokeRect(lx, ly, chipW, chipH)
        ctx!.beginPath()
        ctx!.moveTo(sx, ly + chipH)
        ctx!.lineTo(sx, sy - 4)
        ctx!.strokeStyle = pal.chipBorder + `${0.45 * fade})`
        ctx!.stroke()
        ctx!.fillStyle = pal.chipText + `${fade})`
        ctx!.fillText(m.label, lx + padX, ly + chipH - 7)
      }

    }

    function draw() {
      if (!running) return
      renderFrame()
      if (reduceMotion) return
      angle += 0.08
      raf = requestAnimationFrame(draw)
    }

    resize()
    renderFrame() // paint immediately so the globe is never a blank box

    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting === running) return
      running = entry.isIntersecting
      if (running) raf = requestAnimationFrame(draw)
      else cancelAnimationFrame(raf)
    }, { threshold: 0.02 })
    io.observe(canvas)

    const onResize = () => { resize(); renderFrame() }
    window.addEventListener("resize", onResize)

    return () => {
      cancelAnimationFrame(raf)
      io.disconnect()
      window.removeEventListener("resize", onResize)
    }
  }, [theme])

  return (
    <canvas
      ref={canvasRef}
      className={className}
      aria-hidden="true"
      style={{ width: "100%", height: "100%", display: "block" }}
    />
  )
}
