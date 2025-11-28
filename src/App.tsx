import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
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
  Check
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";

// Import advanced components
import HeroCarousel from '@/components/home/HeroCarousel';
import ProductsShowcase from '@/components/home/ProductsShowcase';
import PartnersMarquee from '@/components/home/PartnersMarquee';
import StatsCounter from '@/components/home/StatsCounter';
import ScrollToTop from '@/components/home/ScrollToTop';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const } }
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
}

// Navbar Component
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll); 
  }, [])

  const navLinks = ['Home', 'Our Story', 'Our Products', 'Our Seices', 'Our Partners', 'Contact'];

  const scrollToSection = (id) => {
    const element = document.getElementById(id.toLowerCase().replace(/\s+/g, '-'));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

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
            <div className='relative w-36 h-14 px-2 flex items-center justify-center'>
              <div className="absolute inset-0 bg-gradient-to-br from-[#FFFFFF] to-[#FFFDD0] rounded-lg transform skew-x-[-20deg] p-4"></div>
              <div className="relative h-12 w-[240px]">
                <img src="/logo.png" alt="NAS Business Group Logo" className="absolute h-12 w-32 rounded-md " />
              </div>
              <div>
              </div>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => scrollToSection(link)}
                className={`text-md font-medium tracking-wide transition-all duration-300 hover:text-[#D0AF39] ${
                  scrolled ? 'text-[#223059]' : 'text-white'
                }`}
              >
                {link}
              </button>
            ))}
            <Button onClick={() => scrollToSection('Contact')} className="bg-gradient-to-r from-[#D0AF39] to-[#B8962E] hover:from-[#B8962E] hover:to-[#9A7D26] text-[#223059] font-semibold px-6 py-3 rounded-full shadow-lg shadow-[#D0AF39]/25">
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
          <Button onClick={() => scrollToSection('Contact')} className="w-full bg-gradient-to-r from-[#D0AF39] to-[#B8962E] text-[#223059] font-semibold py-3 rounded-full">
            Get a Quote
          </Button>
        </div>
      </motion.div>
    </motion.nav>

  );
};

// Hero Section is now imported from HeroCarousel component

