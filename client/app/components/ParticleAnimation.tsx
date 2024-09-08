'use client'

import React, { useEffect, useRef } from 'react';
import { createNoise3D } from 'simplex-noise';  // Import the 3D noise function

const ParticleAnimation = () => {
  const canvasContainerRef = useRef<HTMLDivElement>(null);
  const canvasRefA = useRef<HTMLCanvasElement>(null);
  const canvasRefB = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const particleCount = 180;
    const particlePropCount = 9;
    const particlePropsLength = particleCount * particlePropCount;
    const rangeY = 300;
    const baseTTL = 50;
    const rangeTTL = 150;
    const baseSpeed = 0.03;
    const rangeSpeed = 2;
    const baseRadius = 1;
    const rangeRadius = 3;
    const baseHue = 0;
    const rangeHue = 40;
    const noiseSteps = 8;
    const xOff = 0.00125;
    const yOff = 0.00125;
    const zOff = 0.0005;
    const backgroundColor = 'hsla(260,40%,5%,0)';

    let tick = 0;
    const noise3D = createNoise3D();  // Initialize 3D noise
    let particleProps: Float32Array;

    const canvasA = canvasRefA.current!;
    const canvasB = canvasRefB.current!;
    const ctxA = canvasA.getContext('2d')!;
    const ctxB = canvasB.getContext('2d')!;

    const center: [number, number] = [0, 0];

    function resize() {
      const { innerWidth, innerHeight } = window;
      canvasA.width = innerWidth;
      canvasA.height = innerHeight;
      canvasB.width = innerWidth;
      canvasB.height = innerHeight;
      center[0] = 0.5 * canvasA.width;
      center[1] = 0.5 * canvasA.height;
    }

    function initParticles() {
      tick = 0;
      particleProps = new Float32Array(particlePropsLength);
      for (let i = 0; i < particlePropsLength; i += particlePropCount) {
        initParticle(i);
      }
    }

    function initParticle(i: number) {
      const x = Math.random() * canvasA.width;
      const y = center[1] + (Math.random() * 2 - 1) * rangeY;
      const vx = 0;
      const vy = 0;
      const life = 0;
      const ttl = baseTTL + Math.random() * rangeTTL;
      const speed = baseSpeed + Math.random() * rangeSpeed;
      const radius = baseRadius + Math.random() * rangeRadius;
      const hue = baseHue + Math.random() * rangeHue;

      particleProps.set([x, y, vx, vy, life, ttl, speed, radius, hue], i);
    }

    function drawParticles() {
      for (let i = 0; i < particlePropsLength; i += particlePropCount) {
        updateParticle(i);
      }
    }

    function updateParticle(i: number) {
      const x = particleProps[i];
      const y = particleProps[i + 1];
      const n = noise3D(x * xOff, y * yOff, tick * zOff) * noiseSteps * Math.PI * 2;
      const vx = lerp(particleProps[i + 2], Math.cos(n), 0.5);
      const vy = lerp(particleProps[i + 3], Math.sin(n), 0.5);
      const life = particleProps[i + 4];
      const ttl = particleProps[i + 5];
      const speed = particleProps[i + 6];
      const radius = particleProps[i + 7];
      const hue = particleProps[i + 8];
      
      const x2 = x + vx * speed;
      const y2 = y + vy * speed;

      drawParticle(x, y, x2, y2, life, ttl, radius, hue);
      particleProps[i] = x2;
      particleProps[i + 1] = y2;
      particleProps[i + 2] = vx;
      particleProps[i + 3] = vy;
      particleProps[i + 4] = life + 1;

      if (checkBounds(x2, y2) || life > ttl) {
        initParticle(i);
      }
    }

    function drawParticle(
      x: number, y: number, x2: number, y2: number, 
      life: number, ttl: number, radius: number, hue: number
    ) {
      ctxA.save();
      ctxA.lineCap = 'round';
      ctxA.lineWidth = radius;
      ctxA.strokeStyle = `hsla(${hue},100%,60%,${fadeInOut(life, ttl)})`;
      ctxA.beginPath();
      ctxA.moveTo(x, y);
      ctxA.lineTo(x2, y2);
      ctxA.stroke();
      ctxA.closePath();
      ctxA.restore();
    }

    function checkBounds(x: number, y: number) {
      return x > canvasA.width || x < 0 || y > canvasA.height || y < 0;
    }

    function renderGlow() {
      ctxB.save();
      ctxB.filter = 'blur(8px) brightness(200%)';
      ctxB.globalCompositeOperation = 'lighter';
      ctxB.drawImage(canvasA, 0, 0);
      ctxB.restore();
    }

    function renderToScreen() {
      ctxB.save();
      ctxB.globalCompositeOperation = 'lighter';
      ctxB.drawImage(canvasA, 0, 0);
      ctxB.restore();
    }

    function draw() {
      tick++;
      ctxA.clearRect(0, 0, canvasA.width, canvasA.height);
      ctxB.fillStyle = backgroundColor;
      ctxB.fillRect(0, 0, canvasA.width, canvasA.height);

      drawParticles();
      renderGlow();
      renderToScreen();

      requestAnimationFrame(draw);
    }

    function fadeInOut(life: number, ttl: number) {
      return Math.sin((Math.PI * life) / ttl);
    }

    function lerp(a: number, b: number, n: number) {
      return (1 - n) * a + n * b;
    }

    window.addEventListener('resize', resize);
    resize();
    initParticles();
    draw();

    return () => window.removeEventListener('resize', resize);
  }, []);

  return (
    <div className="content--canvas" ref={canvasContainerRef}>
      <canvas ref={canvasRefA} />
      <canvas ref={canvasRefB} />
    </div>
  );
};

export default ParticleAnimation;
