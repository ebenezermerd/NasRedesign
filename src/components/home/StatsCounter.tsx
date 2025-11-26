import React, { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { TrendingUp, Users, Globe, Package } from 'lucide-react'

const stats = [
  { number: 1188, suffix: '', label: 'MT Per Year', sublabel: 'Export Volume', icon: Package, color: 'from-[#D0AF39] to-[#B8962E]' },
  { number: 50, suffix: '+', label: 'Farmers', sublabel: 'Partner Network', icon: Users, color: 'from-emerald-400 to-emerald-600' },
  { number: 20, suffix: '+', label: 'Customers', sublabel: 'Worldwide Clients', icon: TrendingUp, color: 'from-blue-400 to-blue-600' },
  { number: 10, suffix: '', label: 'Export Destinations', sublabel: 'Global Reach', icon: Globe, color: 'from-purple-400 to-purple-600' },
]

function AnimatedCounter({ value, duration = 2 }: { value: number; duration?: number }) {
  const [displayValue, setDisplayValue] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  useEffect(() => {
    if (!isInView) return
    let startTime: number | undefined
    let animationFrame: number | undefined
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentValue = Math.floor(easeOutQuart * value)
      setDisplayValue(currentValue)
      if (progress < 1) animationFrame = requestAnimationFrame(animate)
    }
    animationFrame = requestAnimationFrame(animate)
    return () => {
      if (animationFrame) cancelAnimationFrame(animationFrame)
    }
  }, [isInView, value, duration])

  return <span ref={ref}>{displayValue.toLocaleString()}</span>
}

function StatCard({ stat, index }: any) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 50 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }} className="relative group">
      <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-[#D0AF39]/30 transition-all duration-500 overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
        <motion.div className="absolute inset-0 rounded-3xl border-2 border-[#D0AF39]/0 group-hover:border-[#D0AF39]/20" initial={false} whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }} />
        <motion.div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-6 shadow-lg`} whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }} transition={{ duration: 0.5 }}>
          <stat.icon className="w-7 h-7 text-white" />
        </motion.div>
        <div className="relative">
          <motion.div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#D0AF39] via-[#E5C76B] to-[#D0AF39] bg-clip-text text-transparent mb-2" style={{ backgroundSize: '200% 100%' }} animate={{ backgroundPosition: ['0% 0%', '100% 0%', '0% 0%'] }} transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}>
            <AnimatedCounter value={stat.number} duration={2.5} />
            {stat.suffix}
          </motion.div>
          <div className="absolute -inset-4 bg-[#D0AF39]/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
        </div>
        <p className="text-white font-semibold text-lg mb-1">{stat.label}</p>
        <p className="text-white/50 text-sm">{stat.sublabel}</p>
        <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.5 + index * 0.1 }} className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#D0AF39] to-transparent" />
      </div>
    </motion.div>
  )
}

export default function StatsCounter() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: '-100px' })
  return (
    <section ref={containerRef} className="relative py-32 bg-[#223059] overflow-hidden">
      <div className="absolute inset-0">
        <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6926636cc91b978ae8c2c397/2062a4502_close-up-of-fresh-green-tea-leaves-glowing-in-the-sunlight-symbolizing-growth-and-freshness-So9mv8NPH7W8mFzx4IXWhg.jpg" alt="" className="absolute inset-0 w-full h-full object-cover opacity-[0.08] mix-blend-luminosity" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#223059]/95 via-[#223059]/90 to-[#223059]/95" />
        <div className="absolute inset-0 opacity-50" />
        <motion.div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#D0AF39]/10 rounded-full blur-3xl" animate={{ x: [0, 50, 0], y: [0, -30, 0], scale: [1, 1.1, 1] }} transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }} />
        <motion.div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#D0AF39]/5 rounded-full blur-3xl" animate={{ x: [0, -30, 0], y: [0, 50, 0], scale: [1, 1.2, 1] }} transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }} />
      </div>
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-[#D0AF39] to-transparent" />
            <span className="text-[#D0AF39] text-sm font-semibold tracking-[0.2em] uppercase">Our Impact</span>
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-[#D0AF39] to-transparent" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Numbers That Speak</h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">Our commitment to excellence is reflected in every metric we achieve</p>
        </motion.div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} />
          ))}
        </div>
        <motion.div initial={{ scaleX: 0 }} animate={isInView ? { scaleX: 1 } : {}} transition={{ duration: 1.5, delay: 0.5 }} className="mt-16 h-px bg-gradient-to-r from-transparent via-[#D0AF39]/50 to-transparent" />
      </div>
    </section>
  )
}
