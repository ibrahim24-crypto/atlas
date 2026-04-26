'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Contact() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message. We will get back to you soon!');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

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
        <h1 className="text-3xl md:text-5xl font-serif text-[#f5f0eb] mb-4 animate-fade-in-up">Contact Us</h1>
        <p className="body-lg text-[#c4b8a8] mb-16 text-sm md:text-base">
          Have questions about our fragrances or brand? We'd love to hear from you.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {/* Contact Information */}
          <div className="space-y-12 animate-slide-in-left">
            <div className="space-y-3">
              <h3 className="text-xl font-serif text-[#c9a96e]">Headquarters</h3>
              <p className="body-lg text-[#c4b8a8] text-sm md:text-base">
                Rue des Prairies 42<br />
                1211 Geneva, Switzerland
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-serif text-[#c9a96e]">Phone</h3>
              <p className="body-lg text-[#c4b8a8] text-sm md:text-base">
                +41 22 123 4567
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-serif text-[#c9a96e]">Email</h3>
              <p className="body-lg text-[#c4b8a8] text-sm md:text-base">
                hello@horaessence.com<br />
                support@horaessence.com
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-serif text-[#c9a96e]">Hours</h3>
              <p className="body-lg text-[#c4b8a8] text-sm md:text-base">
                Monday - Friday: 9am - 6pm CET<br />
                Saturday: 10am - 4pm CET<br />
                Sunday: Closed
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-serif text-[#c9a96e]">Follow Us</h3>
              <div className="flex flex-col gap-3">
                <a href="https://www.instagram.com/atlas_marakech/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#c9a96e] hover:text-[#f5f0eb] transition-colors">
                  <svg className="social-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                  <span className="body-md">Instagram</span>
                </a>
                <a href="https://www.facebook.com/profile.php?id=61589002400891" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#c9a96e] hover:text-[#f5f0eb] transition-colors">
                  <svg className="social-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
                  <span className="body-md">Facebook</span>
                </a>
                <a href="https://twitter.com/atlasmarakech" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#c9a96e] hover:text-[#f5f0eb] transition-colors">
                  <svg className="social-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                  <span className="body-md">X / Twitter</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6 animate-slide-in-right">
            <div>
              <label className="label-caps text-[#c9a96e] mb-3 block text-xs">Your Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required
                className="w-full bg-[#1a1a1a] border border-[#3d3630] px-4 py-3 text-[#f5f0eb] placeholder-[#8a7e6b] focus:outline-none focus:border-[#c9a96e] transition-colors text-sm"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label className="label-caps text-[#c9a96e] mb-3 block text-xs">Email Address</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
                className="w-full bg-[#1a1a1a] border border-[#3d3630] px-4 py-3 text-[#f5f0eb] placeholder-[#8a7e6b] focus:outline-none focus:border-[#c9a96e] transition-colors text-sm"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label className="label-caps text-[#c9a96e] mb-3 block text-xs">Subject</label>
              <input
                type="text"
                value={formData.subject}
                onChange={(e) => setFormData({...formData, subject: e.target.value})}
                required
                className="w-full bg-[#1a1a1a] border border-[#3d3630] px-4 py-3 text-[#f5f0eb] placeholder-[#8a7e6b] focus:outline-none focus:border-[#c9a96e] transition-colors text-sm"
                placeholder="How can we help?"
              />
            </div>

            <div>
              <label className="label-caps text-[#c9a96e] mb-3 block text-xs">Message</label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                required
                rows={5}
                className="w-full bg-[#1a1a1a] border border-[#3d3630] px-4 py-3 text-[#f5f0eb] placeholder-[#8a7e6b] focus:outline-none focus:border-[#c9a96e] transition-colors text-sm resize-none"
                placeholder="Your message..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full btn-primary label-caps py-3 text-xs"
            >
              Send Message
            </button>
          </form>
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
                <li><a href="/legal/terms" className="body-md text-[#8a7e6b] hover:text-[#c9a96e] transition-colors text-xs md:text-base">Terms</a></li>
                <li><a href="/legal/contact" className="body-md text-[#c9a96e] text-xs md:text-base">Contact</a></li>
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
