'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Collections() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const fragrances = [
    {
      id: 1,
      name: 'Celestial Meridian',
      tagline: 'Limited Edition',
      description: 'Bergamot, oud, amber in perfect harmony.',
      notes: ['Bergamot', 'Oud', 'Amber'],
      price: '$280'
    },
    {
      id: 2,
      name: 'Obsidian Night',
      tagline: 'Signature Series',
      description: 'Deep mystery through iris and vetiver.',
      notes: ['Iris', 'Vetiver', 'Musk'],
      price: '$240'
    },
    {
      id: 3,
      name: 'Aurore Essence',
      tagline: 'Heritage Collection',
      description: 'Luminous citrus and white florals unite.',
      notes: ['Neroli', 'Jasmine', 'Lemon'],
      price: '$260'
    },
    {
      id: 4,
      name: 'Temporal Whisper',
      tagline: 'Exclusive Release',
      description: 'Ephemeral saffron, sandalwood, rose absolute.',
      notes: ['Saffron', 'Sandalwood', 'Rose'],
      price: '$320'
    },
    {
      id: 5,
      name: 'Veiled Violet',
      tagline: 'New Arrival',
      description: 'Sophisticated violets, iris, and amber.',
      notes: ['Violet', 'Iris Root', 'Amber'],
      price: '$270'
    },
    {
      id: 6,
      name: 'Nocturne',
      tagline: 'Master Series',
      description: 'Midnight serenity with leather and tobacco.',
      notes: ['Leather', 'Tobacco', 'Vanilla'],
      price: '$300'
    }
  ];

  return (
    <main className="bg-[#121414] text-[#e3e2e2]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#121414]/90 backdrop-blur-md border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 md:px-16 py-6 flex justify-between items-center">
          <Link href="/">
            <div className="text-lg md:text-xl font-light tracking-widest text-[#e9c176]">HORA</div>
          </Link>
          
          <div className="hidden md:flex gap-12">
            <Link href="/collections" className="label-caps text-[#e9c176] border-b border-[#e9c176]">Collections</Link>
            <Link href="/journal" className="label-caps text-[#e3e2e2] hover:text-[#e9c176] transition-colors">Journal</Link>
            <Link href="/atelier" className="label-caps text-[#e3e2e2] hover:text-[#e9c176] transition-colors">Atelier</Link>
            <Link href="/heritage" className="label-caps text-[#e3e2e2] hover:text-[#e9c176] transition-colors">Heritage</Link>
          </div>

          <div className="hidden md:flex gap-6 text-[#e9c176]">
            <button className="hover:opacity-70 transition-opacity">🔍</button>
            <button className="hover:opacity-70 transition-opacity">🛍️</button>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-[#e9c176] text-xl"
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t border-[#4e4639] bg-[#121414]/95 backdrop-blur-md">
            <div className="px-4 py-4 space-y-4">
              <Link href="/collections" onClick={() => setMobileMenuOpen(false)} className="block label-caps text-[#e9c176] py-2">Collections</Link>
              <Link href="/journal" onClick={() => setMobileMenuOpen(false)} className="block label-caps text-[#e3e2e2] hover:text-[#e9c176] transition-colors py-2">Journal</Link>
              <Link href="/atelier" onClick={() => setMobileMenuOpen(false)} className="block label-caps text-[#e3e2e2] hover:text-[#e9c176] transition-colors py-2">Atelier</Link>
              <Link href="/heritage" onClick={() => setMobileMenuOpen(false)} className="block label-caps text-[#e3e2e2] hover:text-[#e9c176] transition-colors py-2">Heritage</Link>
            </div>
          </div>
        )}

        <div className="divider max-w-7xl mx-auto"></div>
      </nav>

      {/* Hero */}
      <section className="pt-24 md:pt-40 pb-12 md:pb-20 px-4 md:px-16 text-center max-w-7xl mx-auto">
        <div className="label-caps text-[#e9c176] mb-4">OUR COLLECTION</div>
        <h1 className="text-3xl md:text-5xl font-serif text-[#e3e2e2] mb-6 md:mb-8">Fragrances of Distinction</h1>
        <p className="body-lg text-[#d1c5b4] max-w-2xl mx-auto text-sm md:text-base">
          Each fragrance is a conversation between tradition and innovation, crafted to tell your unique story.
        </p>
      </section>

      {/* Collections Grid */}
      <section className="px-4 md:px-16 pb-20 md:pb-40 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {fragrances.map((fragrance, idx) => (
            <Link key={fragrance.id} href={`/product/${fragrance.id}`}>
              <div className="space-y-6 group cursor-pointer animate-fade-in-up" style={{ animationDelay: `${idx * 100}ms` }}>
                <div className="aspect-square bg-gradient-to-br from-[#1f2020] to-[#0d0e0f] border border-[#4e4639] flex items-center justify-center overflow-hidden group-hover:border-[#e9c176] transition-all duration-300">
                  <div className="text-center text-[#9a8f80] group-hover:text-[#e9c176] transition-colors">
                    <div className="text-4xl md:text-6xl mb-4 group-hover:scale-110 transition-transform">🧴</div>
                    <p className="body-md text-xs md:text-sm">{fragrance.name}</p>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-lg md:text-2xl font-serif text-[#e3e2e2] mb-1">{fragrance.name}</h3>
                      <p className="label-caps text-[#e9c176] text-xs">{fragrance.tagline}</p>
                    </div>
                    <p className="text-sm md:text-base font-serif text-[#e9c176]">{fragrance.price}</p>
                  </div>
                  <p className="body-md text-[#d1c5b4] mb-4 text-xs md:text-sm">{fragrance.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {fragrance.notes.map((note, i) => (
                      <span key={i} className="text-xs px-3 py-1 border border-[#4e4639] text-[#9a8f80] rounded-none">
                        {note}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#4e4639] py-12 md:py-20 px-4 md:px-16 bg-[#0d0e0f]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 mb-8 md:mb-12">
            <div>
              <div className="label-caps text-[#e9c176] mb-4 text-xs md:text-sm">HORA & ESSENCE</div>
              <p className="body-md text-[#9a8f80] text-xs md:text-base">Luxury fragrances since 1842.</p>
              <div className="flex gap-4 mt-4">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-[#e9c176] hover:text-[#e3e2e2] transition-colors text-lg">📷</a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-[#e9c176] hover:text-[#e3e2e2] transition-colors text-lg">f</a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-[#e9c176] hover:text-[#e3e2e2] transition-colors text-lg">𝕏</a>
                <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="text-[#e9c176] hover:text-[#e3e2e2] transition-colors text-lg">♪</a>
              </div>
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
              <p className="label-caps text-[#e3e2e2] mb-4 text-xs md:text-sm">Legal & Contact</p>
              <ul className="space-y-2">
                <li><a href="/legal/privacy" className="body-md text-[#9a8f80] hover:text-[#e9c176] transition-colors text-xs md:text-base">Privacy</a></li>
                <li><a href="/legal/terms" className="body-md text-[#9a8f80] hover:text-[#e9c176] transition-colors text-xs md:text-base">Terms</a></li>
                <li><a href="tel:+44-123-456" className="body-md text-[#9a8f80] hover:text-[#e9c176] transition-colors text-xs md:text-base">+44 (0) 123 456</a></li>
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
