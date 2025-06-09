import React, { useState, useEffect } from "react";

// Mock components to replace react-router-dom and react-icons
const Link = ({ to, children, className, ...props }) => (
  <a href={to} className={className} {...props}>
    {children}
  </a>
);

const FaTooth = () => (
  <svg viewBox="0 0 448 512" className="w-5 h-5 fill-current">
    <path d="M443.98 96.25c-11.01-45.22-47.11-82.06-92.01-93.72C329.68-4.11 298.06 5.63 224 48.79 149.94 5.63 118.32-4.11 96.03 2.53 51.13 14.19 15.03 51.03 4.02 96.25c-9.32 38.26 5.5 78.13 38.89 104.28L224 377.98l181.09-177.45c33.39-26.15 48.21-66.02 38.89-104.28z"/>
  </svg>
);

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const checkIsMobile = () => setIsMobile(window.innerWidth < 768);
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.removeEventListener("resize", checkIsMobile);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section className="w-full min-h-screen relative overflow-hidden">
      {/* Ultra Premium Titanium Base */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at center, 
              #f8fafc 0%, 
              #e2e8f0 20%, 
              #cbd5e1 40%, 
              #94a3b8 60%, 
              #64748b 80%, 
              #475569 100%
            )
          `
        }}
      ></div>

      {/* Dynamic Titanium Reflection */}
      <div 
        className="absolute inset-0 opacity-60"
        style={{
          background: `
            radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
              rgba(255, 255, 255, 0.8) 0%, 
              rgba(241, 245, 249, 0.6) 20%, 
              rgba(203, 213, 225, 0.4) 40%, 
              transparent 70%
            )
          `,
          transition: 'all 0.3s ease-out'
        }}
      ></div>

      {/* Brushed Titanium Texture */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: `
            repeating-linear-gradient(
              45deg,
              transparent,
              transparent 1px,
              rgba(148, 163, 184, 0.1) 1px,
              rgba(148, 163, 184, 0.1) 2px
            ),
            repeating-linear-gradient(
              -45deg,
              transparent,
              transparent 1px,
              rgba(203, 213, 225, 0.1) 1px,
              rgba(203, 213, 225, 0.1) 2px
            )
          `
        }}
      ></div>

      {/* Premium Metal Reflections */}
      <div 
        className="absolute inset-0 opacity-50"
        style={{
          background: `
            linear-gradient(
              135deg,
              rgba(255, 255, 255, 0.7) 0%,
              transparent 25%,
              transparent 75%,
              rgba(148, 163, 184, 0.3) 100%
            ),
            linear-gradient(
              45deg,
              transparent 0%,
              rgba(241, 245, 249, 0.4) 25%,
              rgba(255, 255, 255, 0.6) 50%,
              rgba(241, 245, 249, 0.4) 75%,
              transparent 100%
            )
          `
        }}
      ></div>

      {/* Animated Titanium Waves */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background: `
            linear-gradient(
              90deg,
              transparent 0%,
              rgba(203, 213, 225, 0.2) 25%,
              rgba(255, 255, 255, 0.4) 50%,
              rgba(203, 213, 225, 0.2) 75%,
              transparent 100%
            )
          `,
          animation: 'wave1 8s ease-in-out infinite'
        }}
      ></div>

      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `
            linear-gradient(
              135deg,
              transparent 0%,
              rgba(241, 245, 249, 0.3) 30%,
              rgba(255, 255, 255, 0.5) 50%,
              rgba(241, 245, 249, 0.3) 70%,
              transparent 100%
            )
          `,
          animation: 'wave2 12s ease-in-out infinite reverse'
        }}
      ></div>

      {/* Elegant Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-20"
            style={{
              background: `
                radial-gradient(circle, 
                  rgba(255, 255, 255, 0.8) 0%, 
                  rgba(203, 213, 225, 0.4) 50%, 
                  transparent 100%
                )
              `,
              width: `${20 + Math.random() * 40}px`,
              height: `${20 + Math.random() * 40}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `elegantFloat ${6 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${i * 0.8}s`
            }}
          />
        ))}
      </div>

      {/* Premium Light Streaks */}
      <div 
        className="absolute inset-0 opacity-25"
        style={{
          background: `
            conic-gradient(
              from 45deg at 25% 25%,
              transparent 0deg,
              rgba(255, 255, 255, 0.3) 45deg,
              transparent 90deg
            ),
            conic-gradient(
              from 225deg at 75% 75%,
              transparent 0deg,
              rgba(241, 245, 249, 0.4) 45deg,
              transparent 90deg
            )
          `
        }}
      ></div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes wave1 {
          0%, 100% {
            transform: translateX(-100%) rotate(5deg);
            opacity: 0.2;
          }
          50% {
            transform: translateX(100vw) rotate(-5deg);
            opacity: 0.6;
          }
        }

        @keyframes wave2 {
          0%, 100% {
            transform: translateY(-100%) rotate(45deg) scale(1);
            opacity: 0.1;
          }
          50% {
            transform: translateY(100vh) rotate(45deg) scale(1.2);
            opacity: 0.4;
          }
        }

        @keyframes elegantFloat {
          0%, 100% {
            transform: translateY(0px) rotate(0deg) scale(1);
            opacity: 0.2;
          }
          33% {
            transform: translateY(-30px) rotate(120deg) scale(1.1);
            opacity: 0.4;
          }
          66% {
            transform: translateY(15px) rotate(240deg) scale(0.9);
            opacity: 0.3;
          }
        }

        @keyframes shimmerPulse {
          0%, 100% {
            opacity: 0.3;
            transform: translateX(-100%) skewX(-15deg);
          }
          50% {
            opacity: 0.8;
            transform: translateX(100vw) skewX(-15deg);
          }
        }
      `}</style>

      {/* Luxury Shimmer Overlay */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `
            linear-gradient(
              110deg,
              transparent 25%,
              rgba(255, 255, 255, 0.4) 45%,
              rgba(255, 255, 255, 0.8) 50%,
              rgba(255, 255, 255, 0.4) 55%,
              transparent 75%
            )
          `,
          animation: 'shimmerPulse 6s ease-in-out infinite'
        }}
      ></div>

      {/* Content Container with Glass Effect */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-12 pt-20 pb-12">
        {/* Top Navigation */}
        <nav className="flex justify-end mb-8">
          {!isMobile && (
            <div className="flex items-center gap-4">
              <Link
                to="/contact"
                className="px-5 py-2 border-2 border-[#3a3a3a] rounded-full text-sm hover:bg-[#3a3a3a] hover:text-white transition-all duration-300 shadow-lg hover:shadow-2xl backdrop-blur-md bg-white/20 border-opacity-50"
                style={{
                  backdropFilter: 'blur(12px)',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.2)',
                }}
              >
                Dental Emergency
              </Link>
              <div 
                className="w-10 h-10 bg-[#3a3a3a] text-white rounded-full flex items-center justify-center hover:bg-white hover:text-[#3a3a3a] border-2 border-[#3a3a3a] transition-all duration-300 backdrop-blur-md shadow-lg hover:shadow-2xl"
                style={{
                  backdropFilter: 'blur(12px)',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.1)',
                }}
              >
                <FaTooth />
              </div>
            </div>
          )}
        </nav>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row items-center">
          {/* Text Content */}
          <div className="w-full md:w-1/2 space-y-6">
            <p 
              className="text-lg text-[#3a3a3a] font-medium"
              style={{
                textShadow: '0 2px 8px rgba(255,255,255,0.8), 0 0 20px rgba(255,255,255,0.3)',
                filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.1))'
              }}
            >
              Bhopal's Premier Dental Clinic
            </p>

            <h1
              className={`font-bold ${
                isMobile ? "text-[14vw]" : "text-[5rem]"
              } leading-[0.9] tracking-tight`}
            >
              <span 
                className="block bg-gradient-to-r from-[#1e1b1e] via-[#4a5568] via-[#718096] to-[#3a3a3a] bg-clip-text text-transparent"
                style={{
                  textShadow: '0 4px 12px rgba(255,255,255,0.9), 0 2px 4px rgba(0,0,0,0.1)',
                  filter: 'drop-shadow(0 2px 8px rgba(255,255,255,0.6)) drop-shadow(0 1px 2px rgba(0,0,0,0.2))',
                  WebkitTextStroke: '0.5px rgba(255,255,255,0.1)'
                }}
              >
                Titanium Smiles
              </span>
              <span 
                className="block bg-gradient-to-r from-[#3a3a3a] via-[#4a5568] via-[#718096] to-[#666] bg-clip-text text-transparent"
                style={{
                  textShadow: '0 4px 12px rgba(255,255,255,0.9), 0 2px 4px rgba(0,0,0,0.1)',
                  filter: 'drop-shadow(0 2px 8px rgba(255,255,255,0.6)) drop-shadow(0 1px 2px rgba(0,0,0,0.2))',
                  WebkitTextStroke: '0.5px rgba(255,255,255,0.1)'
                }}
              >
                Dental Care
              </span>
            </h1>

            <div>
              <Link
                to="/contact"
                className="inline-block px-8 py-3 rounded-full text-white bg-gradient-to-r from-[#1e1b1e] to-[#3a3a3a] hover:from-[#3a3a3a] hover:to-[#1e1b1e] shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                style={{
                  boxShadow: '0 12px 40px rgba(0,0,0,0.2), 0 4px 12px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.1)',
                }}
              >
                Book Your Appointment
              </Link>
            </div>
          </div>

          {/* Image with Premium Frame */}
          <div 
            className="w-full md:w-1/2 mt-8 md:mt-0 relative"
            style={{
              filter: 'drop-shadow(0 20px 60px rgba(0,0,0,0.15))',
            }}
          >
            <div
              className="absolute inset-0 rounded-2xl opacity-30"
              style={{
                background: `
                  linear-gradient(135deg, 
                    rgba(255,255,255,0.4) 0%, 
                    rgba(203,213,225,0.2) 50%, 
                    rgba(148,163,184,0.1) 100%
                  )
                `,
                backdropFilter: 'blur(8px)',
                transform: 'scale(1.02)',
                zIndex: -1
              }}
            ></div>
            <img
              src="./assets/landing.png"
              alt="Dental care visualization"
              className="w-full h-auto max-h-[60vh] object-contain grayscale transition-all duration-500 relative z-10"
              style={{
                filter: 'drop-shadow(0 8px 32px rgba(58,58,58,0.3)) drop-shadow(0 0 40px rgba(255,255,255,0.1))',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}