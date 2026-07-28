import { useEffect, useRef } from "react";

export default function NetworkCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let w, h, nodes = [], links = [];
    let frame = 0;
    let rafId;

    function generateGraph() {
      nodes = [];
      links = [];
      const cols = w > 900 ? 8 : 5;
      const rows = w > 900 ? 5 : 6;
      const cellW = w / cols, cellH = h / rows;

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          if (Math.random() < 0.62) {
            nodes.push({
              x: i * cellW + cellW / 2 + (Math.random() - 0.5) * cellW * 0.5,
              y: j * cellH + cellH / 2 + (Math.random() - 0.5) * cellH * 0.5,
              r: Math.random() * 1.4 + 1.2,
              phase: Math.random() * Math.PI * 2,
            });
          }
        }
      }

      const maxDist = Math.max(cellW, cellH) * 1.6;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x, dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < maxDist && Math.random() < 0.5) {
            links.push({ a: nodes[i], b: nodes[j], progress: 0, speed: 0.006 + Math.random() * 0.01, delay: Math.random() * 120 });
          }
        }
      }
    }

    function resize() {
      const hero = canvas.parentElement;
      w = canvas.width = hero.offsetWidth;
      h = canvas.height = hero.offsetHeight;
      generateGraph();
    }

    function draw() {
      frame++;
      ctx.clearRect(0, 0, w, h);

      links.forEach((l) => {
        if (frame < l.delay) return;
        if (l.progress < 1) l.progress += l.speed;
        const px = l.a.x + (l.b.x - l.a.x) * Math.min(l.progress, 1);
        const py = l.a.y + (l.b.y - l.a.y) * Math.min(l.progress, 1);
        ctx.beginPath();
        ctx.moveTo(l.a.x, l.a.y);
        ctx.lineTo(px, py);
        ctx.strokeStyle = "rgba(201,138,75,0.28)";
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      nodes.forEach((n) => {
        const pulse = (Math.sin(frame * 0.02 + n.phase) + 1) / 2;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r + pulse * 1.2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(201,138,75,${0.35 + pulse * 0.4})`;
        ctx.fill();
      });

      rafId = requestAnimationFrame(draw);
    }

    window.addEventListener("resize", resize);
    resize();
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-55" />;
}