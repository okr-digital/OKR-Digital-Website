import React from 'react';
import { Linkedin, Facebook, Youtube, Search, Smartphone, Layers } from 'lucide-react';

const ChannelsSection: React.FC = () => {
  return (
    <section className="py-24 bg-white border-y border-slate-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            <div className="lg:w-1/2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-brand-primary text-xs font-bold uppercase tracking-wider mb-6">
                    <Layers className="w-4 h-4" />
                    Die Toolbox
                </div>
                <h2 className="text-3xl md:text-5xl font-heading font-bold text-brand-navy mb-6">
                    Strategie first. <br/>Kanal second.
                </h2>
                <p className="text-brand-gray text-lg leading-relaxed mb-6">
                    Das Schlimmste, was du tun kannst: Einen Kanal bespielen, nur weil es "alle machen". Ich lege mich nie vorher fest.
                </p>
                <p className="text-brand-gray text-lg leading-relaxed mb-8">
                    Wir überprüfen deine bisherigen Daten, deine Zielgruppe und deine Unit Economics. Darauf basierend wählen wir die Kanäle, die <span className="text-brand-navy font-bold">wirklich konvertieren</span>.
                    Egal ob <span className="font-semibold text-brand-primary">Meta, LinkedIn, TikTok, Pinterest, YouTube oder Google</span> – alle relevanten Plattformen sind möglich, aber keine ist Pflicht.
                </p>
                
                <div className="p-4 bg-brand-light rounded-lg border-l-4 border-brand-primary">
                    <p className="text-sm text-brand-navy italic">
                        "Ich verkaufe dir keine 'Facebook Ads'. Ich verkaufe dir ein System zur Neukundengewinnung. Der Kanal ist nur das Mittel zum Zweck."
                    </p>
                </div>
            </div>
            
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
                <div className="p-6 rounded-2xl bg-brand-light border border-slate-200 flex flex-col items-center text-center hover:shadow-md transition-all hover:-translate-y-1">
                     <Linkedin className="w-10 h-10 text-[#0077b5] mb-4" />
                     <span className="font-bold text-brand-navy text-lg">LinkedIn</span>
                     <span className="text-xs text-brand-gray mt-2">B2B Entscheider &<br/>Account Based Marketing</span>
                </div>
                <div className="p-6 rounded-2xl bg-brand-light border border-slate-200 flex flex-col items-center text-center hover:shadow-md transition-all hover:-translate-y-1">
                     <div className="flex gap-3 justify-center mb-4">
                        <Search className="w-10 h-10 text-[#EA4335]" />
                        <Youtube className="w-10 h-10 text-[#FF0000]" />
                     </div>
                     <span className="font-bold text-brand-navy text-lg">Google & YouTube</span>
                     <span className="text-xs text-brand-gray mt-2">High Intent Search &<br/>Video Demand</span>
                </div>
                <div className="p-6 rounded-2xl bg-brand-light border border-slate-200 flex flex-col items-center text-center hover:shadow-md transition-all hover:-translate-y-1">
                     <Facebook className="w-10 h-10 text-[#1877F2] mb-4" />
                     <span className="font-bold text-brand-navy text-lg">Meta (FB/IG)</span>
                     <span className="text-xs text-brand-gray mt-2">Massive Scale &<br/>Retargeting</span>
                </div>
                 <div className="p-6 rounded-2xl bg-brand-light border border-slate-200 flex flex-col items-center text-center hover:shadow-md transition-all hover:-translate-y-1">
                     <Smartphone className="w-10 h-10 text-brand-navy mb-4" />
                     <span className="font-bold text-brand-navy text-lg">TikTok / Pinterest</span>
                     <span className="text-xs text-brand-gray mt-2">Discovery, Viralität &<br/>Visuelle Inspiration</span>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default ChannelsSection;