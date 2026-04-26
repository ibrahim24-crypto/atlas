'use client';

import Link from 'next/link';

export default function Journal() {
  const articles = [
    {
      id: 1,
      title: 'The Origins of Oud: A Journey Through Time',
      date: 'March 15, 2024',
      excerpt: 'Discover the ancient traditions and modern techniques behind the world\'s most precious fragrance ingredient.',
      category: 'Ingredients'
    },
    {
      id: 2,
      title: 'Master Perfumers: An Interview with Claude Beaumont',
      date: 'March 8, 2024',
      excerpt: 'Meet the artisan behind our signature fragrances and learn about his 40 years of olfactory innovation.',
      category: 'Craftsmanship'
    },
    {
      id: 3,
      title: 'The Science of Scent: How Our Brain Perceives Fragrance',
      date: 'February 28, 2024',
      excerpt: 'Explore the neurological dance between scent and memory, and why certain fragrances evoke profound emotions.',
      category: 'Science'
    },
    {
      id: 4,
      title: 'Sustainable Sourcing: Our Commitment to the Earth',
      date: 'February 20, 2024',
      excerpt: 'Learn how we source our raw materials ethically while preserving the ecosystems that sustain them.',
      category: 'Sustainability'
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
            <Link href="/journal" className="label-caps text-[#e9c176] border-b border-[#e9c176]">Journal</Link>
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

      {/* Hero */}
      <section className="pt-40 pb-20 px-16 text-center max-w-7xl mx-auto">
        <div className="label-caps text-[#e9c176] mb-4">ARTISANAL JOURNAL</div>
        <h1 className="headline-xl text-[#e3e2e2] mb-8">Stories of Craft & Creation</h1>
        <p className="body-lg text-[#d1c5b4] max-w-2xl mx-auto">
          Exploring the intersection of art, science, and tradition. Essays, interviews, and insights from the world of fine fragrance.
        </p>
      </section>

      {/* Articles */}
      <section className="px-16 pb-40 max-w-4xl mx-auto">
        <div className="space-y-16">
          {articles.map((article) => (
            <article key={article.id} className="border-b border-[#4e4639] pb-16 last:border-b-0">
              <div className="label-caps text-[#e9c176] mb-3">{article.category}</div>
              <h2 className="headline-lg text-[#e3e2e2] mb-4">{article.title}</h2>
              <p className="body-lg text-[#d1c5b4] mb-6">{article.excerpt}</p>
              <div className="flex justify-between items-center">
                <span className="body-md text-[#9a8f80]">{article.date}</span>
                <Link href={`/journal/${article.id}`}>
                  <button className="text-[#e9c176] label-caps hover:translate-x-2 transition-transform">
                    Read Article →
                  </button>
                </Link>
              </div>
            </article>
          ))}
        </div>
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
