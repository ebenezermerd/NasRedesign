import React, { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, ArrowRight, Star, Play, Pause } from 'lucide-react'
import { Button } from '@/components/ui/button'

const heroSlides = [
  {
    id: 1,
    tagline: 'Welcome to NAS Business Group',
    title: 'Premium Quality',
    highlight: 'Products',
    description:
      "Showcasing and promoting Ethiopia's finest agricultural exports to a global audience, highlighting the unique qualities and rich heritage of our products.",
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1920&q=80',
    stats: { customers: '20+', countries: '10' },
  },
  {
    id: 2,
    tagline: 'Excellence in Every Grain',
    title: 'Ethiopian',
    highlight: 'Coffee & Spices',
    description:
      'Experience the rich aroma and distinctive flavors of Ethiopian coffee beans and spices, cultivated with centuries-old traditions and modern sustainable practices.',
    image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=1920&q=80',
    stats: { farmers: '50+', quality: '100%' },
  },
  {
    id: 3,
    tagline: 'Sustainable Agriculture',
    title: 'Organic',
    highlight: 'Farming Solutions',
    description:
      'Partner with us for eco-friendly, certified organic production across Ethiopia. We combine natural advantages with modern practices for sustainable value chains.',
    image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=1920&q=80',
    stats: { organic: 'EU/USDA', certified: 'JAS' },
  },
  {
    id: 4,
    tagline: 'Global Export Network',
    title: 'Connecting',
    highlight: 'World Markets',
    description:
      "Bridging the gap between global consumers and Ethiopia's finest agricultural exports through our extensive network spanning multiple continents.",
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&q=80',
    stats: { exports: '1188 MT', yearly: 'Growing' },
  },
]

const slideVariants = {
  enter: (direction: number) => ({ x: direction > 0 ? 1000 : -1000, opacity: 0, scale: 0.95 }),
  center: { zIndex: 1, x: 0, opacity: 1, scale: 1 },
  exit: (direction: number) => ({ zIndex: 0, x: direction < 0 ? 1000 : -1000, opacity: 0, scale: 0.95 }),
}

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  }),
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
}

