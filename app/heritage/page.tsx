'use client';

import Link from 'next/link';

export default function Heritage() {
  const timeline = [
    {
      year: '1842',
      title: 'The Foundation',
      description: 'In the shadow of the Eiger, three master perfumers establish HORA & ESSENCE with a singular vision: to capture the rhythm of the universe in olfactory form.'
    },
    {
      year: '1889',
      title: 'The First Masterpiece',
      description: 'The legendary "Celestial" fragrance wins the Grand Prix at the Paris Exposition. It becomes the fragrance of emperors and philosophers.'
    },
    {
      year: '1950',
      title: 'Modern Innovation',
      description: 'Under new direction, HORA & ESSENCE pioneers modern extraction techniques while honoring traditional methods. The heritage atelier is expanded.'
    },
    {
      year: '2024',
      title: 'Contemporary Mastery',
      description: 'Today, we continue the legacy with 4th generation master perfumers. Each fragrance is a testament to precision, heritage, and timeless elegance.'
    }
  ];

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
            <Link href="/heritage" className="label-caps text-[#e9c176] border-b border-[#e9c176]">Heritage</Link>
          </div>
          <div className="flex gap-6 text-[#e9c176]">
            <button className="hover:opacity-70">🔍</button>
            <button className="hover:opacity-70">🛍️</button>
          </div>
        </div>
        <div className="divider max-w-7xl mx-auto"></div>
      </nav>

      {/* Hero */}
      <section className="pt-40 pb-20 px-16 text-center max-w-7xl mx-auto">
        <div className="label-caps text-[#e9c176] mb-4">OUR HERITAGE</div>
        <h1 className="headline-xl text-[#e3e2e2] mb-8">Born from the Alpine Peaks</h1>
        <p className="body-lg text-[#d1c5b4] max-w-2xl mx-auto">
          Over 180 years of perfecting the art of fragrance. From the Swiss Alps to the world's most discerning collectors, the story of HORA & ESSENCE is one of unwavering commitment to excellence.
        </p>
      </section>

      {/* Timeline */}
      <section className="px-16 pb-40 max-w-4xl mx-auto">
        <div className="space-y-12">
          {timeline.map((item, idx) => (
            <div key={idx} className="grid grid-cols-4 gap-8 items-start">
              <div className="col-span-1">
                <h3 className="headline-lg text-[#e9c176]">{item.year}</h3>
              </div>
              <div className="col-span-3 border-l border-[#e9c176] pl-8">
                <h4 className="headline-md text-[#e3e2e2] mb-4">{item.title}</h4>
                <p className="body-lg text-[#d1c5b4]">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-16 bg-[#0d0e0f]">
        <div className="max-w-7xl mx-auto">
          <h2 className="headline-lg text-[#e3e2e2] mb-12 text-center">Our Philosophy</h2>
          <div className="grid grid-cols-3 gap-12">
            {[
              {
                title: 'Precision',
                description: 'Every element is measured, tested, and refined. We believe in the meticulous pursuit of perfection.'
              },
              {
                title: 'Lineage',
                description: 'Our craft is passed down through generations. Tradition informs innovation; heritage guides the future.'
              },
              {
                title: 'Integrity',
                description: 'We source responsibly and create sustainably. Our legacy is built on ethical practices and respect for the earth.'
              }
            ].map((value, idx) => (
              <div key={idx} className="space-y-4 border-l border-[#4e4639] pl-6">
                <h3 className="headline-md text-[#e3e2e2]">{value.title}</h3>
                <p className="body-lg text-[#d1c5b4]">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Archive */}
      <section className="py-20 px-16 max-w-7xl mx-auto">
        <h2 className="headline-lg text-[#e3e2e2] mb-12">Heritage Archive</h2>
        <div className="grid grid-cols-2 gap-12">
          <div className="border border-[#4e4639] p-12 space-y-4">
            <h3 className="headline-md text-[#e3e2e2]">Rare Editions</h3>
            <p className="body-lg text-[#d1c5b4]">
              Explore our collection of vintage and discontinued fragrances. Each piece tells a story of its era.
            </p>
            <button className="text-[#e9c176] label-caps hover:translate-x-2 transition-transform">
              View Archive →
            </button>
          </div>
          <div className="border border-[#4e4639] p-12 space-y-4">
            <h3 className="headline-md text-[#e3e2e2]">Founder's Collection</h3>
            <p className="body-lg text-[#d1c5b4]">
              Discover the original formulations and personal creations of our visionary founders.
            </p>
            <button className="text-[#e9c176] label-caps hover:translate-x-2 transition-transform">
              Learn More →
            </button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-16 max-w-7xl mx-auto text-center space-y-8">
        <h2 className="headline-lg text-[#e3e2e2]">Become Part of Our Legacy</h2>
        <p className="body-lg text-[#d1c5b4] max-w-2xl mx-auto">
          When you choose HORA & ESSENCE, you're not just acquiring a fragrance. You're becoming a custodian of a 180-year tradition of excellence.
        </p>
        <Link href="/collections">
          <button className="btn-primary label-caps">Explore Collections</button>
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
