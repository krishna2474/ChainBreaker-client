import { motion } from 'framer-motion';
import { CheckCircle, XCircle, AlertCircle } from 'lucide-react';

const VerificationAccuracy = ({ accuracy }) => {
  const stats = {
    accurate: 94.8,
    false_positive: 3.2,
    pending: 2.0
  };

  const circumference = 2 * Math.PI * 70;
  const offset = circumference - (accuracy / 100) * circumference;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm"
    >
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
            Verification Accuracy
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-400">AI model performance</p>
        </div>
      </div>

      <div className="flex items-center justify-center mb-8">
        {/* Circular Progress */}
        <div className="relative w-48 h-48">
          <svg className="transform -rotate-90 w-48 h-48">
            {/* Background Circle */}
            <CheckCircle
              cx="96"
              cy="96"
              r="70"
              stroke="currentColor"
              strokeWidth="12"
              fill="transparent"
              className="text-slate-200 dark:text-slate-700"
            />
            {/* Progress Circle */}
            <motion.circle
              cx="96"
              cy="96"
              r="70"
              stroke="url(#gradient)"
              strokeWidth="12"
              fill="transparent"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              strokeLinecap="round"
              initial={{ strokeDashoffset: circumference }}
              animate={{ strokeDashoffset: offset }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#8b5cf6" />
              </linearGradient>
            </defs>
          </svg>

          {/* Center Text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <motion.span
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="text-4xl font-bold text-slate-900 dark:text-white"
            >
              {accuracy}%
            </motion.span>
            <span className="text-sm text-slate-600 dark:text-slate-400">Accuracy</span>
          </div>
        </div>
      </div>

      {/* Stats Breakdown */}
      <div className="space-y-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="flex items-center justify-between"
        >
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
              <CheckCircle className="text-green-600 dark:text-green-400" size={20} />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-900 dark:text-white">Accurate Detections</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">Correctly identified</p>
            </div>
          </div>
          <span className="text-lg font-bold text-green-600 dark:text-green-400">{stats.accurate}%</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="flex items-center justify-between"
        >
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center">
              <XCircle className="text-red-600 dark:text-red-400" size={20} />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-900 dark:text-white">False Positives</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">Incorrectly flagged</p>
            </div>
          </div>
          <span className="text-lg font-bold text-red-600 dark:text-red-400">{stats.false_positive}%</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="flex items-center justify-between"
        >
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg flex items-center justify-center">
              <AlertCircle className="text-yellow-600 dark:text-yellow-400" size={20} />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-900 dark:text-white">Pending Review</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">Manual verification needed</p>
            </div>
          </div>
          <span className="text-lg font-bold text-yellow-600 dark:text-yellow-400">{stats.pending}%</span>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default VerificationAccuracy;
