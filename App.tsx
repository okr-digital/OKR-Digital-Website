import React, { useState, useEffect } from 'react';
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
import Blog from './components/Blog';

type ViewState = 'home' | 'impressum' | 'datenschutz' | 'blog';

const App: React.FC = () => {
  // 1. Initialize State based on current URL path
  const getInitialView = (): ViewState => {
    const path = window.location.pathname;
    if (path === '/blog') return 'blog';
    if (path === '/impressum') return 'impressum';
    if (path === '/datenschutz') return 'datenschutz';
    return 'home';
  };

  const [currentView, setCurrentView] = useState<ViewState>(getInitialView);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  // 2. Handle Browser Back/Forward Buttons
  useEffect(() => {
    const handlePopState = () => {
      setCurrentView(getInitialView());
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMenu = () => setIsMobileMenuOpen(false);

  // 3. Enhanced Navigation Function
  const navigateTo = (view: ViewState) => {
    let path = '/';
    if (view === 'blog') path = '/blog';
    if (view === 'impressum') path = '/impressum';
    if (view === 'datenschutz') path = '/datenschutz';

    // Update URL without page reload
    window.history.pushState({}, '', path);
    setCurrentView(view);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Helper for internal links to handle onClick
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, view: ViewState) => {
    e.preventDefault();
    navigateTo(view);
  };

  const navLinks = [
    { href: "/#services", label: "Leistungen" },
    { href: "/#process", label: "Prozess" },
    { href: "/#performance", label: "Modell" },
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
            href="/" 
            onClick={(e) => handleLinkClick(e, 'home')} 
            className="text-xl font-extrabold tracking-tight text-brand-navy z-50 relative"
          >
            OKR<span className="text-brand-primary">.digital</span>
          </a>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex gap-6 text-sm font-medium text-brand-gray">
              {currentView === 'home' ? (
                navLinks.map((link) => (
                  <a key={link.href} href={link.href} className="hover:text-brand-primary transition-colors">
                    {link.label}
                  </a>
                ))
              ) : (
                <a 
                  href="/" 
                  onClick={(e) => handleLinkClick(e, 'home')}
                  className="hover:text-brand-primary transition-colors"
                >
                  Startseite
                </a>
              )}
              
              <a 
                href="/blog"
                onClick={(e) => handleLinkClick(e, 'blog')}
                className={`hover:text-brand-primary transition-colors ${currentView === 'blog' ? 'text-brand-primary font-bold' : ''}`}
              >
                Blog
              </a>
            </div>

            <a 
              href="/#contact"
              onClick={(e) => { 
                e.preventDefault();
                if (currentView !== 'home') {
                   navigateTo('home');
                   // Wait for state update/render
                   setTimeout(() => {
                     const el = document.getElementById('contact');
                     el?.scrollIntoView({ behavior: 'smooth' });
                   }, 100);
                } else {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
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
                {currentView === 'home' ? (
                  navLinks.map((link) => (
                    <a 
                      key={link.href} 
                      href={link.href} 
                      onClick={closeMenu}
                      className="text-2xl font-bold text-brand-navy hover:text-brand-primary"
                    >
                      {link.label}
                    </a>
                  ))
                ) : (
                  <a 
                    href="/"
                    onClick={(e) => handleLinkClick(e, 'home')}
                    className="text-2xl font-bold text-brand-navy hover:text-brand-primary"
                  >
                    Startseite
                  </a>
                )}

                <a 
                    href="/blog"
                    onClick={(e) => handleLinkClick(e, 'blog')}
                    className="text-2xl font-bold text-brand-navy hover:text-brand-primary"
                >
                    Blog
                </a>

                <a 
                  href="/#contact" 
                  onClick={(e) => {
                    e.preventDefault();
                    if (currentView !== 'home') {
                      navigateTo('home');
                      setTimeout(() => document.getElementById('contact')?.scrollIntoView(), 100);
                    } else {
                      document.getElementById('contact')?.scrollIntoView();
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
        {currentView === 'blog' && (
          <Blog onBack={() => navigateTo('home')} />
        )}
      </main>

      <Footer onNavigate={navigateTo} />
    </div>
  );
};

export default App;