'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useState } from 'react';
import { products, socialAccounts, ingredients } from '@/lib/data';
import { MobileMenu } from '@/components/mobile-menu';
import { DesktopMenu } from '@/components/desktop-menu';
import { SocialLink } from '@/components/social-links';

export default function ProductDetail() {
  const params = useParams();
  const id = params.id as string;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Collections', href: '/collections' },
    { name: 'Journal', href: '/journal' },
    { name: 'Atelier', href: '/atelier' },
    { name: 'Heritage', href: '/heritage' },
  ];

  const product = products.find(p => p.id === id) || products[0];

  return (
    <main className="bg-[#0a0a0a] text-[#f5f0eb]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 md:px-16 py-6 flex justify-between items-center">
          <Link href="/">
            <div className="text-lg md:text-xl font-light tracking-widest text-[#c9a96e]">ATLAS</div>
          </Link>
          
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

        <div className="divider max-w-7xl mx-auto"></div>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} activePath={`/product/${id}`} navItems={navItems} />

      {/* Desktop Menu */}
      <DesktopMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} navItems={navItems} />

      {/* Product Hero */}
      <section className="pt-24 md:pt-32 pb-12 md:pb-20 px-4 md:px-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start">
          <div className="aspect-square bg-gradient-to-br from-[#1a1a1a] to-[#141414] border border-[#3d3630] overflow-hidden">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
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

      {/* Olfactory Profile with Ingredient Images */}
      <section className="py-12 md:py-20 px-4 md:px-16 bg-[#141414] border-y border-[#3d3630]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-serif text-[#f5f0eb] mb-8 md:mb-12">Olfactory Profile</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {/* Top Notes */}
            <div className="space-y-4">
              <p className="label-caps text-[#c9a96e] mb-6">TOP NOTES</p>
              <div className="space-y-3">
                {product.topNotes.map((note: string, idx: number) => {
                  const ingredient = ingredients.find((ing: any) => ing.name === note);
                  return (
                    <div
                      key={idx}
                      className="group relative cursor-pointer overflow-hidden rounded-lg transition-all duration-300"
                    >
                      <div className="bg-[#1a1a1a] border border-[#3d3630] p-4 rounded-lg transition-all duration-300 group-hover:border-[#c9a96e] group-hover:shadow-lg group-hover:shadow-[#c9a96e]/10">
                        <p className="body-md text-[#c4b8a8] group-hover:text-[#c9a96e] transition-colors">{note}</p>
                      </div>
                      {ingredient && (
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                          <img
                            src={ingredient.image}
                            alt={ingredient.name}
                            className="w-full h-full object-cover absolute top-0 left-0 opacity-20"
                          />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
            {/* Heart Notes */}
            <div className="space-y-4">
              <p className="label-caps text-[#c9a96e] mb-6">HEART NOTES</p>
              <div className="space-y-3">
                {product.heartNotes.map((note: string, idx: number) => {
                  const ingredient = ingredients.find((ing: any) => ing.name === note);
                  return (
                    <div
                      key={idx}
                      className="group relative cursor-pointer overflow-hidden rounded-lg transition-all duration-300"
                    >
                      <div className="bg-[#1a1a1a] border border-[#3d3630] p-4 rounded-lg transition-all duration-300 group-hover:border-[#c9a96e] group-hover:shadow-lg group-hover:shadow-[#c9a96e]/10">
                        <p className="body-md text-[#c4b8a8] group-hover:text-[#c9a96e] transition-colors">{note}</p>
                      </div>
                      {ingredient && (
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                          <img
                            src={ingredient.image}
                            alt={ingredient.name}
                            className="w-full h-full object-cover absolute top-0 left-0 opacity-20"
                          />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
            {/* Base Notes */}
            <div className="space-y-4">
              <p className="label-caps text-[#c9a96e] mb-6">BASE NOTES</p>
              <div className="space-y-3">
                {product.baseNotes.map((note: string, idx: number) => {
                  const ingredient = ingredients.find((ing: any) => ing.name === note);
                  return (
                    <div
                      key={idx}
                      className="group relative cursor-pointer overflow-hidden rounded-lg transition-all duration-300"
                    >
                      <div className="bg-[#1a1a1a] border border-[#3d3630] p-4 rounded-lg transition-all duration-300 group-hover:border-[#c9a96e] group-hover:shadow-lg group-hover:shadow-[#c9a96e]/10">
                        <p className="body-md text-[#c4b8a8] group-hover:text-[#c9a96e] transition-colors">{note}</p>
                      </div>
                      {ingredient && (
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                          <img
                            src={ingredient.image}
                            alt={ingredient.name}
                            className="w-full h-full object-cover absolute top-0 left-0 opacity-20"
                          />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
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
            <p className="body-md text-[#8a7e6b]">© 2026 ATLAS MARAKECH. All rights reserved.</p>
            <p className="label-caps text-[#8a7e6b]">L'Art de Précision</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
