import React, { useState, useEffect, useCallback } from 'react';

const FireworksEffect = ({ 
  trigger = false,
  options = {},
  onComplete = () => {}
}) => {
  const [particles, setParticles] = useState([]);
  const [isActive, setIsActive] = useState(false);

  // Default options with customization
  const {
        particleCount = 50,
        particleSize = 6,
        colors = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF'],
        initialSpeed = -13, // Moderate upward speed
        speedVariation = 6, // Limited variation for consistent shape
        gravity = 0.4, // Stronger gravity to bring particles down
        friction = 0.99, // Slight friction
        fadeSpeed = 0.01, // Reasonable fade speed
        spread = 30 // Good spread width
  } = options;

  // Launch fireworks when triggered
  useEffect(() => {
    if (trigger && !isActive) {
      launchFireworks();
    }
  }, [trigger, isActive]);

  const launchFireworks = useCallback(() => {
    setIsActive(true);
    
    // Create new particles
    const newParticles = [];
    const centerX = 50; // Center horizontally
    
    for (let i = 0; i < particleCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = initialSpeed + (Math.random() - 0.5) * speedVariation;
      
      // Create a circular spread
      const radius = Math.random() * spread;
      const x = centerX + Math.cos(angle) * radius;
      
      newParticles.push({
        x: x,
        y: 95, // Start lower on screen (85% from top)
        vx: Math.cos(angle) * (Math.random() * 2 + 1),
        vy: speed,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: particleSize * (0.7 + Math.random() * 0.6),
        opacity: 1,
        id: Math.random()
      });
    }
    
    setParticles(newParticles);
  }, [particleCount, particleSize, colors, initialSpeed, speedVariation, spread]);

  // Animation loop
  useEffect(() => {
    if (particles.length === 0) return;

    const animationFrame = requestAnimationFrame(() => {
      const updatedParticles = [];
      let activeParticles = 0;

      for (const particle of particles) {
        // Apply physics
        let { x, y, vx, vy, opacity, size, color, id } = particle;
        
        // Update position
        x += vx * 0.5; // Slow down horizontal movement
        y += vy * 0.5; // Slow down vertical movement
        
        // Apply forces
        vy += gravity;
        vx *= friction;
        vy *= friction;
        
        // Fade out
        opacity -= fadeSpeed;
        
        // Check if particle is still visible and on screen
        const isOnScreen = y > 0 && y < 100 && x > 0 && x < 100;
        if (opacity > 0 && isOnScreen) {
          updatedParticles.push({ x, y, vx, vy, opacity, size, color, id });
          activeParticles++;
        }
      }
      
      setParticles(updatedParticles);
      
      // Check if animation is complete
      if (activeParticles === 0 && isActive) {
        setIsActive(false);
        onComplete();
      }
    });

    return () => cancelAnimationFrame(animationFrame);
  }, [particles, isActive, gravity, friction, fadeSpeed, onComplete]);

  if (particles.length === 0) return null;

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particles.map(particle => (
        <div
          key={particle.id}
          className="absolute"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: particle.color,
            opacity: particle.opacity,
            transform: 'translate(-50%, -50%)'
          }}
        />
      ))}
    </div>
  );
};

export default FireworksEffect;

// import React, { useRef, useEffect, useCallback, useState } from 'react';

// // Define a Particle class for managing each square's state
// class Particle {
//     constructor(x, y, size, color, vx, vy, gravity, friction, fadeSpeed, delayBeforeFadeFrames) {
//         this.x = x;
//         this.y = y;
//         this.size = size;
//         this.color = color;
//         this.vx = vx;
//         this.vy = vy;
//         this.gravity = gravity;
//         this.friction = friction;
//         this.alpha = 1; // Initial opacity
//         this.fadeSpeed = fadeSpeed;
//         this.timeAlive = 0; // Track how long the particle has been alive (in frames)
//         this.delayBeforeFadeFrames = delayBeforeFadeFrames; // Frames to wait before fading starts
//     }

//     // Update particle's position and opacity
//     update() {
//         this.vy += this.gravity; // Apply gravity (pulls down)
//         this.vx *= this.friction; // Apply friction (reduces horizontal speed)
//         this.vy *= this.friction; // Apply friction (reduces vertical speed)
//         this.x += this.vx;
//         this.y += this.vy;
//         this.timeAlive++; // Increment time alive

//         // Start fading only after the delay
//         if (this.timeAlive > this.delayBeforeFadeFrames) {
//             this.alpha -= this.fadeSpeed;
//         }
//     }

//     // Draw particle on the canvas
//     draw(ctx) {
//         if (this.alpha > 0) {
//             ctx.save();
//             ctx.fillStyle = this.color;
//             ctx.globalAlpha = Math.max(0, this.alpha); // Ensure alpha doesn't go below 0
//             ctx.fillRect(this.x - this.size / 2, this.y - this.size / 2, this.size, this.size);
//             ctx.restore();
//         }
//     }
// }

