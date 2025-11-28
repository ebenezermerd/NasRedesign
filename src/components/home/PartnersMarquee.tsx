import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Handshake, ArrowRight, Sparkles } from 'lucide-react';

const partners = [
  { name: 'Chamber of Commerce', image: '/partners/Chamber_of_Commerce_and_sector_associations.png', country: 'Ethiopia' },
  { name: 'K. Mikedem', image: '/partners/K. Mikedem_general_import_and_export_enterprise.png', country: 'Ethiopia' },
  { name: 'Zemen Bank', image: '/partners/Zemen-Bank.png', country: 'Ethiopia' },
  { name: 'Commercial Bank of Ethiopia', image: '/partners/commercial-bank-of-ethiopia.png', country: 'Ethiopia' },
  { name: 'ECX', image: '/partners/ecx.png', country: 'Ethiopia' },
  { name: 'Ministry of Trade', image: '/partners/minister_of_trade_and_regional_integration.png', country: 'Ethiopia' },
  { name: 'Yawit Business Group', image: '/partners/yawit_business_group.png', country: 'Ethiopia' },
];

const PartnerLogo = ({ partner, isHovered, onHover, onLeave }) => {
  return (
    <div
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className="flex-shrink-0 mx-2 md:mx-12 cursor-pointer group relative"
    >
      <div className="relative flex flex-col items-center justify-center h-16 w-24 md:h-32 md:w-48">
        {/* Glow Effect on Hover */}
        <div
          className={`absolute inset-0 bg-[#D0AF39]/10 rounded-xl blur-xl pointer-events-none transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
        />

        {/* Partner Image */}
        <img
          src={partner.image}
          alt={partner.name}
          className={`
            max-w-full max-h-full object-contain transition-all duration-300 ease-out filter
            ${isHovered
              ? 'scale-110 brightness-110 drop-shadow-[0_0_15px_rgba(208,175,57,0.3)]'
              : 'grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100'
            }
          `}
        />

        {/* Country Tag - Shows on Hover */}
        <span
          className={`absolute -bottom-8 uppercase text-center text-xs font-medium text-[#D0AF39] bg-[#D0AF39]/10 px-3 py-1 rounded-full transition-all duration-300 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`}
        >
          {partner.name}
        </span>
      </div>
    </div>
  );
};

export default function PartnersMarquee() {
  const [isPaused, setIsPaused] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [direction, setDirection] = useState('left');
  const containerRef = useRef(null);
  const marqueeRef = useRef(null);

  // Triple partners for seamless loop
  const allPartners = [...partners, ...partners, ...partners];

  const handleHover = (index, e) => {
    setIsPaused(true);
    setHoveredIndex(index);

    // Detect hover position for direction change
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const mouseX = e.clientX;
      const containerWidth = rect.width;
      const leftZone = rect.left + containerWidth * 0.25;
      const rightZone = rect.right - containerWidth * 0.25;

      if (mouseX < leftZone) {
        setDirection('right');
      } else if (mouseX > rightZone) {
        setDirection('left');
      }
    }
  };

  const handleLeave = () => {
    setIsPaused(false);
    setHoveredIndex(null);
  };

  return (
    <section id="our-partners" className="relative py-28 md:py-36 overflow-hidden">
      {/* Elegant Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#FAFAF8] to-white" />

      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, #223059 1px, transparent 1px)`,
        backgroundSize: '40px 40px'
      }} />

      {/* Decorative Blurs */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-[#D0AF39]/5 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-[#223059]/5 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />

      {/* Section Header */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 mb-16 md:mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <motion.div
              className="h-px w-16 bg-gradient-to-r from-transparent to-[#D0AF39]"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            />
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, type: "spring" }}
              className="w-12 h-12 rounded-full bg-gradient-to-br from-[#D0AF39] to-[#B8962E] flex items-center justify-center shadow-lg shadow-[#D0AF39]/30"
            >
              <Handshake className="w-6 h-6 text-white" />
            </motion.div>
            <motion.div
              className="h-px w-16 bg-gradient-to-l from-transparent to-[#D0AF39]"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            />
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#223059] mb-4">
            Our <span className="bg-gradient-to-r from-[#D0AF39] via-[#E5C76B] to-[#D0AF39] bg-clip-text text-transparent">Partners</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-5xl mx-auto">
            We collaborate with leading international and local companies, institutions, and organizations across the agricultural value chain — from farmers and cooperatives to financial, regulatory, and research partners.
          </p>
        </motion.div>
      </div>

      {/* Marquee Container */}
      <div ref={containerRef} className="relative py-12">
        {/* Enhanced Gradient Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-r from-white via-white/95 to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-l from-white via-white/95 to-transparent z-20 pointer-events-none" />

        {/* Marquee Wrapper: Add overflow-hidden and whitespace-nowrap */}
        <div className="overflow-hidden whitespace-nowrap">

          {/* CSS-based Infinite Marquee: Add a wrapper div here */}
          <div
            ref={marqueeRef}
            // Use a dynamic class name based on the direction prop
            className={`flex items-center ${direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right'}`}
            style={{
              animationPlayState: isPaused ? 'paused' : 'running',
              // Keep the 10s linear infinite here if you want to control speed outside of the @keyframes definition
              animation: `marquee-${direction} 15s linear infinite`,
            }}
          >
            {/* DUPLICATE YOUR CONTENT HERE FOR SEAMLESSNESS */}
            {allPartners.map((partner, idx) => (
              <PartnerLogo
                key={`original-${partner.name}-${idx}`}
                partner={partner}
                isHovered={hoveredIndex === idx}
                onHover={(e) => handleHover(idx, e)}
                onLeave={handleLeave}
              />
            ))}
            {/* Second set of partners */}
            {allPartners.map((partner, idx) => (
              <PartnerLogo
                key={`duplicate-${partner.name}-${idx}`} // Use a different key prefix
                partner={partner}
                isHovered={hoveredIndex === idx}
                onHover={(e) => handleHover(idx, e)}
                onLeave={handleLeave}
              />
            ))}
          </div>
        </div>

        {/* CSS Keyframes */}
        <style>{`
      /* Change the 33.333% to 100% because we are now duplicating content once */
      @keyframes marquee-left {
        0% { transform: translateX(0); }
        100% { transform: translateX(-100%); } /* Scrolls the full width of one set */
      }
      @keyframes marquee-right {
        /* To scroll right continuously, you reverse the keyframes */
        0% { transform: translateX(-100%); } 
        100% { transform: translateX(0); } /* Ends exactly where the original starts */
      }
    `}</style>
      </div>

      {/* Partnership CTA - Enhanced Design */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative max-w-7xl mx-auto px-6 lg:px-8 mt-20"
      >
        <div className="relative rounded-[2rem] overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src="/products/container.jpeg"
              alt="Global Shipping"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#223059]/98 via-[#223059]/90 to-[#223059]/80" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#223059]/50 to-transparent" />
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#D0AF39]/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#D0AF39]/5 rounded-full blur-[80px]" />

          {/* Floating Particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-[#D0AF39]/30 rounded-full"
                style={{
                  left: `${15 + i * 15}%`,
                  top: `${20 + (i % 3) * 25}%`,
                }}
                animate={{
                  y: [-10, 10, -10],
                  opacity: [0.3, 0.7, 0.3],
                }}
                transition={{
                  duration: 3 + i * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>

          <div className="relative z-10 p-10 md:p-16 lg:p-20">
            <div className="max-w-2xl">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-[#D0AF39] px-5 py-2.5 rounded-full text-sm font-semibold mb-6 border border-[#D0AF39]/20"
              >
                <Sparkles className="w-4 h-4" />
                Partnership Opportunity
              </motion.div>

              <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Ready to Partner <br />
                <span className="bg-gradient-to-r from-[#D0AF39] via-[#E5C76B] to-[#D0AF39] bg-clip-text text-transparent">
                  with Us?
                </span>
              </h3>
              <p className="text-white/60 text-lg mb-10 leading-relaxed max-w-xl">
                Join our growing network of trusted partners across the globe and unlock new opportunities
                in Ethiopia's thriving agricultural export market.
              </p>

              <div className="flex flex-wrap gap-4">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 25px 50px rgba(208,175,57,0.4)" }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-gradient-to-r from-[#D0AF39] to-[#B8962E] hover:from-[#E5C76B] hover:to-[#D0AF39] text-[#223059] font-bold px-10 py-5 rounded-xl shadow-xl shadow-[#D0AF39]/30 inline-flex items-center gap-3 transition-all duration-300"
                >
                  Become a Partner
                  <ArrowRight className="w-5 h-5" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => document.getElementById('our-story')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold px-8 py-5 rounded-xl border border-white/20 inline-flex items-center gap-2 transition-all duration-300"
                >
                  Learn More
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}