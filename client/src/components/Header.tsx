import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/98 backdrop-blur-sm'
          : 'bg-white/95 backdrop-blur-sm'
      } border-b border-gray-200`}
    >
      <nav className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          <div className='flex-shrink-0 flex items-center'>
            <a
              href='#home'
              className='text-2xl font-bold text-tawi-primary'
            >
              <div className='flex items-center'>
                <svg
                  width='48'
                  height='48'
                  viewBox='0 0 200 240'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  className='mr-3'
                >
                  <g transform='translate(100, 80) scale(0.8)'>
                    <path
                      d='M-15 50 Q-15 55 -10 60 L10 60 Q15 55 15 50 L10 -20 Q5 -25 0 -25 Q-5 -25 -10 -20 Z'
                      fill='#B38629'
                    />
                    <path
                      d='M-40 50 Q0 65 40 50'
                      stroke='#1E372F'
                      strokeWidth='8'
                      fill='none'
                    />
                    <ellipse
                      cx='-25'
                      cy='-35'
                      rx='18'
                      ry='35'
                      fill='#1E372F'
                      transform='rotate(-20)'
                    />
                    <ellipse
                      cx='25'
                      cy='-35'
                      rx='18'
                      ry='35'
                      fill='#1E372F'
                      transform='rotate(20)'
                    />
                    <ellipse
                      cx='-20'
                      cy='-55'
                      rx='16'
                      ry='30'
                      fill='#1E372F'
                      transform='rotate(-35)'
                    />
                    <ellipse
                      cx='20'
                      cy='-55'
                      rx='16'
                      ry='30'
                      fill='#1E372F'
                      transform='rotate(35)'
                    />
                    <path
                      d='M-25 -50 Q-25 -35 -25 -20'
                      stroke='#B38629'
                      strokeWidth='2'
                    />
                    <path
                      d='M25 -50 Q25 -35 25 -20'
                      stroke='#B38629'
                      strokeWidth='2'
                    />
                    <path
                      d='M-20 -70 Q-20 -55 -20 -40'
                      stroke='#B38629'
                      strokeWidth='2'
                    />
                    <path
                      d='M20 -70 Q20 -55 20 -40'
                      stroke='#B38629'
                      strokeWidth='2'
                    />
                  </g>
                </svg>
                <div className='flex flex-col'>
                  <h1 className='text-xl font-montserrat font-bold text-tawi-primary leading-tight'>
                    TAWI
                  </h1>
                  <span className='text-sm font-montserrat font-semibold text-tawi-primary leading-tight'>
                    GROUP
                  </span>
                </div>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className='hidden md:block'>
            <div className='ml-10 flex items-baseline space-x-8'>
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className='text-tawi-text hover:text-tawi-primary font-medium transition-colors duration-200'
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className='hidden md:block'>
            <a
              href='#contact'
              className='bg-tawi-primary text-white px-6 py-2 rounded-lg font-medium hover:bg-tawi-primary/90 transition-colors duration-200'
            >
              Request Consultation
            </a>
          </div>

          {/* Mobile menu button */}
          <div className='md:hidden'>
            <button
              type='button'
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className='text-tawi-text hover:text-tawi-primary focus:outline-none focus:text-tawi-primary'
            >
              {isMobileMenuOpen ? (
                <X className='w-6 h-6' />
              ) : (
                <Menu className='w-6 h-6' />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className='md:hidden'>
            <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200'>
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className='block px-3 py-2 rounded-md text-base font-medium text-tawi-text hover:text-tawi-primary hover:bg-tawi-neutral transition-colors duration-200'
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href='#contact'
                className='block px-3 py-2 mt-4 bg-tawi-primary text-white rounded-lg font-medium hover:bg-tawi-primary/90 transition-colors duration-200 text-center'
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Request Consultation
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
