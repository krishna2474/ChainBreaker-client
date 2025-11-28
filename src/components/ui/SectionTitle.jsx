const SectionTitle = ({ subtitle, title }) => (
  <div className="text-center mb-12">
    <div className="inline-block bg-blue-100 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/30 rounded-full px-4 py-1 mb-4">
      <span className="mb-5 text-sm text-blue-700 dark:text-blue-400 font-medium">{subtitle}</span>
    </div>
    <h2 className="mt-5 text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">{title}</h2>
  </div>
);

export default SectionTitle;
