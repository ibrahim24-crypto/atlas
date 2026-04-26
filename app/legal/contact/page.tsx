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
        <h1 className="text-3xl md:text-5xl font-serif text-[#e3e2e2] mb-4 animate-fade-in-up">Contact Us</h1>
        <p className="body-lg text-[#d1c5b4] mb-16 text-sm md:text-base">
          Have questions about our fragrances or brand? We'd love to hear from you.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {/* Contact Information */}
          <div className="space-y-12 animate-slide-in-left">
            <div className="space-y-3">
              <h3 className="text-xl font-serif text-[#e9c176]">Headquarters</h3>
              <p className="body-lg text-[#d1c5b4] text-sm md:text-base">
                Rue des Prairies 42<br />
                1211 Geneva, Switzerland
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-serif text-[#e9c176]">Phone</h3>
              <p className="body-lg text-[#d1c5b4] text-sm md:text-base">
                +41 22 123 4567
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-serif text-[#e9c176]">Email</h3>
              <p className="body-lg text-[#d1c5b4] text-sm md:text-base">
                hello@horaessence.com<br />
                support@horaessence.com
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-serif text-[#e9c176]">Hours</h3>
              <p className="body-lg text-[#d1c5b4] text-sm md:text-base">
                Monday - Friday: 9am - 6pm CET<br />
                Saturday: 10am - 4pm CET<br />
                Sunday: Closed
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-serif text-[#e9c176]">Follow Us</h3>
              <div className="flex gap-6">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-[#e9c176] hover:text-[#e3e2e2] transition-colors text-lg">📷 Instagram</a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-[#e9c176] hover:text-[#e3e2e2] transition-colors text-lg">f Facebook</a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6 animate-slide-in-right">
            <div>
              <label className="label-caps text-[#e9c176] mb-3 block text-xs">Your Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required
                className="w-full bg-[#1f2020] border border-[#4e4639] px-4 py-3 text-[#e3e2e2] placeholder-[#9a8f80] focus:outline-none focus:border-[#e9c176] transition-colors text-sm"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label className="label-caps text-[#e9c176] mb-3 block text-xs">Email Address</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
                className="w-full bg-[#1f2020] border border-[#4e4639] px-4 py-3 text-[#e3e2e2] placeholder-[#9a8f80] focus:outline-none focus:border-[#e9c176] transition-colors text-sm"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label className="label-caps text-[#e9c176] mb-3 block text-xs">Subject</label>
              <input
                type="text"
                value={formData.subject}
                onChange={(e) => setFormData({...formData, subject: e.target.value})}
                required
                className="w-full bg-[#1f2020] border border-[#4e4639] px-4 py-3 text-[#e3e2e2] placeholder-[#9a8f80] focus:outline-none focus:border-[#e9c176] transition-colors text-sm"
                placeholder="How can we help?"
              />
            </div>

            <div>
              <label className="label-caps text-[#e9c176] mb-3 block text-xs">Message</label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                required
                rows={5}
                className="w-full bg-[#1f2020] border border-[#4e4639] px-4 py-3 text-[#e3e2e2] placeholder-[#9a8f80] focus:outline-none focus:border-[#e9c176] transition-colors text-sm resize-none"
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
                <li><a href="/legal/privacy" className="body-md text-[#9a8f80] hover:text-[#e9c176] transition-colors text-xs md:text-base">Privacy</a></li>
                <li><a href="/legal/terms" className="body-md text-[#9a8f80] hover:text-[#e9c176] transition-colors text-xs md:text-base">Terms</a></li>
                <li><a href="/legal/contact" className="body-md text-[#e9c176] text-xs md:text-base">Contact</a></li>
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
