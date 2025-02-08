'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'Über uns' },
    { href: '/spenden', label: 'Spenden' },
    { href: '/contact', label: 'Kontakt' },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#3D405B]/95 backdrop-blur-sm shadow-lg' : 'bg-[#3D405B]'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="KleiderSpende Logo"
                width={180}
                height={60}
                className="w-auto h-12 sm:h-14"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8 lg:space-x-12">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-2 py-1 text-sm lg:text-base font-medium transition-colors duration-200
                  ${isActive(item.href) 
                    ? 'text-[#81B29A]' 
                    : 'text-[#F4F1DE] hover:text-[#81B29A]'
                  }
                  group
                `}
              >
                {item.label}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#81B29A] transform origin-left 
                  transition-transform duration-300 scale-x-0 group-hover:scale-x-100
                  ${isActive(item.href) ? 'scale-x-100' : ''}`} 
                />
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md hover:bg-[#81B29A]/20 transition-colors duration-200
                focus:outline-none focus:ring-2 focus:ring-[#81B29A]"
              aria-label={isMenuOpen ? 'Menü schließen' : 'Menü öffnen'}
            >
              <div className="w-6 h-6 relative">
                <span className={`absolute h-0.5 w-full bg-white transform transition-all duration-300 ease-in-out
                  ${isMenuOpen ? 'rotate-45 top-3' : 'rotate-0 top-1'}`} />
                <span className={`absolute h-0.5 w-full bg-white transform transition-all duration-300 ease-in-out top-3
                  ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
                <span className={`absolute h-0.5 w-full bg-white transform transition-all duration-300 ease-in-out
                  ${isMenuOpen ? '-rotate-45 top-3' : 'rotate-0 top-5'}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out
          ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-200
                  ${isActive(item.href)
                    ? 'bg-[#81B29A]/20 text-[#81B29A]'
                    : 'text-[#F4F1DE] hover:bg-[#81B29A]/20 hover:text-[#81B29A]'
                  }
                `}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
} 