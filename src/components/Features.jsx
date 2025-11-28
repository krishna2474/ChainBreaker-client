import { Shield, Activity, Zap, Globe, Brain, AlertTriangle } from 'lucide-react';
import SectionTitle from './ui/SectionTitle';
import FeatureCard from './ui/FeatureCard';

const Features = () => {
  const features = [
    {
      title: "Real-Time Detection",
      desc: "AI agents instantly analyze message patterns, tone, and urgency indicators to flag potential misinformation.",
      icon: AlertTriangle
    },
    {
      title: "Multi-Agent Verification",
      desc: "Cross-checks claims against Google Fact Check API, NewsAPI, and trusted sources using LangChain agents.",
      icon: Shield
    },
    {
      title: "Cross-Group Intelligence",
      desc: "Detects when the same rumor spreads across multiple groups and automatically broadcasts verified facts.",
      icon: Activity
    },
    {
      title: "Multilingual Support",
      desc: "Generates context-aware clarifications in multiple languages using GPT-4, Gemini, or Claude.",
      icon: Globe
    },
    {
      title: "Privacy-First Design",
      desc: "Works only on voluntarily shared messages. No mass monitoring or data collection from private chats.",
      icon: Zap
    },
    {
      title: "Learning System",
      desc: "Improves detection accuracy over time through user feedback and pattern recognition.",
      icon: Brain
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-7xl mx-auto px-4">
        <SectionTitle subtitle="Capabilities" title="Agentic AI for Misinformation Control" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {features.map((f, i) => (
            <FeatureCard key={i} {...f} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
