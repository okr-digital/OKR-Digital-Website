import React from 'react';
import { ArrowLeft, Building2, Mail, MapPin, Phone, FileText } from 'lucide-react';

interface ImpressumProps {
  onBack: () => void;
}

const Impressum: React.FC<ImpressumProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-white pt-32 pb-24">
      <div className="container mx-auto px-6 max-w-4xl">
        
        {/* Navigation Back */}
        <button 
          onClick={onBack}
          className="group flex items-center gap-2 text-brand-gray hover:text-brand-primary transition-colors mb-12"
        >
          <div className="p-2 rounded-full bg-slate-100 group-hover:bg-blue-50 transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </div>
          <span className="font-medium">Zurück zur Startseite</span>
        </button>

        <h1 className="text-3xl md:text-5xl font-heading font-bold text-brand-navy mb-8">
          Impressum
        </h1>

        <div className="grid md:grid-cols-3 gap-12">
          
          {/* Main Legal Info Column */}
          <div className="md:col-span-2 space-y-12">
            
            {/* Intro */}
            <div className="prose prose-slate text-brand-gray">
              <p className="lead text-lg">
                Informationspflicht laut §5 E-Commerce Gesetz, §14 Unternehmensgesetzbuch, §63 Gewerbeordnung und Offenlegungspflicht laut §25 Mediengesetz.
              </p>
            </div>

            {/* Operator Data */}
            <section className="bg-brand-light p-8 rounded-2xl border border-slate-200">
              <h2 className="text-xl font-bold text-brand-navy mb-6 flex items-center gap-2">
                <Building2 className="w-5 h-5 text-brand-primary" />
                Medieninhaber & Herausgeber
              </h2>
              
              <div className="space-y-4 text-brand-navy">
                <p className="font-bold text-lg">Oliver [Nachname einfügen]</p>
                <p>OKR.digital</p>
                
                <div className="pt-4 space-y-2 text-sm text-brand-gray">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 mt-1 shrink-0" />
                    <span>
                      [Straße Hausnummer]<br />
                      [PLZ] [Ort], Österreich
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 shrink-0" />
                    <a href="mailto:oliver@okr-digital.at" className="hover:text-brand-primary transition-colors">oliver@okr-digital.at</a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 shrink-0" />
                    <span>[Telefonnummer einfügen, optional aber empfohlen]</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Legal Details */}
            <section className="space-y-6">
              <div>
                <h3 className="font-bold text-brand-navy mb-2">Unternehmensgegenstand</h3>
                <p className="text-brand-gray text-sm">Dienstleistungen im Bereich Marketing & Unternehmensberatung</p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold text-brand-navy mb-2">UID-Nummer</h3>
                  <p className="text-brand-gray text-sm">[ATU Nummer einfügen oder "Kleinunternehmerregelung"]</p>
                </div>
                <div>
                  <h3 className="font-bold text-brand-navy mb-2">Firmenbuchnummer</h3>
                  <p className="text-brand-gray text-sm">[Nummer einfügen oder entfernen wenn nicht eingetragen]</p>
                </div>
                <div>
                  <h3 className="font-bold text-brand-navy mb-2">Firmenbuchgericht</h3>
                  <p className="text-brand-gray text-sm">[Gericht einfügen, z.B. Landesgericht Wien]</p>
                </div>
                <div>
                  <h3 className="font-bold text-brand-navy mb-2">Sitz</h3>
                  <p className="text-brand-gray text-sm">[Politischer Bezirk / Ort]</p>
                </div>
              </div>

              <div className="border-t border-slate-200 pt-6">
                <h3 className="font-bold text-brand-navy mb-2">Mitgliedschaften</h3>
                <p className="text-brand-gray text-sm">Wirtschaftskammer Österreich (WKO), [Fachgruppe einfügen]</p>
              </div>

              <div>
                <h3 className="font-bold text-brand-navy mb-2">Aufsichtsbehörde / Gewerbebehörde</h3>
                <p className="text-brand-gray text-sm">Magistrat der Stadt [Stadt] / Bezirkshauptmannschaft [Bezirk]</p>
              </div>

              <div>
                <h3 className="font-bold text-brand-navy mb-2">Berufsrecht</h3>
                <p className="text-brand-gray text-sm">Gewerbeordnung: <a href="https://www.ris.bka.gv.at" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">www.ris.bka.gv.at</a></p>
              </div>
            </section>

            {/* Standard Legal Text */}
            <section className="space-y-6 pt-8 border-t border-slate-200">
               <div>
                 <h3 className="font-bold text-brand-navy mb-2">EU-Streitschlichtung</h3>
                 <p className="text-brand-gray text-sm">
                   Gemäß Verordnung über Online-Streitbeilegung in Verbraucherangelegenheiten (ODR-Verordnung) möchten wir Sie über die Online-Streitbeilegungsplattform (OS-Plattform) informieren.<br/>
                   Verbraucher haben die Möglichkeit, Beschwerden an die Online-Streitbeilegungsplattform der Europäischen Kommission zu richten: <a href="http://ec.europa.eu/odr" target="_blank" rel="noreferrer" className="text-brand-primary underline">http://ec.europa.eu/odr</a>.<br/>
                   Sie können allfällige Beschwerde auch an die oben angegebene E-Mail-Adresse richten.
                 </p>
               </div>

               <div>
                 <h3 className="font-bold text-brand-navy mb-2">Haftung für Inhalte dieser Webseite</h3>
                 <p className="text-brand-gray text-sm">
                   Wir entwickeln die Inhalte dieser Webseite ständig weiter und bemühen uns, korrekte und aktuelle Informationen bereitzustellen. Leider können wir keine Haftung für die Korrektheit aller Inhalte auf dieser Webseite übernehmen, speziell für jene, die seitens Dritter bereitgestellt wurden. Sollten Ihnen problematische oder rechtswidrige Inhalte auffallen, bitten wir Sie uns umgehend zu kontaktieren.
                 </p>
               </div>

               <div>
                 <h3 className="font-bold text-brand-navy mb-2">Haftung für Links auf dieser Webseite</h3>
                 <p className="text-brand-gray text-sm">
                   Unsere Webseite enthält Links zu anderen Webseiten, für deren Inhalt wir nicht verantwortlich sind. Haftung für verlinkte Websites besteht laut § 17 ECG für uns nicht, da wir keine Kenntnis rechtswidriger Tätigkeiten hatten und haben, uns solche Rechtswidrigkeiten auch bisher nicht aufgefallen sind und wir Links sofort entfernen würden, wenn uns Rechtswidrigkeiten bekannt werden.
                 </p>
               </div>

               <div>
                 <h3 className="font-bold text-brand-navy mb-2">Urheberrechtshinweis</h3>
                 <p className="text-brand-gray text-sm">
                   Alle Inhalte dieser Webseite (Bilder, Fotos, Texte, Videos) unterliegen dem Urheberrecht. Falls notwendig, werden wir die unerlaubte Nutzung von Teilen der Inhalte unserer Seite rechtlich verfolgen.
                 </p>
               </div>
            </section>

          </div>

          {/* Sidebar / Contact Helper */}
          <div className="md:col-span-1">
            <div className="sticky top-32 p-6 bg-brand-navy rounded-2xl text-white">
               <FileText className="w-8 h-8 text-brand-primary mb-4" />
               <h3 className="font-bold text-lg mb-2">Fragen?</h3>
               <p className="text-slate-300 text-sm mb-6">
                 Bei rechtlichen Anfragen oder Unklarheiten erreichst du mich am besten per E-Mail.
               </p>
               <a 
                 href="mailto:oliver@okr-digital.at" 
                 className="inline-flex items-center justify-center w-full px-4 py-3 bg-brand-primary hover:bg-blue-600 rounded-lg font-bold transition-colors text-sm"
               >
                 E-Mail senden
               </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Impressum;