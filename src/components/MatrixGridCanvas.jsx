import React, { useEffect, useRef } from 'react';

/**
 * MatrixGridCanvas Component
 * Renders an animated interactive dot-matrix grid on an HTML5 canvas.
 * Features:
 * - Fluid undulating ambient wave
 * - Dynamic perspective tilt & ripple distortion driven by mouse movement
 * - High-DPI / Retina display crisp scaling
 * - Cyber-Emerald (#10b981) and Lime (#a3e635) accents on deep matte carbon (#0d1117)
 */
export const MatrixGridCanvas = ({ className = '' }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse tracking with smooth lerp interpolation
    const mouse = {
      x: width / 2,
      y: height / 2,
      targetX: width / 2,
      targetY: height / 2,
      isActive: false,
      radius: 200,
      intensity: 0,
    };

    // Handle high DPI displays
    const handleResize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
      mouse.isActive = true;
      mouse.intensity = 1.0;
    };

    const handleMouseLeave = () => {
      mouse.isActive = false;
    };

    const handleTouchMove = (e) => {
      if (e.touches.length > 0) {
        const rect = canvas.getBoundingClientRect();
        mouse.targetX = e.touches[0].clientX - rect.left;
        mouse.targetY = e.touches[0].clientY - rect.top;
        mouse.isActive = true;
        mouse.intensity = 1.0;
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    // Grid configuration
    const SPACING = 34; // distance between matrix dots
    let time = 0;

    const render = () => {
      time += 0.015;

      // Smooth mouse follow (lerp)
      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;

      if (!mouse.isActive && mouse.intensity > 0) {
        mouse.intensity -= 0.02;
        if (mouse.intensity < 0) mouse.intensity = 0;
      }

      // Clear with subtle carbon fade
      ctx.clearRect(0, 0, width, height);

      // Radial background vignette for rich cyber atmosphere
      const bgGlow = ctx.createRadialGradient(
        mouse.x,
        mouse.y,
        10,
        mouse.x,
        mouse.y,
        380
      );
      bgGlow.addColorStop(0, 'rgba(16, 185, 129, 0.08)');
      bgGlow.addColorStop(0.5, 'rgba(16, 185, 129, 0.02)');
      bgGlow.addColorStop(1, 'rgba(13, 17, 23, 0)');

      ctx.fillStyle = bgGlow;
      ctx.fillRect(0, 0, width, height);

      const cols = Math.ceil(width / SPACING) + 2;
      const rows = Math.ceil(height / SPACING) + 2;
      const startX = -SPACING;
      const startY = -SPACING;

      // Draw dots
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const baseX = startX + i * SPACING;
          const baseY = startY + j * SPACING;

          // Ambient idle wave (sine undulation)
          const ambientWave =
            Math.sin(baseX * 0.007 + time * 1.2) *
            Math.cos(baseY * 0.007 + time * 0.9);

          // Vector from cursor to point
          const dx = baseX - mouse.x;
          const dy = baseY - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          let offsetX = 0;
          let offsetY = 0;
          let dotRadius = 1.2;
          let alpha = 0.18 + (ambientWave + 1) * 0.08;
          let isAccent = false;

          // Mouse proximity ripple and perspective deflection
          if (dist < mouse.radius) {
            const factor = 1 - dist / mouse.radius; // 0 at edge, 1 at center
            const wave = Math.sin(dist * 0.05 - time * 4);
            const ripplePush = factor * wave * 7 * (0.4 + 0.6 * mouse.intensity);

            const angle = Math.atan2(dy, dx);
            offsetX = Math.cos(angle) * ripplePush;
            offsetY = Math.sin(angle) * ripplePush;

            // Enlarge dots near cursor
            dotRadius = 1.2 + factor * 2.2;
            alpha = Math.min(0.95, alpha + factor * 0.7);

            if (factor > 0.45) {
              isAccent = true;
            }
          }

          const finalX = baseX + offsetX;
          const finalY = baseY + offsetY;

          ctx.beginPath();
          ctx.arc(finalX, finalY, dotRadius, 0, Math.PI * 2);

          if (isAccent) {
            // Neon emerald transitioning to bright lime
            ctx.fillStyle = `rgba(163, 230, 53, ${alpha})`;
            ctx.shadowColor = '#10b981';
            ctx.shadowBlur = 6;
          } else {
            ctx.fillStyle = `rgba(16, 185, 129, ${alpha})`;
            ctx.shadowColor = 'transparent';
            ctx.shadowBlur = 0;
          }

          ctx.fill();
        }
      }

      // Reset shadow for next frame
      ctx.shadowBlur = 0;

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('touchmove', handleTouchMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none z-0 ${className}`}
      aria-hidden="true"
    />
  );
};

export default MatrixGridCanvas;

