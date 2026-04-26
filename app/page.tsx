'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const navItems = [
    { name: 'Collections', href: '/collections' },
    { name: 'Journal', href: '/journal' },
    { name: 'Atelier', href: '/atelier' },
    { name: 'Heritage', href: '/heritage' },
  ];

  return (
    <main className="bg-[#121414] text-[#e3e2e2] overflow-hidden">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-[#121414]/90 backdrop-blur-md border-b border-neutral-800' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-16 py-6 flex justify-between items-center">
          <Link href="/">
            <div className="text-lg md:text-xl font-light tracking-widest text-[#e9c176]">HORA</div>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-12">
            {navItems.map((item) => (
              <Link key={item.name} href={item.href} className="label-caps text-[#e3e2e2] hover:text-[#e9c176] transition-colors">
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex gap-6 text-[#e9c176]">
            <button className="hover:opacity-70 transition-opacity">🔍</button>
            <button className="hover:opacity-70 transition-opacity">🛍️</button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-[#e9c176] text-xl"
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-[#4e4639] bg-[#121414]/95 backdrop-blur-md">
            <div className="px-4 py-4 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block label-caps text-[#e3e2e2] hover:text-[#e9c176] transition-colors py-2"
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 flex gap-4 border-t border-[#4e4639]">
                <button className="text-[#e9c176]">🔍</button>
                <button className="text-[#e9c176]">🛍️</button>
              </div>
            </div>
          </div>
        )}

        <div className="divider max-w-7xl mx-auto"></div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen md:h-screen flex items-center justify-center relative overflow-hidden pt-20 md:pt-20 px-4 md:px-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#121414] to-[#0d0e0f]"></div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-16 text-center space-y-6 md:space-y-8 animate-fade-in-up">
          <div className="label-caps text-[#e9c176] tracking-widest mb-4">
            THE ART OF ESSENCE
          </div>

          <h1 className="text-3xl md:text-5xl font-light tracking-tight text-[#e3e2e2] leading-tight">
            Where Fragrance Meets Precision
          </h1>

          <p className="body-lg text-[#d1c5b4] max-w-2xl md:max-w-3xl mx-auto text-sm md:text-base">
            Crafted with meticulous attention to detail, each fragrance is a masterpiece of olfactory art. Experience the intersection of centuries-old perfumery traditions and innovative contemporary design.
          </p>

          <div className="flex flex-col md:flex-row gap-3 md:gap-6 justify-center pt-6 md:pt-8">
            <Link href="/collections">
              <button className="btn-primary label-caps w-full md:w-auto">Explore Fragrances</button>
            </Link>
            <Link href="/heritage">
              <button className="btn-secondary label-caps w-full md:w-auto">Our Story</button>
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 animate-glow">
          <div className="label-caps text-[#9a8f80] text-xs mb-2 hidden md:block">SCROLL</div>
          <svg className="w-4 h-6 mx-auto text-[#9a8f80]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Featured Fragrances */}
      <section className="py-20 md:py-40 px-4 md:px-16 max-w-7xl mx-auto">
        <div className="mb-12 md:mb-20">
          <div className="label-caps text-[#e9c176] mb-4">FEATURED COLLECTION</div>
          <h2 className="text-2xl md:text-4xl font-serif text-[#e3e2e2] mb-4">Our Signature Scents</h2>
          <div className="divider-gold w-12"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {[
            {
              name: 'Celestial Meridian',
              description: 'A timeless composition of bergamot, amber, and precious oud. The signature of true elegance.',
              icon: '✨'
            },
            {
              name: 'Obsidian Night',
              description: 'Deep, mysterious notes of midnight iris and vetiver. Where darkness becomes allure.',
              icon: '🌙'
            }
          ].map((fragrance, idx) => (
            <div key={idx} className="space-y-6 group animate-fade-in-up" style={{ animationDelay: `${idx * 200}ms` }}>
              <div className="aspect-square bg-gradient-to-br from-[#1f2020] to-[#0d0e0f] border border-[#4e4639] flex items-center justify-center overflow-hidden group-hover:border-[#e9c176] transition-colors duration-300">
                <div className="text-center text-[#9a8f80] group-hover:text-[#e9c176] transition-colors">
                  <div className="text-4xl md:text-6xl mb-4 group-hover:scale-110 transition-transform">{fragrance.icon}</div>
                  <p className="body-md text-sm md:text-base">{fragrance.name}</p>
                </div>
              </div>
              <div>
                <h3 className="text-lg md:text-2xl font-serif text-[#e3e2e2] mb-2">{fragrance.name}</h3>
                <p className="body-md text-[#d1c5b4] mb-4 text-sm md:text-base">{fragrance.description}</p>
                <Link href={`/product/${idx + 1}`}>
                  <button className="text-[#e9c176] label-caps hover:translate-x-2 transition-transform">
                    Discover →
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Artistry Section */}
      <section className="py-20 md:py-40 px-4 md:px-16 bg-[#0d0e0f]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="space-y-6 md:space-y-8 animate-slide-in-left">
              <div className="label-caps text-[#e9c176] mb-4">CRAFTSMANSHIP</div>
              <h2 className="text-2xl md:text-4xl font-serif text-[#e3e2e2]">The Art of Perfumery</h2>
              <p className="body-lg text-[#d1c5b4] text-sm md:text-base">
                Each fragrance is composed through an intricate process of extraction, blending, and aging. Our master perfumers—working in our Geneva atelier—select only the finest ingredients from around the world.
              </p>
              <p className="body-lg text-[#d1c5b4] text-sm md:text-base">
                What takes most perfumers months, we perfect over years. This is not luxury—it is obsession.
              </p>
              <Link href="/journal">
                <button className="btn-primary label-caps">Read More Stories</button>
              </Link>
            </div>
            <div className="aspect-square bg-gradient-to-br from-[#1f2020] to-[#0d0e0f] border border-[#4e4639] flex items-center justify-center animate-slide-in-right">
              <div className="text-center text-[#9a8f80]">
                <div className="text-6xl md:text-8xl mb-4">🧪</div>
                <p className="body-md text-sm md:text-base">Artisanal Process</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 md:py-40 px-4 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 md:mb-20">
            <div className="label-caps text-[#e9c176] mb-4">OUR PHILOSOPHY</div>
            <h2 className="text-2xl md:text-4xl font-serif text-[#e3e2e2]">Essence of Excellence</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">
            {[
              {
                title: 'Provenance',
                description: 'Every ingredient is sourced with intention, from sustainable suppliers who share our values.'
              },
              {
                title: 'Precision',
                description: 'Each formula is measured to the microdrop. No shortcuts. No compromises.'
              },
              {
                title: 'Permanence',
                description: 'Our fragrances are built to last—not just on the skin, but through generations.'
              }
            ].map((value, idx) => (
              <div key={idx} className="space-y-4 border-l border-[#4e4639] pl-6 animate-fade-in-up" style={{ animationDelay: `${idx * 150}ms` }}>
                <h3 className="text-xl md:text-2xl font-serif text-[#e3e2e2]">{value.title}</h3>
                <p className="body-lg text-[#d1c5b4] text-sm md:text-base">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-40 px-4 md:px-16 max-w-7xl mx-auto">
        <div className="text-center space-y-6 md:space-y-8 animate-fade-in-up">
          <h2 className="text-2xl md:text-4xl font-serif text-[#e3e2e2]">Find Your Signature Scent</h2>
          <p className="body-lg text-[#d1c5b4] max-w-2xl mx-auto text-sm md:text-base">
            Visit one of our exclusive ateliers or book a private fragrance consultation. Discover the essence that speaks to your story.
          </p>
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center">
            <Link href="/atelier">
              <button className="btn-primary label-caps w-full md:w-auto">Visit Atelier</button>
            </Link>
            <button className="btn-secondary label-caps w-full md:w-auto">Book Consultation</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#4e4639] py-12 md:py-20 px-4 md:px-16 bg-[#0d0e0f]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 mb-8 md:mb-12">
            <div>
              <div className="label-caps text-[#e9c176] mb-4 text-xs md:text-sm">HORA & ESSENCE</div>
              <p className="body-md text-[#9a8f80] text-xs md:text-base">The art of fragrance meets the precision of craft.</p>
            </div>
            <div>
              <p className="label-caps text-[#e3e2e2] mb-4 text-xs md:text-sm">Collections</p>
              <ul className="space-y-2">
                <li><Link href="/collections" className="body-md text-[#9a8f80] hover:text-[#e9c176] transition-colors text-xs md:text-base">All Fragrances</Link></li>
                <li><Link href="/collections" className="body-md text-[#9a8f80] hover:text-[#e9c176] transition-colors text-xs md:text-base">Limited Editions</Link></li>
                <li><Link href="/collections" className="body-md text-[#9a8f80] hover:text-[#e9c176] transition-colors text-xs md:text-base">Archive</Link></li>
              </ul>
            </div>
            <div>
              <p className="label-caps text-[#e3e2e2] mb-4 text-xs md:text-sm">Account</p>
              <ul className="space-y-2">
                <li><a href="#" className="body-md text-[#9a8f80] hover:text-[#e9c176] transition-colors text-xs md:text-base">Sign In</a></li>
                <li><a href="#" className="body-md text-[#9a8f80] hover:text-[#e9c176] transition-colors text-xs md:text-base">Create Account</a></li>
                <li><a href="#" className="body-md text-[#9a8f80] hover:text-[#e9c176] transition-colors text-xs md:text-base">My Orders</a></li>
              </ul>
            </div>
            <div>
              <p className="label-caps text-[#e3e2e2] mb-4 text-xs md:text-sm">Legal</p>
              <ul className="space-y-2">
                <li><a href="/legal/privacy" className="body-md text-[#9a8f80] hover:text-[#e9c176] transition-colors text-xs md:text-base">Privacy</a></li>
                <li><a href="/legal/terms" className="body-md text-[#9a8f80] hover:text-[#e9c176] transition-colors text-xs md:text-base">Terms</a></li>
                <li><a href="/legal/contact" className="body-md text-[#9a8f80] hover:text-[#e9c176] transition-colors text-xs md:text-base">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="divider mb-8"></div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs md:text-base">
            <p className="body-md text-[#9a8f80]">© 2026 HORA & ESSENCE. All rights reserved.</p>
            <p className="label-caps text-[#9a8f80]">L'Art de Précision</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
