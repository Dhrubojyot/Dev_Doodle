import React, { useEffect, useRef } from 'react';
import { Plus } from 'lucide-react';

// Canvas Animation Logic
class Node {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.vy = 0;
    this.vx = 0;
  }
}

class SineWave {
  constructor(options = {}) {
    this.phase = options.phase || 0;
    this.offset = options.offset || 0;
    this.frequency = options.frequency || 0.001;
    this.amplitude = options.amplitude || 1;
  }

  update() {
    this.phase += this.frequency;
    return this.offset + Math.sin(this.phase) * this.amplitude;
  }
}

class Line {
  constructor(options = {}) {
    this.spring = options.spring + 0.1 * Math.random() - 0.05;
    this.friction = 0.5 + 0.01 * Math.random() - 0.005;
    this.nodes = [];
    
    for (let i = 0; i < 50; i++) {
      const node = new Node();
      node.x = window.innerWidth / 2;
      node.y = window.innerHeight / 2;
      this.nodes.push(node);
    }
  }

  update(mousePos) {
    let spring = this.spring;
    let node = this.nodes[0];
    
    node.vx += (mousePos.x - node.x) * spring;
    node.vy += (mousePos.y - node.y) * spring;
    
    for (let i = 0; i < this.nodes.length; i++) {
      node = this.nodes[i];
      
      if (i > 0) {
        const prevNode = this.nodes[i - 1];
        node.vx += (prevNode.x - node.x) * spring;
        node.vy += (prevNode.y - node.y) * spring;
        node.vx += prevNode.vx * 0.025;
        node.vy += prevNode.vy * 0.025;
      }
      
      node.vx *= this.friction;
      node.vy *= this.friction;
      node.x += node.vx;
      node.y += node.vy;
      spring *= 0.99;
    }
  }

  draw(ctx) {
    if (this.nodes.length < 2) return;
    
    const firstNode = this.nodes[0];
    ctx.beginPath();
    ctx.moveTo(firstNode.x, firstNode.y);
    
    for (let i = 1; i < this.nodes.length - 2; i++) {
      const currentNode = this.nodes[i];
      const nextNode = this.nodes[i + 1];
      const xc = 0.5 * (currentNode.x + nextNode.x);
      const yc = 0.5 * (currentNode.y + nextNode.y);
      ctx.quadraticCurveTo(currentNode.x, currentNode.y, xc, yc);
    }
    
    const secondLastNode = this.nodes[this.nodes.length - 2];
    const lastNode = this.nodes[this.nodes.length - 1];
    ctx.quadraticCurveTo(secondLastNode.x, secondLastNode.y, lastNode.x, lastNode.y);
    ctx.stroke();
    ctx.closePath();
  }
}