// Story Section
const StorySection = () => {
  const features = [
    { icon: Award, title: 'Premium Quality', desc: 'Highest-grade Ethiopian products, certified to meet international standards.' },
    { icon: Leaf, title: 'Fresh Produce', desc: 'Sourced directly from trusted farmers under optimal conditions.' },
    { icon: Users, title: 'Skilled Farmers', desc: 'Partners committed to sustainability and ethical trade.' },
    { icon: Globe, title: 'Sustainable Agriculture', desc: 'Eco-friendly, certified organic production across Ethiopia.' },
  ];

  return (
    <section id="our-story" className="relative py-32 bg-white overflow-hidden">
      {/* Creative Background with Tea Leaves Image */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-2/3 h-full overflow-hidden">
          <img 
            src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6926636cc91b978ae8c2c397/2062a4502_close-up-of-fresh-green-tea-leaves-glowing-in-the-sunlight-symbolizing-growth-and-freshness-So9mv8NPH7W8mFzx4IXWhg.jpg"
            alt=""
            className="w-full h-full object-cover opacity-[0.08]"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/80 to-white"></div>
        </div>
      </div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#F8F6F0]/50 to-transparent"></div>
      <div className="absolute top-20 left-20 w-96 h-96 bg-[#D0AF39]/5 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="relative"
          >
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-full h-full bg-gradient-to-br from-[#D0AF39] to-[#B8962E] rounded-3xl"></div>
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6926636cc91b978ae8c2c397/e8ef67bc1_close-up-of-hands-holding-freshly-harvested-coffee-cherries-in-mexico-vibrant-colors-symbolize-a-fruitful-harvest-f9BgNHSHqfNEm3vrcWxEYA.jpg" 
                alt="Ethiopian Coffee Harvest"
                className="relative rounded-3xl w-full h-[500px] object-cover shadow-2xl"
              />
              
              {/* Floating Card */}
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

          {/* Content Side */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-gradient-to-r from-[#D0AF39] to-transparent"></div>
              <span className="text-[#D0AF39] text-sm font-semibold tracking-[0.2em] uppercase">Our Story</span>
            </motion.div>

            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-[#223059] mb-6 leading-tight">
              Premium Quality Grains, Pulses, and Oil Seeds
            </motion.h2>

            <motion.p variants={fadeInUp} className="text-gray-600 text-lg leading-relaxed mb-8">
              NaS Business Group PLC is a family-owned enterprise featuring three shareholders. 
              This dynamic and expanding company is dedicated to harnessing Ethiopia's abundant 
              agricultural potential. Our primary focus lies in the export of premium Ethiopian 
              commodities, including sesame seeds, grains, pulses, and high-quality coffee beans.
            </motion.p>

            <motion.div variants={fadeInUp} className="grid sm:grid-cols-2 gap-6">
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
  );
};

// Products Section is now imported from ProductsShowcase component

// Organic Farming CTA
const OrganicFarmingSection = () => {
  return (
    <section className="relative py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="relative rounded-3xl overflow-hidden"
        >
          <img 
            src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6926636cc91b978ae8c2c397/eedb2fedd_flat-lay-of-organic-flaxseeds-in-wooden-spoons-showcasing-natural-nutrition-and-texture-R12ZDgb8aweeyP_6Vxl1kw.jpg" 
            alt="Organic Seeds"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#223059]/95 via-[#223059]/85 to-[#223059]/75"></div>
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 p-10 md:p-16">
            <motion.div variants={fadeInUp}>
              <div className="inline-flex items-center gap-2 bg-[#D0AF39]/20 text-[#D0AF39] px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Leaf className="w-4 h-4" />
                Partnership Opportunity
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                Looking to do Organic Farming?
              </h2>
              <p className="text-white/80 leading-relaxed mb-8">
                NaS Business Group PLC welcomes international partners interested in developing 
                organic and sustainable farming ventures in Ethiopia — a country blessed with 
                fertile soils, diverse climates, and centuries-old agricultural traditions.
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
              
              <Button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-[#D0AF39] to-[#B8962E] hover:from-[#B8962E] hover:to-[#9A7D26] text-[#223059] font-semibold px-8 py-4 rounded-full shadow-xl shadow-[#D0AF39]/30"
              >
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Services Section
const ServicesSection = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  
  return (
    <section id="our-services" className="relative py-32 overflow-hidden">
      {/* Creative Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F8F6F0] via-white to-[#F8F6F0]" />
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#D0AF39]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#223059]/5 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center mb-20"
        >
          <motion.div variants={fadeInUp} className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-[#D0AF39] to-transparent"></div>
            <span className="text-[#D0AF39] text-sm font-semibold tracking-[0.2em] uppercase">Our Services</span>
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-[#D0AF39] to-transparent"></div>
          </motion.div>
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-6xl font-bold text-[#223059] mb-6">
            Premier Services <span className="bg-gradient-to-r from-[#D0AF39] via-[#E5C76B] to-[#D0AF39] bg-clip-text text-transparent">Worldwide</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-gray-600 text-lg max-w-2xl mx-auto">
            Connecting global markets with Ethiopia's finest agricultural products through 
            sustainable practices and unmatched quality.
          </motion.p>
        </motion.div>

        {/* Services Grid - Creative Design */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid lg:grid-cols-2 gap-8"
        >
          {/* Export Service - Premium Card */}
          <motion.div 
            variants={fadeInUp}
            onMouseEnter={() => setHoveredCard('export')}
            onMouseLeave={() => setHoveredCard(null)}
            className="group relative"
          >
            <div className="relative h-full rounded-[2rem] overflow-hidden">
              {/* Background Image */}
              <div className="absolute inset-0">
                <img 
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6926636cc91b978ae8c2c397/4b16d278b_drone-shot-of-a-loaded-container-ship-sailing-through-the-sea-near-naples-italy-pLI-beF3m29Ets_sY8sWaw.jpeg"
                  alt="Export Services"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#D0AF39]/95 via-[#D0AF39]/85 to-[#B8962E]/90 transition-opacity duration-500" />
              </div>
              
              {/* Decorative Circles */}
              <div className="absolute -top-20 -right-20 w-64 h-64 border-[40px] border-white/10 rounded-full transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute -bottom-16 -left-16 w-48 h-48 border-[30px] border-white/10 rounded-full transition-transform duration-500 group-hover:scale-110" />
              
              {/* Content */}
              <div className="relative z-10 p-10 md:p-12 h-full flex flex-col justify-between min-h-[420px]">
                <div>
                  {/* Icon */}
                  <div className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-8 border border-white/30 group-hover:scale-110 transition-transform duration-300">
                    <ArrowRight className="w-10 h-10 text-[#223059]" />
                  </div>
                  
                  <span className="inline-block text-[#223059]/70 text-sm font-semibold tracking-widest uppercase mb-3">
                    Global Reach
                  </span>
                  <h3 className="text-3xl md:text-4xl font-bold text-[#223059] mb-4">Export</h3>
                  <p className="text-[#223059]/80 text-lg leading-relaxed max-w-md">
                    Bridging the gap between global consumers and Ethiopia's finest agricultural 
                    exports. Premium quality products delivered worldwide.
                  </p>
                </div>
                
                <div className="flex items-center justify-between mt-8">
                  <div className="flex items-center gap-6">
                    <div>
                      <span className="text-3xl font-bold text-[#223059]">10+</span>
                      <span className="block text-sm text-[#223059]/60">Countries</span>
                    </div>
                    <div className="w-px h-12 bg-[#223059]/20" />
                    <div>
                      <span className="text-3xl font-bold text-[#223059]">1188</span>
                      <span className="block text-sm text-[#223059]/60">MT Yearly</span>
                    </div>
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="w-14 h-14 rounded-full bg-[#223059] flex items-center justify-center shadow-xl group-hover:bg-white transition-colors duration-300"
                  >
                    <ArrowRight className="w-6 h-6 text-white group-hover:text-[#223059] transition-colors" />
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Import Service - Premium Card */}
          <motion.div 
            variants={fadeInUp}
            onMouseEnter={() => setHoveredCard('import')}
            onMouseLeave={() => setHoveredCard(null)}
            className="group relative"
          >
            <div className="relative h-full rounded-[2rem] overflow-hidden">
              {/* Background Image */}
              <div className="absolute inset-0">
                <img 
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6926636cc91b978ae8c2c397/eedb2fedd_flat-lay-of-organic-flaxseeds-in-wooden-spoons-showcasing-natural-nutrition-and-texture-R12ZDgb8aweeyP_6Vxl1kw.jpg"
                  alt="Import Services"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#223059]/95 via-[#223059]/90 to-[#1a2545]/95 transition-opacity duration-500" />
              </div>
              
              {/* Decorative Circles */}
              <div className="absolute -top-20 -right-20 w-64 h-64 border-[40px] border-[#D0AF39]/10 rounded-full transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute -bottom-16 -left-16 w-48 h-48 border-[30px] border-[#D0AF39]/10 rounded-full transition-transform duration-500 group-hover:scale-110" />
              
              {/* Floating Glow */}
              <div className="absolute top-1/2 right-0 w-64 h-64 bg-[#D0AF39]/20 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Content */}
              <div className="relative z-10 p-10 md:p-12 h-full flex flex-col justify-between min-h-[420px]">
                <div>
                  {/* Icon */}
                  <div className="w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center mb-8 border border-white/20 group-hover:scale-110 group-hover:border-[#D0AF39]/50 transition-all duration-300">
                    <ArrowRight className="w-10 h-10 text-[#D0AF39] rotate-180" />
                  </div>
                  
                  <span className="inline-block text-[#D0AF39] text-sm font-semibold tracking-widest uppercase mb-3">
                    Quality Products
                  </span>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Import</h3>
                  <p className="text-white/70 text-lg leading-relaxed max-w-md">
                    We take pride in importing a diverse range of high-quality products to Ethiopia, 
                    meeting the needs of our valued customers with excellence.
                  </p>
                </div>
                
                <div className="flex items-center justify-between mt-8">
                  <div className="flex items-center gap-6">
                    <div>
                      <span className="text-3xl font-bold text-white">50+</span>
                      <span className="block text-sm text-white/50">Partners</span>
                    </div>
                    <div className="w-px h-12 bg-white/20" />
                    <div>
                      <span className="text-3xl font-bold text-white">100%</span>
                      <span className="block text-sm text-white/50">Quality</span>
                    </div>
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="w-14 h-14 rounded-full bg-gradient-to-br from-[#D0AF39] to-[#B8962E] flex items-center justify-center shadow-xl shadow-[#D0AF39]/30 group-hover:shadow-[#D0AF39]/50 transition-all duration-300"
                  >
                    <ArrowRight className="w-6 h-6 text-[#223059]" />
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Partners Section is now imported from PartnersMarquee component

// Stats Section is now imported from StatsCounter component

// Contact Section
const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
    privacy: false
  });
  const [focusedField, setFocusedField] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      lines: ['Ayat-Tafo Road, NAS Building', 'Office No: 101, Addis Ababa'],
      color: 'from-emerald-400 to-emerald-600'
    },
    {
      icon: Phone,
      title: 'Call Us',
      lines: ['+251 911 258479', '+251 911 817334'],
      color: 'from-blue-400 to-blue-600'
    },
    {
      icon: Mail,
      title: 'Email Us',
      lines: ['info@nas.et'],
      color: 'from-purple-400 to-purple-600'
    }
  ];

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      {/* Creative Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#223059] via-[#1a2545] to-[#0f1629]" />
        
        {/* Coffee Cherries Background Image */}
        <div className="absolute inset-0 opacity-[0.07]">
          <img 
            src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6926636cc91b978ae8c2c397/e8ef67bc1_close-up-of-hands-holding-freshly-harvested-coffee-cherries-in-mexico-vibrant-colors-symbolize-a-fruitful-harvest-f9BgNHSHqfNEm3vrcWxEYA.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Animated Gradient Orbs */}
        <motion.div
          className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#D0AF39]/10 rounded-full blur-[100px]"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 50, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[80px]"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(#D0AF39 1px, transparent 1px), linear-gradient(90deg, #D0AF39 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: "spring" }}
            className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 text-[#D0AF39] px-5 py-2.5 rounded-full text-sm font-semibold mb-6"
          >
            <Send className="w-4 h-4" />
            Let's Connect
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Get in <span className="bg-gradient-to-r from-[#D0AF39] via-[#E5C76B] to-[#D0AF39] bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Ready to explore Ethiopia's finest agricultural exports? We're here to help.
          </p>
        </motion.div>

        {/* Contact Cards Row */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="grid md:grid-cols-3 gap-6 mb-16"
        >
          {contactInfo.map((info, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-[#D0AF39]/30 transition-all duration-500"
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${info.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <info.icon className="w-7 h-7 text-white" />
              </div>
              <h4 className="text-white font-semibold text-lg mb-2">{info.title}</h4>
              {info.lines.map((line, i) => (
                <p key={i} className="text-white/60 text-sm">{line}</p>
              ))}
              
              {/* Hover Glow */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${info.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-5 gap-10">
          {/* Left Side - Large CTA Card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2"
          >
            <div className="relative h-full rounded-3xl overflow-hidden bg-gradient-to-br from-[#D0AF39] to-[#B8962E] p-1">
              <div className="relative h-full rounded-[22px] overflow-hidden bg-gradient-to-br from-[#D0AF39]/90 to-[#9A7D26] p-8 md:p-10 flex flex-col justify-between">
                {/* Decorative Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 right-0 w-64 h-64 border-[40px] border-white/20 rounded-full -translate-y-1/2 translate-x-1/2" />
                  <div className="absolute bottom-0 left-0 w-48 h-48 border-[30px] border-white/20 rounded-full translate-y-1/2 -translate-x-1/2" />
                </div>
                
                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6">
                    <Globe className="w-8 h-8 text-[#223059]" />
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold text-[#223059] mb-4">
                    Global Export Partner
                  </h3>
                  <p className="text-[#223059]/80 leading-relaxed mb-8">
                    With exports to over 10 countries and partnerships with 50+ farmers, 
                    we're your trusted gateway to Ethiopian agricultural excellence.
                  </p>
                </div>
                
                <div className="relative space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="flex -space-x-2">
                      {[1,2,3,4].map(i => (
                        <div key={i} className="w-10 h-10 rounded-full bg-[#223059]/20 border-2 border-[#D0AF39] flex items-center justify-center">
                          <Star className="w-4 h-4 text-[#223059]" fill="#223059" />
                        </div>
                      ))}
                    </div>
                    <div className="text-[#223059]">
                      <span className="font-bold">1188+ MT</span>
                      <span className="text-sm opacity-70"> Yearly Export</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3"
          >
            <div className="relative bg-white/[0.03] backdrop-blur-xl rounded-3xl p-8 md:p-10 border border-white/10">
              {/* Form Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#D0AF39]/20 via-transparent to-[#D0AF39]/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <h3 className="text-2xl font-bold text-white mb-2">Send a Message</h3>
              <p className="text-white/40 mb-8">We'll get back to you within 24 hours</p>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="relative">
                    <label className="block text-sm font-medium text-white/70 mb-2">Company Name</label>
                    <Input 
                      placeholder="Your company"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      className={`h-13 bg-white/5 border-white/10 text-white placeholder:text-white/30 rounded-lg focus:border-[#D0AF39] focus:ring-[#D0AF39]/20 transition-all duration-300 ${focusedField === 'name' ? 'bg-white/10 border-[#D0AF39]/50' : ''}`}
                    />
                  </div>
                  <div className="relative">
                    <label className="block text-sm font-medium text-white/70 mb-2">Phone</label>
                    <Input 
                      placeholder="+1 234 567 890"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      onFocus={() => setFocusedField('phone')}
                      onBlur={() => setFocusedField(null)}
                      className={`h-13 bg-white/5 border-white/10 text-white placeholder:text-white/30 rounded-lg focus:border-[#D0AF39] focus:ring-[#D0AF39]/20 transition-all duration-300 ${focusedField === 'phone' ? 'bg-white/10 border-[#D0AF39]/50' : ''}`}
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-white/70 mb-2">Email Address</label>
                  <Input 
                    type="email"
                    placeholder="you@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    className={`h-13 bg-white/5 border-white/10 text-white placeholder:text-white/30 rounded-lg focus:border-[#D0AF39] focus:ring-[#D0AF39]/20 transition-all duration-300 ${focusedField === 'email' ? 'bg-white/10 border-[#D0AF39]/50' : ''}`}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-white/70 mb-2">Your Message</label>
                  <Textarea 
                    placeholder="Tell us about your requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    className={`min-h-[130px] bg-white/5 border-white/10 text-white placeholder:text-white/30 rounded-lg focus:border-[#D0AF39] focus:ring-[#D0AF39]/20 transition-all duration-300 ${focusedField === 'message' ? 'bg-white/10 border-[#D0AF39]/50' : ''}`}
                  />
                </div>
                
                <div className="flex items-start gap-3">
                  <Checkbox 
                    id="privacy"
                    checked={formData.privacy}
                    onCheckedChange={(checked) => setFormData({...formData, privacy: checked})}
                    className="mt-1 border-white/30 data-[state=checked]:bg-[#D0AF39] data-[state=checked]:border-[#D0AF39] cursor-pointer relative z-10"
                  />
                  <label htmlFor="privacy" className="text-sm text-white/50 leading-relaxed cursor-pointer select-none">
                    I agree to the privacy policy and terms of service.
                  </label>
                </div>
                
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <Button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#D0AF39] to-[#B8962E] hover:from-[#E5C76B] hover:to-[#D0AF39] text-[#223059] font-bold h-14 rounded-xl shadow-xl shadow-[#D0AF39]/20 transition-all duration-300"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </motion.div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Footer
const Footer = () => {
  return (
    <footer className="bg-[#223059] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Logo & About */}
          <div className="md:col-span-2 ">
            <div className="flex items-center gap-3 mb-6">
            <div className='relative w-36 h-14 px-2 flex items-center justify-center'>
              <div className="absolute inset-0 bg-gradient-to-br from-[#FFFFFF] to-[#FFFDD0] rounded-lg transform skew-x-[-20deg] p-4"></div>
              <div className="relative h-12 w-[240px]">
                <img src="/logo.png" alt="NAS Business Group Logo" className="absolute h-12 w-32 rounded-md " />
              </div>
              <div>
              </div>
            </div>
            </div>
            <p className="text-white/60 leading-relaxed max-w-md text-[12px] sm:text-sm">
              Connecting the world with Ethiopia's finest agricultural exports. 
              Premium quality products, sustainable practices, global reach.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-2.5 sm:space-y-3">
              {[
                { id: 'our-story', name: 'Our Story', href: 'our-story' },
                { id: 'our-products', name: 'Our Products', href: 'our-products' },
                { id: 'our-services', name: 'Our Services', href: 'our-services' },
                { id: 'contact', name: 'Contact', href: 'contact' },
              ].map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.href}`}
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById(link.href)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="group flex items-center text-white/60 hover:text-[#D0AF39] text-[12px] sm:text-sm transition-colors duration-300"
                  >
                    <span className="w-0 h-px bg-[#D0AF39] group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-6">Contact</h4>
            <ul className="space-y-3 text-white/60 text-[12px] sm:text-sm">
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

        {/* Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} NAS Business Group PLC. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <button className="text-white/40 hover:text-[#D0AF39] text-sm transition-colors">Legal Notice</button>
            <button className="text-white/40 hover:text-[#D0AF39] text-sm transition-colors">Privacy Policy</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Main Page Component
export default function Home() {
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
      <ScrollToTop />
    </div>
  );
}