import React from 'react';
import { Compass, Target, BarChart2, MousePointerClick } from 'lucide-react';
import { ServiceCard } from '../types';

const services: ServiceCard[] = [
  {
    title: "Growth & Funnel Strategie",
    description: "Wir checken deinen Status Quo und bauen eine Roadmap, die deine Zielgruppe psychologisch wirklich abholt.",
    benefit: "Plan statt Rätselraten.",
    icon: 'Compass'
  },
  {
    title: "Kanal-Agnostische Acquisition",
    description: "Ob LinkedIn, Meta, Google, TikTok oder Pinterest – wir nutzen exakt die Plattformen, die für deine Unit Economics funktionieren. Die Strategie bestimmt den Kanal.",
    benefit: "Traffic, der kauft, nicht nur klickt.",
    icon: 'Target'
  },
  {
    title: "Tracking & Messbarkeit",
    description: "Setup von sauberem Server-Side-Tracking. Damit wir genau sehen, was Geld bringt und was Geld verbrennt.",
    benefit: "Kein Blindflug. Datenbasierte Fakten.",
    icon: 'BarChart2'
  },
  {
    title: "Conversion Optimierung",
    description: "Tuning von Landingpages und Angeboten, um aus Besuchern echte Interessenten zu machen.",
    benefit: "Mehr Umsatz aus dem gleichen Budget.",
    icon: 'MousePointerClick'
  }
];

const iconMap: Record<string, React.FC<any>> = { Compass, Target, BarChart2, MousePointerClick };

const Services: React.FC = () => {
  return (
    <section className="py-24 bg-brand-light">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-brand-primary font-bold tracking-wider uppercase text-sm block mb-2">Leistungsübersicht</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-navy">
            Was du bekommst
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <div key={index} className="bg-white p-6 rounded-xl border border-slate-200 hover:shadow-lg transition-shadow group">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-brand-primary group-hover:text-white transition-colors text-brand-primary">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-brand-navy mb-3">{service.title}</h3>
                <p className="text-brand-gray text-sm leading-relaxed mb-4 min-h-[60px]">
                  {service.description}
                </p>
                <div className="pt-4 border-t border-slate-100">
                   <p className="text-xs font-semibold text-brand-primary flex items-center gap-1">
                     → {service.benefit}
                   </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;