import React from 'react';
import { TrendingUp, User } from 'lucide-react';

const CaseStudy: React.FC = () => {
  return (
    <section className="py-24 bg-brand-light">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200">
          <div className="flex flex-col md:flex-row">
            
            <div className="p-10 md:w-3/5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-bold uppercase tracking-wider mb-6">
                Success Story
              </div>
              <h3 className="text-3xl font-heading font-bold text-brand-navy mb-4">
                +40% Umsatzwachstum in 6 Monaten
              </h3>
              <p className="text-brand-gray mb-8 leading-relaxed">
                Ein B2B-SaaS Kunde steckte fest: Neukundengewinnung stagnierte, CPLs auf LinkedIn waren zu teuer, Pipeline unvorhersehbar.
                <br /><br />
                Durch den Wechsel auf mein Performance-Framework und eine radikale Vereinfachung des Funnels haben wir die Lead-Qualität massiv gesteigert und den Umsatz gepusht.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <p className="text-4xl font-bold text-brand-primary mb-1">40%</p>
                  <p className="text-sm text-brand-gray">Umsatzsteigerung</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-brand-primary mb-1">3.5x</p>
                  <p className="text-sm text-brand-gray">ROAS</p>
                </div>
              </div>
            </div>

            <div className="bg-brand-navy p-10 md:w-2/5 flex flex-col justify-center text-white relative overflow-hidden">
               {/* Abstract decorative graphic */}
               <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary opacity-20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
               
               <div className="relative z-10 text-center md:text-left">
                 <p className="text-lg italic font-light opacity-90 mb-6">
                   "Endlich ein Partner, der nicht nur Reports schickt, sondern Ergebnisse liefert. Das Modell ist fair und motivierend für beide Seiten."
                 </p>
                 <div className="flex items-center gap-3 justify-center md:justify-start">
                    <div className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center">
                        <User className="w-5 h-5 text-slate-300" />
                    </div>
                    <div>
                        <p className="font-bold text-sm">Geschäftsführer</p>
                        <p className="text-xs text-slate-400">FinTech SaaS (DACH)</p>
                    </div>
                 </div>
               </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;