// TypeWriter Component
const TypeWriter = ({ strings }) => {
  const [currentStringIndex, setCurrentStringIndex] = React.useState(0);
  const [currentText, setCurrentText] = React.useState('');
  const [isDeleting, setIsDeleting] = React.useState(false);
  const [speed, setSpeed] = React.useState(80);

  React.useEffect(() => {
    const handleType = () => {
      const currentString = strings[currentStringIndex];
      
      if (isDeleting) {
        setCurrentText(currentString.substring(0, currentText.length - 1));
        setSpeed(20);
      } else {
        setCurrentText(currentString.substring(0, currentText.length + 1));
        setSpeed(80);
      }

      if (!isDeleting && currentText === currentString) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentStringIndex((prev) => (prev + 1) % strings.length);
      }
    };

    const timer = setTimeout(handleType, speed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentStringIndex, strings, speed]);

  return (
    <span>
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

// Shine Border Component
const ShineBorder = ({ children, className = "", color = ["#FF007F", "#39FF14", "#00FFFF"] }) => {
  const colorString = Array.isArray(color) ? color.join(',') : color;
  
  return (
    <div className={`relative ${className}`}>
      <div 
        className="absolute inset-0 rounded-xl bg-gradient-to-r opacity-75 blur-sm animate-pulse"
        style={{
          background: `conic-gradient(from 0deg, ${colorString}, ${colorString})`,
          animation: 'spin 3s linear infinite'
        }}
      />
      <div className="relative bg-black rounded-xl">
        {children}
      </div>
      <style jsx>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

// Button Component
const Button = ({ children, variant = "default", className = "", ...props }) => {
  const baseClasses = "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";
  
  const variants = {
    default: "bg-white text-black hover:bg-gray-100",
    outline: "border border-gray-300 bg-transparent hover:bg-gray-50 text-white hover:text-black"
  };

  return (
    <button 
      className={`${baseClasses} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

// Main Hero Component
export default function Hero() {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const linesRef = useRef([]);
  const mousePos = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const sineWave = useRef(null);
  const isInitialized = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    
    // Initialize canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth - 20;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize sine wave for color animation
    sineWave.current = new SineWave({
      phase: Math.random() * 2 * Math.PI,
      amplitude: 85,
      frequency: 0.0015,
      offset: 285
    });

    // Initialize lines
    const initLines = () => {
      linesRef.current = [];
      for (let i = 0; i < 80; i++) {
        linesRef.current.push(new Line({ 
          spring: 0.45 + (i / 80) * 0.025 
        }));
      }
    };

    // Mouse move handler
    const handleMouseMove = (e) => {
      if (e.touches) {
        mousePos.current.x = e.touches[0].pageX;
        mousePos.current.y = e.touches[0].pageY;
      } else {
        mousePos.current.x = e.clientX;
        mousePos.current.y = e.clientY;
      }
      
      if (!isInitialized.current) {
        initLines();
        isInitialized.current = true;
        animate();
      }
    };

    // Touch handlers
    const handleTouchStart = (e) => {
      if (e.touches.length === 1) {
        mousePos.current.x = e.touches[0].pageX;
        mousePos.current.y = e.touches[0].pageY;
        if (!isInitialized.current) {
          initLines();
          isInitialized.current = true;
          animate();
        }
      }
    };

    // Animation loop
    const animate = () => {
      ctx.globalCompositeOperation = 'source-over';
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = 'lighter';
      
      const hue = Math.round(sineWave.current.update());
      ctx.strokeStyle = `hsla(${hue}, 100%, 50%, 0.025)`;
      ctx.lineWidth = 10;

      linesRef.current.forEach(line => {
        line.update(mousePos.current);
        line.draw(ctx);
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    // Event listeners
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('touchmove', handleMouseMove);
    document.addEventListener('touchstart', handleTouchStart);

    // Focus/blur handlers
    const handleFocus = () => {
      if (!animationRef.current && isInitialized.current) {
        animate();
      }
    };

    const handleBlur = () => {
      // Keep running on blur in this implementation
    };

    window.addEventListener('focus', handleFocus);
    window.addEventListener('blur', handleBlur);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('touchmove', handleMouseMove);
      document.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('focus', handleFocus);
      window.removeEventListener('blur', handleBlur);
      
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <main className="overflow-hidden relative min-h-screen bg-black text-white">
      <section id="home" className="relative">
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 max-md:hidden top-[400px] -z-10 h-[400px] w-full bg-transparent bg-[linear-gradient(to_right,#57534e_1px,transparent_1px),linear-gradient(to_bottom,#57534e_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-20 [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
        
        {/* Main Content */}
        <div className="flex flex-col items-center justify-center px-6 text-center relative z-10">
          {/* Announcement Badge */}
          <div className="mb-6 mt-10 sm:justify-center md:mb-4 md:mt-40">
            <div className="relative flex items-center rounded-full border border-gray-600 bg-gray-900/50 px-3 py-1 text-xs text-gray-400">
              Introducing Dev Doodle.
              <a
                href=""
                className="ml-1 flex items-center font-semibold text-gray-300 hover:text-[#39E079] transition-colors"
              >
                Explore
              </a>
            </div>
          </div>

          {/* Hero Content */}
          <div className="mx-auto max-w-5xl">
            <div className="relative mx-auto h-full bg-transparent border border-red-500/40 py-12 p-6 rounded-lg [mask-image:radial-gradient(800rem_96rem_at_center,white,transparent)]">
              {/* Corner Plus Icons */}
              <Plus
                strokeWidth={5}
                className="text-white absolute -left-5 -top-5 h-10 w-10"
              />
              <Plus
                strokeWidth={5}
                className="text-white absolute -bottom-5 -left-5 h-10 w-10"
              />
              <Plus
                strokeWidth={5}
                className="text-white absolute -right-5 -top-5 h-10 w-10"
              />
              <Plus
                strokeWidth={5}
                className="text-white absolute -bottom-5 -right-5 h-10 w-10"
              />

              {/* Main Heading */}
              <h1 className="text-center text-5xl font-semibold leading-none tracking-tight md:text-6xl lg:text-7xl xl:text-8xl">
                The Complete Platform for both{" "}
                <span style={{ color: "#39E079", fontWeight: "bold" }}>Code⚡Sketch.</span>
              </h1>

              {/* Status Indicator */}
              <div className="flex items-center mt-6 justify-center gap-1">
                <span className="relative flex h-3 w-3 items-center justify-center">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
                </span>
                <p className="text-xs text-white">Available Now</p>
              </div>
            </div>

            {/* Welcome Text */}
            <h2 className="mt-8 text-2xl md:text-3xl">
              Welcome to a creative playground! Meet{" "}
              <span style={{ color: "#39E079" }}>Dev Doodle</span>
            </h2>

            {/* Description with TypeWriter */}
            <p className="text-gray-400 py-4 text-lg max-w-3xl mx-auto">
            Dev Doodle is where code meets creativity. It’s a collaborative space for developers and designers to build, sketch, and innovate together. {" "}
            </p>
          </div>
        </div>

        {/* Canvas for Interactive Animation */}
        <canvas
          ref={canvasRef}
          className="pointer-events-none absolute inset-0 mx-auto"
          id="canvas"
        />

        {/* Background Gradient Image */}
        <div 
          className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 w-[1512px] h-[550px] bg-gradient-to-b from-purple-900/20 via-blue-900/10 to-transparent"
          style={{
            backgroundImage: 'radial-gradient(ellipse at center, rgba(139, 69, 200, 0.3) 0%, rgba(59, 130, 246, 0.2) 50%, transparent 100%)'
          }}
        />
      </section>
    </main>
  );
}