export default function HeroCarousel() {
  const [[page, direction], setPage] = useState<[number, number]>([0, 0])
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [progress, setProgress] = useState(0)

  const slideIndex = ((page % heroSlides.length) + heroSlides.length) % heroSlides.length
  const currentSlide = heroSlides[slideIndex]

  const paginate = useCallback(
    (newDirection: number) => {
      setPage([page + newDirection, newDirection])
      setProgress(0)
    },
    [page]
  )

  const goToSlide = (index: number) => {
    const newDirection = index > slideIndex ? 1 : -1
    setPage([index, newDirection])
    setProgress(0)
  }

  useEffect(() => {
    if (!isAutoPlaying) return
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          paginate(1)
          return 0
        }
        return prev + 0.5
      })
    }, 30)
    return () => clearInterval(progressInterval)
  }, [isAutoPlaying, paginate])

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-[#223059]">
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={page}
          custom={direction}
          variants={slideVariants as any}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <motion.img
            src={currentSlide.image}
            alt={currentSlide.title}
            className="w-full h-full object-cover"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 8 }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#223059]/95 via-[#223059]/80 to-[#223059]/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#223059]/90 via-transparent to-transparent" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32 w-full">
        <AnimatePresence mode="wait">
          <motion.div key={currentSlide.id} initial="hidden" animate="visible" exit="exit" className="max-w-3xl">
            <motion.div custom={0} variants={textVariants as any} className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-gradient-to-r from-[#D0AF39] to-transparent" />
              <span className="text-[#D0AF39] text-sm font-semibold tracking-[0.3em] uppercase">
                {currentSlide.tagline}
              </span>
            </motion.div>
            <motion.h1 custom={1} variants={textVariants as any} className="text-5xl md:text-7xl font-bold text-white leading-[1.1] mb-8">
              {currentSlide.title}
              <motion.span
                className="block mt-2 bg-gradient-to-r from-[#D0AF39] via-[#E5C76B] to-[#D0AF39] bg-clip-text text-transparent"
                initial={{ backgroundPosition: '0% 50%' }}
                animate={{ backgroundPosition: '100% 50%' }}
                transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }}
                style={{ backgroundSize: '200% 200%' }}
              >
                {currentSlide.highlight}
              </motion.span>
            </motion.h1>
            <motion.p custom={2} variants={textVariants as any} className="text-lg md:text-xl text-white/80 leading-relaxed mb-10 max-w-2xl">
              {currentSlide.description}
            </motion.p>
            <motion.div custom={3} variants={textVariants as any} className="flex flex-wrap gap-4">
              <Button onClick={() => document.getElementById('our-products')?.scrollIntoView({ behavior: 'smooth' })} className="bg-gradient-to-r from-[#D0AF39] to-[#B8962E] hover:from-[#B8962E] hover:to-[#9A7D26] text-[#223059] font-semibold px-8 py-6 text-base rounded-full shadow-xl shadow-[#D0AF39]/30 transition-all duration-300 hover:scale-105 group">
                Our Products
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" onClick={() => document.getElementById('our-story')?.scrollIntoView({ behavior: 'smooth' })} className="border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 font-semibold px-8 py-6 text-base rounded-full backdrop-blur-sm">
                Learn More
              </Button>
            </motion.div>
            <motion.div custom={4} variants={textVariants as any} className="mt-16 flex items-center gap-8 flex-wrap">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.8 + i * 0.1 }}
                      className="w-10 h-10 rounded-full bg-gradient-to-br from-[#D0AF39] to-[#B8962E] border-2 border-[#223059] flex items-center justify-center"
                    >
                      <Star className="w-4 h-4 text-[#223059]" />
                    </motion.div>
                  ))}
                </div>
                <div className="text-white/80 text-sm">
                  <span className="block font-bold text-white">{Object.values(currentSlide.stats)[0]}</span>
                  {(Object.keys(currentSlide.stats)[0] as string).replace(/([A-Z])/g, ' $1').trim()}
                </div>
              </div>
              <div className="h-8 w-px bg-white/20" />
              <div className="text-white/80 text-sm">
                <span className="block font-bold text-white">{Object.values(currentSlide.stats)[1]}</span>
                {(Object.keys(currentSlide.stats)[1] as string).replace(/([A-Z])/g, ' $1').trim()}
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        <div className="absolute bottom-32 right-8 lg:right-16 flex flex-col items-end gap-6">
          <div className="flex items-center gap-3">
            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} onClick={() => paginate(-1)} className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-[#D0AF39] hover:border-[#D0AF39] hover:text-[#223059] transition-all duration-300">
              <ChevronLeft className="w-5 h-5" />
            </motion.button>
            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} onClick={() => paginate(1)} className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-[#D0AF39] hover:border-[#D0AF39] hover:text-[#223059] transition-all duration-300">
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} onClick={() => setIsAutoPlaying(!isAutoPlaying)} className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-[#D0AF39] hover:border-[#D0AF39] hover:text-[#223059] transition-all duration-300">
            {isAutoPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </motion.button>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-3">
          {heroSlides.map((slide, index) => (
            <button key={slide.id} onClick={() => goToSlide(index)} className="relative group">
              <div className={`w-16 h-1 rounded-full overflow-hidden transition-all duration-300 ${index === slideIndex ? 'bg-white/30' : 'bg-white/10 hover:bg-white/20'}`}>
                {index === slideIndex && (
                  <motion.div className="h-full bg-gradient-to-r from-[#D0AF39] to-[#E5C76B] rounded-full" style={{ width: `${progress}%` }} />
                )}
              </div>
              <span className={`absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs font-medium transition-all duration-300 ${index === slideIndex ? 'text-[#D0AF39]' : 'text-white/40 group-hover:text-white/60'}`}>
                0{index + 1}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="absolute top-32 right-8 lg:right-16 text-white/60 text-sm">
        <span className="text-[#D0AF39] text-3xl font-bold">0{slideIndex + 1}</span>
        <span className="mx-2">/</span>
        <span>0{heroSlides.length}</span>
      </div>
    </section>
  )
}
