'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useState } from 'react';

export default function ProductDetail() {
  const params = useParams();
  const id = params.id as string;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const products: Record<string, any> = {
    '1': {
      name: 'Celestial Meridian',
      tagline: 'Series 01 // Limited Edition',
      price: '$280',
      year: '2024',
      description: 'A masterwork of olfactory cartography. This composition features a tourbillon of bergamot, amber, and precious oud, encased in hand-blown obsidian glass.',
      fullDescription: 'The Celestial Meridian represents the pinnacle of our artisanal process. Over 400 hours of meticulous crafting go into each bottle—from the hand-blown glass to the careful layering of each olfactory note. This is a fragrance designed to be discovered anew with each wearing.',
      topNotes: ['Bergamot', 'Pink Pepper', 'Saffron'],
      heartNotes: ['Oud', 'Rose Absolute', 'Jasmine'],
      baseNotes: ['Amber', 'Sandalwood', 'Vetiver'],
      concentration: 'Eau de Parfum 50ml',
      edition: '08 / 10',
      longevity: '12+ Hours'
    },
    '2': {
      name: 'Obsidian Night',
      tagline: 'Signature Series',
      price: '$240',
      year: '2023',
      description: 'Deep, mysterious notes of midnight iris and vetiver. Where darkness becomes allure.',
      fullDescription: 'A meditation on the elegance of shadow. The Obsidian Night captures the essence of twilight—that moment when day surrenders to night. It is a fragrance for those who understand that true luxury whispers rather than shouts.',
      topNotes: ['Cardamom', 'Bergamot', 'Black Pepper'],
      heartNotes: ['Iris', 'Violet Leaf', 'Geranium'],
      baseNotes: ['Vetiver', 'Musk', 'Patchouli'],
      concentration: 'Eau de Parfum 50ml',
      edition: 'Open Edition',
      longevity: '10+ Hours'
    },
    '3': {
      name: 'Aurore Essence',
      tagline: 'Heritage Collection',
      price: '$260',
      year: '2022',
      description: 'Luminous citrus and white florals unite in a celebration of dawn. Inspired by the first light over the Swiss Alps.',
      fullDescription: 'Aurore Essence captures the golden moment when dawn breaks over the Alpine horizon. This fragrance is a testament to the power of light—how it transforms, how it reveals, how it inspires. Each note is a ray of morning sun.',
      topNotes: ['Lemon', 'Neroli', 'Bergamot'],
      heartNotes: ['Jasmine', 'White Rose', 'Lily of the Valley'],
      baseNotes: ['White Musk', 'Cedar', 'Blonde Amber'],
      concentration: 'Eau de Parfum 50ml',
      edition: 'Open Edition',
      longevity: '8+ Hours'
    },
    '4': {
      name: 'Temporal Whisper',
      tagline: 'Exclusive Release',
      price: '$320',
      year: '2024',
      description: 'Ephemeral saffron, sandalwood, and rose absolute converge in a meditation on the passage of time.',
      fullDescription: 'Time leaves its mark on everything it touches. Temporal Whisper distills this truth into a fragrance that evolves on your skin—each hour revealing a new facet, a new emotion, a new memory. This is a scent that tells the story of you.',
      topNotes: ['Saffron', 'Pink Pepper', 'Elemi'],
      heartNotes: ['Rose Absolute', 'Orris Butter', 'Ylang-Ylang'],
      baseNotes: ['Sandalwood', 'Ambergris', 'Cashmeran'],
      concentration: 'Extrait de Parfum 50ml',
      edition: '05 / 10',
      longevity: '14+ Hours'
    },
    '5': {
      name: 'Veiled Violet',
      tagline: 'New Arrival',
      price: '$270',
      year: '2025',
      description: 'Sophisticated violets, iris root, and amber create a fragrance of quiet power and subtle grace.',
      fullDescription: 'The violet has long been a symbol of modesty and refinement. Veiled Violet takes this symbolism and transforms it into an olfactory statement—quiet but unmistakable, delicate yet enduring. This is a fragrance for those who need no introduction.',
      topNotes: ['Violet Leaf', 'Bergamot', 'Clary Sage'],
      heartNotes: ['Iris Root', 'Violet', 'Heliotrope'],
      baseNotes: ['Amber', 'Blond Woods', 'Soft Musk'],
      concentration: 'Eau de Parfum 50ml',
      edition: 'Open Edition',
      longevity: '9+ Hours'
    },
    '6': {
      name: 'Nocturne',
      tagline: 'Master Series',
      price: '$300',
      year: '2024',
      description: 'Midnight serenity expressed through rich leather, aged tobacco, and vanilla. A nocturnal masterpiece.',
      fullDescription: 'Nocturne is an ode to the hours between dusk and dawn. It draws inspiration from the nocturnal rituals of master perfumers past—those who knew that the most profound fragrances reveal themselves in darkness. Each wearing is a private performance.',
      topNotes: ['Tobacco Leaf', 'Cinnamon', 'Black Currant'],
      heartNotes: ['Leather', 'Oud', 'Rose'],
      baseNotes: ['Vanilla', 'Tonka Bean', 'Benzoin'],
      concentration: 'Eau de Parfum 50ml',
      edition: '03 / 10',
      longevity: '12+ Hours'
    }
  };

  const product = products[id] || products['1'];

  return (
    <main className="bg-[#0a0a0a] text-[#f5f0eb]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 md:px-16 py-6 flex justify-between items-center">
          <Link href="/">
            <div className="text-lg md:text-xl font-light tracking-widest text-[#c9a96e]">ATLAS</div>
          </Link>
          
          <div className="hidden md:flex gap-12">
            <Link href="/collections" className="label-caps text-[#f5f0eb] hover:text-[#c9a96e] transition-colors">Collections</Link>
            <Link href="/journal" className="label-caps text-[#f5f0eb] hover:text-[#c9a96e] transition-colors">Journal</Link>
            <Link href="/atelier" className="label-caps text-[#f5f0eb] hover:text-[#c9a96e] transition-colors">Atelier</Link>
            <Link href="/heritage" className="label-caps text-[#f5f0eb] hover:text-[#c9a96e] transition-colors">Heritage</Link>
          </div>

          <div className="hidden md:flex gap-6 text-[#c9a96e]">
            <button className="hover:opacity-70 transition-opacity"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg></button>
            <button className="hover:opacity-70 transition-opacity"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg></button>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-[#c9a96e] text-xl"
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t border-[#3d3630] bg-[#0a0a0a]/95 backdrop-blur-md">
            <div className="px-4 py-4 space-y-4">
              <Link href="/collections" onClick={() => setMobileMenuOpen(false)} className="block label-caps text-[#f5f0eb] hover:text-[#c9a96e] transition-colors py-2">Collections</Link>
              <Link href="/journal" onClick={() => setMobileMenuOpen(false)} className="block label-caps text-[#f5f0eb] hover:text-[#c9a96e] transition-colors py-2">Journal</Link>
              <Link href="/atelier" onClick={() => setMobileMenuOpen(false)} className="block label-caps text-[#f5f0eb] hover:text-[#c9a96e] transition-colors py-2">Atelier</Link>
              <Link href="/heritage" onClick={() => setMobileMenuOpen(false)} className="block label-caps text-[#f5f0eb] hover:text-[#c9a96e] transition-colors py-2">Heritage</Link>
              <div className="pt-4 flex gap-4 border-t border-[#3d3630]">
                <button className="text-[#c9a96e]"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg></button>
                <button className="text-[#c9a96e]"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg></button>
              </div>
            </div>
          </div>
        )}

        <div className="divider max-w-7xl mx-auto"></div>
      </nav>

      {/* Product Hero */}
      <section className="pt-24 md:pt-32 pb-12 md:pb-20 px-4 md:px-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start">
          <div className="aspect-square bg-gradient-to-br from-[#1a1a1a] to-[#141414] border border-[#3d3630] flex items-center justify-center">
            <div className="text-center text-[#8a7e6b]">
              <div className="text-6xl md:text-8xl mb-4">🧴</div>
              <p className="body-md text-sm md:text-base">{product.name}</p>
            </div>
          </div>

          <div className="space-y-6 md:space-y-8 pt-4 md:pt-8">
            <div>
              <div className="label-caps text-[#c9a96e] mb-2">{product.tagline}</div>
              <h1 className="text-3xl md:text-5xl font-serif text-[#f5f0eb]">{product.name}</h1>
            </div>

            <p className="body-lg text-[#c4b8a8] text-sm md:text-base">{product.description}</p>

            <div className="flex items-center gap-4 md:gap-8">
              <span className="text-2xl md:text-4xl font-serif text-[#c9a96e]">{product.price}</span>
              <button className="btn-primary label-caps text-xs md:text-sm">Add to Cart</button>
            </div>

            <div className="border-t border-[#3d3630] pt-6 md:pt-8 space-y-4">
              <div>
                <p className="label-caps text-[#c9a96e] mb-2">SPECIFICATIONS</p>
                <div className="space-y-2 body-md text-[#c4b8a8] text-sm md:text-base">
                  <div className="flex justify-between">
                    <span>Concentration:</span>
                    <span>{product.concentration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Edition:</span>
                    <span>{product.edition}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Longevity:</span>
                    <span>{product.longevity}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Olfactory Profile */}
      <section className="py-12 md:py-20 px-4 md:px-16 bg-[#141414] border-y border-[#3d3630]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-serif text-[#f5f0eb] mb-8 md:mb-12">Olfactory Profile</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div className="space-y-4">
              <p className="label-caps text-[#c9a96e] mb-4">TOP NOTES</p>
              <ul className="space-y-2">
                {product.topNotes.map((note: string, idx: number) => (
                  <li key={idx} className="body-md text-[#c4b8a8]">• {note}</li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <p className="label-caps text-[#c9a96e] mb-4">HEART NOTES</p>
              <ul className="space-y-2">
                {product.heartNotes.map((note: string, idx: number) => (
                  <li key={idx} className="body-md text-[#c4b8a8]">• {note}</li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <p className="label-caps text-[#c9a96e] mb-4">BASE NOTES</p>
              <ul className="space-y-2">
                {product.baseNotes.map((note: string, idx: number) => (
                  <li key={idx} className="body-md text-[#c4b8a8]">• {note}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-12 md:py-20 px-4 md:px-16 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-serif text-[#f5f0eb] mb-6 md:mb-8">The Story</h2>
        <p className="body-lg text-[#c4b8a8] max-w-3xl leading-relaxed text-sm md:text-base">{product.fullDescription}</p>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-20 px-4 md:px-16 max-w-7xl mx-auto text-center space-y-6 md:space-y-8">
        <h2 className="text-2xl md:text-4xl font-serif text-[#f5f0eb]">Experience This Fragrance</h2>
        <p className="body-lg text-[#c4b8a8] max-w-2xl mx-auto text-sm md:text-base">
          Visit one of our exclusive ateliers for a private fragrance consultation. Our experts will guide you through the olfactory journey.
        </p>
        <Link href="/atelier">
          <button className="btn-primary label-caps">Book Consultation</button>
        </Link>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#3d3630] py-12 md:py-20 px-4 md:px-16 bg-[#141414]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 mb-8 md:mb-12">
            <div>
              <div className="label-caps text-[#c9a96e] mb-4 text-xs md:text-sm">ATLAS MARAKECH</div>
              <p className="body-md text-[#8a7e6b] text-xs md:text-base">Luxury fragrances since 1842.</p>
              <div className="flex flex-col gap-3 mt-4">
                <a href="https://www.instagram.com/atlas_marakech/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#c9a96e] hover:text-[#f5f0eb] transition-colors">
                  <svg className="social-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                  <span className="body-md text-sm">Instagram</span>
                </a>
                <a href="https://www.facebook.com/profile.php?id=61589002400891" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#c9a96e] hover:text-[#f5f0eb] transition-colors">
                  <svg className="social-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
                  <span className="body-md text-sm">Facebook</span>
                </a>
                <a href="https://twitter.com/atlasmarakech" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#c9a96e] hover:text-[#f5f0eb] transition-colors">
                  <svg className="social-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
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
            <p className="body-md text-[#8a7e6b]">© 2026 ATLAS MARAKECH. All rights reserved.</p>
            <p className="label-caps text-[#8a7e6b]">L'Art de Précision</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
