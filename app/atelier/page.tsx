'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useTransitionNavigation } from '@/components/page-transition';
import { MobileMenu } from '@/components/mobile-menu';
import { DesktopMenu } from '@/components/desktop-menu';
import { SocialLink } from '@/components/social-links';
import { socialAccounts } from '@/lib/data';

export default function Atelier() {
  const { navigate } = useTransitionNavigation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Collections', href: '/collections' },
    { name: 'Journal', href: '/journal' },
    { name: 'Atelier', href: '/atelier' },
    { name: 'Heritage', href: '/heritage' },
  ];

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
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} activePath="/atelier" navItems={navItems} />

      {/* Desktop Menu */}
      <DesktopMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} navItems={navItems} />

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
