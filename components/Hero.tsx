import React from 'react';
import { ArrowRight, CheckCircle2, TrendingUp, Wallet } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-36 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-brand-light">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-50 to-transparent pointer-events-none" />
      <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-brand-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Mobile Card Container to match screenshot design & fix overlap */}
          <div className="bg-white/60 backdrop-blur-sm md:bg-transparent md:backdrop-blur-none border border-brand-primary/10 md:border-none rounded-3xl p-6 md:p-0 shadow-xl shadow-blue-900/5 md:shadow-none">
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 border border-blue-200 text-brand-primary text-xs font-semibold uppercase tracking-wider mb-6 md:mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-primary"></span>
              </span>
              Dein Growth Partner für SaaS & Finanzdienstleister
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-heading font-extrabold text-brand-navy leading-tight md:leading-[1.15] mb-6"
            >
              Wachstum, das sich <br className="hidden md:block"/>
              <span className="text-brand-primary">rechnet.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-brand-gray max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed"
            >
              Ich helfe SaaS-Companies und Dienstleistern beim Skalieren. 
              <span className="font-semibold text-brand-navy"> Kein Setup. Kein Retainer. </span> 
              Ich werde zu 100% am Erfolg beteiligt. Wenn du nicht wächst, verdiene ich nichts.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 md:mb-16"
            >
              <a
                href="#contact"
                className="w-full sm:w-auto px-8 py-4 bg-brand-primary hover:bg-blue-700 text-white rounded-lg font-bold text-lg transition-all shadow-xl shadow-blue-200 hover:shadow-blue-300 flex items-center justify-center gap-2"
              >
                Lass uns sprechen
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#process"
                className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-slate-50 text-brand-navy border border-slate-200 rounded-lg font-bold text-lg transition-colors flex items-center justify-center"
              >
                So läuft's ab
              </a>
            </motion.div>

            {/* Trust Row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="border-t border-slate-200 pt-6 md:pt-8 flex flex-wrap justify-center gap-x-6 gap-y-3 md:gap-12 text-sm md:text-base font-medium text-brand-navy/80"
            >
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 md:w-5 md:h-5 text-brand-primary" />
                <span>Ergebnisorientiert</span>
              </div>
              <div className="flex items-center gap-2">
                <Wallet className="w-4 h-4 md:w-5 md:h-5 text-brand-primary" />
                <span>0€ Fixkosten</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-brand-primary" />
                <span>100% Performance</span>
              </div>
            </motion.div>
          </div>

          {/* Mini Proof */}
          <motion.div
             initial={{ opacity: 0, y: 10 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.7 }}
             className="mt-6 inline-block bg-green-50 text-green-800 text-sm px-4 py-2 rounded-full font-semibold border border-green-200"
          >
            🚀 Case Study: +40% Umsatz in 6 Monaten
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;