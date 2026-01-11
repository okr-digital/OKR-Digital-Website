import React from 'react';

const ProcessSection: React.FC = () => {
  const steps = [
    { num: "01", title: "Analyse & Hebel", desc: "Wir finden die größten Wachstumshebel in deinem aktuellen Setup." },
    { num: "02", title: "Strategie & Plan", desc: "Ich entwickle eine klare Roadmap. Mein Investment in unsere Partnerschaft." },
    { num: "03", title: "Umsetzung", desc: "Setup der Kampagnen, Funnels und des kompletten Trackings." },
    { num: "04", title: "Optimierung", desc: "Laufende Tests und Anpassungen basierend auf echten Daten." },
    { num: "05", title: "Reporting & Billing", desc: "Abrechnung erfolgt nur bei Zielerreichung. Transparente Zahlen, fairer Split." }
  ];

  return (
    <section className="py-24 bg-white border-t border-slate-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-start">
          
          <div className="w-full md:w-1/3 md:sticky md:top-32 mb-12 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-navy mb-6">
              So arbeiten wir zusammen
            </h2>
            <p className="text-brand-gray text-lg mb-8">
              Kein Black-Box-Prinzip. Ein transparenter Prozess, volle Einsicht und schnelle Iterationen.
            </p>
            <div className="p-6 bg-blue-50 rounded-xl border border-blue-100">
              <p className="font-bold text-brand-navy mb-2">Der Deal:</p>
              <p className="text-sm text-brand-gray">
                Ich gehe in Vorleistung. Strategie und Setup kosten dich nichts. Ich verdiene nur, wenn die Performance stimmt.
              </p>
            </div>
          </div>

          <div className="w-full md:w-2/3 grid gap-8">
            {steps.map((step, idx) => (
              <div key={idx} className="flex gap-6 group">
                <div className="shrink-0 w-12 h-12 rounded-full border-2 border-slate-200 flex items-center justify-center font-bold text-slate-400 group-hover:border-brand-primary group-hover:text-brand-primary transition-colors bg-white">
                  {step.num}
                </div>
                <div className="pt-2 pb-8 border-b border-slate-100 w-full group-last:border-0">
                  <h3 className="text-xl font-bold text-brand-navy mb-2">{step.title}</h3>
                  <p className="text-brand-gray">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProcessSection;