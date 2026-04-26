'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useTransitionNavigation } from '@/components/page-transition';
import { GrainOverlay, RevealSection, SectionSeparator, AnimatedHeroTitle, AmbientLight } from '@/components/vfx';
import { useI18n } from '@/components/i18n';

/* ── Main Page ── */
export default function Home() {
  const { navigate } = useTransitionNavigation();
  const { t, locale, setLocale, dir } = useI18n();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [ambientColor, setAmbientColor] = useState('#1a1a1a');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: t('nav.collections'), href: '/collections' },
    { name: t('nav.journal'), href: '/journal' },
    { name: t('nav.atelier'), href: '/atelier' },
    { name: t('nav.about'), href: '/heritage' },
  ];

  const handleLocaleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLocale(e.target.value as any);
  };

  return (
    <main className="bg-[#0a0a0a] text-[#f5f0eb] overflow-hidden relative" dir={dir}>
      {/* VFX Layers */}
      <GrainOverlay />
      <AmbientLight color={ambientColor} />

      {/* ── Navigation ── */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 nav-entrance ${isScrolled ? 'bg-[#0a0a0a]/90 backdrop-blur-md border-b border-[#3d3630]' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-16">
          <div className="py-4 md:py-6 flex justify-between items-center relative">
            {/* Hamburger Menu - Left */}
            <button 
              className="hamburger-btn p-2 rounded-lg hover:bg-[#c9a96e]/10 transition-all duration-300"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              title="Menu"
            >
              <svg className={`w-6 h-6 text-[#c9a96e] transition-all duration-300 ${mobileMenuOpen ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
            
            {/* ATLAS Logo - Center */}
            <Link href="/" className="absolute left-1/2 -translate-x-1/2">
              <div className="text-lg md:text-xl font-light tracking-[0.3em] text-[#c9a96e]">ATLAS</div>
            </Link>
            
            {/* Language Selector - Right */}
            <select 
              value={locale} 
              onChange={handleLocaleChange}
              className="text-xs md:text-sm label-caps bg-transparent border border-[#c9a96e]/30 rounded-lg px-2 md:px-3 py-2 text-[#c9a96e] hover:border-[#c9a96e] transition-colors cursor-pointer"
            >
              <option value="en">EN</option>
              <option value="ar">AR</option>
              <option value="fr">FR</option>
              <option value="es">ES</option>
              <option value="ja">JP</option>
            </select>
          </div>

          {/* Desktop Menu Tabs - Below Logo */}
          <div className="hidden md:flex border-t border-[#3d3630]/50 gap-4 pb-0 justify-center">
            {navItems.map((item, idx) => (
              <button
                key={item.name}
                onClick={() => navigate(item.href)}
                className="menu-item label-caps text-[#f5f0eb] hover:text-[#c9a96e] px-6 py-4 whitespace-nowrap flex-shrink-0 border-b-2 border-transparent hover:border-[#c9a96e] transition-all relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#c9a96e] group-hover:w-full transition-all duration-500"></span>
              </button>
            ))}
          </div>
        </div>
        <div className="divider max-w-7xl mx-auto hidden md:block"></div>
        
        {/* Mobile Menu Overlay */}
        <div 
          className="md:hidden fixed top-0 h-full w-80 bg-[#0a0a0a]/95 backdrop-blur-2xl border-l border-[#c9a96e]/20 z-50 overflow-hidden"
          style={{ 
            transition: 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1)',
            right: mobileMenuOpen ? '0' : '-100%',
            opacity: mobileMenuOpen ? 1 : 0,
          }}
        >
          {/* Close button inside menu */}
          <button 
            onClick={() => setMobileMenuOpen(false)}
            className="absolute top-6 right-6 p-2 hover:bg-[#c9a96e]/10 rounded-lg transition-colors"
          >
            <svg className="w-6 h-6 text-[#c9a96e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <div className="pt-24 px-6">
            <div className="space-y-2">
              {navItems.map((item, idx) => (
                <button
                  key={item.name}
                  onClick={() => {
                    navigate(item.href);
                    setMobileMenuOpen(false);
                  }}
                  className="w-full text-left py-4 px-4 text-lg font-light tracking-widest text-[#f5f0eb] hover:text-[#c9a96e] hover:bg-[#c9a96e]/10 rounded-lg transition-all duration-300 transform hover:translate-x-2"
                  style={{ 
                    opacity: mobileMenuOpen ? 1 : 0,
                    transform: mobileMenuOpen ? 'translateX(0)' : 'translateX(20px)',
                    transition: `all 0.4s cubic-bezier(0.23, 1, 0.32, 1) ${idx * 0.1 + 0.1}s`
                  }}
                >
                  {item.name}
                </button>
              ))}
            </div>
            
            {/* Menu footer */}
            <div className="mt-12 pt-8 border-t border-[#3d3630]/50" style={{ opacity: mobileMenuOpen ? 1 : 0, transition: 'opacity 0.5s ease 0.5s' }}>
              <p className="text-xs text-[#8a7e6b] tracking-widest mb-4">ATLAS MARAKECH</p>
              <div className="flex gap-4">
                <button className="p-3 rounded-full bg-[#c9a96e]/10 text-[#c9a96e] hover:bg-[#c9a96e]/20 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </button>
                <button className="p-3 rounded-full bg-[#c9a96e]/10 text-[#c9a96e] hover:bg-[#c9a96e]/20 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Backdrop overlay when menu is open */}
        <div 
          className="md:hidden fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
          style={{ 
            transition: 'opacity 0.3s ease',
            opacity: mobileMenuOpen ? 1 : 0,
            pointerEvents: mobileMenuOpen ? 'auto' : 'none',
          }}
          onClick={() => setMobileMenuOpen(false)}
        />
      </nav>

      {/* ── Hero ── */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 px-4 md:px-0">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover hero-video-bg"
        >
          <source src="/product-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/70 via-[#0a0a0a]/80 to-[#0a0a0a]"></div>
        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-6 md:space-y-8">
          <div className="label-caps text-[#c9a96e] tracking-[0.3em] mb-4 opacity-0 animate-fade-in" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
            THE SPIRIT OF MARRAKECH
          </div>
          <AnimatedHeroTitle title="ATLAS MARAKECH" className="text-4xl md:text-7xl font-serif font-light leading-tight" />
          <p className="body-lg text-[#c4b8a8] max-w-2xl mx-auto text-base md:text-lg opacity-0 animate-fade-in" style={{ animationDelay: '3s', animationFillMode: 'forwards' }}>
            Born from the energy of Marrakech. Crafted for those who seek the extraordinary.
          </p>
          <div className="flex flex-col md:flex-row gap-3 md:gap-6 justify-center pt-6 md:pt-8 opacity-0 animate-fade-in" style={{ animationDelay: '3.5s', animationFillMode: 'forwards' }}>
            <Link href="/collections"><button className="hero-btn-primary label-caps w-full md:w-auto">Explore Collection</button></Link>
            <Link href="/collections"><button className="hero-btn-secondary label-caps w-full md:w-auto">View All Fragrances</button></Link>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in" style={{ animationDelay: '4s', animationFillMode: 'forwards' }}>
          <svg className="w-4 h-6 mx-auto text-[#8a7e6b]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
        </div>
      </section>

      <SectionSeparator />

      {/* ── Floating Quote ── */}
      <section className="py-20 md:py-32 px-4 md:px-16 max-w-4xl mx-auto text-center">
        <div className="bg-[#141414] p-12 md:p-16 rounded-lg border border-[#3d3630]">
          <div className="mb-8">
            <img src="/images/Gmail/1000106367.png" alt="Quote decor" className="mx-auto w-40 h-40 object-cover rounded-full border-2 border-[#c9a96e]/30" />
          </div>
          <p className="text-2xl md:text-4xl font-serif font-light italic text-[#c9a96e]/80 leading-relaxed mb-8">
            "Luxury is not about price. It's about the feeling that a single drop of fragrance can carry a world."
          </p>
          <div className="w-12 h-px bg-[#c9a96e] mx-auto mb-4"></div>
          <p className="label-caps text-[#8a7e6b] tracking-widest">— The Atlas Philosophy</p>
        </div>
      </section>

      <SectionSeparator />

      {/* ── Ingredient Showcase ── */}
      <section className="py-20 md:py-40 px-4 md:px-16 bg-[#141414]">
        <div>
          <div className="text-center mb-12 md:mb-20">
            <div className="label-caps text-[#c9a96e] mb-4 tracking-[0.3em]">RAW MATERIALS</div>
            <h2 className="text-3xl md:text-5xl font-serif font-light text-[#f5f0eb]">The Ingredients</h2>
            <div className="divider-gold w-12 mx-auto mt-6"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            <div className="text-center space-y-3 group">
              <div className="w-20 h-20 mx-auto border border-[#3d3630] rounded-full overflow-hidden flex items-center justify-center group-hover:border-[#c9a96e] transition-colors duration-500">
                <img src="/images/Gmail/1000106356.png" alt="Oud" className="w-full h-full object-cover" />
              </div>
              <p className="label-caps text-[#f5f0eb] text-xs">Oud</p>
              <p className="text-xs text-[#8a7e6b] italic">Assam, India</p>
            </div>
            <div className="text-center space-y-3 group">
              <div className="w-20 h-20 mx-auto border border-[#3d3630] rounded-full overflow-hidden flex items-center justify-center group-hover:border-[#c9a96e] transition-colors duration-500">
                <img src="/images/Gmail/1000106367.png" alt="Saffron" className="w-full h-full object-cover" />
              </div>
              <p className="label-caps text-[#f5f0eb] text-xs">Saffron</p>
              <p className="text-xs text-[#8a7e6b] italic">Khorasan, Iran</p>
            </div>
            <div className="text-center space-y-3 group">
              <div className="w-20 h-20 mx-auto border border-[#3d3630] rounded-full overflow-hidden flex items-center justify-center group-hover:border-[#c9a96e] transition-colors duration-500">
                <img src="/images/Gmail/1000106373.png" alt="Amber" className="w-full h-full object-cover" />
              </div>
              <p className="label-caps text-[#f5f0eb] text-xs">Amber</p>
              <p className="text-xs text-[#8a7e6b] italic">Baltic Coast</p>
            </div>
            <div className="text-center space-y-3 group">
              <div className="w-20 h-20 mx-auto border border-[#3d3630] rounded-full overflow-hidden flex items-center justify-center group-hover:border-[#c9a96e] transition-colors duration-500">
                <img src="/images/Gmail/1000106361.png" alt="Rose" className="w-full h-full object-cover" />
              </div>
              <p className="label-caps text-[#f5f0eb] text-xs">Rose</p>
              <p className="text-xs text-[#8a7e6b] italic">Grasse, France</p>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mt-16">
            <div className="text-center space-y-3 group">
              <div className="w-20 h-20 mx-auto border border-[#3d3630] rounded-full overflow-hidden flex items-center justify-center group-hover:border-[#c9a96e] transition-colors duration-500">
                <img src="/images/Gmail/1000106391.png" alt="Bergamot" className="w-full h-full object-cover" />
              </div>
              <p className="label-caps text-[#f5f0eb] text-xs">Bergamot</p>
              <p className="text-xs text-[#8a7e6b] italic">Calabria, Italy</p>
            </div>
            <div className="text-center space-y-3 group">
              <div className="w-20 h-20 mx-auto border border-[#3d3630] rounded-full overflow-hidden flex items-center justify-center group-hover:border-[#c9a96e] transition-colors duration-500">
                <img src="/images/Gmail/1000106365.png" alt="Iris" className="w-full h-full object-cover" />
              </div>
              <p className="label-caps text-[#f5f0eb] text-xs">Iris</p>
              <p className="text-xs text-[#8a7e6b] italic">Tuscany, Italy</p>
            </div>
            <div className="text-center space-y-3 group">
              <div className="w-20 h-20 mx-auto border border-[#3d3630] rounded-full overflow-hidden flex items-center justify-center group-hover:border-[#c9a96e] transition-colors duration-500">
                <img src="/images/Gmail/1000106388.png" alt="Musk" className="w-full h-full object-cover" />
              </div>
              <p className="label-caps text-[#f5f0eb] text-xs">Musk</p>
              <p className="text-xs text-[#8a7e6b] italic">Ethical Sources</p>
            </div>
            <div className="text-center space-y-3 group">
              <div className="w-20 h-20 mx-auto border border-[#3d3630] rounded-full overflow-hidden flex items-center justify-center group-hover:border-[#c9a96e] transition-colors duration-500">
                <img src="/images/Gmail/1000106399.png" alt="Vetiver" className="w-full h-full object-cover" />
              </div>
              <p className="label-caps text-[#f5f0eb] text-xs">Vetiver</p>
              <p className="text-xs text-[#8a7e6b] italic">Haiti</p>
            </div>
          </div>
        </div>
      </section>

      <SectionSeparator />

      {/* ── Fragrance Gallery ── */}
      <section className="py-20 md:py-40 px-4 md:px-16 max-w-7xl mx-auto">
        <div>
          <div className="text-center mb-12 md:mb-20">
            <div className="label-caps text-[#c9a96e] mb-4 tracking-[0.3em]">CURATED SELECTION</div>
            <h2 className="text-3xl md:text-5xl font-serif font-light text-[#f5f0eb]">Essence Gallery</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div className="space-y-4">
              <div className="aspect-square overflow-hidden rounded-lg">
                <img src="/images/Gmail/1000106365.png" alt="Essence 1" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-serif text-[#f5f0eb]">Iris Mystique</h3>
              <p className="body-md text-[#c4b8a8] text-sm">Delicate floralacy meets ancient mystery.</p>
            </div>
            <div className="space-y-4">
              <div className="aspect-square overflow-hidden rounded-lg">
                <img src="/images/Gmail/1000106389.png" alt="Essence 2" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-serif text-[#f5f0eb]">Amber Dream</h3>
              <p className="body-md text-[#c4b8a8] text-sm">Warm, enveloping, eternally sophisticated.</p>
            </div>
            <div className="space-y-4">
              <div className="aspect-square overflow-hidden rounded-lg">
                <img src="/images/Gmail/1000106399.png" alt="Essence 3" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-serif text-[#f5f0eb]">Vetiver Soul</h3>
              <p className="body-md text-[#c4b8a8] text-sm">Earthy, grounding, authentically timeless.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="py-20 md:py-40 px-4 md:px-16 max-w-7xl mx-auto">
        <div>
          <div className="mb-12 md:mb-20">
            <div className="label-caps text-[#c9a96e] mb-4 tracking-[0.3em]">WHAT WE STAND FOR</div>
            <h2 className="text-3xl md:text-5xl font-serif font-light text-[#f5f0eb]">The Atlas Way</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">
            {[
              { title: 'Bold Ingredients', description: 'Oud, saffron, amber—sourced from the finest suppliers across Morocco and beyond.', img: '/images/Gmail/1000106373.png' },
              { title: 'Modern Craft', description: 'Contemporary perfumery techniques that push boundaries while respecting the art.', img: '/images/Gmail/1000106388.png' },
              { title: 'Unapologetic Luxury', description: 'No pretense. Just exceptional fragrances that speak for themselves.', img: '/images/Gmail/1000106399.png' }
            ].map((value, idx) => (
              <div key={idx} className="space-y-4 border-l border-[#3d3630] pl-6">
                <img src={value.img} alt={value.title} className="w-12 h-12 rounded-full object-cover" />
                <h3 className="text-xl md:text-2xl font-serif text-[#f5f0eb]">{value.title}</h3>
                <p className="body-lg text-[#c4b8a8] text-sm md:text-base">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionSeparator />

      {/* ── CTA ── */}
      <section className="py-20 md:py-40 px-4 md:px-16 max-w-7xl mx-auto">
        <div>
          <div className="text-center space-y-6 md:space-y-8">
            <h2 className="text-3xl md:text-5xl font-serif font-light text-[#f5f0eb]">Find Your Signature</h2>
            <p className="body-lg text-[#c4b8a8] max-w-2xl mx-auto text-base md:text-lg">
              Visit our atelier or book a private consultation. Discover the scent that defines you.
            </p>
            <div className="flex justify-center gap-4 mt-6">
              <img src="/images/Gmail/1000106361.png" alt="Atelier 1" className="hidden md:block w-40 h-24 object-cover rounded-md" />
              <img src="/images/Gmail/1000106367.png" alt="Atelier 2" className="hidden md:block w-40 h-24 object-cover rounded-md" />
              <img src="/images/Gmail/1000106373.png" alt="Atelier 3" className="hidden md:block w-40 h-24 object-cover rounded-md" />
            </div>
            <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center">
              <Link href="/atelier"><button className="btn-primary label-caps w-full md:w-auto">Visit Atelier</button></Link>
              <button className="btn-secondary label-caps w-full md:w-auto">Book Consultation</button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-[#3d3630] py-12 md:py-20 px-4 md:px-16 bg-[#141414]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 mb-8 md:mb-12">
            <div>
              <div className="label-caps text-[#c9a96e] mb-4 text-xs md:text-sm">ATLAS MARAKECH</div>
              <p className="body-md text-[#8a7e6b] text-xs md:text-base">Modern luxury fragrances.</p>
              <div className="flex flex-col gap-3 mt-4">
                <a href="https://www.instagram.com/atlas_marakech/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#c9a96e] hover:text-[#f5f0eb] transition-colors">
                  <svg className="social-icon" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                  <span className="body-md text-sm">Instagram</span>
                </a>
                <a href="https://www.facebook.com/profile.php?id=61589002400891" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#c9a96e] hover:text-[#f5f0eb] transition-colors">
                  <svg className="social-icon" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
                  <span className="body-md text-sm">Facebook</span>
                </a>
                <a href="https://twitter.com/atlasmarakech" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#c9a96e] hover:text-[#f5f0eb] transition-colors">
                  <svg className="social-icon" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                  <span className="body-md text-sm">X / Twitter</span>
                </a>
              </div>
            </div>
            <div>
              <p className="label-caps text-[#f5f0eb] mb-4 text-xs md:text-sm">Collections</p>
              <ul className="space-y-2">
                <li><Link href="/collections" className="body-md text-[#8a7e6b] hover:text-[#c9a96e] transition-colors text-xs md:text-base">All Fragrances</Link></li>
                <li><Link href="/collections" className="body-md text-[#8a7e6b] hover:text-[#c9a96e] transition-colors text-xs md:text-base">Limited Editions</Link></li>
                <li><Link href="/collections" className="body-md text-[#8a7e6b] hover:text-[#c9a96e] transition-colors text-xs md:text-base">Archive</Link></li>
              </ul>
            </div>
            <div>
              <p className="label-caps text-[#f5f0eb] mb-4 text-xs md:text-sm">Account</p>
              <ul className="space-y-2">
                <li><a href="#" className="body-md text-[#8a7e6b] hover:text-[#c9a96e] transition-colors text-xs md:text-base">Sign In</a></li>
                <li><a href="#" className="body-md text-[#8a7e6b] hover:text-[#c9a96e] transition-colors text-xs md:text-base">Create Account</a></li>
                <li><a href="#" className="body-md text-[#8a7e6b] hover:text-[#c9a96e] transition-colors text-xs md:text-base">My Orders</a></li>
              </ul>
            </div>
            <div>
              <p className="label-caps text-[#f5f0eb] mb-4 text-xs md:text-sm">Legal</p>
              <ul className="space-y-2">
                <li><a href="/legal/privacy" className="body-md text-[#8a7e6b] hover:text-[#c9a96e] transition-colors text-xs md:text-base">Privacy</a></li>
                <li><a href="/legal/terms" className="body-md text-[#8a7e6b] hover:text-[#c9a96e] transition-colors text-xs md:text-base">Terms</a></li>
                <li><a href="/legal/contact" className="body-md text-[#8a7e6b] hover:text-[#c9a96e] transition-colors text-xs md:text-base">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="divider mb-8"></div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs md:text-base">
            <p className="body-md text-[#8a7e6b]">&copy; 2026 ATLAS MARAKECH. All rights reserved.</p>
            <p className="label-caps text-[#8a7e6b]">The Spirit of Marrakech</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
