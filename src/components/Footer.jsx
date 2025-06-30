import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const links = {
    company: [
      { label: 'About', href: '#about' },
      { label: 'Services', href: '#services' },
      { label: 'Projects', href: '#projects' },
      { label: 'Contact', href: '#contact' },
    ],
    legal: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'ITAR Compliance', href: '#' },
    ],
  };
  
  return (
    <footer className="bg-slate-100 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-display font-semibold text-slate-900 dark:text-white mb-4">
              Stone Timber Technologies
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 max-w-md">
              Advanced AI and geospatial intelligence solutions for defense and security applications. 
              Proudly veteran-owned and operated.
            </p>
            <div className="flex items-center space-x-4 text-xs text-slate-500 dark:text-slate-400">
              <span className="flex items-center">
                <span className="w-2 h-2 bg-accent-green rounded-full mr-2"></span>
                Veteran Owned
              </span>
              <span>•</span>
              <span>ITAR Registered</span>
              <span>•</span>
              <span>USA Based</span>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-display font-semibold text-slate-900 dark:text-white mb-4 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {links.company.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-slate-600 dark:text-slate-400 hover:text-accent-blue transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Legal */}
          <div>
            <h4 className="text-sm font-display font-semibold text-slate-900 dark:text-white mb-4 uppercase tracking-wider">
              Legal
            </h4>
            <ul className="space-y-2">
              {links.legal.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-slate-600 dark:text-slate-400 hover:text-accent-blue transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-200 dark:border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-slate-500 dark:text-slate-400">
              © {currentYear} Stone Timber Technologies. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-xs text-slate-500 dark:text-slate-400">
              <span>CAGE: XXXXX</span>
              <span>DUNS: XXX-XXX-XXX</span>
              <span>NAICS: 541511</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 