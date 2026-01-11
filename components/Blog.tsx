import React, { useState } from 'react';
import { ArrowLeft, Calendar, Clock, ChevronRight, User, Tag } from 'lucide-react';
import { motion } from 'framer-motion';

// --- DATA STRUCTURE ---
// In a real scenario, this could be moved to a separate file
interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: React.ReactNode; // Using ReactNode to allow simple HTML/JSX structuring
  date: string;
  readTime: string;
  category: string;
  image: string;
}

const BLOG_POSTS: BlogPost[] = [
  {
    id: 'saas-metrics-2024',
    title: 'Warum dein CAC lügt: Die Wahrheit über B2B Unit Economics',
    excerpt: 'Die meisten SaaS-Founder berechnen ihre Customer Acquisition Costs falsch. Hier ist die Formel, die Investoren wirklich sehen wollen – und warum "Blended CAC" dein Budget verbrennt.',
    date: '12. Mai 2024',
    readTime: '5 Min.',
    category: 'Finance & Metrics',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    content: (
      <>
        <p className="mb-6 text-lg font-medium text-brand-navy">
          "Wir haben einen CAC von 50€." – Wenn ich diesen Satz höre, muss ich meistens tief durchatmen. Nicht, weil 50€ schlecht wären. Sondern weil die Berechnung dahinter meistens Milchmädchen-Mathematik ist.
        </p>
        <h3 className="text-2xl font-bold text-brand-navy mb-4 mt-8">Das Problem mit dem Blended CAC</h3>
        <p className="mb-4">
          Viele Startups werfen alles in einen Topf: Organischen Traffic, Empfehlungen und Paid Ads. Dann teilen sie die Gesamtausgaben durch die neuen Kunden. Das Ergebnis sieht super aus – ist aber nutzlos für die Skalierung.
        </p>
        <p className="mb-4">
          Wenn du 10.000€ in Ads steckst und 100 Kunden gewinnst, aber 50 davon über SEO kamen, ist dein Paid-CAC nicht 100€, sondern 200€. Wenn du jetzt das Budget verdoppelst, verdoppelt sich SEO nicht automatisch mit. Dein Blended CAC explodiert.
        </p>
        <h3 className="text-2xl font-bold text-brand-navy mb-4 mt-8">Payback Period ist King</h3>
        <p className="mb-4">
          Vergiss für einen Moment den absoluten CAC. Die wichtigere Frage im Bootstrapping oder frühen Funding-Stadium ist: <strong>Wie lange dauert es, bis der Kunde die Akquisekosten zurückgezahlt hat?</strong>
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li><strong>Unter 6 Monate:</strong> Du hast eine Gelddruckmaschine. Skaliere so schnell es geht.</li>
          <li><strong>6-12 Monate:</strong> Gesunder Standard für B2B SaaS.</li>
          <li><strong>Über 18 Monate:</strong> Du hast ein Cashflow-Problem, bevor du groß wirst.</li>
        </ul>
        <div className="bg-blue-50 border-l-4 border-brand-primary p-4 my-8">
          <p className="font-bold text-brand-navy">Pro-Tipp:</p>
          <p className="text-sm">Berechne den CAC immer pro Kanal. Nur so weißt du, wo der nächste Euro investiert werden muss.</p>
        </div>
      </>
    )
  },
  {
    id: 'linkedin-ads-guide',
    title: 'LinkedIn Ads sind zu teuer? Du machst es falsch.',
    excerpt: 'LinkedIn ist nicht Facebook. Wer hier "Lead Gen Forms" ohne Strategie schaltet, zahlt 150€ pro Lead. Wie du mit Account Based Marketing den Preis drückst.',
    date: '03. April 2024',
    readTime: '7 Min.',
    category: 'Paid Social',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800',
    content: (
      <>
        <p className="mb-6">
          Der Ruf von LinkedIn Ads ist legendär: Exzellentes Targeting, aber astronomische Klickpreise. 8€ bis 15€ pro Klick sind keine Seltenheit. Für viele Startups ein Ausschlusskriterium. Zu Unrecht.
        </p>
        <h3 className="text-2xl font-bold text-brand-navy mb-4 mt-8">Der "Trust-Layer" Ansatz</h3>
        <p className="mb-4">
          Der größte Fehler: Kalten Traffic direkt auf eine Demo-Anfrage zu schicken. Auf LinkedIn sind die Leute im "Browsing Mode", nicht im "Buying Mode".
        </p>
        <p className="mb-4">
          Stattdessen nutzen wir LinkedIn oft nur als Distributionskanal für High-Value Content (Case Studies, Whitepaper) ohne Gating, oder um Retargeting-Pools für günstigere Kanäle (wie Meta) aufzubauen.
        </p>
        <h3 className="text-2xl font-bold text-brand-navy mb-4 mt-8">Video Views sind underpriced</h3>
        <p className="mb-4">
          Während Text-Ads teuer sind, ist Video auf LinkedIn aktuell noch verhältnismäßig günstig zu bekommen, wenn man auf "Video Views" optimiert, nicht auf Clicks.
        </p>
        <p>
          Baue eine Audience auf, die 50% deines Videos gesehen hat. Diese Audience ist "warm". Diese kannst du dann aggressiver retargeten.
        </p>
      </>
    )
  },
  {
    id: 'performance-mindset',
    title: 'Warum Retainer Modelle Agenturen faul machen',
    excerpt: 'Die klassische Agentur will Planungssicherheit. Du willst Wachstum. Warum diese Interessen oft kollidieren und wie Performance-Deals das Alignment erzwingen.',
    date: '20. März 2024',
    readTime: '4 Min.',
    category: 'Mindset',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800',
    content: (
      <>
        <p className="mb-6">
          Stell dir vor, du bezahlst einen Mitarbeiter 5.000€ im Monat, egal ob er zur Arbeit kommt oder nicht. Würdest du das tun? Wahrscheinlich nicht. Aber genau das ist das Standard-Modell von Marketing-Agenturen.
        </p>
        <h3 className="text-2xl font-bold text-brand-navy mb-4 mt-8">Der Interessenskonflikt</h3>
        <p className="mb-4">
          Eine Agentur mit Retainer hat ein Ziel: <strong>Churn Prevention</strong>. Sie müssen gerade so viel tun, dass du nicht kündigst.
        </p>
        <p className="mb-4">
          Ein Performance-Partner hat ein Ziel: <strong>Scale</strong>. Denn wenn du nicht wächst, verdient er nichts.
        </p>
        <p>
          Natürlich passt das Modell nicht für jeden. Es erfordert Vertrauen und volle Transparenz in die Zahlen (CRM, Revenue). Aber wenn es passt, ist es der stärkste Wachstumsmotor, den du bauen kannst.
        </p>
      </>
    )
  }
];

