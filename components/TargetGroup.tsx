import React from 'react';
import { Server, Building2, XCircle, ArrowRightCircle } from 'lucide-react';

const TargetGroup: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-navy mb-4">
            Für wen das hier perfekt passt
          </h2>
          <p className="text-brand-gray max-w-2xl mx-auto">
            Mein Modell rockt am besten, wenn du schon Product-Market-Fit hast und jetzt skalieren willst.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* SaaS Block */}
          <div className="p-8 rounded-2xl bg-brand-light border border-slate-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-brand-primary">
                <Server className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-brand-navy">SaaS Startups & Scaleups</h3>
            </div>
            
            <div className="space-y-4 mb-8">
              <p className="font-semibold text-brand-navy border-b border-slate-200 pb-2">Deine aktuellen Pains:</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-brand-gray text-sm">
                  <XCircle className="w-4 h-4 text-red-400 mt-1 shrink-0" />
                  Deine Pipeline ist ne Wundertüte – total unplanbar.
                </li>
                <li className="flex items-start gap-2 text-brand-gray text-sm">
                  <XCircle className="w-4 h-4 text-red-400 mt-1 shrink-0" />
                  Der CAC ist zu hoch, weil ihr Geld verbrennt.
                </li>
                <li className="flex items-start gap-2 text-brand-gray text-sm">
                  <XCircle className="w-4 h-4 text-red-400 mt-1 shrink-0" />
                  Wachstum passiert eher zufällig als systematisch.
                </li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded-xl border border-blue-100 shadow-sm">
              <div className="flex items-center gap-2 text-brand-primary font-bold mb-1">
                <ArrowRightCircle className="w-5 h-5" /> Dein Outcome
              </div>
              <p className="text-brand-navy text-sm">
                Skalierbare Kanäle und sinkende Kosten durch smartes Conversion-Design.
              </p>
            </div>
          </div>

          {/* Finance Block */}
          <div className="p-8 rounded-2xl bg-brand-light border border-slate-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-brand-primary">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-brand-navy">Finanz & Versicherungen</h3>
            </div>
            
            <div className="space-y-4 mb-8">
              <p className="font-semibold text-brand-navy border-b border-slate-200 pb-2">Deine aktuellen Pains:</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-brand-gray text-sm">
                  <XCircle className="w-4 h-4 text-red-400 mt-1 shrink-0" />
                  Du bist abhängig von Empfehlungen oder teuren Portalen.
                </li>
                <li className="flex items-start gap-2 text-brand-gray text-sm">
                  <XCircle className="w-4 h-4 text-red-400 mt-1 shrink-0" />
                  Wenig Sichtbarkeit im Vergleich zu den "Großen".
                </li>
                <li className="flex items-start gap-2 text-brand-gray text-sm">
                  <XCircle className="w-4 h-4 text-red-400 mt-1 shrink-0" />
                  Anfragen sind oft Müll und Zeitverschwendung.
                </li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded-xl border border-blue-100 shadow-sm">
              <div className="flex items-center gap-2 text-brand-primary font-bold mb-1">
                <ArrowRightCircle className="w-5 h-5" /> Dein Outcome
              </div>
              <p className="text-brand-navy text-sm">
                Eigene Lead-Maschine unabhängig von Portalen und Termine mit Wunschkunden.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TargetGroup;