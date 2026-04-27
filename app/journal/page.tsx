'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useTransitionNavigation } from '@/components/page-transition';
import { MobileMenu } from '@/components/mobile-menu';
import { DesktopMenu } from '@/components/desktop-menu';
import { SocialLink } from '@/components/social-links';
import { socialAccounts } from '@/lib/data';

export default function Journal() {
  const { navigate } = useTransitionNavigation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Collections', href: '/collections' },
    { name: 'Journal', href: '/journal' },
    { name: 'Atelier', href: '/atelier' },
    { name: 'Heritage', href: '/heritage' },
  ];

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
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} activePath="/journal" navItems={navItems} />

      {/* Desktop Menu */}
      <DesktopMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} navItems={navItems} />

      {/* Hero */}
      <section className="pt-24 md:pt-40 pb-12 md:pb-20 px-4 md:px-16 text-center max-w-7xl mx-auto">
        <div className="label-caps text-[#c9a96e] mb-4">ARTISANAL JOURNAL</div>
        <h1 className="text-3xl md:text-5xl font-serif text-[#f5f0eb] mb-6 md:mb-8">Stories of Craft & Creation</h1>
        <p className="body-lg text-[#c4b8a8] max-w-2xl mx-auto text-sm md:text-base">
          Exploring the intersection of art, science, and tradition. Essays, interviews, and insights from the world of fine fragrance.
        </p>
      </section>

      {/* Articles */}
      <section className="px-4 md:px-16 pb-20 md:pb-40 max-w-4xl mx-auto">
        <div className="space-y-16">
          {articles.map((article) => (
            <article key={article.id} className="border-b border-[#3d3630] pb-16 last:border-b-0">
              <div className="label-caps text-[#c9a96e] mb-3">{article.category}</div>
              <h2 className="headline-lg text-[#f5f0eb] mb-4">{article.title}</h2>
              <p className="body-lg text-[#c4b8a8] mb-6">{article.excerpt}</p>
              <div className="flex justify-between items-center">
                <span className="body-md text-[#8a7e6b]">{article.date}</span>
                <Link href={`/journal/${article.id}`}>
                  <button className="text-[#c9a96e] label-caps hover:translate-x-2 transition-transform">
                    Read Article →
                  </button>
                </Link>
              </div>
            </article>
          ))}
        </div>
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
