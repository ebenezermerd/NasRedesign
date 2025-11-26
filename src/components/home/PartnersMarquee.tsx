import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Handshake, Globe, Award, Star } from 'lucide-react'

const partners = [
  { name: 'NEXT LLC', logo: 'N', tagline: 'Strategic Partner', country: 'UAE', icon: Globe },
  { name: 'Green Mile Farm', logo: 'G', tagline: 'Agricultural Alliance', country: 'Kenya', icon: Award },
  { name: 'Ethiopian Coffee Exchange', logo: 'E', tagline: 'Trade Partner', country: 'Ethiopia', icon: Handshake },
  { name: 'Africa Trade Hub', logo: 'A', tagline: 'Export Network', country: 'South Africa', icon: Globe },
  { name: 'Global Agri Partners', logo: 'G', tagline: 'International Distributor', country: 'Netherlands', icon: Star },
  { name: 'Nordic Import Co.', logo: 'N', tagline: 'European Partner', country: 'Sweden', icon: Award },
  { name: 'Middle East Foods', logo: 'M', tagline: 'Regional Distributor', country: 'Saudi Arabia', icon: Handshake },
  { name: 'Asian Markets Ltd', logo: 'A', tagline: 'Asia Pacific Partner', country: 'Singapore', icon: Globe },
]

