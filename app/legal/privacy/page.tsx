'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Privacy() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <main className="bg-[#121414] text-[#e3e2e2]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#121414]/90 backdrop-blur-md border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 md:px-16 py-6 flex justify-between items-center">
          <Link href="/">
            <div className="text-lg md:text-xl font-light tracking-widest text-[#e9c176]">HORA</div>
          </Link>
          
          <div className="hidden md:flex gap-12">
            <Link href="/collections" className="label-caps text-[#e3e2e2] hover:text-[#e9c176] transition-colors">Collections</Link>
            <Link href="/journal" className="label-caps text-[#e3e2e2] hover:text-[#e9c176] transition-colors">Journal</Link>
            <Link href="/atelier" className="label-caps text-[#e3e2e2] hover:text-[#e9c176] transition-colors">Atelier</Link>
            <Link href="/heritage" className="label-caps text-[#e3e2e2] hover:text-[#e9c176] transition-colors">Heritage</Link>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-[#e9c176] text-xl"
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t border-[#4e4639] bg-[#121414]/95">
            <div className="px-4 py-4 space-y-4">
              <Link href="/collections" onClick={() => setMobileMenuOpen(false)} className="block label-caps text-[#e3e2e2] py-2">Collections</Link>
              <Link href="/journal" onClick={() => setMobileMenuOpen(false)} className="block label-caps text-[#e3e2e2] py-2">Journal</Link>
              <Link href="/atelier" onClick={() => setMobileMenuOpen(false)} className="block label-caps text-[#e3e2e2] py-2">Atelier</Link>
              <Link href="/heritage" onClick={() => setMobileMenuOpen(false)} className="block label-caps text-[#e3e2e2] py-2">Heritage</Link>
            </div>
          </div>
        )}

        <div className="divider max-w-7xl mx-auto"></div>
      </nav>

      {/* Content */}
      <section className="pt-24 md:pt-40 pb-20 md:pb-40 px-4 md:px-16 max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-serif text-[#e3e2e2] mb-8">Privacy Policy</h1>
        
        <div className="space-y-8 text-[#d1c5b4]">
          <section className="space-y-4">
            <h2 className="text-2xl font-serif text-[#e9c176]">1. Introduction</h2>
            <p className="body-lg text-sm md:text-base">
              HORA & ESSENCE ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif text-[#e9c176]">2. Information We Collect</h2>
            <p className="body-lg text-sm md:text-base">
              We collect information you provide directly to us, such as when you make a purchase, create an account, or contact us. This may include your name, email address, postal address, phone number, and payment information.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif text-[#e9c176]">3. How We Use Your Information</h2>
            <p className="body-lg text-sm md:text-base">
              We use the information we collect to process transactions, send transactional and promotional communications, and improve our services. We never sell your personal information to third parties.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif text-[#e9c176]">4. Data Security</h2>
            <p className="body-lg text-sm md:text-base">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif text-[#e9c176]">5. Your Rights</h2>
            <p className="body-lg text-sm md:text-base">
              You have the right to access, correct, or delete your personal information. Contact us at privacy@horaessence.com to exercise these rights.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif text-[#e9c176]">6. Contact Us</h2>
            <p className="body-lg text-sm md:text-base">
              If you have questions about this Privacy Policy, please contact us at:
              <br />
              Email: privacy@horaessence.com
              <br />
              Phone: +41 22 123 4567
              <br />
              Address: Geneva, Switzerland
            </p>
          </section>

          <p className="text-xs text-[#9a8f80] pt-8">Last updated: April 2024</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#4e4639] py-12 md:py-20 px-4 md:px-16 bg-[#0d0e0f]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 mb-8">
            <div>
              <div className="label-caps text-[#e9c176] mb-4 text-xs md:text-sm">HORA & ESSENCE</div>
              <p className="body-md text-[#9a8f80] text-xs md:text-base">Luxury fragrances since 1842.</p>
            </div>
            <div>
              <p className="label-caps text-[#e3e2e2] mb-4 text-xs md:text-sm">Legal</p>
              <ul className="space-y-2">
                <li><a href="/legal/privacy" className="body-md text-[#e9c176] text-xs md:text-base">Privacy</a></li>
                <li><a href="/legal/terms" className="body-md text-[#9a8f80] hover:text-[#e9c176] transition-colors text-xs md:text-base">Terms</a></li>
                <li><a href="/legal/contact" className="body-md text-[#9a8f80] hover:text-[#e9c176] transition-colors text-xs md:text-base">Contact</a></li>
              </ul>
            </div>
            <div>
              <p className="label-caps text-[#e3e2e2] mb-4 text-xs md:text-sm">Company</p>
              <ul className="space-y-2">
                <li><Link href="/heritage" className="body-md text-[#9a8f80] hover:text-[#e9c176] transition-colors text-xs md:text-base">About</Link></li>
                <li><Link href="/journal" className="body-md text-[#9a8f80] hover:text-[#e9c176] transition-colors text-xs md:text-base">Stories</Link></li>
              </ul>
            </div>
            <div>
              <p className="label-caps text-[#e3e2e2] mb-4 text-xs md:text-sm">Follow Us</p>
              <div className="flex gap-4">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-[#e9c176] hover:text-[#e3e2e2] transition-colors">📷</a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-[#e9c176] hover:text-[#e3e2e2] transition-colors">f</a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-[#e9c176] hover:text-[#e3e2e2] transition-colors">𝕏</a>
              </div>
            </div>
          </div>
          <div className="divider mb-8"></div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
            <p className="body-md text-[#9a8f80]">© 2026 HORA & ESSENCE. All rights reserved.</p>
            <p className="label-caps text-[#9a8f80]">L'Art de Précision</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
