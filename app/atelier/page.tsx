'use client';

import Link from 'next/link';

export default function Atelier() {
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
            <Link href="/atelier" className="label-caps text-[#e9c176] border-b border-[#e9c176]">Atelier</Link>
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
        <div className="label-caps text-[#e9c176] mb-4">GLOBAL ATELIER</div>
        <h1 className="headline-xl text-[#e3e2e2] mb-8">Visit Our Sanctuaries</h1>
        <p className="body-lg text-[#d1c5b4] max-w-2xl mx-auto">
          Experience HORA & ESSENCE in our exclusive ateliers. Each location is designed as a sanctuary of craft and artistry.
        </p>
      </section>

      {/* Locations */}
      <section className="px-16 pb-40 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 gap-16">
          {locations.map((location, idx) => (
            <div key={idx} className="space-y-6 border border-[#4e4639] p-12">
              <div>
                <h2 className="headline-lg text-[#e3e2e2] mb-1">{location.city}</h2>
                <p className="body-md text-[#9a8f80]">{location.country}</p>
              </div>

              <div className="space-y-3">
                <div>
                  <p className="label-caps text-[#e9c176] mb-1">ADDRESS</p>
                  <p className="body-md text-[#d1c5b4]">{location.address}</p>
                </div>
                <div>
                  <p className="label-caps text-[#e9c176] mb-1">HOURS</p>
                  <p className="body-md text-[#d1c5b4]">{location.hours}</p>
                </div>
              </div>

              <div>
                <p className="label-caps text-[#e9c176] mb-3">SERVICES</p>
                <ul className="space-y-2">
                  {location.services.map((service, sidx) => (
                    <li key={sidx} className="body-md text-[#d1c5b4]">• {service}</li>
                  ))}
                </ul>
              </div>

              <button className="btn-primary label-caps w-full mt-8">Book Visit</button>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-16 bg-[#0d0e0f]">
        <div className="max-w-7xl mx-auto text-center space-y-8">
          <h2 className="headline-lg text-[#e3e2e2]">Can't Visit In Person?</h2>
          <p className="body-lg text-[#d1c5b4] max-w-2xl mx-auto">
            Schedule a private video consultation with one of our fragrance experts. We'll guide you through a personalized olfactory journey.
          </p>
          <button className="btn-secondary label-caps">Schedule Video Consultation</button>
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
