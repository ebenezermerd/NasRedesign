import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, Leaf, Award, Package, ArrowRight, Check, Sparkles, Globe, Star, Handshake } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'

export const productsData = [
  {
    id: 1,
    name: 'Oilseeds',
    tagline: 'Premium Ethiopian Oilseeds',
    description:
      "Our premium sesame seeds and other oilseeds are carefully selected from Ethiopia's finest farms. Known for their exceptional quality, rich oil content, and distinct flavor profile.",
    image: '/products/oil-seeds.jpg',
    gallery: [
      '/products/oilseeds(1).jpg',
      '/products/oilseeds(2).jpg',
      '/products/oilseeds(3).jpg',
    ],
    features: ['High Oil Content', 'Non-GMO Certified', 'Export Grade Quality', 'Sustainable Farming'],
    varieties: ['White Sesame', 'Black Sesame', 'Niger Seed', 'Sunflower'],
    certifications: ['ISO 22000', 'HACCP', 'Organic Certified'],
    color: 'from-amber-500 to-orange-600',
  },
  {
    id: 2,
    name: 'Grains & Cereals',
    tagline: 'Nutritious Ethiopian Grains',
    description:
      'Ethiopia is the birthplace of ancient grains like teff and sorghum. Our grains are cultivated using traditional methods combined with modern quality standards.',
    image: '/products/grains-and-cereals.jpg',
    gallery: [
      '/products/grains(1).jpg',
      '/products/grains(2).jpg',
      '/products/grains(3).jpg',
    ],
    features: ['Ancient Heritage', 'Gluten-Free Options', 'High Nutritional Value', 'Organic Available'],
    varieties: ['Teff (White & Brown)', 'Sorghum', 'Barley', 'Wheat'],
    certifications: ['Organic EU', 'FDA Approved', 'Quality Assured'],
    color: 'from-yellow-500 to-amber-600',
  },
  {
    id: 3,
    name: 'Pulses',
    tagline: 'Protein-Rich Legumes',
    description:
      "Our diverse range of pulses includes chickpeas, lentils, and beans, all sourced from Ethiopia's highland regions known for producing the highest quality legumes.",
    image: '/products/pulses.jpeg',
    gallery: [
      '/products/pulse(1).jpg',
      '/products/pulse(2).jpg',
      '/products/pulse(3).jpg',
    ],
    features: ['High Protein', 'Fiber Rich', 'Essential Minerals', 'Long Shelf Life'],
    varieties: ['Chickpeas', 'Red Lentils', 'Green Lentils', 'Haricot Beans'],
    certifications: ['Export Quality', 'Phytosanitary Certified', 'Lab Tested'],
    color: 'from-green-500 to-emerald-600',
  },
  {
    id: 4,
    name: 'Coffee',
    tagline: 'Birthplace of Coffee',
    description:
      'Ethiopian coffee is renowned worldwide for its complex flavors and aromas. From the birthplace of coffee, we bring you single-origin beans from legendary regions.',
    image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800&q=80',
      'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800&q=80',
      'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800&q=80',
    ],
    features: ['Single Origin', 'Specialty Grade', 'Fair Trade', 'Unique Flavor Profiles'],
    varieties: ['Yirgacheffe', 'Sidamo', 'Harrar', 'Limu'],
    certifications: ['Specialty Coffee Association', 'Rainforest Alliance', 'Fair Trade'],
    color: 'from-amber-700 to-yellow-900',
  },
  {
    id: 5,
    name: 'Spices',
    tagline: 'Aromatic Ethiopian Spices',
    description:
      "Ethiopia's spices are integral to its culinary heritage. Our collection includes berbere, mitmita, and other aromatic spices that bring authentic Ethiopian flavors.",
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=800&q=80',
      'https://images.unsplash.com/photo-1506368249639-73a05d6f6488?w=800&q=80',
      'https://images.unsplash.com/photo-1532336414038-cf19250c5757?w=800&q=80',
    ],
    features: ['Hand Selected', 'Freshly Ground', 'Traditional Recipes', 'Premium Quality'],
    varieties: ['Berbere', 'Mitmita', 'Korerima', 'Black Cumin'],
    certifications: ['Food Grade', 'Hygiene Certified', 'Authentic Origin'],
    color: 'from-red-500 to-orange-600',
  },
  {
    id: 6,
    name: 'Fruits',
    tagline: 'Fresh Tropical Fruits',
    description:
      "Ethiopia's diverse climate produces exceptional tropical fruits. From sweet bananas to exotic avocados, our fruits are harvested at peak ripeness.",
    image: 'https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=800&q=80',
      'https://images.unsplash.com/photo-1546548970-71785318a17b?w=800&q=80',
      'https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?w=800&q=80',
    ],
    features: ['Farm Fresh', 'Naturally Ripened', 'No Chemicals', 'Quick Export'],
    varieties: ['Avocados', 'Bananas', 'Mangoes', 'Papayas'],
    certifications: ['Global GAP', 'Freshness Guaranteed', 'Cold Chain Certified'],
    color: 'from-green-400 to-lime-500',
  },
]

