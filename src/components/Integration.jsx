import SectionTitle from "./ui/SectionTitle";

const Integration = () => {
  return (
    <>
      <section id="how-it-works" className="py-10 bg-white dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle subtitle="How It Works" title="Simple 3-Step Setup" />

          <div className="mt-12 grid lg:grid-cols-3 gap-8">
            <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">
                1
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                Add Bot to Group
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                Invite ChainBreaker bot to your WhatsApp or Telegram group.
                Group admins have full control.
              </p>
            </div>

            <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">
                2
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                Forward Suspicious Messages
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                Tag the bot or forward messages you want verified. AI agents
                analyze content instantly.
              </p>
            </div>

            <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">
                3
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                Get Instant Fact Checks
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                Receive verified information cards you can reshare. Cross-group
                alerts stop viral spread.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Integration;
