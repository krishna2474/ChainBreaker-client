import { Twitter, Github, Mail } from 'lucide-react';

const Footer = () => (
  <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 py-12">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center font-bold text-white">
              CB
            </div>
            <span className="text-xl font-bold text-slate-900 dark:text-white">ChainBreaker</span>
          </div>
          <p className="text-slate-600 dark:text-slate-400 text-sm">
            AI-powered misinformation detection for private chat groups.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-slate-900 dark:text-white mb-4">Product</h3>
          <ul className="space-y-2 text-slate-600 dark:text-slate-400 text-sm">
            <li><a href="#features" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Features</a></li>
            <li><a href="#how-it-works" className="hover:text-blue-600 dark:hover:text-blue-400 transition">How it Works</a></li>
            <li><a href="#pricing" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Pricing</a></li>
            <li><a href="/app" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Dashboard</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-slate-900 dark:text-white mb-4">Resources</h3>
          <ul className="space-y-2 text-slate-600 dark:text-slate-400 text-sm">
            <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Documentation</a></li>
            <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition">API Reference</a></li>
            <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Case Studies</a></li>
            <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Blog</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-slate-900 dark:text-white mb-4">Connect</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition">
              <Github size={20} />
            </a>
            <a href="#" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-200 dark:border-slate-800 mt-8 pt-8 text-center text-slate-600 dark:text-slate-500 text-sm">
        © 2024 ChainBreaker. Fighting misinformation with AI.
      </div>
    </div>
  </footer>
);

export default Footer;
