import { motion } from "framer-motion";
import { AlertTriangle, Clock, Users } from "lucide-react";

const ActiveThreats = ({ threats }) => {
  const getSeverityColor = (severity) => {
    switch (severity) {
      case "critical":
        return "bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 border-red-200 dark:border-red-500/30";
      case "high":
        return "bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 border-orange-200 dark:border-orange-500/30";
      case "medium":
        return "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 border-yellow-200 dark:border-yellow-500/30";
      case "low":
        return "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-500/30";
      default:
        return "bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm"
    >
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
            Active Threats
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Ongoing misinformation campaigns
          </p>
        </div>
        <div className="w-10 h-10 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center">
          <AlertTriangle className="text-red-600 dark:text-red-400" size={20} />
        </div>
      </div>

      <div className="space-y-3 max-h-96 overflow-y-auto">
        {threats.map((threat, index) => (
          <motion.div
            key={threat.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ x: 4 }}
            className="p-4 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 cursor-pointer hover:border-blue-500 dark:hover:border-blue-400 transition"
          >
            <div className="flex items-start justify-between mb-3">
              <h4 className="font-semibold text-slate-900 dark:text-white flex-1">
                {threat.title}
              </h4>
              <span
                className={`px-2 py-1 rounded-full text-xs font-medium border ${getSeverityColor(
                  threat.severity
                )}`}
              >
                {threat.severity.toUpperCase()}
              </span>
            </div>

            <div className="flex items-center space-x-4 text-sm text-slate-600 dark:text-slate-400">
              <div className="flex items-center space-x-1">
                <Users size={14} />
                <span>{threat.groups} groups</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock size={14} />
                <span>{threat.firstSeen}</span>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mt-3">
              <div className="flex items-center justify-between text-xs mb-1">
                <span className="text-slate-600 dark:text-slate-400">
                  Spread Analysis
                </span>
                <span className="text-slate-900 dark:text-white font-medium">
                  {Math.floor(Math.random() * 40 + 60)}%
                </span>
              </div>
              <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${Math.floor(Math.random() * 40 + 60)}%` }}
                  transition={{ delay: index * 0.1 + 0.3, duration: 0.8 }}
                  className={`h-full ${
                    threat.severity === "critical"
                      ? "bg-gradient-to-r from-red-500 to-red-600"
                      : threat.severity === "high"
                      ? "bg-gradient-to-r from-orange-500 to-orange-600"
                      : threat.severity === "medium"
                      ? "bg-gradient-to-r from-yellow-500 to-yellow-600"
                      : "bg-gradient-to-r from-blue-500 to-blue-600"
                  }`}
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <button className="w-full mt-4 py-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded-lg transition">
        View All Threats
      </button>
    </motion.div>
  );
};

export default ActiveThreats;
