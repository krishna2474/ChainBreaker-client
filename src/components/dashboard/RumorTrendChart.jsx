import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";

const RumorTrendChart = ({ data }) => {
  const maxValue = Math.max(
    ...data.map((d) => Math.max(d.detected, d.verified, d.fake))
  );

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm"
    >
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
            Rumor Detection Trends
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Last 7 days activity
          </p>
        </div>
        <TrendingUp className="text-blue-600 dark:text-blue-400" size={24} />
      </div>

      {/* Chart */}
      <div className="relative h-64">
        <div className="absolute inset-0 flex items-end justify-between space-x-2">
          {data.map((item, index) => {
            const detectedHeight = (item.detected / maxValue) * 100;
            const verifiedHeight = (item.verified / maxValue) * 100;
            const fakeHeight = (item.fake / maxValue) * 100;

            return (
              <div
                key={item.day}
                className="flex-1 flex flex-col items-center space-y-1"
              >
                {/* Bars */}
                <div className="w-full flex justify-center space-x-1 items-end h-48">
                  {/* Detected */}
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: `${detectedHeight}%` }}
                    transition={{
                      delay: index * 0.1,
                      type: "spring",
                      damping: 15,
                    }}
                    className="flex-1 bg-gradient-to-t from-blue-500 to-blue-400 rounded-t-lg relative group cursor-pointer"
                  >
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-900 dark:bg-slate-700 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
                      Detected: {item.detected}
                    </div>
                  </motion.div>

                  {/* Verified */}
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: `${verifiedHeight}%` }}
                    transition={{
                      delay: index * 0.1 + 0.1,
                      type: "spring",
                      damping: 15,
                    }}
                    className="flex-1 bg-gradient-to-t from-green-500 to-green-400 rounded-t-lg relative group cursor-pointer"
                  >
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-900 dark:bg-slate-700 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
                      Verified: {item.verified}
                    </div>
                  </motion.div>

                  {/* Fake */}
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: `${fakeHeight}%` }}
                    transition={{
                      delay: index * 0.1 + 0.2,
                      type: "spring",
                      damping: 15,
                    }}
                    className="flex-1 bg-gradient-to-t from-red-500 to-red-400 rounded-t-lg relative group cursor-pointer"
                  >
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-900 dark:bg-slate-700 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
                      Fake: {item.fake}
                    </div>
                  </motion.div>
                </div>

                {/* Day Label */}
                <span className="text-xs text-slate-600 dark:text-slate-400 font-medium">
                  {item.day}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Legend */}
      <div className="flex items-center justify-center space-x-6 mt-6 pt-6 border-t border-slate-200 dark:border-slate-700">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-gradient-to-br from-blue-500 to-blue-400 rounded-sm"></div>
          <span className="text-sm text-slate-600 dark:text-slate-400">
            Detected
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-gradient-to-br from-green-500 to-green-400 rounded-sm"></div>
          <span className="text-sm text-slate-600 dark:text-slate-400">
            Verified
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-gradient-to-br from-red-500 to-red-400 rounded-sm"></div>
          <span className="text-sm text-slate-600 dark:text-slate-400">
            Fake
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default RumorTrendChart;
