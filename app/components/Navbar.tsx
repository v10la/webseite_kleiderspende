'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-[#3D405B] text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="KleiderSpende Logo"
                width={120}
                height={40}
                className="w-auto h-8 sm:h-10"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-[#F4F1DE] hover:text-[#81B29A] transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-[#F4F1DE] hover:text-[#81B29A] transition-colors">
              Über uns
            </Link>
            <Link href="/spenden" className="text-[#F4F1DE] hover:text-[#81B29A] transition-colors">
              Spenden
            </Link>
            <Link href="/contact" className="text-[#F4F1DE] hover:text-[#81B29A] transition-colors">
              Kontakt
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md hover:bg-[#81B29A]/20"
            >
              <svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#3D405B]/95 backdrop-blur-sm">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link 
                href="/" 
                className="block px-3 py-2 rounded-md text-[#F4F1DE] hover:bg-[#81B29A]/20"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className="block px-3 py-2 rounded-md text-[#F4F1DE] hover:bg-[#81B29A]/20"
                onClick={() => setIsMenuOpen(false)}
              >
                Über uns
              </Link>
              <Link 
                href="/spenden" 
                className="block px-3 py-2 rounded-md text-[#F4F1DE] hover:bg-[#81B29A]/20"
                onClick={() => setIsMenuOpen(false)}
              >
                Spenden
              </Link>
              <Link 
                href="/contact" 
                className="block px-3 py-2 rounded-md text-[#F4F1DE] hover:bg-[#81B29A]/20"
                onClick={() => setIsMenuOpen(false)}
              >
                Kontakt
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
} 