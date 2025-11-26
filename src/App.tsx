import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import {
  ChevronDown,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Leaf,
  Award,
  Users,
  Globe,
  Send,
  Menu,
  X,
  ChevronRight,
  Star,
  Check,
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Checkbox } from '@/components/ui/checkbox'

import HeroCarousel from '@/components/home/HeroCarousel'
import ProductsShowcase from '@/components/home/ProductsShowcase'
import PartnersMarquee from '@/components/home/PartnersMarquee'
import StatsCounter from '@/components/home/StatsCounter'

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
}

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = ['Home', 'Our Story', 'Our Products', 'Our Services', 'Our Partners', 'Contact']

  const scrollToSection = (label: string) => {
    const id = label.toLowerCase().replace(/\s+/g, '-')
    const element = document.getElementById(id)
    if (element) element.scrollIntoView({ behavior: 'smooth' })
    setMobileMenuOpen(false)
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-white/95 backdrop-blur-xl shadow-lg shadow-black/5' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <div className="relative w-12 h-12">
              <div className="absolute inset-0 bg-gradient-to-br from-[#D0AF39] to-[#B8962E] rounded-xl transform rotate-3" />
              <div className="absolute inset-0 bg-[#223059] rounded-xl flex items-center justify-center">
                <span className="text-[#D0AF39] font-bold text-xl">N</span>
              </div>
            </div>
            <div>
              <span className={`font-bold text-xl tracking-tight ${scrolled ? 'text-[#223059]' : 'text-white'}`}>NAS</span>
              <span className={`block text-xs tracking-widest ${scrolled ? 'text-[#D0AF39]' : 'text-[#D0AF39]'}`}>
                BUSINESS GROUP
              </span>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => scrollToSection(link)}
                className={`text-sm font-medium tracking-wide transition-all duration-300 hover:text-[#D0AF39] ${
                  scrolled ? 'text-[#223059]' : 'text-white'
                }`}
              >
                {link}
              </button>
            ))}
            <Button onClick={() => scrollToSection('Contact')} className="bg-gradient-to-r from-[#D0AF39] to-[#B8962E] hover:from-[#B8962E] hover:to-[#9A7D26] text-[#223059] font-semibold px-6 rounded-full shadow-lg shadow-[#D0AF39]/25">
              Get a Quote
            </Button>
          </div>

          <button className="lg:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? (
              <X className={scrolled ? 'text-[#223059]' : 'text-white'} size={24} />
            ) : (
              <Menu className={scrolled ? 'text-[#223059]' : 'text-white'} size={24} />
            )}
          </button>
        </div>
      </div>

      <motion.div
        initial={false}
        animate={{ height: mobileMenuOpen ? 'auto' : 0, opacity: mobileMenuOpen ? 1 : 0 }}
        className="lg:hidden overflow-hidden bg-white"
      >
        <div className="px-6 py-4 space-y-4">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => scrollToSection(link)}
              className="block w-full text-left py-2 text-[#223059] font-medium hover:text-[#D0AF39] transition-colors"
            >
              {link}
            </button>
          ))}
          <Button onClick={() => scrollToSection('Contact')} className="w-full bg-gradient-to-r from-[#D0AF39] to-[#B8962E] text-[#223059] font-semibold rounded-full">
            Get a Quote
          </Button>
        </div>
      </motion.div>
    </motion.nav>
  )
}

