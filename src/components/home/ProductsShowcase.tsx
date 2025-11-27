import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import ProductDialog from './ProductDialog'

const products = [
  { name: 'Oilseeds', image: '/products/oil-seeds.jpeg', desc: 'Premium sesame and other oilseeds', highlight: 'Best Seller' },
  { name: 'Grains & Cereals', image: '/products/grains-and-cereals.jpeg', desc: 'High-quality Ethiopian grains', highlight: 'Ancient Heritage' },
  { name: 'Pulses', image: '/products/pulses.jpeg', desc: 'Diverse range of nutritious pulses', highlight: 'Protein Rich' },
  { name: 'Coffee', image: '/products/coffee.jpeg', desc: 'World-renowned Ethiopian coffee', highlight: 'Premium Grade' },
  { name: 'Spices', image: '/products/spices.jpeg', desc: 'Aromatic and flavorful spices', highlight: 'Traditional' },
  { name: 'Fruits', image: '/products/fruits.jpeg', desc: 'Fresh tropical fruits', highlight: 'Farm Fresh' },
]

const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } } }
const itemVariants = { hidden: { opacity: 0, y: 30, scale: 0.95 }, visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: 'easeInOut' } } }

export default function ProductsShowcase() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null)

  const openProductDialog = (productName: string) => {
    setSelectedProduct(productName)
    setIsDialogOpen(true)
  }

  return (
    <section id="our-products" className="relative py-32 bg-[#223059] overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent opacity-5" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#D0AF39]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-[#D0AF39]/5 rounded-full blur-3xl" />
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ backgroundImage: `linear-gradient(#D0AF39 1px, transparent 1px), linear-gradient(90deg, #D0AF39 1px, transparent 1px)`, backgroundSize: '50px 50px' }} />
      </div>
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.8 }} className="text-center mb-16">
          <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, type: 'spring' }} className="inline-flex items-center gap-2 bg-[#D0AF39]/20 text-[#D0AF39] px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Sparkles className="w-4 h-4" />
            Premium Selection
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            What We <span className="bg-gradient-to-r from-[#D0AF39] via-[#E5C76B] to-[#D0AF39] bg-clip-text text-transparent">Offer</span>
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">Discover premium Ethiopian agricultural exports, including grains, pulses, coffee, and spices, all sourced sustainably and crafted for global markets.</p>
        </motion.div>
        <motion.div variants={containerVariants as any} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, idx) => (
            <motion.div key={idx} variants={itemVariants as any} whileHover={{ y: -10 }} onClick={() => openProductDialog(product.name)} className="group relative overflow-hidden rounded-3xl cursor-pointer">
              <div className="aspect-[4/3] overflow-hidden">
                <motion.img src={product.image} alt={product.name} className="w-full h-full object-cover" whileHover={{ scale: 1.1 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }} />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#223059] via-[#223059]/50 to-transparent" />
              <motion.div className="absolute inset-0 bg-[#D0AF39]/0 group-hover:bg-[#D0AF39]/20" transition={{ duration: 0.3 }} />
              <motion.div initial={{ x: -100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ delay: idx * 0.1 + 0.3 }} className="absolute top-4 left-4">
                <span className="bg-gradient-to-r from-[#D0AF39] to-[#B8962E] text-[#223059] text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">{product.highlight}</span>
              </motion.div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <motion.h3 className="text-2xl md:text-3xl font-bold text-white mb-2" initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: idx * 0.05 }}>
                  {product.name}
                </motion.h3>
                <p className="text-white/70 text-sm mb-4">{product.desc}</p>
                <motion.div className="flex items-center gap-2 text-[#D0AF39] font-medium text-sm" initial={{ opacity: 0, x: -20 }} whileHover={{ x: 5 }}>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">View Details</span>
                  <motion.div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                    <ArrowRight className="w-4 h-4" />
                  </motion.div>
                </motion.div>
              </div>
              <div className="absolute inset-0 rounded-3xl border-2 border-[#D0AF39]/0 group-hover:border-[#D0AF39]/50 transition-colors duration-300 pointer-events-none" />
              <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
                <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-bl from-[#D0AF39]/20 to-transparent transform rotate-45 translate-x-14 -translate-y-14 group-hover:from-[#D0AF39]/40 transition-colors duration-300" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <ProductDialog isOpen={isDialogOpen} onClose={() => setIsDialogOpen(false)} initialProduct={selectedProduct} />
    </section>
  )
}
