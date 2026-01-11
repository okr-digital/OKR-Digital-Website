import React, { useState } from 'react';
import { useScroll, useMotionValueEvent, AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

import Hero from './components/Hero';
import TargetGroup from './components/TargetGroup';
import Services from './components/Services';
import ChannelsSection from './components/ChannelsSection';
import ProcessSection from './components/ProcessSection';
import PerformanceSection from './components/PerformanceSection';
import CaseStudy from './components/CaseStudy';
import FAQ from './components/FAQ';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Impressum from './components/Impressum';
import Datenschutz from './components/Datenschutz';

type ViewState = 'home' | 'impressum' | 'datenschutz';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMenu = () => setIsMobileMenuOpen(false);

  // Simple navigation handler that resets scroll to top
  const navigateTo = (view: ViewState) => {
    setCurrentView(view);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { href: "#services", label: "Leistungen" },
    { href: "#process", label: "Prozess" },
    { href: "#performance", label: "Modell" },
    { href: "#faq", label: "FAQ" },
  ];

  return (
    <div className="min-h-screen bg-brand-light text-brand-navy selection:bg-brand-primary selection:text-white flex flex-col">
      {/* Sticky Navigation */}
      <nav 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md border-brand-navy/5 py-3 shadow-sm' 
            : 'bg-transparent border-transparent py-5'
        }`}
        role="navigation"
        aria-label="Main Navigation"
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <a 
            href="#" 
            onClick={(e) => { e.preventDefault(); navigateTo('home'); }} 
            className="text-xl font-extrabold tracking-tight text-brand-navy z-50 relative"
          >
            OKR<span className="text-brand-primary">.digital</span>
          </a>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex gap-6 text-sm font-medium text-brand-gray">
              {currentView === 'home' && navLinks.map((link) => (
                <a key={link.href} href={link.href} className="hover:text-brand-primary transition-colors">
                  {link.label}
                </a>
              ))}
              {currentView !== 'home' && (
                <button onClick={() => navigateTo('home')} className="hover:text-brand-primary transition-colors">
                  Zurück zur Startseite
                </button>
              )}
            </div>
            <a 
              href="#contact"
              onClick={(e) => { 
                if (currentView !== 'home') {
                   e.preventDefault();
                   navigateTo('home');
                   setTimeout(() => {
                     const el = document.getElementById('contact');
                     el?.scrollIntoView({ behavior: 'smooth' });
                   }, 100);
                }
              }}
              className={`px-5 py-2.5 text-sm font-semibold rounded-lg transition-all inline-block ${
                isScrolled
                  ? 'bg-brand-primary text-white hover:bg-blue-700 shadow-md'
                  : 'bg-brand-navy text-white hover:bg-brand-primary shadow-lg'
              }`}
            >
              Lass uns sprechen
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden z-50 p-2 text-brand-navy"
            onClick={toggleMenu}
            aria-label={isMobileMenuOpen ? "Menü schließen" : "Menü öffnen"}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Mobile Nav Overlay */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center space-y-8 md:hidden"
              >
                {currentView === 'home' ? navLinks.map((link) => (
                  <a 
                    key={link.href} 
                    href={link.href} 
                    onClick={closeMenu}
                    className="text-2xl font-bold text-brand-navy hover:text-brand-primary"
                  >
                    {link.label}
                  </a>
                )) : (
                  <button 
                    onClick={() => navigateTo('home')}
                    className="text-2xl font-bold text-brand-navy hover:text-brand-primary"
                  >
                    Startseite
                  </button>
                )}
                <a 
                  href="#contact" 
                  onClick={() => {
                    if (currentView !== 'home') {
                      navigateTo('home');
                      setTimeout(() => {
                        document.getElementById('contact')?.scrollIntoView();
                      }, 100);
                    } else {
                      closeMenu();
                    }
                  }}
                  className="px-8 py-3 bg-brand-primary text-white text-lg font-bold rounded-lg shadow-lg"
                >
                  Lass uns sprechen
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

      <main className="flex-grow">
        {currentView === 'home' && (
          <>
            <Hero />
            <div id="target-group"><TargetGroup /></div>
            <div id="services"><Services /></div>
            <ChannelsSection />
            <div id="process"><ProcessSection /></div>
            <div id="performance"><PerformanceSection /></div>
            <div id="proof"><CaseStudy /></div>
            <div id="faq"><FAQ /></div>
            <div id="contact"><ContactForm /></div>
          </>
        )}
        {currentView === 'impressum' && (
          <Impressum onBack={() => navigateTo('home')} />
        )}
        {currentView === 'datenschutz' && (
          <Datenschutz onBack={() => navigateTo('home')} />
        )}
      </main>

      <Footer onNavigate={navigateTo} />
    </div>
  );
};

export default App;