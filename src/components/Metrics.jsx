const Metrics = () => (
  <section className="py-12 bg-white dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {[
          { label: 'Rumors Detected', value: '2.4K+' },
          { label: 'Groups Protected', value: '150+' },
          { label: 'Fact Checks', value: '5.8K+' },
          { label: 'Response Time', value: '<2s' },
        ].map((stat, i) => (
          <div key={i}>
            <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              {stat.value}
            </div>
            <div className="text-slate-600 dark:text-slate-400 mt-2">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Metrics;
