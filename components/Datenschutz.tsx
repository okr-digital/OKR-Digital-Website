import React from 'react';
import { ArrowLeft, Shield, Lock, Eye, Server, Mail, Database, Globe } from 'lucide-react';

interface DatenschutzProps {
  onBack: () => void;
}

const Datenschutz: React.FC<DatenschutzProps> = ({ onBack }) => {
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
          Datenschutzerklärung
        </h1>

        <div className="grid md:grid-cols-3 gap-12">
          
          {/* Main Content Column */}
          <div className="md:col-span-2 space-y-12">
            
            {/* Intro */}
            <div className="prose prose-slate text-brand-gray">
              <p className="lead text-lg">
                Der Schutz deiner persönlichen Daten ist mir ein besonderes Anliegen. Ich verarbeite deine Daten daher ausschließlich auf Grundlage der gesetzlichen Bestimmungen (DSGVO, TKG 2021). In diesen Datenschutzinformationen informiere ich dich über die wichtigsten Aspekte der Datenverarbeitung im Rahmen meiner Website.
              </p>
            </div>

            {/* 1. Verantwortlicher */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-brand-navy flex items-center gap-2">
                <Shield className="w-5 h-5 text-brand-primary" />
                1. Verantwortlicher
              </h2>
              <p className="text-brand-gray text-sm">
                Verantwortlich für die Datenverarbeitung auf dieser Website ist:<br/><br/>
                <strong>OKR.digital</strong><br/>
                Oliver [Nachname]<br/>
                [Adresse]<br/>
                [PLZ] [Ort], Österreich<br/>
                E-Mail: <a href="mailto:oliver@okr-digital.at" className="text-brand-primary hover:underline">oliver@okr-digital.at</a><br/>
                <br/>
                Details siehe <button onClick={() => window.scrollTo(0,0)} className="text-brand-primary hover:underline">Impressum</button>.
              </p>
            </section>

            {/* 2. Datenerfassung */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-brand-navy flex items-center gap-2">
                <Server className="w-5 h-5 text-brand-primary" />
                2. Hosting & Server Logfiles
              </h2>
              <p className="text-brand-gray text-sm leading-relaxed">
                Beim Besuch dieser Webseite erhebt der Provider der Website (Hoster) automatisch Informationen in sogenannten Server-Log-Files, die dein Browser automatisch an uns übermittelt. Dies sind:
              </p>
              <ul className="list-disc pl-5 text-brand-gray text-sm space-y-1">
                <li>Browsertyp und Browserversion</li>
                <li>Verwendetes Betriebssystem</li>
                <li>Referrer URL (die zuvor besuchte Seite)</li>
                <li>Hostname des zugreifenden Rechners (IP-Adresse)</li>
                <li>Uhrzeit der Serveranfrage</li>
              </ul>
              <p className="text-brand-gray text-sm leading-relaxed">
                Diese Daten sind nicht bestimmten Personen zuordenbar. Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Wir behalten uns vor, diese Daten nachträglich zu prüfen, wenn uns konkrete Anhaltspunkte für eine rechtswidrige Nutzung bekannt werden. Grundlage der Verarbeitung ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der technischen Stabilität und Sicherheit der Website).
              </p>
            </section>

            {/* 3. Kontakt & HubSpot */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-brand-navy flex items-center gap-2">
                <Mail className="w-5 h-5 text-brand-primary" />
                3. Kontakt & Formulare (HubSpot)
              </h2>
              <p className="text-brand-gray text-sm leading-relaxed">
                Wenn du per Formular auf der Website oder per E-Mail Kontakt mit mir aufnimmst, werden deine angegebenen Daten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei mir gespeichert.
              </p>
              
              <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                <h3 className="font-bold text-brand-navy text-sm mb-2">Einsatz von HubSpot</h3>
                <p className="text-brand-gray text-xs leading-relaxed">
                  Auf dieser Website nutzen wir für das Kontaktformular Dienste der Software HubSpot. Anbieter ist HubSpot, Inc., 25 First Street, Cambridge, MA 02141 USA.
                  <br/><br/>
                  HubSpot verarbeitet Daten unter anderem in den USA. Wir haben mit HubSpot Standardvertragsklauseln abgeschlossen, um ein angemessenes Datenschutzniveau zu gewährleisten. Weitere Informationen findest du in der Datenschutzerklärung von HubSpot: <a href="https://legal.hubspot.com/privacy-policy" target="_blank" rel="noopener noreferrer" className="underline text-brand-primary">legal.hubspot.com/privacy-policy</a>.
                </p>
              </div>
            </section>

            {/* 4. Tools & CDN */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-brand-navy flex items-center gap-2">
                <Globe className="w-5 h-5 text-brand-primary" />
                4. Einbindung von Diensten Dritter
              </h2>
              
              <div className="space-y-3">
                <h3 className="font-bold text-brand-navy text-sm">Google Fonts</h3>
                <p className="text-brand-gray text-sm leading-relaxed">
                  Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so genannte Web Fonts, die von Google bereitgestellt werden. Beim Aufruf einer Seite lädt dein Browser die benötigten Web Fonts in ihren Browsercache, um Texte und Schriftarten korrekt anzuzeigen.
                  Zu diesem Zweck muss der von dir verwendete Browser Verbindung zu den Servern von Google aufnehmen. Hierdurch erlangt Google Kenntnis darüber, dass über deine IP-Adresse unsere Website aufgerufen wurde. Die Nutzung von Google Web Fonts erfolgt im Interesse einer einheitlichen und ansprechenden Darstellung unserer Online-Angebote (Art. 6 Abs. 1 lit. f DSGVO).
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-bold text-brand-navy text-sm">Tailwind CSS (CDN)</h3>
                <p className="text-brand-gray text-sm leading-relaxed">
                  Wir nutzen für das Styling der Seite ein Content Delivery Network (CDN) für Tailwind CSS. Dies dient der schnelleren Ladezeit und der Stabilität der Website. Dabei wird technisch bedingt deine IP-Adresse an den CDN-Betreiber übertragen.
                </p>
              </div>
            </section>

            {/* 5. Deine Rechte */}
            <section className="space-y-4 pt-4 border-t border-slate-200">
              <h2 className="text-xl font-bold text-brand-navy flex items-center gap-2">
                <Lock className="w-5 h-5 text-brand-primary" />
                5. Deine Rechte
              </h2>
              <p className="text-brand-gray text-sm leading-relaxed">
                Dir stehen grundsätzlich die Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit, Widerruf und Widerspruch zu. Wenn du glaubst, dass die Verarbeitung deiner Daten gegen das Datenschutzrecht verstößt oder deine datenschutzrechtlichen Ansprüche sonst in einer Weise verletzt worden sind, kannst du dich bei der Aufsichtsbehörde beschweren. In Österreich ist dies die Datenschutzbehörde.
              </p>
            </section>

          </div>

          {/* Sidebar */}
          <div className="md:col-span-1">
            <div className="sticky top-32 p-6 bg-slate-50 border border-slate-200 rounded-2xl">
               <Eye className="w-8 h-8 text-brand-navy mb-4" />
               <h3 className="font-bold text-lg text-brand-navy mb-2">Datenschutz-Anfragen</h3>
               <p className="text-brand-gray text-sm mb-6">
                 Du möchtest wissen, welche Daten ich gespeichert habe oder die Löschung beantragen? Schreib mir einfach.
               </p>
               <a 
                 href="mailto:oliver@okr-digital.at" 
                 className="inline-flex items-center justify-center w-full px-4 py-3 bg-white border border-slate-300 hover:border-brand-primary hover:text-brand-primary rounded-lg font-bold transition-all text-sm text-brand-navy"
               >
                 Anfrage senden
               </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Datenschutz;