'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useTransitionNavigation } from '@/components/page-transition';
import { GrainOverlay, RevealSection, SectionSeparator, AnimatedHeroTitle, AmbientLight } from '@/components/vfx';
import { useI18n } from '@/components/i18n';
import { MobileMenu } from '@/components/mobile-menu';
import { DesktopMenu } from '@/components/desktop-menu';
import { ingredients, socialAccounts } from '@/lib/data';
import { SocialLink } from '@/components/social-links';

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
    { name: 'Collections', href: '/collections' },
    { name: 'Journal', href: '/journal' },
    { name: 'Atelier', href: '/atelier' },
    { name: 'Heritage', href: '/heritage' },
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

          {/* Desktop Menu - Hidden, moved to mobile menu */}
        </div>
        
        <div className="divider max-w-7xl mx-auto hidden md:block"></div>
        
        {/* Mobile Menu */}
        <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} activePath="/" navItems={navItems} />

        {/* Desktop Menu */}
        <DesktopMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} navItems={navItems} />
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
            {ingredients.slice(0, 4).map((ingredient, idx) => (
              <div key={ingredient.name} className="ingredient-group text-center space-y-3 relative">
                <div className="ingredient-tooltip">
                  <p className="text-[#c9a96e] text-sm font-medium mb-1">{ingredient.name}</p>
                  <p className="text-[#c4b8a8] text-xs">{ingredient.description}</p>
                  <p className="text-[#8a7e6b] text-xs italic mt-1">{ingredient.origin}</p>
                </div>
                <div className="w-20 h-20 mx-auto border border-[#3d3630] rounded-full overflow-hidden flex items-center justify-center group-hover:border-[#c9a96e] transition-all duration-500 hover:border-[#c9a96e] hover:scale-110 hover:shadow-[0_0_20px_rgba(201,169,110,0.3)]">
                  <img src={ingredient.image} alt={ingredient.name} className="w-full h-full object-cover" />
                </div>
                <p className="label-caps text-[#f5f0eb] text-xs">{ingredient.name}</p>
                <p className="text-xs text-[#8a7e6b] italic">{ingredient.origin}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mt-16">
            {ingredients.slice(4).map((ingredient, idx) => (
              <div key={ingredient.name} className="ingredient-group text-center space-y-3 relative">
                <div className="ingredient-tooltip">
                  <p className="text-[#c9a96e] text-sm font-medium mb-1">{ingredient.name}</p>
                  <p className="text-[#c4b8a8] text-xs">{ingredient.description}</p>
                  <p className="text-[#8a7e6b] text-xs italic mt-1">{ingredient.origin}</p>
                </div>
                <div className="w-20 h-20 mx-auto border border-[#3d3630] rounded-full overflow-hidden flex items-center justify-center transition-all duration-500 hover:border-[#c9a96e] hover:scale-110 hover:shadow-[0_0_20px_rgba(201,169,110,0.3)]">
                  <img src={ingredient.image} alt={ingredient.name} className="w-full h-full object-cover" />
                </div>
                <p className="label-caps text-[#f5f0eb] text-xs">{ingredient.name}</p>
                <p className="text-xs text-[#8a7e6b] italic">{ingredient.origin}</p>
              </div>
            ))}
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
                {socialAccounts.map((social) => (
                  <SocialLink
                    key={social.name}
                    name={social.name}
                    url={social.url}
                    icon={social.icon}
                  />
                ))}
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
