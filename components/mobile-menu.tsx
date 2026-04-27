'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useTransitionNavigation } from '@/components/page-transition';
import { menuTabs, socialAccounts } from '@/lib/data';
import { SocialLink } from '@/components/social-links';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  activePath?: string;
  navItems?: { name: string; href: string }[];
}

export function MobileMenu({ isOpen, onClose, activePath, navItems = [] }: MobileMenuProps) {
  const { navigate } = useTransitionNavigation();
  const [activeTab, setActiveTab] = useState(0);

  const handleNavigate = (href: string) => {
    navigate(href);
    onClose();
  };

  return (
    <>
      {/* Menu Panel */}
      <div
        className="fixed top-0 right-0 h-screen w-full bg-[#0a0a0a]/98 backdrop-blur-2xl z-50 overflow-y-auto"
        style={{
          transition: 'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1), opacity 0.5s ease',
          transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
          opacity: isOpen ? 1 : 0,
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 hover:bg-[#c9a96e]/10 rounded-lg transition-colors z-10"
        >
          <svg className="w-6 h-6 text-[#c9a96e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Logo */}
        <div className="pt-8 px-6 pb-6">
          <Link href="/" onClick={onClose}>
            <div className="text-xl font-light tracking-[0.3em] text-[#c9a96e]">ATLAS</div>
          </Link>
        </div>

        {/* Vertical Tabs */}
        <div className="px-6">
          <div className="flex flex-col gap-1 mb-6">
            {menuTabs.map((tab, idx) => (
              <button
                key={tab.label}
                onClick={() => setActiveTab(idx)}
                className={`text-left px-4 py-3 text-sm tracking-widest transition-all duration-300 rounded-lg ${
                  activeTab === idx
                    ? 'text-[#c9a96e] bg-[#c9a96e]/10 border-l-2 border-[#c9a96e]'
                    : 'text-[#8a7e6b] hover:text-[#c4b8a8] hover:bg-[#c9a96e]/5'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="pl-4 pb-8 border-l border-[#3d3630]/50">
            {menuTabs[activeTab]?.items.map((item, idx) => (
              <button
                key={item}
                onClick={() => {
                  // Navigate to the corresponding section
                  if (activeTab === 0) handleNavigate('/heritage');
                  else if (activeTab === 1) handleNavigate('/collections');
                  else if (activeTab === 2) handleNavigate('/atelier');
                  else handleNavigate('/journal');
                }}
                className="block w-full text-left py-3 text-[#c4b8a8] hover:text-[#c9a96e] transition-colors text-sm"
                style={{
                  transition: `all 0.3s ease ${idx * 0.05}s`
                }}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Main Navigation */}
        <div className="px-8 py-8 border-t border-[#3d3630]/50">
          <p className="text-xs text-[#8a7e6b] tracking-widest mb-6">NAVIGATION</p>
          <div className="space-y-2">
            {navItems.map((item, idx) => (
              <button
                key={item.name}
                onClick={() => handleNavigate(item.href)}
                className="block w-full text-left py-4 px-6 text-2xl font-light tracking-widest text-[#f5f0eb] hover:text-[#c9a96e] hover:bg-[#c9a96e]/5 transition-all duration-300 rounded-lg"
                style={{
                  opacity: isOpen ? 1 : 0,
                  transform: isOpen ? 'translateX(0)' : 'translateX(30px)',
                  transition: `all 0.5s cubic-bezier(0.23, 1, 0.32, 1) ${idx * 0.1 + 0.15}s`
                }}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>

        {/* Social Accounts */}
        <div className="px-6 py-6 border-t border-[#3d3630]/50">
          <p className="text-xs text-[#8a7e6b] tracking-widest mb-4">FOLLOW US</p>
          <div className="space-y-1">
            {socialAccounts.map((social, idx) => (
              <SocialLink
                key={social.name}
                name={social.name}
                url={social.url}
                icon={social.icon}
                variant="menu"
              />
            ))}
          </div>
        </div>

        {/* Menu Footer */}
        <div className="px-6 py-8 border-t border-[#3d3630]/50">
          <p className="text-xs text-[#8a7e6b] tracking-widest">ATLAS MARAKECH</p>
          <p className="text-xs text-[#8a7e6b] mt-1">The Spirit of Marrakech</p>
        </div>
      </div>

      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
        style={{
          transition: 'opacity 0.3s ease',
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? 'auto' : 'none',
        }}
        onClick={onClose}
      />
    </>
  );
}