const PartnerCard = ({ partner, isPaused, onHover, onLeave, index }: any) => {
  const Icon = partner.icon
  return (
    <motion.div onMouseEnter={onHover} onMouseLeave={onLeave} className="flex-shrink-0 mx-4 group cursor-pointer" whileHover={{ scale: 1.08, zIndex: 50 }} transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}>
      <div className={`relative w-72 h-40 rounded-2xl overflow-hidden bg-gradient-to-br from-[#223059] via-[#2a3a6d] to-[#1a2545] border border-[#D0AF39]/20 shadow-xl shadow-black/20 transition-all duration-500 ${isPaused ? 'border-[#D0AF39]/60 shadow-2xl shadow-[#D0AF39]/20' : ''} group-hover:border-[#D0AF39]/60 group-hover:shadow-2xl group-hover:shadow-[#D0AF39]/30`}>
        <div className="absolute inset-0 bg-gradient-to-br from-[#D0AF39]/0 via-[#D0AF39]/5 to-[#D0AF39]/0 group-hover:from-[#D0AF39]/10 group-hover:via-[#D0AF39]/20 group-hover:to-[#D0AF39]/10 transition-all duration-700" />
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
        </div>
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-[#D0AF39]/30 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="relative h-full p-6 flex flex-col justify-between">
          <div className="flex items-start justify-between">
            <div className="relative">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#D0AF39] to-[#B8962E] flex items-center justify-center shadow-lg shadow-[#D0AF39]/30 group-hover:shadow-xl group-hover:shadow-[#D0AF39]/50 transition-all duration-500">
                <span className="text-[#223059] font-bold text-2xl">{partner.logo}</span>
              </div>
              <div className="absolute inset-0 rounded-xl border-2 border-[#D0AF39]/0 group-hover:border-[#D0AF39]/50 group-hover:scale-110 transition-all duration-500" />
            </div>
            <div className="w-10 h-10 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center group-hover:bg-[#D0AF39]/20 group-hover:border-[#D0AF39]/30 transition-all duration-500">
              <Icon className="w-5 h-5 text-[#D0AF39]/70 group-hover:text-[#D0AF39] transition-colors duration-300" />
            </div>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-1 group-hover:text-[#D0AF39] transition-colors duration-300">{partner.name}</h3>
            <div className="flex items-center justify-between">
              <span className="text-white/50 text-sm group-hover:text-white/70 transition-colors duration-300">{partner.tagline}</span>
              <span className="text-[#D0AF39]/60 text-xs font-medium px-2 py-1 rounded-full bg-[#D0AF39]/10 group-hover:bg-[#D0AF39]/20 transition-all duration-300">{partner.country}</span>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#D0AF39]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </motion.div>
  )
}

export default function PartnersMarquee() {
  const [isPaused, setIsPaused] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const allPartners = [...partners, ...partners, ...partners]

  return (
    <section id="our-partners" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#F8F6F0] via-white to-[#F8F6F0]" />
        <div className="absolute top-0 left-0 w-1/3 h-64 opacity-10">
          <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6926636cc91b978ae8c2c397/2062a4502_close-up-of-fresh-green-tea-leaves-glowing-in-the-sunlight-symbolizing-growth-and-freshness-So9mv8NPH7W8mFzx4IXWhg.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#F8F6F0] via-transparent to-[#F8F6F0]" />
        </div>
        <div className="absolute bottom-0 right-0 w-1/3 h-64 opacity-10">
          <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6926636cc91b978ae8c2c397/eedb2fedd_flat-lay-of-organic-flaxseeds-in-wooden-spoons-showcasing-natural-nutrition-and-texture-R12ZDgb8aweeyP_6Vxl1kw.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-l from-[#F8F6F0] via-transparent to-[#F8F6F0]" />
        </div>
      </div>
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-[#D0AF39]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-1/4 w-72 h-72 bg-[#223059]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 mb-16">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-[#D0AF39] to-transparent" />
            <Handshake className="w-5 h-5 text-[#D0AF39]" />
            <span className="text-[#D0AF39] text-sm font-semibold tracking-[0.2em] uppercase">Our Partners</span>
            <Handshake className="w-5 h-5 text-[#D0AF39]" />
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-[#D0AF39] to-transparent" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#223059] mb-6">
            Trusted <span className="bg-gradient-to-r from-[#D0AF39] via-[#E5C76B] to-[#D0AF39] bg-clip-text text-transparent">Collaborations</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            We collaborate with leading international and local companies, institutions, and organizations across the agricultural value chain — from farmers and cooperatives to financial, regulatory, and research partners.
          </p>
        </motion.div>
      </div>

      <div className="relative py-8">
        <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-[#F8F6F0] via-[#F8F6F0]/80 to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-[#F8F6F0] via-[#F8F6F0]/80 to-transparent z-20 pointer-events-none" />
        <motion.div className="flex" animate={{ x: isPaused ? undefined : [0, -80 * partners.length] }} transition={{ x: { duration: 40, repeat: Infinity, ease: 'linear' } }} style={{ animationPlayState: isPaused ? 'paused' : 'running' }}>
          {[...partners, ...partners, ...partners].map((partner, idx) => (
            <PartnerCard key={`${partner.name}-${idx}`} partner={partner} index={idx} isPaused={hoveredIndex === idx} onHover={() => { setIsPaused(true); setHoveredIndex(idx) }} onLeave={() => { setIsPaused(false); setHoveredIndex(null) }} />
          ))}
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} className="relative max-w-7xl mx-auto px-6 lg:px-8 mt-20">
        <div className="relative rounded-3xl overflow-hidden">
          <div className="absolute inset-0">
            <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6926636cc91b978ae8c2c397/4b16d278b_drone-shot-of-a-loaded-container-ship-sailing-through-the-sea-near-naples-italy-pLI-beF3m29Ets_sY8sWaw.jpeg" alt="Global Shipping" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#223059]/95 via-[#223059]/85 to-[#223059]/75" />
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#D0AF39]/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-[#D0AF39]/5 rounded-full blur-2xl" />
          <div className="relative z-10 p-10 md:p-14 text-center">
            <div className="inline-flex items-center gap-2 bg-[#D0AF39]/20 text-[#D0AF39] px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <span className="w-2 h-2 bg-[#D0AF39] rounded-full animate-pulse" />
              Partnership Opportunity
            </div>
            <h3 className="text-2xl md:text-4xl font-bold text-white mb-4">You want to work with us?</h3>
            <p className="text-white/70 mb-8 max-w-xl mx-auto">
              Join us in promoting Ethiopia's premium agricultural exports while championing sustainable practices. Together, we can make a meaningful impact on the global stage.
            </p>
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="bg-gradient-to-r from-[#D0AF39] to-[#B8962E] hover:from-[#B8962E] hover:to-[#9A7D26] text-[#223059] font-semibold px-8 py-4 rounded-full shadow-xl shadow-[#D0AF39]/30 inline-flex items-center gap-2 transition-all">
              Contact Us Now
              <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>→</motion.span>
            </motion.button>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
