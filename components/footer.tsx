"use client";

import { Building, Twitter, Facebook, Instagram, Linkedin, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from 'react';

export function Footer() {
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-black border-t border-white/5">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Section */}
          <div>
            <a href="/" className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <Building className="h-6 w-6 text-white" />
              </div>
              <span className="font-bold text-xl bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">
                SABIROAD
              </span>
            </a>
            <p className="text-gray-400 leading-relaxed">
              AI-powered building classification for the modern world. Revolutionizing how we understand and interact with our built environment.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {[
                ['About Us', '/about'],
                ['Features', '/features'],
                ['Pricing', '/pricing'],
                ['Blog', '/blog'],
                ['Contact', '/contact']
              ].map(([label, href]) => (
                <li key={href}>
                  <a 
                    href={href} 
                    className="text-gray-400 hover:text-white transition-colors flex items-center group"
                  >
                    <span>{label}</span>
                    <ArrowRight className="h-4 w-4 ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-white">Legal</h3>
            <ul className="space-y-3">
              {[
                ['Terms of Service', '/terms'],
                ['Privacy Policy', '/privacy'],
                ['Cookie Policy', '/cookies']
              ].map(([label, href]) => (
                <li key={href}>
                  <a 
                    href={href} 
                    className="text-gray-400 hover:text-white transition-colors flex items-center group"
                  >
                    <span>{label}</span>
                    <ArrowRight className="h-4 w-4 ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-white">Newsletter</h3>
            <p className="text-gray-400 mb-4">Stay updated with our latest features and news.</p>
            <form className="flex flex-col sm:flex-row gap-3">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus-visible:ring-blue-500"
              />
              <Button 
                type="submit"
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:bg-gradient-to-l"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} SABIROAD. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-6 md:mt-0">
            {[
              [Twitter, '#'],
              [Facebook, '#'],
              [Instagram, '#'],
              [Linkedin, '#']
            ].map(([Icon, href], index) => (
              <a 
                key={index}
                href={href} 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label={`Visit our ${Icon.name} page`}
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;