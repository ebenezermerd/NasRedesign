import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
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

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
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
};

// Navbar Component
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Home', 'Our Story', 'Our Products', 'Our Services', 'Our Partners', 'Contact'];

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
        scrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-lg shadow-black/5' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="relative w-12 h-12">
              <div className="absolute inset-0 bg-gradient-to-br from-[#D0AF39] to-[#B8962E] rounded-xl transform rotate-3"></div>
              <div className="absolute inset-0 bg-[#223059] rounded-xl flex items-center justify-center">
                <span className="text-[#D0AF39] font-bold text-xl">N</span>
              </div>
            </div>
            <div>
              <span className={`font-bold text-xl tracking-tight ${scrolled ? 'text-[#223059]' : 'text-white'}`}>
                NAS
              </span>
              <span className={`block text-xs tracking-widest ${scrolled ? 'text-[#D0AF39]' : 'text-[#D0AF39]'}`}>
                BUSINESS GROUP
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
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
            <Button 
              onClick={() => scrollToSection('Contact')}
              className="bg-gradient-to-r from-[#D0AF39] to-[#B8962E] hover:from-[#B8962E] hover:to-[#9A7D26] text-[#223059] font-semibold px-6 rounded-full shadow-lg shadow-[#D0AF39]/25"
            >
              Get a Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className={scrolled ? 'text-[#223059]' : 'text-white'} size={24} />
            ) : (
              <Menu className={scrolled ? 'text-[#223059]' : 'text-white'} size={24} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
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
          <Button 
            onClick={() => scrollToSection('Contact')}
            className="w-full bg-gradient-to-r from-[#D0AF39] to-[#B8962E] text-[#223059] font-semibold rounded-full"
          >
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
                className="bg-gradient-to-r from-[#D0AF39] to-[#B8962E] hover:from-[#B8962E] hover:to-[#9A7D26] text-[#223059] font-semibold px-8 py-6 rounded-full shadow-xl shadow-[#D0AF39]/30"
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
  return (
    <section id="our-services" className="relative py-32 bg-[#F8F6F0] overflow-hidden">
      {/* Creative Background with Ship Image */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 right-0 w-1/2 h-2/3 overflow-hidden">
          <img 
            src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6926636cc91b978ae8c2c397/4b16d278b_drone-shot-of-a-loaded-container-ship-sailing-through-the-sea-near-naples-italy-pLI-beF3m29Ets_sY8sWaw.jpeg"
            alt=""
            className="w-full h-full object-cover opacity-[0.06]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#F8F6F0] via-[#F8F6F0]/90 to-[#F8F6F0]/70"></div>
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#F8F6F0]"></div>
        </div>
      </div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#D0AF39]/10 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.div variants={fadeInUp} className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-[#D0AF39] to-transparent"></div>
            <span className="text-[#D0AF39] text-sm font-semibold tracking-[0.2em] uppercase">Our Services</span>
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-[#D0AF39] to-transparent"></div>
          </motion.div>
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-[#223059] mb-6">
            Premier Services Across the Globe
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-gray-600 text-lg max-w-2xl mx-auto">
            We provide premium agricultural products, fostering global connections through 
            sustainable practices, quality assurance, and collaboration in organic farming initiatives.
          </motion.p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 gap-8"
        >
          {/* Export Service */}
          <motion.div 
            variants={fadeInUp}
            className="group relative bg-white rounded-3xl p-8 md:p-10 shadow-xl shadow-black/5 hover:shadow-2xl hover:shadow-[#D0AF39]/10 transition-all duration-500 overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#D0AF39]/10 to-transparent rounded-bl-full"></div>
            
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-[#D0AF39] to-[#B8962E] rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-[#D0AF39]/30">
                <ArrowRight className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-[#223059] mb-4">Export</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Bridging the gap between global consumers and Ethiopia's finest agricultural 
                exports, we proudly connect individuals around the world with the exceptional 
                quality of Ethiopian produce.
              </p>
              
              <Button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-[#223059] hover:bg-[#223059]/90 text-white font-semibold px-6 rounded-full group-hover:bg-gradient-to-r group-hover:from-[#D0AF39] group-hover:to-[#B8962E] group-hover:text-[#223059] transition-all duration-300"
              >
                Get a Quote
                <ChevronRight className="ml-1 w-4 h-4" />
              </Button>
            </div>
          </motion.div>

          {/* Import Service */}
          <motion.div 
            variants={fadeInUp}
            className="group relative bg-white rounded-3xl p-8 md:p-10 shadow-xl shadow-black/5 hover:shadow-2xl hover:shadow-[#D0AF39]/10 transition-all duration-500 overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#223059]/10 to-transparent rounded-bl-full"></div>
            
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-[#223059] to-[#1a2545] rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-[#223059]/30">
                <ArrowRight className="w-8 h-8 text-white rotate-180" />
              </div>
              
              <h3 className="text-2xl font-bold text-[#223059] mb-4">Import</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                We take pride in importing a diverse range of high-quality products to Ethiopia, 
                ensuring that our offerings meet the needs and preferences of our valued customers 
                with excellence.
              </p>
              
              <Button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-[#223059] hover:bg-[#223059]/90 text-white font-semibold px-6 rounded-full group-hover:bg-gradient-to-r group-hover:from-[#D0AF39] group-hover:to-[#B8962E] group-hover:text-[#223059] transition-all duration-300"
              >
                Learn More
                <ChevronRight className="ml-1 w-4 h-4" />
              </Button>
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <section id="contact" className="relative py-32 bg-[#F8F6F0] overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D0AF39]/10 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-gradient-to-r from-[#D0AF39] to-transparent"></div>
              <span className="text-[#D0AF39] text-sm font-semibold tracking-[0.2em] uppercase">Contact</span>
            </motion.div>
            
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-[#223059] mb-6">
              Get in Touch
            </motion.h2>
            
            <motion.p variants={fadeInUp} className="text-gray-600 text-lg mb-10">
              Ready to explore Ethiopia's finest agricultural exports? Contact us today to discuss 
              your requirements or partnership opportunities.
            </motion.p>

            <motion.div variants={fadeInUp} className="space-y-6">
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

          {/* Contact Form */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl shadow-black/5">
              <h3 className="text-2xl font-bold text-[#223059] mb-6">Send us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-[#223059] mb-2">Company Name</label>
                    <Input 
                      placeholder="Your company name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="h-12 rounded-xl border-gray-200 focus:border-[#D0AF39] focus:ring-[#D0AF39]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#223059] mb-2">Phone</label>
                    <Input 
                      placeholder="Your phone number"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="h-12 rounded-xl border-gray-200 focus:border-[#D0AF39] focus:ring-[#D0AF39]"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-[#223059] mb-2">Email</label>
                  <Input 
                    type="email"
                    placeholder="Your email address"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="h-12 rounded-xl border-gray-200 focus:border-[#D0AF39] focus:ring-[#D0AF39]"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-[#223059] mb-2">Message</label>
                  <Textarea 
                    placeholder="Tell us about your requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="min-h-[120px] rounded-xl border-gray-200 focus:border-[#D0AF39] focus:ring-[#D0AF39]"
                  />
                </div>
                
                <div className="flex items-start gap-3">
                  <Checkbox 
                    id="privacy"
                    checked={formData.privacy}
                    onCheckedChange={(checked) => setFormData({...formData, privacy: checked})}
                    className="mt-1 border-gray-300 data-[state=checked]:bg-[#D0AF39] data-[state=checked]:border-[#D0AF39]"
                  />
                  <label htmlFor="privacy" className="text-sm text-gray-600 leading-relaxed">
                    I have read and understand the privacy policy.
                  </label>
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#D0AF39] to-[#B8962E] hover:from-[#B8962E] hover:to-[#9A7D26] text-[#223059] font-semibold h-14 rounded-xl shadow-lg shadow-[#D0AF39]/30"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Submit Message
                </Button>
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
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative w-12 h-12">
                <div className="absolute inset-0 bg-gradient-to-br from-[#D0AF39] to-[#B8962E] rounded-xl transform rotate-3"></div>
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
              Connecting the world with Ethiopia's finest agricultural exports. 
              Premium quality products, sustainable practices, global reach.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Our Story', 'Our Products', 'Our Services', 'Contact'].map((link) => (
                <li key={link}>
                  <button 
                    onClick={() => document.getElementById(link.toLowerCase().replace(/\s+/g, '-'))?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-white/60 hover:text-[#D0AF39] transition-colors"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
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
    </div>
  );
}


import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight, Star, Play, Pause } from 'lucide-react';
import { Button } from "@/components/ui/button";

const heroSlides = [
  {
    id: 1,
    tagline: "Welcome to NAS Business Group",
    title: "Premium Quality",
    highlight: "Products",
    description: "Showcasing and promoting Ethiopia's finest agricultural exports to a global audience, highlighting the unique qualities and rich heritage of our products.",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1920&q=80",
    stats: { customers: "20+", countries: "10" }
  },
  {
    id: 2,
    tagline: "Excellence in Every Grain",
    title: "Ethiopian",
    highlight: "Coffee & Spices",
    description: "Experience the rich aroma and distinctive flavors of Ethiopian coffee beans and spices, cultivated with centuries-old traditions and modern sustainable practices.",
    image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=1920&q=80",
    stats: { farmers: "50+", quality: "100%" }
  },
  {
    id: 3,
    tagline: "Sustainable Agriculture",
    title: "Organic",
    highlight: "Farming Solutions",
    description: "Partner with us for eco-friendly, certified organic production across Ethiopia. We combine natural advantages with modern practices for sustainable value chains.",
    image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=1920&q=80",
    stats: { organic: "EU/USDA", certified: "JAS" }
  },
  {
    id: 4,
    tagline: "Global Export Network",
    title: "Connecting",
    highlight: "World Markets",
    description: "Bridging the gap between global consumers and Ethiopia's finest agricultural exports through our extensive network spanning multiple continents.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&q=80",
    stats: { exports: "1188 MT", yearly: "Growing" }
  }
];

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
    scale: 0.95
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    scale: 1
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
    scale: 0.95
  })
};

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  }),
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
};

export default function HeroCarousel() {
  const [[page, direction], setPage] = useState([0, 0]);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

  const slideIndex = ((page % heroSlides.length) + heroSlides.length) % heroSlides.length;
  const currentSlide = heroSlides[slideIndex];

  const paginate = useCallback((newDirection) => {
    setPage([page + newDirection, newDirection]);
    setProgress(0);
  }, [page]);

  const goToSlide = (index) => {
    const newDirection = index > slideIndex ? 1 : -1;
    setPage([index, newDirection]);
    setProgress(0);
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          paginate(1);
          return 0;
        }
        return prev + 0.5;
      });
    }, 30);

    return () => clearInterval(progressInterval);
  }, [isAutoPlaying, paginate]);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-[#223059]">
      {/* Background Images with Parallax */}
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={page}
          custom={direction}
          variants={slideVariants}
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
          <div className="absolute inset-0 bg-gradient-to-r from-[#223059]/95 via-[#223059]/80 to-[#223059]/60"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#223059]/90 via-transparent to-transparent"></div>
        </motion.div>
      </AnimatePresence>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-10 w-72 h-72 bg-[#D0AF39]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-[#D0AF39]/5 rounded-full blur-3xl"></div>
      
      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#D0AF39]/30 rounded-full"
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: window.innerHeight + 10 
            }}
            animate={{ 
              y: -10,
              transition: { 
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                delay: Math.random() * 5
              }
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32 w-full">
        <AnimatePresence mode="wait">
          <motion.div 
            key={currentSlide.id}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="max-w-3xl"
          >
            <motion.div 
              custom={0}
              variants={textVariants}
              className="flex items-center gap-3 mb-6"
            >
              <div className="h-px w-12 bg-gradient-to-r from-[#D0AF39] to-transparent"></div>
              <span className="text-[#D0AF39] text-sm font-semibold tracking-[0.3em] uppercase">
                {currentSlide.tagline}
              </span>
            </motion.div>

            <motion.h1 
              custom={1}
              variants={textVariants}
              className="text-5xl md:text-7xl font-bold text-white leading-[1.1] mb-8"
            >
              {currentSlide.title}
              <motion.span 
                className="block mt-2 bg-gradient-to-r from-[#D0AF39] via-[#E5C76B] to-[#D0AF39] bg-clip-text text-transparent"
                initial={{ backgroundPosition: "0% 50%" }}
                animate={{ backgroundPosition: "100% 50%" }}
                transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
                style={{ backgroundSize: "200% 200%" }}
              >
                {currentSlide.highlight}
              </motion.span>
            </motion.h1>

            <motion.p 
              custom={2}
              variants={textVariants}
              className="text-lg md:text-xl text-white/80 leading-relaxed mb-10 max-w-2xl"
            >
              {currentSlide.description}
            </motion.p>

            <motion.div custom={3} variants={textVariants} className="flex flex-wrap gap-4">
              <Button 
                onClick={() => document.getElementById('our-products')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-[#D0AF39] to-[#B8962E] hover:from-[#B8962E] hover:to-[#9A7D26] text-[#223059] font-semibold px-8 py-6 text-base rounded-full shadow-xl shadow-[#D0AF39]/30 transition-all duration-300 hover:scale-105 group"
              >
                Our Products
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline"
                onClick={() => document.getElementById('our-story')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 font-semibold px-8 py-6 text-base rounded-full backdrop-blur-sm"
              >
                Learn More
              </Button>
            </motion.div>

            {/* Dynamic Stats */}
            <motion.div 
              custom={4}
              variants={textVariants}
              className="mt-16 flex items-center gap-8 flex-wrap"
            >
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[1,2,3,4].map((i) => (
                    <motion.div 
                      key={i} 
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.8 + i * 0.1 }}
                      className="w-10 h-10 rounded-full bg-gradient-to-br from-[#D0AF39] to-[#B8962E] border-2 border-[#223059] flex items-center justify-center"
                    >
                      <Star className="w-4 h-4 text-[#223059]" fill="#223059" />
                    </motion.div>
                  ))}
                </div>
                <div className="text-white/80 text-sm">
                  <span className="block font-bold text-white">{Object.values(currentSlide.stats)[0]}</span>
                  {Object.keys(currentSlide.stats)[0].replace(/([A-Z])/g, ' $1').trim()}
                </div>
              </div>
              <div className="h-8 w-px bg-white/20"></div>
              <div className="text-white/80 text-sm">
                <span className="block font-bold text-white">{Object.values(currentSlide.stats)[1]}</span>
                {Object.keys(currentSlide.stats)[1].replace(/([A-Z])/g, ' $1').trim()}
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Slide Controls */}
        <div className="absolute bottom-32 right-8 lg:right-16 flex flex-col items-end gap-6">
          {/* Navigation Arrows */}
          <div className="flex items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => paginate(-1)}
              className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-[#D0AF39] hover:border-[#D0AF39] hover:text-[#223059] transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => paginate(1)}
              className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-[#D0AF39] hover:border-[#D0AF39] hover:text-[#223059] transition-all duration-300"
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>

          {/* Play/Pause */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-[#D0AF39] hover:border-[#D0AF39] hover:text-[#223059] transition-all duration-300"
          >
            {isAutoPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </motion.button>
        </div>

        {/* Slide Indicators with Progress */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-3">
          {heroSlides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => goToSlide(index)}
              className="relative group"
            >
              <div className={`w-16 h-1 rounded-full overflow-hidden transition-all duration-300 ${
                index === slideIndex ? 'bg-white/30' : 'bg-white/10 hover:bg-white/20'
              }`}>
                {index === slideIndex && (
                  <motion.div 
                    className="h-full bg-gradient-to-r from-[#D0AF39] to-[#E5C76B] rounded-full"
                    style={{ width: `${progress}%` }}
                  />
                )}
              </div>
              <span className={`absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs font-medium transition-all duration-300 ${
                index === slideIndex ? 'text-[#D0AF39]' : 'text-white/40 group-hover:text-white/60'
              }`}>
                0{index + 1}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Slide Counter */}
      <div className="absolute top-32 right-8 lg:right-16 text-white/60 text-sm">
        <span className="text-[#D0AF39] text-3xl font-bold">0{slideIndex + 1}</span>
        <span className="mx-2">/</span>
        <span>0{heroSlides.length}</span>
      </div>
    </section>
  );
}


import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Leaf, 
  Award, 
  Globe, 
  Package,
  ArrowRight,
  Check,
  Sparkles
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const productsData = [
  {
    id: 1,
    name: 'Oilseeds',
    tagline: 'Premium Ethiopian Oilseeds',
    description: 'Our premium sesame seeds and other oilseeds are carefully selected from Ethiopia\'s finest farms. Known for their exceptional quality, rich oil content, and distinct flavor profile.',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
      'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?w=800&q=80'
    ],
    features: ['High Oil Content', 'Non-GMO Certified', 'Export Grade Quality', 'Sustainable Farming'],
    varieties: ['White Sesame', 'Black Sesame', 'Niger Seed', 'Sunflower'],
    certifications: ['ISO 22000', 'HACCP', 'Organic Certified'],
    color: 'from-amber-500 to-orange-600'
  },
  {
    id: 2,
    name: 'Grains & Cereals',
    tagline: 'Nutritious Ethiopian Grains',
    description: 'Ethiopia is the birthplace of ancient grains like teff and sorghum. Our grains are cultivated using traditional methods combined with modern quality standards.',
    image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=800&q=80',
      'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=800&q=80',
      'https://images.unsplash.com/photo-1547050605-2f268cd5baf0?w=800&q=80'
    ],
    features: ['Ancient Heritage', 'Gluten-Free Options', 'High Nutritional Value', 'Organic Available'],
    varieties: ['Teff (White & Brown)', 'Sorghum', 'Barley', 'Wheat'],
    certifications: ['Organic EU', 'FDA Approved', 'Quality Assured'],
    color: 'from-yellow-500 to-amber-600'
  },
  {
    id: 3,
    name: 'Pulses',
    tagline: 'Protein-Rich Legumes',
    description: 'Our diverse range of pulses includes chickpeas, lentils, and beans, all sourced from Ethiopia\'s highland regions known for producing the highest quality legumes.',
    image: 'https://images.unsplash.com/photo-1515543904323-4ce37f57a9ac?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1515543904323-4ce37f57a9ac?w=800&q=80',
      'https://images.unsplash.com/photo-1613758947307-f3b8f5d80711?w=800&q=80',
      'https://images.unsplash.com/photo-1551462147-ff29053bfc14?w=800&q=80'
    ],
    features: ['High Protein', 'Fiber Rich', 'Essential Minerals', 'Long Shelf Life'],
    varieties: ['Chickpeas', 'Red Lentils', 'Green Lentils', 'Haricot Beans'],
    certifications: ['Export Quality', 'Phytosanitary Certified', 'Lab Tested'],
    color: 'from-green-500 to-emerald-600'
  },
  {
    id: 4,
    name: 'Coffee',
    tagline: 'Birthplace of Coffee',
    description: 'Ethiopian coffee is renowned worldwide for its complex flavors and aromas. From the birthplace of coffee, we bring you single-origin beans from legendary regions.',
    image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800&q=80',
      'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800&q=80',
      'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800&q=80'
    ],
    features: ['Single Origin', 'Specialty Grade', 'Fair Trade', 'Unique Flavor Profiles'],
    varieties: ['Yirgacheffe', 'Sidamo', 'Harrar', 'Limu'],
    certifications: ['Specialty Coffee Association', 'Rainforest Alliance', 'Fair Trade'],
    color: 'from-amber-700 to-yellow-900'
  },
  {
    id: 5,
    name: 'Spices',
    tagline: 'Aromatic Ethiopian Spices',
    description: 'Ethiopia\'s spices are integral to its culinary heritage. Our collection includes berbere, mitmita, and other aromatic spices that bring authentic Ethiopian flavors.',
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=800&q=80',
      'https://images.unsplash.com/photo-1506368249639-73a05d6f6488?w=800&q=80',
      'https://images.unsplash.com/photo-1532336414038-cf19250c5757?w=800&q=80'
    ],
    features: ['Hand Selected', 'Freshly Ground', 'Traditional Recipes', 'Premium Quality'],
    varieties: ['Berbere', 'Mitmita', 'Korerima', 'Black Cumin'],
    certifications: ['Food Grade', 'Hygiene Certified', 'Authentic Origin'],
    color: 'from-red-500 to-orange-600'
  },
  {
    id: 6,
    name: 'Fruits',
    tagline: 'Fresh Tropical Fruits',
    description: 'Ethiopia\'s diverse climate produces exceptional tropical fruits. From sweet bananas to exotic avocados, our fruits are harvested at peak ripeness.',
    image: 'https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=800&q=80',
      'https://images.unsplash.com/photo-1546548970-71785318a17b?w=800&q=80',
      'https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?w=800&q=80'
    ],
    features: ['Farm Fresh', 'Naturally Ripened', 'No Chemicals', 'Quick Export'],
    varieties: ['Avocados', 'Bananas', 'Mangoes', 'Papayas'],
    certifications: ['Global GAP', 'Freshness Guaranteed', 'Cold Chain Certified'],
    color: 'from-green-400 to-lime-500'
  }
];

export default function ProductDialog({ isOpen, onClose, initialProduct }) {
  const getInitialIndex = () => {
    if (!initialProduct) return 0;
    const index = productsData.findIndex(p => p.name === initialProduct);
    return index !== -1 ? index : 0;
  };
  
  const [currentProductIndex, setCurrentProductIndex] = useState(getInitialIndex);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const product = productsData[currentProductIndex] || productsData[0];

  const nextProduct = () => {
    setCurrentProductIndex((prev) => (prev + 1) % productsData.length);
    setCurrentImageIndex(0);
  };

  const prevProduct = () => {
    setCurrentProductIndex((prev) => (prev - 1 + productsData.length) % productsData.length);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.gallery.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + product.gallery.length) % product.gallery.length);
  };

  React.useEffect(() => {
    if (initialProduct) {
      const index = productsData.findIndex(p => p.name === initialProduct);
      if (index !== -1) {
        setCurrentProductIndex(index);
        setCurrentImageIndex(0);
      }
    }
  }, [initialProduct]);

  if (!product) return null;
  
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-5xl p-0 overflow-hidden bg-white border-0 rounded-3xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={product.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2"
          >
            {/* Image Section */}
            <div className="relative bg-[#223059] p-6 md:p-8">
              {/* Decorative Elements */}
              <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                <div className={`absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br ${product.color} rounded-full opacity-20 blur-3xl`}></div>
                <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#D0AF39]/20 rounded-full blur-3xl"></div>
              </div>

              {/* Main Image */}
              <div className="relative">
                <motion.div
                  key={currentImageIndex}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl"
                >
                  <img
                    src={product.gallery[currentImageIndex]}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${product.color} opacity-20`}></div>
                </motion.div>

                {/* Image Navigation */}
                <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-2">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={prevImage}
                    className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/40 transition-all"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={nextImage}
                    className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/40 transition-all"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </motion.button>
                </div>

                {/* Image Indicators */}
                <div className="flex justify-center gap-2 mt-4">
                  {product.gallery.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        idx === currentImageIndex 
                          ? 'w-8 bg-[#D0AF39]' 
                          : 'bg-white/40 hover:bg-white/60'
                      }`}
                    />
                  ))}
                </div>

                {/* Thumbnail Gallery */}
                <div className="flex gap-2 mt-4">
                  {product.gallery.map((img, idx) => (
                    <motion.button
                      key={idx}
                      whileHover={{ scale: 1.05 }}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`flex-1 aspect-video rounded-lg overflow-hidden border-2 transition-all ${
                        idx === currentImageIndex 
                          ? 'border-[#D0AF39]' 
                          : 'border-transparent opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Product Navigation */}
              <div className="flex justify-between items-center mt-6">
                <motion.button
                  whileHover={{ x: -5 }}
                  onClick={prevProduct}
                  className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                  <span className="text-sm">Previous</span>
                </motion.button>
                <div className="text-white/50 text-sm">
                  {currentProductIndex + 1} / {productsData.length}
                </div>
                <motion.button
                  whileHover={{ x: 5 }}
                  onClick={nextProduct}
                  className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
                >
                  <span className="text-sm">Next</span>
                  <ChevronRight className="w-5 h-5" />
                </motion.button>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-6 md:p-8 max-h-[80vh] overflow-y-auto">
              <DialogHeader className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-4 h-4 text-[#D0AF39]" />
                  <span className="text-[#D0AF39] text-sm font-semibold tracking-wider uppercase">
                    {product.tagline}
                  </span>
                </div>
                <DialogTitle className="text-3xl md:text-4xl font-bold text-[#223059]">
                  {product.name}
                </DialogTitle>
              </DialogHeader>

              <p className="text-gray-600 leading-relaxed mb-6">
                {product.description}
              </p>

              {/* Features */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-[#223059] mb-3 flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#D0AF39]" />
                  Key Features
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  {product.features.map((feature, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-center gap-2"
                    >
                      <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#D0AF39] to-[#B8962E] flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-sm text-gray-600">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Varieties */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-[#223059] mb-3 flex items-center gap-2">
                  <Package className="w-4 h-4 text-[#D0AF39]" />
                  Available Varieties
                </h4>
                <div className="flex flex-wrap gap-2">
                  {product.varieties.map((variety, idx) => (
                    <Badge 
                      key={idx}
                      variant="secondary"
                      className="bg-[#223059]/5 text-[#223059] hover:bg-[#223059]/10 transition-colors px-3 py-1"
                    >
                      {variety}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div className="mb-8">
                <h4 className="text-sm font-semibold text-[#223059] mb-3 flex items-center gap-2">
                  <Leaf className="w-4 h-4 text-[#D0AF39]" />
                  Certifications
                </h4>
                <div className="flex flex-wrap gap-2">
                  {product.certifications.map((cert, idx) => (
                    <Badge 
                      key={idx}
                      className="bg-gradient-to-r from-[#D0AF39]/10 to-[#D0AF39]/5 text-[#D0AF39] border border-[#D0AF39]/20 px-3 py-1"
                    >
                      {cert}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="flex gap-3">
                <Button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="flex-1 bg-gradient-to-r from-[#D0AF39] to-[#B8962E] hover:from-[#B8962E] hover:to-[#9A7D26] text-[#223059] font-semibold rounded-xl h-12 shadow-lg shadow-[#D0AF39]/30"
                >
                  Request Quote
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="border-2 border-[#223059]/20 text-[#223059] hover:bg-[#223059]/5 rounded-xl h-12"
                >
                  <Globe className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
}

export { productsData };

import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Handshake, Globe, Award, Star } from 'lucide-react';

const partners = [
  { 
    name: 'NEXT LLC', 
    logo: 'N',
    tagline: 'Strategic Partner',
    country: 'UAE',
    icon: Globe
  },
  { 
    name: 'Green Mile Farm', 
    logo: 'G',
    tagline: 'Agricultural Alliance',
    country: 'Kenya',
    icon: Award
  },
  { 
    name: 'Ethiopian Coffee Exchange', 
    logo: 'E',
    tagline: 'Trade Partner',
    country: 'Ethiopia',
    icon: Handshake
  },
  { 
    name: 'Africa Trade Hub', 
    logo: 'A',
    tagline: 'Export Network',
    country: 'South Africa',
    icon: Globe
  },
  { 
    name: 'Global Agri Partners', 
    logo: 'G',
    tagline: 'International Distributor',
    country: 'Netherlands',
    icon: Star
  },
  { 
    name: 'Nordic Import Co.', 
    logo: 'N',
    tagline: 'European Partner',
    country: 'Sweden',
    icon: Award
  },
  { 
    name: 'Middle East Foods', 
    logo: 'M',
    tagline: 'Regional Distributor',
    country: 'Saudi Arabia',
    icon: Handshake
  },
  { 
    name: 'Asian Markets Ltd', 
    logo: 'A',
    tagline: 'Asia Pacific Partner',
    country: 'Singapore',
    icon: Globe
  },
];

const PartnerCard = ({ partner, isPaused, onHover, onLeave, index }) => {
  const Icon = partner.icon;
  
  return (
    <motion.div
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className="flex-shrink-0 mx-4 group cursor-pointer"
      whileHover={{ 
        scale: 1.08,
        zIndex: 50,
      }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className={`
        relative w-72 h-40 rounded-2xl overflow-hidden
        bg-gradient-to-br from-[#223059] via-[#2a3a6d] to-[#1a2545]
        border border-[#D0AF39]/20 
        shadow-xl shadow-black/20
        transition-all duration-500
        ${isPaused ? 'border-[#D0AF39]/60 shadow-2xl shadow-[#D0AF39]/20' : ''}
        group-hover:border-[#D0AF39]/60
        group-hover:shadow-2xl group-hover:shadow-[#D0AF39]/30
      `}>
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#D0AF39]/0 via-[#D0AF39]/5 to-[#D0AF39]/0 
          group-hover:from-[#D0AF39]/10 group-hover:via-[#D0AF39]/20 group-hover:to-[#D0AF39]/10 
          transition-all duration-700" />
        
        {/* Shine Effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent 
            -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
        </div>
        
        {/* Corner Accent */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-[#D0AF39]/30 to-transparent rounded-full blur-2xl 
          opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Content */}
        <div className="relative h-full p-6 flex flex-col justify-between">
          {/* Top Row */}
          <div className="flex items-start justify-between">
            {/* Logo Circle */}
            <div className="relative">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#D0AF39] to-[#B8962E] 
                flex items-center justify-center shadow-lg shadow-[#D0AF39]/30
                group-hover:shadow-xl group-hover:shadow-[#D0AF39]/50 transition-all duration-500">
                <span className="text-[#223059] font-bold text-2xl">{partner.logo}</span>
              </div>
              {/* Glow Ring */}
              <div className="absolute inset-0 rounded-xl border-2 border-[#D0AF39]/0 
                group-hover:border-[#D0AF39]/50 group-hover:scale-110 transition-all duration-500" />
            </div>
            
            {/* Icon Badge */}
            <div className="w-10 h-10 rounded-full bg-white/5 backdrop-blur-sm 
              border border-white/10 flex items-center justify-center
              group-hover:bg-[#D0AF39]/20 group-hover:border-[#D0AF39]/30 transition-all duration-500">
              <Icon className="w-5 h-5 text-[#D0AF39]/70 group-hover:text-[#D0AF39] transition-colors duration-300" />
            </div>
          </div>
          
          {/* Bottom Content */}
          <div>
            <h3 className="text-white font-bold text-lg mb-1 group-hover:text-[#D0AF39] transition-colors duration-300">
              {partner.name}
            </h3>
            <div className="flex items-center justify-between">
              <span className="text-white/50 text-sm group-hover:text-white/70 transition-colors duration-300">
                {partner.tagline}
              </span>
              <span className="text-[#D0AF39]/60 text-xs font-medium px-2 py-1 rounded-full 
                bg-[#D0AF39]/10 group-hover:bg-[#D0AF39]/20 transition-all duration-300">
                {partner.country}
              </span>
            </div>
          </div>
        </div>
        
        {/* Bottom Gradient Line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#D0AF39]/50 to-transparent 
          opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </motion.div>
  );
};

export default function PartnersMarquee() {
  const [isPaused, setIsPaused] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  
  // Triple the partners for seamless loop
  const allPartners = [...partners, ...partners, ...partners];

  return (
    <section id="our-partners" className="relative py-32 overflow-hidden">
      {/* Background with your uploaded images */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#F8F6F0] via-white to-[#F8F6F0]" />
        
        {/* Decorative Image Overlays */}
        <div className="absolute top-0 left-0 w-1/3 h-64 opacity-10">
          <img 
            src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6926636cc91b978ae8c2c397/2062a4502_close-up-of-fresh-green-tea-leaves-glowing-in-the-sunlight-symbolizing-growth-and-freshness-So9mv8NPH7W8mFzx4IXWhg.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#F8F6F0] via-transparent to-[#F8F6F0]" />
        </div>
        <div className="absolute bottom-0 right-0 w-1/3 h-64 opacity-10">
          <img 
            src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6926636cc91b978ae8c2c397/eedb2fedd_flat-lay-of-organic-flaxseeds-in-wooden-spoons-showcasing-natural-nutrition-and-texture-R12ZDgb8aweeyP_6Vxl1kw.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-[#F8F6F0] via-transparent to-[#F8F6F0]" />
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-[#D0AF39]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-1/4 w-72 h-72 bg-[#223059]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Section Header */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 mb-16">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
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
            We collaborate with leading international and local companies, institutions, and 
            organizations across the agricultural value chain — from farmers and cooperatives 
            to financial, regulatory, and research partners.
          </p>
        </motion.div>
      </div>

      {/* Single Row Marquee */}
      <div className="relative py-8">
        {/* Gradient Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-[#F8F6F0] via-[#F8F6F0]/80 to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-[#F8F6F0] via-[#F8F6F0]/80 to-transparent z-20 pointer-events-none" />

        <motion.div
          className="flex"
          animate={{
            x: isPaused ? undefined : [0, -80 * partners.length]
          }}
          transition={{
            x: {
              duration: 40,
              repeat: Infinity,
              ease: "linear",
            }
          }}
          style={{ 
            animationPlayState: isPaused ? 'paused' : 'running',
          }}
        >
          {allPartners.map((partner, idx) => (
            <PartnerCard 
              key={`${partner.name}-${idx}`} 
              partner={partner}
              index={idx}
              isPaused={hoveredIndex === idx}
              onHover={() => {
                setIsPaused(true);
                setHoveredIndex(idx);
              }}
              onLeave={() => {
                setIsPaused(false);
                setHoveredIndex(null);
              }}
            />
          ))}
        </motion.div>
      </div>

      {/* CTA Section */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative max-w-7xl mx-auto px-6 lg:px-8 mt-20"
      >
        <div className="relative rounded-3xl overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img 
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6926636cc91b978ae8c2c397/4b16d278b_drone-shot-of-a-loaded-container-ship-sailing-through-the-sea-near-naples-italy-pLI-beF3m29Ets_sY8sWaw.jpeg"
              alt="Global Shipping"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#223059]/95 via-[#223059]/85 to-[#223059]/75" />
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#D0AF39]/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-[#D0AF39]/5 rounded-full blur-2xl" />
          
          <div className="relative z-10 p-10 md:p-14 text-center">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-[#D0AF39]/20 text-[#D0AF39] px-4 py-2 rounded-full text-sm font-semibold mb-6"
            >
              <span className="w-2 h-2 bg-[#D0AF39] rounded-full animate-pulse" />
              Partnership Opportunity
            </motion.div>
            
            <h3 className="text-2xl md:text-4xl font-bold text-white mb-4">
              You want to work with us?
            </h3>
            <p className="text-white/70 mb-8 max-w-xl mx-auto">
              Join us in promoting Ethiopia's premium agricultural exports while championing 
              sustainable practices. Together, we can make a meaningful impact on the global stage.
            </p>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-[#D0AF39] to-[#B8962E] hover:from-[#B8962E] hover:to-[#9A7D26] text-[#223059] font-semibold px-8 py-4 rounded-full shadow-xl shadow-[#D0AF39]/30 inline-flex items-center gap-2 transition-all"
            >
              Contact Us Now
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </motion.button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';
import { TrendingUp, Users, Globe, Package } from 'lucide-react';

const stats = [
  { 
    number: 1188, 
    suffix: '', 
    label: 'MT Per Year',
    sublabel: 'Export Volume',
    icon: Package,
    color: 'from-[#D0AF39] to-[#B8962E]'
  },
  { 
    number: 50, 
    suffix: '+', 
    label: 'Farmers',
    sublabel: 'Partner Network',
    icon: Users,
    color: 'from-emerald-400 to-emerald-600'
  },
  { 
    number: 20, 
    suffix: '+', 
    label: 'Customers',
    sublabel: 'Worldwide Clients',
    icon: TrendingUp,
    color: 'from-blue-400 to-blue-600'
  },
  { 
    number: 10, 
    suffix: '', 
    label: 'Export Destinations',
    sublabel: 'Global Reach',
    icon: Globe,
    color: 'from-purple-400 to-purple-600'
  },
];

function AnimatedCounter({ value, duration = 2 }) {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  useEffect(() => {
    if (!isInView) return;
    
    let startTime;
    let animationFrame;
    
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = Math.floor(easeOutQuart * value);
      
      setDisplayValue(currentValue);
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };
    
    animationFrame = requestAnimationFrame(animate);
    
    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isInView, value, duration]);
  
  return <span ref={ref}>{displayValue.toLocaleString()}</span>;
}

function StatCard({ stat, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="relative group"
    >
      <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-[#D0AF39]/30 transition-all duration-500 overflow-hidden">
        {/* Background Gradient on Hover */}
        <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
        
        {/* Animated Border */}
        <motion.div
          className="absolute inset-0 rounded-3xl border-2 border-[#D0AF39]/0 group-hover:border-[#D0AF39]/20"
          initial={false}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        />
        
        {/* Icon */}
        <motion.div 
          className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-6 shadow-lg`}
          whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
          transition={{ duration: 0.5 }}
        >
          <stat.icon className="w-7 h-7 text-white" />
        </motion.div>
        
        {/* Number with Counting Animation */}
        <div className="relative">
          <motion.div 
            className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#D0AF39] via-[#E5C76B] to-[#D0AF39] bg-clip-text text-transparent mb-2"
            style={{ backgroundSize: '200% 100%' }}
            animate={{ backgroundPosition: ['0% 0%', '100% 0%', '0% 0%'] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
          >
            <AnimatedCounter value={stat.number} duration={2.5} />
            {stat.suffix}
          </motion.div>
          
          {/* Glow Effect */}
          <div className="absolute -inset-4 bg-[#D0AF39]/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
        </div>
        
        {/* Labels */}
        <p className="text-white font-semibold text-lg mb-1">{stat.label}</p>
        <p className="text-white/50 text-sm">{stat.sublabel}</p>
        
        {/* Decorative Line */}
        <motion.div 
          className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#D0AF39] to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
        />
      </div>
    </motion.div>
  );
}

export default function StatsCounter() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section ref={containerRef} className="relative py-32 bg-[#223059] overflow-hidden">
      {/* Creative Background with Tea Leaves Image */}
      <div className="absolute inset-0">
        <img 
          src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6926636cc91b978ae8c2c397/2062a4502_close-up-of-fresh-green-tea-leaves-glowing-in-the-sunlight-symbolizing-growth-and-freshness-So9mv8NPH7W8mFzx4IXWhg.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-[0.08] mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#223059]/95 via-[#223059]/90 to-[#223059]/95"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNEMEFGMzkiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50"></div>
        
        {/* Floating Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#D0AF39]/10 rounded-full blur-3xl"
          animate={{ 
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#D0AF39]/5 rounded-full blur-3xl"
          animate={{ 
            x: [0, -30, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-[#D0AF39] to-transparent"></div>
            <span className="text-[#D0AF39] text-sm font-semibold tracking-[0.2em] uppercase">Our Impact</span>
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-[#D0AF39] to-transparent"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Numbers That Speak
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Our commitment to excellence is reflected in every metric we achieve
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} />
          ))}
        </div>

        {/* Bottom Accent */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="mt-16 h-px bg-gradient-to-r from-transparent via-[#D0AF39]/50 to-transparent"
        />
      </div>
    </section>
  );
}

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import ProductDialog from './ProductDialog';

const products = [
  { 
    name: 'Oilseeds', 
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=80', 
    desc: 'Premium sesame and other oilseeds',
    highlight: 'Best Seller'
  },
  { 
    name: 'Grains & Cereals', 
    image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=600&q=80', 
    desc: 'High-quality Ethiopian grains',
    highlight: 'Ancient Heritage'
  },
  { 
    name: 'Pulses', 
    image: 'https://images.unsplash.com/photo-1515543904323-4ce37f57a9ac?w=600&q=80', 
    desc: 'Diverse range of nutritious pulses',
    highlight: 'Protein Rich'
  },
  { 
    name: 'Coffee', 
    image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=600&q=80', 
    desc: 'World-renowned Ethiopian coffee',
    highlight: 'Premium Grade'
  },
  { 
    name: 'Spices', 
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600&q=80', 
    desc: 'Aromatic and flavorful spices',
    highlight: 'Traditional'
  },
  { 
    name: 'Fruits', 
    image: 'https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=600&q=80', 
    desc: 'Fresh tropical fruits',
    highlight: 'Farm Fresh'
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

export default function ProductsShowcase() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openProductDialog = (productName) => {
    setSelectedProduct(productName);
    setIsDialogOpen(true);
  };

  return (
    <section id="our-products" className="relative py-32 bg-[#223059] overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent opacity-5"></div>
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#D0AF39]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-[#D0AF39]/5 rounded-full blur-3xl"></div>
      
      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(#D0AF39 1px, transparent 1px), linear-gradient(90deg, #D0AF39 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: "spring" }}
            className="inline-flex items-center gap-2 bg-[#D0AF39]/20 text-[#D0AF39] px-4 py-2 rounded-full text-sm font-semibold mb-6"
          >
            <Sparkles className="w-4 h-4" />
            Premium Selection
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            What We <span className="bg-gradient-to-r from-[#D0AF39] via-[#E5C76B] to-[#D0AF39] bg-clip-text text-transparent">Offer</span>
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Discover premium Ethiopian agricultural exports, including grains, pulses, coffee, 
            and spices, all sourced sustainably and crafted for global markets.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {products.map((product, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              onClick={() => openProductDialog(product.name)}
              className="group relative overflow-hidden rounded-3xl cursor-pointer"
            >
              {/* Image Container */}
              <div className="aspect-[4/3] overflow-hidden">
                <motion.img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>
              
              {/* Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#223059] via-[#223059]/50 to-transparent"></div>
              <motion.div 
                className="absolute inset-0 bg-[#D0AF39]/0 group-hover:bg-[#D0AF39]/20"
                transition={{ duration: 0.3 }}
              />
              
              {/* Highlight Badge */}
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: idx * 0.1 + 0.3 }}
                className="absolute top-4 left-4"
              >
                <span className="bg-gradient-to-r from-[#D0AF39] to-[#B8962E] text-[#223059] text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                  {product.highlight}
                </span>
              </motion.div>
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <motion.h3 
                  className="text-2xl md:text-3xl font-bold text-white mb-2"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  {product.name}
                </motion.h3>
                <p className="text-white/70 text-sm mb-4">{product.desc}</p>
                
                {/* Animated CTA */}
                <motion.div 
                  className="flex items-center gap-2 text-[#D0AF39] font-medium text-sm"
                  initial={{ opacity: 0, x: -20 }}
                  whileHover={{ x: 5 }}
                >
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    View Details
                  </span>
                  <motion.div
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </motion.div>
                </motion.div>
              </div>
              
              {/* Hover Border Effect */}
              <div className="absolute inset-0 rounded-3xl border-2 border-[#D0AF39]/0 group-hover:border-[#D0AF39]/50 transition-colors duration-300 pointer-events-none"></div>
              
              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
                <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-bl from-[#D0AF39]/20 to-transparent transform rotate-45 translate-x-14 -translate-y-14 group-hover:from-[#D0AF39]/40 transition-colors duration-300"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Product Dialog */}
      <ProductDialog 
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        initialProduct={selectedProduct}
      />
    </section>
  );
}