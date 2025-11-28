import { motion, AnimatePresence } from "framer-motion";
import { X, Rocket, Mail, MessageCircle } from "lucide-react";
import Button from "./Button";

const ComingSoonModal = ({ isOpen, onClose, feature }) => {
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.95,
      y: 10,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        duration: 0.4,
        bounce: 0.3,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      y: 10,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-50"
            style={{ backdropFilter: "blur(4px)" }}
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl max-w-md w-full p-8 relative border border-slate-200 dark:border-slate-700 pointer-events-auto"
            >
              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
              >
                <X className="text-slate-600 dark:text-slate-400" size={20} />
              </motion.button>

              {/* Icon */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{
                  type: "spring",
                  delay: 0.1,
                  duration: 0.6,
                  bounce: 0.5,
                }}
                className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-500/30"
              >
                <Rocket className="text-white" size={32} />
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.3 }}
              >
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white text-center mb-3">
                  {feature} Integration
                </h2>
                <p className="text-center text-slate-600 dark:text-slate-400 mb-6">
                  We're working hard to bring {feature} integration to
                  ChainBreaker! This feature is currently under development and
                  will be available soon.
                </p>
              </motion.div>

              {/* Features Coming */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.3 }}
                className="bg-slate-50 dark:bg-slate-900 rounded-lg p-4 mb-6"
              >
                <h3 className="font-semibold text-slate-900 dark:text-white mb-3 text-sm">
                  Coming Soon:
                </h3>
                <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                  {[
                    `One-click ${feature} bot installation`,
                    "Real-time fact-checking in groups",
                    "Multilingual support",
                    "Cross-group intelligence",
                  ].map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.25 + i * 0.05, duration: 0.2 }}
                      className="flex items-center space-x-2"
                    >
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Notify Me */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.3 }}
                className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg p-4 mb-6 shadow-lg shadow-blue-500/20"
              >
                <div className="flex items-center space-x-3 text-white mb-3">
                  <Mail size={20} />
                  <h3 className="font-semibold">Get Notified</h3>
                </div>
                <p className="text-blue-100 text-sm mb-3">
                  Be the first to know when {feature} integration launches!
                </p>
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="flex-1 px-4 py-2 rounded-lg bg-white/20 border border-white/30 text-white placeholder-blue-200 focus:outline-none focus:bg-white/30 transition-colors"
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 bg-white text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors shadow-md"
                  >
                    Notify Me
                  </motion.button>
                </div>
              </motion.div>

              {/* Actions */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.3 }}
                className="flex flex-col sm:flex-row gap-3"
              >
                <Button
                  variant="secondary"
                  className="flex-1"
                  icon={MessageCircle}
                  onClick={onClose}
                >
                  Contact Sales
                </Button>
                <Button variant="primary" className="flex-1" onClick={onClose}>
                  Got It!
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ComingSoonModal;
