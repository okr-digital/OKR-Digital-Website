import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FAQItem } from '../types';

const faqs: FAQItem[] = [
  {
    question: "Gibt es wirklich keine Fixkosten oder Setup-Fees?",
    answer: "Ja, zu 100%. Kein Setup, kein Retainer, keine 'Fee pro Lead'. Ich werde ausschließlich am tatsächlichen Umsatz oder Deckungsbeitrag beteiligt (Revenue Share). Das heißt: Ich verdiene nur dann Geld, wenn auf deinem Konto Geld eingeht."
  },
  {
    question: "Woran messen wir den Erfolg?",
    answer: "Ausschließlich am harten Euro. Leads und Pipeline sind Mittel zum Zweck, aber keine Währung. Meine Vergütung basiert auf dem 'Closed Won Revenue' oder dem erwirtschafteten Deckungsbeitrag. Keine Vanity-Metriken."
  },
  {
    question: "Für wen passt das?",
    answer: "Da ich das volle finanzielle Risiko trage, arbeite ich nur mit Firmen, an die ich glaube. Du brauchst Product-Market-Fit und ein valides Geschäftsmodell. Außerdem musst du bereit sein, Budget für Werbeanzeigen (Ad Spend) bereitzustellen."
  },
  {
    question: "Wie schnell sehen wir Ergebnisse?",
    answer: "In der Regel sehen wir erste valide Daten nach 2-4 Wochen. Skalierbare Ergebnisse und ein positiver ROI stellen sich meist innerhalb der ersten 3 Monate ein."
  },
  {
    question: "Was brauchen wir zum Starten?",
    answer: "Ein kurzes Erstgespräch zum Checken, ob die Chemie stimmt. Wenn's passt, brauche ich Zugriff auf deine Assets (Webseite, Ad-Accounts, CRM) und ein Budget für Paid Media."
  },
  {
    question: "Welche Kanäle nutzen wir?",
    answer: "Ich bin Plattform-Agnostiker. Ich drücke dich nicht in einen Kanal, nur weil ich ihn mag. Wir analysieren, wo deine Kunden sind – ob LinkedIn, Meta, TikTok, Pinterest, YouTube oder Search. Der Kanal ist nur das Werkzeug, die Strategie bestimmt den Einsatz."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white border-t border-slate-100">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-heading font-bold text-brand-navy mb-4">
            Häufige Fragen
          </h2>
          <p className="text-brand-gray">
            Transparenz ist alles. Hier die Antworten.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border border-slate-200 rounded-xl overflow-hidden transition-all duration-200 bg-brand-light"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex justify-between items-center p-5 text-left bg-white hover:bg-slate-50 transition-colors"
              >
                <span className="font-bold text-brand-navy pr-4">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-brand-primary shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-brand-gray shrink-0" />
                )}
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-5 pt-0 text-brand-gray text-sm leading-relaxed border-t border-slate-100 bg-white">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;