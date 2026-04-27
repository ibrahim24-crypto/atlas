'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useTransitionNavigation } from '@/components/page-transition';
import { menuTabs, socialAccounts } from '@/lib/data';

interface DesktopMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navItems?: { name: string; href: string }[];
}

export function DesktopMenu({ isOpen, onClose, navItems = [] }: DesktopMenuProps) {
  const { navigate } = useTransitionNavigation();
  const [activeTab, setActiveTab] = useState(0);

  const handleNavigate = (href: string) => {
    navigate(href);
  };

  return (
    <>
      {/* Desktop Menu Panel - Compact */}
      <div
        className="fixed top-0 right-0 h-screen w-96 bg-[#0a0a0a] z-50 hidden lg:flex flex-col"
        style={{
          transition: 'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1), opacity 0.5s ease',
          transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? 'auto' : 'none',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-[#c9a96e]/10 rounded-lg transition-colors z-10"
        >
          <svg className="w-5 h-5 text-[#c9a96e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Logo */}
        <div className="pt-6 px-6 pb-4 border-b border-[#3d3630]">
          <Link href="/" onClick={onClose} className="block">
            <div className="text-lg font-light tracking-[0.2em] text-[#c9a96e]">ATLAS</div>
          </Link>
        </div>

        {/* Menu Content - No Scroll */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Tabs */}
          <div className="px-4 py-4 space-y-1 border-b border-[#3d3630]">
            {menuTabs.map((tab, idx) => (
              <button
                key={tab.label}
                onClick={() => setActiveTab(idx)}
                className={`w-full text-left px-3 py-2 text-xs tracking-widest transition-all rounded ${
                  activeTab === idx
                    ? 'text-[#c9a96e] bg-[#c9a96e]/10'
                    : 'text-[#8a7e6b] hover:text-[#c4b8a8] hover:bg-[#c9a96e]/5'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Items */}
          <div className="px-4 py-3 space-y-1 border-b border-[#3d3630]">
            {menuTabs[activeTab]?.items.map((item) => (
              <button
                key={item}
                onClick={() => {
                  if (activeTab === 0) handleNavigate('/heritage');
                  else if (activeTab === 1) handleNavigate('/collections');
                  else if (activeTab === 2) handleNavigate('/atelier');
                  else handleNavigate('/journal');
                  onClose();
                }}
                className="w-full text-left px-3 py-2 text-xs text-[#c4b8a8] hover:text-[#c9a96e] transition-colors rounded hover:bg-[#c9a96e]/5"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Navigation */}
          <div className="px-4 py-3 space-y-1 border-b border-[#3d3630]">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => {
                  handleNavigate(item.href);
                  onClose();
                }}
                className="w-full text-left px-3 py-2 text-sm font-light text-[#f5f0eb] hover:text-[#c9a96e] transition-colors rounded hover:bg-[#c9a96e]/5"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Social Links - Compact */}
          <div className="px-4 py-3 space-y-1 border-b border-[#3d3630]">
            <p className="text-xs text-[#8a7e6b] tracking-widest mb-2">FOLLOW</p>
            <div className="grid grid-cols-3 gap-2">
              {socialAccounts.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2 py-1 text-xs text-[#8a7e6b] hover:text-[#c9a96e] border border-[#3d3630] rounded hover:border-[#c9a96e] hover:bg-[#c9a96e]/5 transition-all text-center"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-4 py-3 text-xs text-[#8a7e6b]">
          <p className="font-light">© 2026 ATLAS</p>
        </div>
      </div>

      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm hidden lg:block"
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
