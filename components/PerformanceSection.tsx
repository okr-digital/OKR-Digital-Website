import React from 'react';
import { ArrowRight, PieChart, Wallet, Scale } from 'lucide-react';

const PerformanceSection: React.FC = () => {
  return (
    <section className="py-24 bg-brand-navy text-white relative overflow-hidden">
       {/* Background pattern */}
       <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#4b5563 1px, transparent 1px)', backgroundSize: '32px 32px' }} aria-hidden="true"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
            Warum performance-basiert?
          </h2>
          <p className="text-slate-300 text-lg">
            Das alte Agentur-Modell ist kaputt. Retainer machen faul. Ich drehe den Spieß um und gehe in Vorleistung.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 backdrop-blur-sm">
            <Wallet className="w-10 h-10 text-brand-primary mb-6" aria-hidden="true" />
            <h3 className="text-xl font-bold mb-4">0€ Fixkosten</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Kein Setup-Honorar. Keine monatliche Pauschale. Dein Budget fließt zu 100% in die Werbung, nicht in meinen Overhead.
            </p>
          </div>
          <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 backdrop-blur-sm">
            <Scale className="w-10 h-10 text-brand-primary mb-6" aria-hidden="true" />
            <h3 className="text-xl font-bold mb-4">Ich investiere in dich</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Ich übernehme das Risiko. Wenn wir den Umsatz nicht steigern, verdiene ich keinen Cent. Das garantiert dir meine volle Aufmerksamkeit.
            </p>
          </div>
          <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 backdrop-blur-sm">
            <PieChart className="w-10 h-10 text-brand-primary mb-6" aria-hidden="true" />
            <h3 className="text-xl font-bold mb-4">Erfolgsbeteiligung</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Du beteiligst mich fair am generierten Mehrwert oder Umsatz. Wir wachsen zusammen – oder gar nicht.
            </p>
          </div>
        </div>

        <div className="text-center">
            <a 
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-brand-navy rounded-full font-bold hover:bg-slate-100 transition-colors"
            >
              Lass uns quatschen
              <ArrowRight className="w-4 h-4" />
            </a>
        </div>
      </div>
    </section>
  );
};

export default PerformanceSection;