import { Linkedin, Twitter, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-tawi-primary text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <svg width="40" height="40" viewBox="0 0 200 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-3">
                <g transform="translate(100, 80) scale(0.7)">
                  <path d="M-15 50 Q-15 55 -10 60 L10 60 Q15 55 15 50 L10 -20 Q5 -25 0 -25 Q-5 -25 -10 -20 Z" fill="#B38629"/>
                  <path d="M-40 50 Q0 65 40 50" stroke="#B38629" strokeWidth="8" fill="none"/>
                  <ellipse cx="-25" cy="-35" rx="18" ry="35" fill="#B38629" transform="rotate(-20)"/>
                  <ellipse cx="25" cy="-35" rx="18" ry="35" fill="#B38629" transform="rotate(20)"/>
                  <ellipse cx="-20" cy="-55" rx="16" ry="30" fill="#B38629" transform="rotate(-35)"/>
                  <ellipse cx="20" cy="-55" rx="16" ry="30" fill="#B38629" transform="rotate(35)"/>
                  <path d="M-25 -50 Q-25 -35 -25 -20" stroke="#1E372F" strokeWidth="2"/>
                  <path d="M25 -50 Q25 -35 25 -20" stroke="#1E372F" strokeWidth="2"/>
                  <path d="M-20 -70 Q-20 -55 -20 -40" stroke="#1E372F" strokeWidth="2"/>
                  <path d="M20 -70 Q20 -55 20 -40" stroke="#1E372F" strokeWidth="2"/>
                </g>
              </svg>
              <div className="flex flex-col">
                <h3 className="text-xl font-montserrat font-bold text-white">TAWI</h3>
                <span className="text-sm font-montserrat font-semibold text-white/90">GROUP</span>
              </div>
            </div>
            <p className="text-white/80 mb-6">
              Strategic consulting for public impact. Where leadership meets delivery.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/tawigroup"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-tawi-accent transition-colors duration-200"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://twitter.com/tawigroup"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-tawi-accent transition-colors duration-200"
                aria-label="Twitter/X"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com/tawigroup"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-tawi-accent transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-montserrat font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-white/80">
              <li><a href="#services" className="hover:text-tawi-accent transition-colors duration-200">Community Project Design</a></li>
              <li><a href="#services" className="hover:text-tawi-accent transition-colors duration-200">Constituency Delivery Planning</a></li>
              <li><a href="#services" className="hover:text-tawi-accent transition-colors duration-200">Campaign Visibility & Voter Mobilization</a></li>
              <li><a href="#services" className="hover:text-tawi-accent transition-colors duration-200">Stakeholder Engagement</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-montserrat font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-white/80">
              <li>+254 01 234567</li>
              <li>tawi.group.1@gmail.com</li>
              <li>OBC Kitengela, Namanga Road</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
          <p>&copy; 2024 Tawi Group. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
}
