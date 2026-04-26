'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Terms() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-[#c9a96e] text-xl"
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t border-[#3d3630] bg-[#0a0a0a]/95">
            <div className="px-4 py-4 space-y-4">
              <Link href="/collections" onClick={() => setMobileMenuOpen(false)} className="block label-caps text-[#f5f0eb] py-2">Collections</Link>
              <Link href="/journal" onClick={() => setMobileMenuOpen(false)} className="block label-caps text-[#f5f0eb] py-2">Journal</Link>
              <Link href="/atelier" onClick={() => setMobileMenuOpen(false)} className="block label-caps text-[#f5f0eb] py-2">Atelier</Link>
              <Link href="/heritage" onClick={() => setMobileMenuOpen(false)} className="block label-caps text-[#f5f0eb] py-2">Heritage</Link>
            </div>
          </div>
        )}

        <div className="divider max-w-7xl mx-auto"></div>
      </nav>

      {/* Content */}
      <section className="pt-24 md:pt-40 pb-20 md:pb-40 px-4 md:px-16 max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-serif text-[#f5f0eb] mb-8">Terms of Service</h1>
        
        <div className="space-y-8 text-[#c4b8a8]">
          <section className="space-y-4">
            <h2 className="text-2xl font-serif text-[#c9a96e]">1. Agreement to Terms</h2>
            <p className="body-lg text-sm md:text-base">
              By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif text-[#c9a96e]">2. Use License</h2>
            <p className="body-lg text-sm md:text-base">
              Permission is granted to temporarily download one copy of the materials (information or software) on ATLAS MARAKECH's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc list-inside space-y-2 text-sm md:text-base">
              <li>Modifying or copying the materials</li>
              <li>Using the materials for any commercial purpose or for any public display</li>
              <li>Attempting to decompile or reverse engineer any software contained on the website</li>
              <li>Removing any copyright or other proprietary notations from the materials</li>
              <li>Transferring the materials to another person or "mirroring" the materials on any other server</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif text-[#c9a96e]">3. Disclaimer</h2>
            <p className="body-lg text-sm md:text-base">
              The materials on ATLAS MARAKECH's website are provided on an 'as is' basis. ATLAS MARAKECH makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif text-[#c9a96e]">4. Limitations</h2>
            <p className="body-lg text-sm md:text-base">
              In no event shall ATLAS MARAKECH or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on ATLAS MARAKECH's website.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif text-[#c9a96e]">5. Accuracy of Materials</h2>
            <p className="body-lg text-sm md:text-base">
              The materials appearing on ATLAS MARAKECH's website could include technical, typographical, or photographic errors. ATLAS MARAKECH does not warrant that any of the materials on its website are accurate, complete, or current.
            </p>
          </section>

          <p className="text-xs text-[#8a7e6b] pt-8">Last updated: April 2024</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#3d3630] py-12 md:py-20 px-4 md:px-16 bg-[#141414]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 mb-8">
            <div>
              <div className="label-caps text-[#c9a96e] mb-4 text-xs md:text-sm">ATLAS MARAKECH</div>
              <p className="body-md text-[#8a7e6b] text-xs md:text-base">Luxury fragrances since 1842.</p>
            </div>
            <div>
              <p className="label-caps text-[#f5f0eb] mb-4 text-xs md:text-sm">Legal</p>
              <ul className="space-y-2">
                <li><a href="/legal/privacy" className="body-md text-[#8a7e6b] hover:text-[#c9a96e] transition-colors text-xs md:text-base">Privacy</a></li>
                <li><a href="/legal/terms" className="body-md text-[#c9a96e] text-xs md:text-base">Terms</a></li>
                <li><a href="/legal/contact" className="body-md text-[#8a7e6b] hover:text-[#c9a96e] transition-colors text-xs md:text-base">Contact</a></li>
              </ul>
            </div>
            <div>
              <p className="label-caps text-[#f5f0eb] mb-4 text-xs md:text-sm">Company</p>
              <ul className="space-y-2">
                <li><Link href="/heritage" className="body-md text-[#8a7e6b] hover:text-[#c9a96e] transition-colors text-xs md:text-base">About</Link></li>
                <li><Link href="/journal" className="body-md text-[#8a7e6b] hover:text-[#c9a96e] transition-colors text-xs md:text-base">Stories</Link></li>
              </ul>
            </div>
            <div>
              <p className="label-caps text-[#f5f0eb] mb-4 text-xs md:text-sm">Follow Us</p>
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
          </div>
          <div className="divider mb-8"></div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
            <p className="body-md text-[#8a7e6b]">© 2026 ATLAS MARAKECH. All rights reserved.</p>
            <p className="label-caps text-[#8a7e6b]">L'Art de Précision</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