export default function ProductDialog({ isOpen, onClose, initialProduct }: { isOpen: boolean; onClose: () => void; initialProduct?: string | null }) {
  const getInitialIndex = () => {
    if (!initialProduct) return 0
    const index = productsData.findIndex((p) => p.name === initialProduct)
    return index !== -1 ? index : 0
  }

  const [currentProductIndex, setCurrentProductIndex] = useState(getInitialIndex)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const product = productsData[currentProductIndex] || productsData[0]

  const nextProduct = () => {
    setCurrentProductIndex((prev) => (prev + 1) % productsData.length)
    setCurrentImageIndex(0)
  }

  const prevProduct = () => {
    setCurrentProductIndex((prev) => (prev - 1 + productsData.length) % productsData.length)
    setCurrentImageIndex(0)
  }

  const nextImage = () => setCurrentImageIndex((prev) => (prev + 1) % product.gallery.length)
  const prevImage = () => setCurrentImageIndex((prev) => (prev - 1 + product.gallery.length) % product.gallery.length)

  useEffect(() => {
    if (initialProduct) {
      const index = productsData.findIndex((p) => p.name === initialProduct)
      if (index !== -1) {
        setCurrentProductIndex(index)
        setCurrentImageIndex(0)
      }
    }
  }, [initialProduct])

  if (!product) return null

  return (
    <Dialog open={isOpen} onOpenChange={(open) => (!open ? onClose() : undefined)}>
      <DialogContent className="max-w-5xl p-0 overflow-hidden bg-white border-0 rounded-3xl">
        <AnimatePresence mode="wait">
          <motion.div key={product.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="grid md:grid-cols-2">
            <div className="relative bg-[#223059] p-6 md:p-8">
              <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                <div className={`absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br ${product.color} rounded-full opacity-20 blur-3xl`} />
                <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#D0AF39]/20 rounded-full blur-3xl" />
              </div>
              <div className="relative">
                <motion.div key={currentImageIndex} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
                  <img src={product.gallery[currentImageIndex]} alt={product.name} className="w-full h-full object-cover" />
                  <div className={`absolute inset-0 bg-gradient-to-t ${product.color} opacity-20`} />
                </motion.div>
                <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-2">
                  <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} onClick={prevImage} className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/40 transition-all">
                    <ChevronLeft className="w-5 h-5" />
                  </motion.button>
                  <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} onClick={nextImage} className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/40 transition-all">
                    <ChevronRight className="w-5 h-5" />
                  </motion.button>
                </div>
                <div className="flex justify-center gap-2 mt-4">
                  {product.gallery.map((_, idx) => (
                    <button key={idx} onClick={() => setCurrentImageIndex(idx)} className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentImageIndex ? 'w-8 bg-[#D0AF39]' : 'bg-white/40 hover:bg-white/60'}`} />
                  ))}
                </div>
                <div className="flex gap-2 mt-4">
                  {product.gallery.map((img, idx) => (
                    <motion.button key={idx} whileHover={{ scale: 1.05 }} onClick={() => setCurrentImageIndex(idx)} className={`flex-1 aspect-video rounded-lg overflow-hidden border-2 transition-all ${idx === currentImageIndex ? 'border-[#D0AF39]' : 'border-transparent opacity-60 hover:opacity-100'}`}>
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </motion.button>
                  ))}
                </div>
              </div>
              <div className="flex justify-between items-center mt-6">
                <motion.button whileHover={{ x: -5 }} onClick={prevProduct} className="flex items-center gap-2 text-white/70 hover:text-white transition-colors">
                  <ChevronLeft className="w-5 h-5" />
                  <span className="text-sm">Previous</span>
                </motion.button>
                <div className="text-white/50 text-sm">{currentProductIndex + 1} / {productsData.length}</div>
                <motion.button whileHover={{ x: 5 }} onClick={nextProduct} className="flex items-center gap-2 text-white/70 hover:text-white transition-colors">
                  <span className="text-sm">Next</span>
                  <ChevronRight className="w-5 h-5" />
                </motion.button>
              </div>
            </div>
            <div className="p-6 md:p-8 max-h-[80vh] overflow-y-auto">
              <DialogHeader className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-4 h-4 text-[#D0AF39]" />
                  <span className="text-[#D0AF39] text-sm font-semibold tracking-wider uppercase">{product.tagline}</span>
                </div>
                <DialogTitle className="text-3xl md:text-4xl font-bold text-[#223059]">{product.name}</DialogTitle>
              </DialogHeader>
              <p className="text-gray-600 leading-relaxed mb-6">{product.description}</p>
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-[#223059] mb-3 flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#D0AF39]" />
                  Key Features
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  {product.features.map((feature, idx) => (
                    <motion.div key={idx} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.1 }} className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#D0AF39] to-[#B8962E] flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-sm text-gray-600">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-[#223059] mb-3 flex items-center gap-2">
                  <Package className="w-4 h-4 text-[#D0AF39]" />
                  Available Varieties
                </h4>
                <div className="flex flex-wrap gap-2">
                  {product.varieties.map((variety, idx) => (
                    <Badge key={idx} className="bg-[#223059]/5 text-[#223059] px-3 py-1">{variety}</Badge>
                  ))}
                </div>
              </div>
              <div className="mb-8">
                <h4 className="text-sm font-semibold text-[#223059] mb-3 flex items-center gap-2">
                  <Leaf className="w-4 h-4 text-[#D0AF39]" />
                  Certifications
                </h4>
                <div className="flex flex-wrap gap-2">
                  {product.certifications.map((cert, idx) => (
                    <Badge key={idx} className="bg-gradient-to-r from-[#D0AF39]/10 to-[#D0AF39]/5 text-[#D0AF39] border border-[#D0AF39]/20 px-3 py-1">{cert}</Badge>
                  ))}
                </div>
              </div>
              <div className="flex gap-3">
                <Button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="flex-1 bg-gradient-to-r from-[#D0AF39] to-[#B8962E] hover:from-[#B8962E] hover:to-[#9A7D26] text-[#223059] font-semibold rounded-xl h-12 shadow-lg shadow-[#D0AF39]/30">
                  Request Quote
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button variant="outline" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="border-2 border-[#223059]/20 text-[#223059] hover:bg-[#223059]/5 rounded-xl h-12">
                  <Globe className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  )
}
