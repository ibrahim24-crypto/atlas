'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useTransitionNavigation } from '@/components/page-transition';

export default function Atelier() {
  const { navigate } = useTransitionNavigation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const locations = [
    {
      city: 'Geneva',
      country: 'Switzerland',
      address: '42 Rue de Candolle, Geneva 1205',
      hours: 'Monday - Saturday: 10am - 6pm',
      services: ['Private Consultations', 'Custom Blending', 'Exclusive Previews']
    },
    {
      city: 'Paris',
      country: 'France',
      address: '8 Place Vendôme, Paris 75001',
      hours: 'Monday - Saturday: 10am - 7pm',
      services: ['Fragrance Bars', 'Atelier Tours', 'VIP Appointments']
    },
    {
      city: 'Tokyo',
      country: 'Japan',
      address: 'Ginza 6-chome, Chuo Ward, Tokyo',
      hours: 'Monday - Sunday: 11am - 8pm',
      services: ['Personal Shopping', 'Fragrance Customization', 'Master Classes']
    },
    {
      city: 'Dubai',
      country: 'UAE',
      address: 'Gold Souk District, Dubai',
      hours: 'Daily: 10am - 10pm',
      services: ['Luxury Consultations', 'Bespoke Services', 'Cultural Experiences']
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
          
          <div className="hidden md:flex gap-12">
            <button onClick={() => navigate('/collections')} className="label-caps text-[#f5f0eb] hover:text-[#c9a96e] transition-colors">Collections</button>
            <button onClick={() => navigate('/journal')} className="label-caps text-[#f5f0eb] hover:text-[#c9a96e] transition-colors">Journal</button>
            <button onClick={() => navigate('/atelier')} className="label-caps text-[#c9a96e] border-b border-[#c9a96e]">Atelier</button>
            <button onClick={() => navigate('/heritage')} className="label-caps text-[#f5f0eb] hover:text-[#c9a96e] transition-colors">Heritage</button>
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
              <button onClick={() => { navigate('/collections'); setMobileMenuOpen(false); }} className="block label-caps text-[#f5f0eb] hover:text-[#c9a96e] transition-colors py-2 text-left w-full">Collections</button>
              <button onClick={() => { navigate('/journal'); setMobileMenuOpen(false); }} className="block label-caps text-[#f5f0eb] hover:text-[#c9a96e] transition-colors py-2 text-left w-full">Journal</button>
              <button onClick={() => { navigate('/atelier'); setMobileMenuOpen(false); }} className="block label-caps text-[#c9a96e] py-2 text-left w-full">Atelier</button>
              <button onClick={() => { navigate('/heritage'); setMobileMenuOpen(false); }} className="block label-caps text-[#f5f0eb] hover:text-[#c9a96e] transition-colors py-2 text-left w-full">Heritage</button>
              <div className="pt-4 flex gap-4 border-t border-[#3d3630]">
                <button className="text-[#c9a96e]"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg></button>
                <button className="text-[#c9a96e]"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg></button>
              </div>
            </div>
          </div>
        )}

        <div className="divider max-w-7xl mx-auto"></div>
      </nav>

      {/* Hero */}
      <section className="pt-24 md:pt-40 pb-12 md:pb-20 px-4 md:px-16 text-center max-w-7xl mx-auto">
        <div className="label-caps text-[#c9a96e] mb-4">GLOBAL ATELIER</div>
        <h1 className="text-3xl md:text-5xl font-serif text-[#f5f0eb] mb-6 md:mb-8">Visit Our Sanctuaries</h1>
        <p className="body-lg text-[#c4b8a8] max-w-2xl mx-auto text-sm md:text-base">
          Experience ATLAS MARAKECH in our exclusive ateliers. Each location is designed as a sanctuary of craft and artistry.
        </p>
      </section>

      {/* Locations */}
      <section className="px-4 md:px-16 pb-20 md:pb-40 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {locations.map((location, idx) => (
            <div key={idx} className="space-y-6 border border-[#3d3630] p-6 md:p-12 animate-fade-in-up" style={{ animationDelay: `${idx * 100}ms` }}>
              <div>
                <h2 className="headline-lg text-[#f5f0eb] mb-1">{location.city}</h2>
                <p className="body-md text-[#8a7e6b]">{location.country}</p>
              </div>

              <div className="space-y-3">
                <div>
                  <p className="label-caps text-[#c9a96e] mb-1">ADDRESS</p>
                  <p className="body-md text-[#c4b8a8]">{location.address}</p>
                </div>
                <div>
                  <p className="label-caps text-[#c9a96e] mb-1">HOURS</p>
                  <p className="body-md text-[#c4b8a8]">{location.hours}</p>
                </div>
              </div>

              <div>
                <p className="label-caps text-[#c9a96e] mb-3">SERVICES</p>
                <ul className="space-y-2">
                  {location.services.map((service, sidx) => (
                    <li key={sidx} className="body-md text-[#c4b8a8]">• {service}</li>
                  ))}
                </ul>
              </div>

              <button className="btn-primary label-caps w-full mt-8">Book Visit</button>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-20 px-4 md:px-16 bg-[#141414]">
        <div className="max-w-7xl mx-auto text-center space-y-6 md:space-y-8">
          <h2 className="text-2xl md:text-4xl font-serif text-[#f5f0eb]">Can't Visit In Person?</h2>
          <p className="body-lg text-[#c4b8a8] max-w-2xl mx-auto text-sm md:text-base">
            Schedule a private video consultation with one of our fragrance experts. We'll guide you through a personalized olfactory journey.
          </p>
          <button className="btn-secondary label-caps">Schedule Video Consultation</button>
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
