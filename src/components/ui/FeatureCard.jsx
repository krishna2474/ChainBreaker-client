const FeatureCard = ({ icon: Icon, title, desc }) => (
  <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6 hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10">
    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mb-4">
      <Icon className="text-white" size={24} />
    </div>
    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">{title}</h3>
    <p className="text-slate-600 dark:text-slate-400">{desc}</p>
  </div>
);

export default FeatureCard;
