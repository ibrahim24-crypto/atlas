'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function ProductDetail() {
  const params = useParams();
  const id = params.id as string;

  const products: Record<string, any> = {
    '1': {
      name: 'Celestial Meridian',
      tagline: 'Series 01 // Limited Edition',
      price: '$280',
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
      description: 'Deep, mysterious notes of midnight iris and vetiver. Where darkness becomes allure.',
      fullDescription: 'A meditation on the elegance of shadow. The Obsidian Night captures the essence of twilight—that moment when day surrenders to night. It is a fragrance for those who understand that true luxury whispers rather than shouts.',
      topNotes: ['Cardamom', 'Bergamot', 'Black Pepper'],
      heartNotes: ['Iris', 'Violet Leaf', 'Geranium'],
      baseNotes: ['Vetiver', 'Musk', 'Patchouli'],
      concentration: 'Eau de Parfum 50ml',
      edition: 'Open Edition',
      longevity: '10+ Hours'
    }
  };

  const product = products[id] || products['1'];

  return (
    <main className="bg-[#121414] text-[#e3e2e2]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#121414]/90 backdrop-blur-md border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-16 py-6 flex justify-between items-center">
          <Link href="/">
            <div className="text-xl font-light tracking-widest text-[#e9c176]">HORA & ESSENCE</div>
          </Link>
          <div className="flex gap-12">
            <Link href="/collections" className="label-caps text-[#e3e2e2] hover:text-[#e9c176] transition-colors">Collections</Link>
            <Link href="/journal" className="label-caps text-[#e3e2e2] hover:text-[#e9c176] transition-colors">Journal</Link>
            <Link href="/atelier" className="label-caps text-[#e3e2e2] hover:text-[#e9c176] transition-colors">Atelier</Link>
            <Link href="/heritage" className="label-caps text-[#e3e2e2] hover:text-[#e9c176] transition-colors">Heritage</Link>
          </div>
          <div className="flex gap-6 text-[#e9c176]">
            <button className="hover:opacity-70">🔍</button>
            <button className="hover:opacity-70">🛍️</button>
          </div>
        </div>
        <div className="divider max-w-7xl mx-auto"></div>
      </nav>

      {/* Product Hero */}
      <section className="pt-32 pb-20 px-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 gap-16 items-start">
          <div className="aspect-square bg-gradient-to-br from-[#1f2020] to-[#0d0e0f] border border-[#4e4639] flex items-center justify-center">
            <div className="text-center text-[#9a8f80]">
              <div className="text-8xl mb-4">🧴</div>
              <p className="body-md">{product.name}</p>
            </div>
          </div>

          <div className="space-y-8 pt-8">
            <div>
              <div className="label-caps text-[#e9c176] mb-2">{product.tagline}</div>
              <h1 className="headline-xl text-[#e3e2e2]">{product.name}</h1>
            </div>

            <p className="body-lg text-[#d1c5b4]">{product.description}</p>

            <div className="flex items-center gap-8">
              <span className="headline-lg text-[#e9c176]">{product.price}</span>
              <button className="btn-primary label-caps">Add to Cart</button>
            </div>

            <div className="border-t border-[#4e4639] pt-8 space-y-4">
              <div>
                <p className="label-caps text-[#e9c176] mb-2">SPECIFICATIONS</p>
                <div className="space-y-2 body-md text-[#d1c5b4]">
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
      <section className="py-20 px-16 bg-[#0d0e0f] border-y border-[#4e4639]">
        <div className="max-w-7xl mx-auto">
          <h2 className="headline-lg text-[#e3e2e2] mb-12">Olfactory Profile</h2>
          <div className="grid grid-cols-3 gap-12">
            <div className="space-y-4">
              <p className="label-caps text-[#e9c176] mb-4">TOP NOTES</p>
              <ul className="space-y-2">
                {product.topNotes.map((note: string, idx: number) => (
                  <li key={idx} className="body-md text-[#d1c5b4]">• {note}</li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <p className="label-caps text-[#e9c176] mb-4">HEART NOTES</p>
              <ul className="space-y-2">
                {product.heartNotes.map((note: string, idx: number) => (
                  <li key={idx} className="body-md text-[#d1c5b4]">• {note}</li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <p className="label-caps text-[#e9c176] mb-4">BASE NOTES</p>
              <ul className="space-y-2">
                {product.baseNotes.map((note: string, idx: number) => (
                  <li key={idx} className="body-md text-[#d1c5b4]">• {note}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-20 px-16 max-w-7xl mx-auto">
        <h2 className="headline-lg text-[#e3e2e2] mb-8">The Story</h2>
        <p className="body-lg text-[#d1c5b4] max-w-3xl leading-relaxed">{product.fullDescription}</p>
      </section>

      {/* CTA */}
      <section className="py-20 px-16 max-w-7xl mx-auto text-center space-y-8">
        <h2 className="headline-lg text-[#e3e2e2]">Experience This Fragrance</h2>
        <p className="body-lg text-[#d1c5b4] max-w-2xl mx-auto">
          Visit one of our exclusive ateliers for a private fragrance consultation. Our experts will guide you through the olfactory journey.
        </p>
        <Link href="/atelier">
          <button className="btn-primary label-caps">Book Consultation</button>
        </Link>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#4e4639] py-20 px-16 bg-[#0d0e0f]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-4 gap-12 mb-12">
            <div>
              <div className="label-caps text-[#e9c176] mb-4">HORA & ESSENCE</div>
              <p className="body-md text-[#9a8f80]">The art of fragrance meets the precision of craft.</p>
            </div>
            <div>
              <p className="label-caps text-[#e3e2e2] mb-4">Collections</p>
              <ul className="space-y-2">
                <li><Link href="/collections" className="body-md text-[#9a8f80] hover:text-[#e9c176] transition-colors">All Fragrances</Link></li>
                <li><Link href="/collections" className="body-md text-[#9a8f80] hover:text-[#e9c176] transition-colors">Limited Editions</Link></li>
                <li><Link href="/collections" className="body-md text-[#9a8f80] hover:text-[#e9c176] transition-colors">Archive</Link></li>
              </ul>
            </div>
            <div>
              <p className="label-caps text-[#e3e2e2] mb-4">Company</p>
              <ul className="space-y-2">
                <li><Link href="/heritage" className="body-md text-[#9a8f80] hover:text-[#e9c176] transition-colors">About</Link></li>
                <li><Link href="/journal" className="body-md text-[#9a8f80] hover:text-[#e9c176] transition-colors">Stories</Link></li>
                <li><Link href="/atelier" className="body-md text-[#9a8f80] hover:text-[#e9c176] transition-colors">Atelier</Link></li>
              </ul>
            </div>
            <div>
              <p className="label-caps text-[#e3e2e2] mb-4">Legal</p>
              <ul className="space-y-2">
                <li><a href="#" className="body-md text-[#9a8f80] hover:text-[#e9c176] transition-colors">Privacy</a></li>
                <li><a href="#" className="body-md text-[#9a8f80] hover:text-[#e9c176] transition-colors">Terms</a></li>
                <li><a href="#" className="body-md text-[#9a8f80] hover:text-[#e9c176] transition-colors">Shipping</a></li>
              </ul>
            </div>
          </div>
          <div className="divider mb-8"></div>
          <div className="flex justify-between items-center">
            <p className="body-md text-[#9a8f80]">© 2026 HORA & ESSENCE. All rights reserved.</p>
            <p className="label-caps text-[#9a8f80]">L'Art de Précision</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