// // Default options for the fireworks effect
// const defaultOptions = {
//     particleCount: 120, // Number of squares
//     particleSize: 6,   // Size of each square (pixels)
//     colors: ['#FF6F61', '#6B5B95', '#88B04B', '#F7CAC9', '#92A8CD', '#F3EFE0', '#FFD700', '#FF4500', '#1E90FF'], // A wider palette of colors
//     initialSpeedUp: -5, // **Increased upward velocity (negative for up) for a noticeable launch**
//     initialSpeedSpread: 10, // **Increased horizontal velocity variation for a wider scatter**
//     gravity: 0.5,      // **Adjusted gravity strength for a more natural fall**
//     friction: 2.96,    // **Slightly reduced friction, particles travel further**
//     fadeSpeed: 0.0005,  // How fast particles fade out per frame (slower for longer visibility)
// };

// const FireworksEffect = ({ trigger, options = {} }) => {
//     const canvasRef = useRef(null);
//     const animationFrameId = useRef(null);
//     const particles = useRef([]);

//     // Merge default options with user-provided options
//     const finalOptions = { ...defaultOptions, ...options };

//     // Function to launch fireworks
//     const launchFireworks = useCallback(() => {
//         const canvas = canvasRef.current;
//         if (!canvas) return;

//         const ctx = canvas.getContext('2d');
//         const centerX = canvas.width / 2;
//         const startY = canvas.height * 0.6; // Start near the bottom

//         particles.current = []; // Clear existing particles for a fresh burst

//         for (let i = 0; i < finalOptions.particleCount; i++) {
//             // Random horizontal velocity for scattering
//             const vx = (Math.random() - 0.5) * 16 * finalOptions.initialSpeedSpread;
//             // Random initial upward velocity within a range
//             const vy = finalOptions.initialSpeedUp + (Math.random() * finalOptions.initialSpeedUp * 0.3); 
//             // Random color from the palette
//             const color = finalOptions.colors[Math.floor(Math.random() * finalOptions.colors.length)];

//             particles.current.push(
//                 new Particle(
//                     centerX, 
//                     startY, 
//                     finalOptions.particleSize, 
//                     color, 
//                     vx, 
//                     vy, 
//                     finalOptions.gravity, 
//                     finalOptions.friction, 
//                     finalOptions.fadeSpeed
//                 )
//             );
//         }
//     }, [finalOptions]);

//     // Animation loop
//     const animate = useCallback(() => {
//         const canvas = canvasRef.current;
//         if (!canvas) return;

//         const ctx = canvas.getContext('2d');
//         ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas

//         let allParticlesFaded = true;

//         for (let i = particles.current.length - 1; i >= 0; i--) {
//             const particle = particles.current[i];
//             particle.update();
//             particle.draw(ctx);

//             if (particle.alpha <= 0) {
//                 particles.current.splice(i, 1); // Remove faded particles
//             } else {
//                 allParticlesFaded = false;
//             }
//         }

//         if (!allParticlesFaded || particles.current.length > 0) { // Continue animation if particles exist or are still fading
//             animationFrameId.current = requestAnimationFrame(animate);
//         } else {
//             // All particles are gone, stop the animation loop
//             cancelAnimationFrame(animationFrameId.current);
//             animationFrameId.current = null;
//         }
//     }, [finalOptions]);

//     // Effect for handling component mount, unmount, and resize
//     useEffect(() => {
//         const canvas = canvasRef.current;
//         const parent = canvas?.parentElement;

//         const resizeCanvas = () => {
//             if (canvas && parent) {
//                 // Set canvas dimensions to match its parent element
//                 canvas.width = parent.clientWidth;
//                 canvas.height = parent.clientHeight;
//             }
//         };

//         // Initial resize
//         resizeCanvas();
//         // Add event listener for window resize to make the canvas responsive
//         window.addEventListener('resize', resizeCanvas);

//         // Cleanup on component unmount
//         return () => {
//             window.removeEventListener('resize', resizeCanvas);
//             cancelAnimationFrame(animationFrameId.current); // Stop any ongoing animation
//         };
//     }, []); // Empty dependency array ensures this runs only once on mount and unmount

//     // Effect to trigger fireworks when the 'trigger' prop changes
//     useEffect(() => {
//         if (trigger && animationFrameId.current === null) { // Only launch if trigger is true and no animation is currently running
//             launchFireworks();
//             animationFrameId.current = requestAnimationFrame(animate); // Start animation loop
//         } else if (!trigger && animationFrameId.current !== null) {
//             // If trigger becomes false, stop any running animation
//             cancelAnimationFrame(animationFrameId.current);
//             animationFrameId.current = null;
//             particles.current = []; // Clear particles immediately
//         }
//         // Cleanup function for this effect
//         return () => {
//             if (animationFrameId.current) {
//                 cancelAnimationFrame(animationFrameId.current);
//                 animationFrameId.current = null;
//             }
//         };
//     }, [trigger, launchFireworks, animate]); // Dependencies ensure this effect re-runs when trigger or animation functions change

//     return (
//         <canvas
//             ref={canvasRef}
//             // Absolute positioning to overlay content, pointer-events-none to allow clicks through
//             // z-index ensures it's on top of other content
//             className="absolute top-0 left-0 w-full h-full pointer-events-none z-50" 
//         />
//     );
// };

// export default FireworksEffect;
