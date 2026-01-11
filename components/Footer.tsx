import React from 'react';
import { Linkedin, Mail } from 'lucide-react';

interface FooterProps {
  onNavigate: (view: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-slate-50 py-12 border-t border-slate-200 text-brand-navy">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="text-center md:text-left">
            <h3 className="text-xl font-extrabold tracking-tight mb-2">OKR<span className="text-brand-primary">.digital</span></h3>
            <p className="text-brand-gray text-sm">Performance Growth für SaaS & Finance.</p>
          </div>

          <div className="flex gap-6">
             <a 
               href="#" 
               className="text-brand-gray hover:text-brand-primary transition-colors" 
               aria-label="Besuche OKR Digital auf LinkedIn"
               target="_blank"
               rel="noopener noreferrer"
             >
               <Linkedin className="w-6 h-6" />
             </a>
             <a 
               href="mailto:oliver@okr-digital.at" 
               className="text-brand-gray hover:text-brand-primary transition-colors" 
               aria-label="Sende eine E-Mail an Oliver"
             >
               <Mail className="w-6 h-6" />
             </a>
          </div>

          <div className="flex gap-6 text-sm text-brand-gray">
             <button 
              onClick={() => onNavigate('blog')} 
              className="hover:text-brand-navy transition-colors"
            >
              Blog
            </button>
            <button 
              onClick={() => onNavigate('impressum')} 
              className="hover:text-brand-navy transition-colors"
            >
              Impressum
            </button>
            <button 
              onClick={() => onNavigate('datenschutz')}
              className="hover:text-brand-navy transition-colors"
            >
              Datenschutz
            </button>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-200 text-center text-slate-400 text-xs">
          &copy; {new Date().getFullYear()} OKR Digital. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;