const StorySection: React.FC = () => {
  const features = [
    { icon: Award, title: 'Premium Quality', desc: 'Highest-grade Ethiopian products, certified to meet international standards.' },
    { icon: Leaf, title: 'Fresh Produce', desc: 'Sourced directly from trusted farmers under optimal conditions.' },
    { icon: Users, title: 'Skilled Farmers', desc: 'Partners committed to sustainability and ethical trade.' },
    { icon: Globe, title: 'Sustainable Agriculture', desc: 'Eco-friendly, certified organic production across Ethiopia.' },
  ]

  return (
    <section id="our-story" className="relative py-32 bg-white overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-2/3 h-full overflow-hidden">
          <img
            src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6926636cc91b978ae8c2c397/2062a4502_close-up-of-fresh-green-tea-leaves-glowing-in-the-sunlight-symbolizing-growth-and-freshness-So9mv8NPH7W8mFzx4IXWhg.jpg"
            alt=""
            className="w-full h-full object-cover opacity-[0.08]"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/80 to-white" />
        </div>
      </div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#F8F6F0]/50 to-transparent" />
      <div className="absolute top-20 left-20 w-96 h-96 bg-[#D0AF39]/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInUp as any}
            className="relative"
          >
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-full h-full bg-gradient-to-br from-[#D0AF39] to-[#B8962E] rounded-3xl" />
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6926636cc91b978ae8c2c397/e8ef67bc1_close-up-of-hands-holding-freshly-harvested-coffee-cherries-in-mexico-vibrant-colors-symbolize-a-fruitful-harvest-f9BgNHSHqfNEm3vrcWxEYA.jpg"
                alt="Ethiopian Coffee Harvest"
                className="relative rounded-3xl w-full h-[500px] object-cover shadow-2xl"
              />
              <div className="absolute -bottom-8 -right-8 bg-white rounded-2xl p-6 shadow-2xl shadow-black/10 max-w-xs">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#D0AF39] to-[#B8962E] rounded-xl flex items-center justify-center">
                    <Award className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-[#223059] text-lg">Family Owned</p>
                    <p className="text-sm text-gray-500">Three Generation Legacy</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={staggerContainer as any}>
            <motion.div variants={fadeInUp as any} className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-gradient-to-r from-[#D0AF39] to-transparent" />
              <span className="text-[#D0AF39] text-sm font-semibold tracking-[0.2em] uppercase">Our Story</span>
            </motion.div>
            <motion.h2 variants={fadeInUp as any} className="text-4xl md:text-5xl font-bold text-[#223059] mb-6 leading-tight">
              Premium Quality Grains, Pulses, and Oil Seeds
            </motion.h2>
            <motion.p variants={fadeInUp as any} className="text-gray-600 text-lg leading-relaxed mb-8">
              NaS Business Group PLC is a family-owned enterprise featuring three shareholders. This dynamic and expanding company is dedicated to harnessing Ethiopia's abundant agricultural potential. Our primary focus lies in the export of premium Ethiopian commodities, including sesame seeds, grains, pulses, and high-quality coffee beans.
            </motion.p>
            <motion.div variants={fadeInUp as any} className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, idx) => (
                <div key={idx} className="group flex gap-4 p-4 rounded-2xl hover:bg-[#F8F6F0] transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#D0AF39]/20 to-[#D0AF39]/10 rounded-xl flex items-center justify-center group-hover:from-[#D0AF39] group-hover:to-[#B8962E] transition-all duration-300">
                    <feature.icon className="w-6 h-6 text-[#D0AF39] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#223059] mb-1">{feature.title}</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

const OrganicFarmingSection: React.FC = () => {
  return (
    <section className="relative py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer as any}
          className="relative rounded-3xl overflow-hidden"
        >
          <img
            src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6926636cc91b978ae8c2c397/eedb2fedd_flat-lay-of-organic-flaxseeds-in-wooden-spoons-showcasing-natural-nutrition-and-texture-R12ZDgb8aweeyP_6Vxl1kw.jpg"
            alt="Organic Seeds"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#223059]/95 via-[#223059]/85 to-[#223059]/75" />

          <div className="relative z-10 grid lg:grid-cols-2 gap-12 p-10 md:p-16">
            <motion.div variants={fadeInUp as any}>
              <div className="inline-flex items-center gap-2 bg-[#D0AF39]/20 text-[#D0AF39] px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Leaf className="w-4 h-4" />
                Partnership Opportunity
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">Looking to do Organic Farming?</h2>
              <p className="text-white/80 leading-relaxed mb-8">
                NaS Business Group PLC welcomes international partners interested in developing organic and sustainable farming ventures in Ethiopia — a country blessed with fertile soils, diverse climates, and centuries-old agricultural traditions.
              </p>
              <div className="space-y-4 mb-8">
                {['Land development & seed supply', 'Technical support & export facilitation', 'EU, USDA, and JAS organic standards'].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-gradient-to-br from-[#D0AF39] to-[#B8962E] rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-[#223059]" />
                    </div>
                    <span className="text-white/90">{item}</span>
                  </div>
                ))}
              </div>
              <Button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="bg-gradient-to-r from-[#D0AF39] to-[#B8962E] hover:from-[#B8962E] hover:to-[#9A7D26] text-[#223059] font-semibold px-8 py-6 rounded-full shadow-xl shadow-[#D0AF39]/30">
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

const ServicesSection: React.FC = () => {
  return (
    <section id="our-services" className="relative py-32 bg-[#F8F6F0] overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute bottom-0 right-0 w-1/2 h-2/3 overflow-hidden">
          <img
            src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6926636cc91b978ae8c2c397/4b16d278b_drone-shot-of-a-loaded-container-ship-sailing-through-the-sea-near-naples-italy-pLI-beF3m29Ets_sY8sWaw.jpeg"
            alt=""
            className="w-full h-full object-cover opacity-[0.06]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#F8F6F0] via-[#F8F6F0]/90 to-[#F8F6F0]/70" />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#F8F6F0]" />
        </div>
      </div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#D0AF39]/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer as any}
          className="text-center mb-16"
        >
          <motion.div variants={fadeInUp as any} className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-[#D0AF39] to-transparent" />
            <span className="text-[#D0AF39] text-sm font-semibold tracking-[0.2em] uppercase">Our Services</span>
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-[#D0AF39] to-transparent" />
          </motion.div>
          <motion.h2 variants={fadeInUp as any} className="text-4xl md:text-5xl font-bold text-[#223059] mb-6">
            Premier Services Across the Globe
          </motion.h2>
          <motion.p variants={fadeInUp as any} className="text-gray-600 text-lg max-w-2xl mx-auto">
            We provide premium agricultural products, fostering global connections through sustainable practices, quality assurance, and collaboration in organic farming initiatives.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer as any}
          className="grid md:grid-cols-2 gap-8"
        >
          <motion.div variants={fadeInUp as any} className="group relative bg-white rounded-3xl p-8 md:p-10 shadow-xl shadow-black/5 hover:shadow-2xl hover:shadow-[#D0AF39]/10 transition-all duration-500 overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#D0AF39]/10 to-transparent rounded-bl-full" />
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-[#D0AF39] to-[#B8962E] rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-[#D0AF39]/30">
                <ArrowRight className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#223059] mb-4">Export</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Bridging the gap between global consumers and Ethiopia's finest agricultural exports, we proudly connect individuals around the world with the exceptional quality of Ethiopian produce.
              </p>
              <Button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="bg-[#223059] hover:bg-[#223059]/90 text-white font-semibold px-6 rounded-full group-hover:bg-gradient-to-r group-hover:from-[#D0AF39] group-hover:to-[#B8962E] group-hover:text-[#223059] transition-all duration-300">
                Get a Quote
                <ChevronRight className="ml-1 w-4 h-4" />
              </Button>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp as any} className="group relative bg-white rounded-3xl p-8 md:p-10 shadow-xl shadow-black/5 hover:shadow-2xl hover:shadow-[#D0AF39]/10 transition-all duration-500 overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#223059]/10 to-transparent rounded-bl-full" />
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-[#223059] to-[#1a2545] rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-[#223059]/30">
                <ArrowRight className="w-8 h-8 text-white rotate-180" />
              </div>
              <h3 className="text-2xl font-bold text-[#223059] mb-4">Import</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                We take pride in importing a diverse range of high-quality products to Ethiopia, ensuring that our offerings meet the needs and preferences of our valued customers with excellence.
              </p>
              <Button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="bg-[#223059] hover:bg-[#223059]/90 text-white font-semibold px-6 rounded-full group-hover:bg-gradient-to-r group-hover:from-[#D0AF39] group-hover:to-[#B8962E] group-hover:text-[#223059] transition-all duration-300">
                Learn More
                <ChevronRight className="ml-1 w-4 h-4" />
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '', privacy: false })
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(formData)
  }
  return (
    <section id="contact" className="relative py-32 bg-[#F8F6F0] overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D0AF39]/10 rounded-full blur-3xl" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={staggerContainer as any}>
            <motion.div variants={fadeInUp as any} className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-gradient-to-r from-[#D0AF39] to-transparent" />
              <span className="text-[#D0AF39] text-sm font-semibold tracking-[0.2em] uppercase">Contact</span>
            </motion.div>
            <motion.h2 variants={fadeInUp as any} className="text-4xl md:text-5xl font-bold text-[#223059] mb-6">
              Get in Touch
            </motion.h2>
            <motion.p variants={fadeInUp as any} className="text-gray-600 text-lg mb-10">
              Ready to explore Ethiopia's finest agricultural exports? Contact us today to discuss your requirements or partnership opportunities.
            </motion.p>
            <motion.div variants={fadeInUp as any} className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#D0AF39] to-[#B8962E] rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#223059] mb-1">Address</h4>
                  <p className="text-gray-600">Ayat-Tafo Road, NAS Building, Office No: 101, Addis Ababa</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#D0AF39] to-[#B8962E] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#223059] mb-1">Phone</h4>
                  <p className="text-gray-600">+251 911 258479</p>
                  <p className="text-gray-600">+251 911 817334</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#D0AF39] to-[#B8962E] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#223059] mb-1">Email</h4>
                  <p className="text-gray-600">info@nas.et</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={fadeInUp as any}>
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl shadow-black/5">
              <h3 className="text-2xl font-bold text-[#223059] mb-6">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-[#223059] mb-2">Company Name</label>
                    <Input placeholder="Your company name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="h-12 rounded-xl border-gray-200 focus:border-[#D0AF39] focus:ring-[#D0AF39]" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#223059] mb-2">Phone</label>
                    <Input placeholder="Your phone number" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="h-12 rounded-xl border-gray-200 focus:border-[#D0AF39] focus:ring-[#D0AF39]" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#223059] mb-2">Email</label>
                  <Input type="email" placeholder="Your email address" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="h-12 rounded-xl border-gray-200 focus:border-[#D0AF39] focus:ring-[#D0AF39]" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#223059] mb-2">Message</label>
                  <Textarea placeholder="Tell us about your requirements..." value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="min-h-[120px] rounded-xl border-gray-200 focus:border-[#D0AF39] focus:ring-[#D0AF39]" />
                </div>
                <div className="flex items-start gap-3">
                  <Checkbox id="privacy" checked={formData.privacy} onCheckedChange={(checked) => setFormData({ ...formData, privacy: !!checked })} className="mt-1 border-gray-300" />
                  <label htmlFor="privacy" className="text-sm text-gray-600 leading-relaxed">
                    I have read and understand the privacy policy.
                  </label>
                </div>
                <Button type="submit" className="w-full bg-gradient-to-r from-[#D0AF39] to-[#B8962E] hover:from-[#B8962E] hover:to-[#9A7D26] text-[#223059] font-semibold h-14 rounded-xl shadow-lg shadow-[#D0AF39]/30">
                  <Send className="w-5 h-5 mr-2" />
                  Submit Message
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#223059] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative w-12 h-12">
                <div className="absolute inset-0 bg-gradient-to-br from-[#D0AF39] to-[#B8962E] rounded-xl transform rotate-3" />
                <div className="absolute inset-0 bg-[#223059] border border-[#D0AF39]/30 rounded-xl flex items-center justify-center">
                  <span className="text-[#D0AF39] font-bold text-xl">N</span>
                </div>
              </div>
              <div>
                <span className="font-bold text-xl text-white tracking-tight">NAS</span>
                <span className="block text-xs text-[#D0AF39] tracking-widest">BUSINESS GROUP</span>
              </div>
            </div>
            <p className="text-white/60 leading-relaxed max-w-md">
              Connecting the world with Ethiopia's finest agricultural exports. Premium quality products, sustainable practices, global reach.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Our Story', 'Our Products', 'Our Services', 'Contact'].map((link) => (
                <li key={link}>
                  <button onClick={() => document.getElementById(link.toLowerCase().replace(/\s+/g, '-'))?.scrollIntoView({ behavior: 'smooth' })} className="text-white/60 hover:text-[#D0AF39] transition-colors">
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-6">Contact</h4>
            <ul className="space-y-3 text-white/60">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#D0AF39]" />
                +251 911 258479
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#D0AF39]" />
                info@nas.et
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#D0AF39] mt-1" />
                <span>Ayat-Tafo Road, NAS Building, Addis Ababa</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">© {new Date().getFullYear()} NAS Business Group PLC. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <button className="text-white/40 hover:text-[#D0AF39] text-sm transition-colors">Legal Notice</button>
            <button className="text-white/40 hover:text-[#D0AF39] text-sm transition-colors">Privacy Policy</button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="bg-white min-h-screen font-sans antialiased">
      <Navbar />
      <HeroCarousel />
      <StorySection />
      <ProductsShowcase />
      <OrganicFarmingSection />
      <ServicesSection />
      <PartnersMarquee />
      <StatsCounter />
      <ContactSection />
      <Footer />
    </div>
  )
}