// --- COMPONENT ---

interface BlogProps {
  onBack: () => void;
}

const Blog: React.FC<BlogProps> = ({ onBack }) => {
  const [selectedPostId, setSelectedPostId] = useState<string | null>(null);

  // Helper to find the active post
  const activePost = selectedPostId ? BLOG_POSTS.find(p => p.id === selectedPostId) : null;

  // SCROLL TO TOP helper
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  // VIEW: SINGLE POST
  if (activePost) {
    return (
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        exit={{ opacity: 0 }}
        className="min-h-screen bg-white pt-32 pb-24"
      >
        {/* Progress Bar (Optional visual flair) */}
        <div className="fixed top-0 left-0 h-1 bg-brand-primary z-50 w-full origin-left transform scale-x-0 animate-[progress_linear_auto]" />

        <div className="container mx-auto px-6 max-w-3xl">
          
          {/* Navigation */}
          <button 
            onClick={() => { setSelectedPostId(null); scrollToTop(); }}
            className="group flex items-center gap-2 text-brand-gray hover:text-brand-primary transition-colors mb-8"
          >
            <div className="p-2 rounded-full bg-slate-100 group-hover:bg-blue-50 transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </div>
            <span className="font-medium">Zurück zur Übersicht</span>
          </button>

          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-4 text-sm text-brand-primary font-bold uppercase tracking-wider mb-4">
              <span className="bg-blue-50 px-3 py-1 rounded-full">{activePost.category}</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-heading font-extrabold text-brand-navy mb-6 leading-tight">
              {activePost.title}
            </h1>
            
            <div className="flex items-center gap-6 text-brand-gray text-sm border-b border-slate-100 pb-8">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {activePost.date}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {activePost.readTime} Lesezeit
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                Oliver
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="rounded-2xl overflow-hidden mb-12 shadow-xl aspect-video relative">
            <img 
              src={activePost.image} 
              alt={activePost.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="prose prose-lg prose-slate max-w-none text-brand-gray leading-relaxed">
            {activePost.content}
          </div>

          {/* CTA Footer in Article */}
          <div className="mt-16 p-8 bg-brand-navy rounded-2xl text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Das Thema vertiefen?</h3>
            <p className="text-slate-300 mb-6">
              Lass uns schauen, wie wir diese Strategie auf dein Business anwenden können.
            </p>
            <a 
              href="#contact" 
              onClick={(e) => {
                  e.preventDefault();
                  onBack(); // Go to home
                  setTimeout(() => document.getElementById('contact')?.scrollIntoView(), 100);
              }}
              className="inline-block bg-brand-primary hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full transition-colors"
            >
              Kostenloses Erstgespräch
            </a>
          </div>

        </div>
      </motion.div>
    );
  }

  // VIEW: LIST
  return (
    <div className="min-h-screen bg-brand-light pt-32 pb-24">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-brand-primary text-xs font-bold uppercase tracking-wider mb-4">
             Inside Growth
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-brand-navy mb-6">
            Insights & Strategien
          </h1>
          <p className="text-brand-gray text-lg">
            Kein BlaBla. Nur Taktiken, die in der Praxis funktionieren.
            Deep Dives in Unit Economics, Funnel-Psychologie und Skalierung.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {BLOG_POSTS.map((post) => (
            <motion.div 
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all cursor-pointer flex flex-col h-full"
              onClick={() => { setSelectedPostId(post.id); scrollToTop(); }}
            >
              {/* Image */}
              <div className="h-48 overflow-hidden relative">
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-brand-navy flex items-center gap-1">
                  <Tag className="w-3 h-3 text-brand-primary" />
                  {post.category}
                </div>
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-xs text-brand-gray mb-3">
                  <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
                </div>
                
                <h3 className="text-xl font-bold text-brand-navy mb-3 leading-tight group-hover:text-brand-primary transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-brand-gray text-sm line-clamp-3 mb-6 flex-grow">
                  {post.excerpt}
                </p>

                <div className="flex items-center text-brand-primary font-bold text-sm mt-auto">
                  Artikel lesen <ChevronRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Blog;