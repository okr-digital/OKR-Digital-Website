import React, { useEffect } from 'react';
import { Mail, CheckCircle } from 'lucide-react';

const ContactForm: React.FC = () => {
  useEffect(() => {
    const scriptId = 'hubspot-form-script';
    const existingScript = document.getElementById(scriptId);

    if (existingScript) {
      if ((window as any).hbspt) {
        (window as any).hbspt.forms.create({
          portalId: "5101828",
          formId: "cb0a9175-6ef0-4717-86fc-c6d6315ec59d",
          region: "na1",
          target: '#hubspotForm'
        });
      }
      return;
    }

    const script = document.createElement('script');
    script.id = scriptId;
    script.src = "//js.hsforms.net/forms/embed/v2.js";
    script.charset = "utf-8";
    script.type = "text/javascript";
    
    script.onload = () => {
      if ((window as any).hbspt) {
        (window as any).hbspt.forms.create({
          portalId: "5101828",
          formId: "cb0a9175-6ef0-4717-86fc-c6d6315ec59d",
          region: "na1",
          target: '#hubspotForm'
        });
      }
    };

    document.body.appendChild(script);
  }, []);

  return (
    <section className="py-24 bg-brand-navy relative overflow-hidden">
      {/* Abstract Background */}
      <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-brand-primary/10 to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center max-w-6xl mx-auto">
          
          <div className="lg:w-1/2 text-white">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
              Lass uns über <span className="text-brand-primary">dein Wachstum</span> sprechen.
            </h2>
            <p className="text-slate-300 text-lg mb-8">
              Finden wir in einem kurzen Gespräch heraus, ob wir zusammenpassen und wo wir bei dir den Hebel ansetzen können.
            </p>
            
            <div className="space-y-4 mb-8">
               <div className="flex items-center gap-3">
                 <CheckCircle className="w-5 h-5 text-brand-primary" />
                 <span className="text-slate-200">Unverbindlicher Check</span>
               </div>
               <div className="flex items-center gap-3">
                 <CheckCircle className="w-5 h-5 text-brand-primary" />
                 <span className="text-slate-200">Kein Verkaufsdruck</span>
               </div>
               <div className="flex items-center gap-3">
                 <CheckCircle className="w-5 h-5 text-brand-primary" />
                 <span className="text-slate-200">Antwort innerhalb von 24h</span>
               </div>
            </div>

            <div className="inline-flex items-center gap-2 text-slate-400 text-sm">
               <Mail className="w-4 h-4" />
               <a href="mailto:oliver@okr-digital.at" className="hover:text-white transition-colors">oliver@okr-digital.at</a>
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-2xl">
              <div id="hubspotForm" className="min-h-[400px]">
                 {/* HubSpot Form Placeholder */}
                 <div className="flex items-center justify-center h-full text-brand-gray text-sm animate-pulse">
                   Lade Formular...
                 </div>
              </div>
              <p className="text-center text-slate-400 text-xs mt-4">
                Deine Daten sind bei mir sicher. Datenschutz ist Ehrensache.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactForm;