import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp, Sparkles } from 'lucide-react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const toggleVisibility = () => {
      const scrolled = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrolled / maxScroll) * 100;
      
      setScrollProgress(progress);
      setIsVisible(scrolled > 500);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-8 right-8 z-50"
        >
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="group relative"
          >
            {/* Outer Glow Ring */}
            <div className="absolute -inset-2 bg-gradient-to-r from-[#D0AF39] via-[#E5C76B] to-[#D0AF39] rounded-full opacity-20 blur-lg group-hover:opacity-40 transition-opacity duration-300" />
            
            {/* Progress Ring Background */}
            <svg className="w-16 h-16 -rotate-90 relative">
              {/* Background Circle */}
              <circle
                cx="32"
                cy="32"
                r="28"
                fill="none"
                stroke="rgba(34, 48, 89, 0.2)"
                strokeWidth="3"
              />
              {/* Progress Circle */}
              <circle
                cx="32"
                cy="32"
                r="28"
                fill="none"
                stroke="url(#gradient)"
                strokeWidth="3"
                strokeLinecap="round"
                strokeDasharray={`${2 * Math.PI * 28}`}
                strokeDashoffset={`${2 * Math.PI * 28 * (1 - scrollProgress / 100)}`}
                className="transition-all duration-150"
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#D0AF39" />
                  <stop offset="50%" stopColor="#E5C76B" />
                  <stop offset="100%" stopColor="#D0AF39" />
                </linearGradient>
              </defs>
            </svg>
            
            {/* Center Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#223059] to-[#1a2545] flex items-center justify-center shadow-xl shadow-[#223059]/30 group-hover:shadow-[#D0AF39]/30 transition-all duration-300 border border-[#D0AF39]/20 group-hover:border-[#D0AF39]/50">
                <motion.div
                  animate={{ y: [0, -2, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ArrowUp className="w-5 h-5 text-[#D0AF39]" />
                </motion.div>
              </div>
            </div>
            
            {/* Hover Tooltip */}
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              whileHover={{ opacity: 1, x: 0 }}
              className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-[#223059] text-white text-sm font-medium px-4 py-2 rounded-xl whitespace-nowrap shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
            >
              <div className="flex items-center gap-2">
                <Sparkles className="w-3 h-3 text-[#D0AF39]" />
                Back to Top
              </div>
              {/* Arrow */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 w-2 h-2 bg-[#223059] rotate-45" />
            </motion.div>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}