import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  LayoutDashboard,
  Radio,
  Shield,
  Users,
  BarChart3,
  Settings,
} from "lucide-react";
import Logo from "../ui/Logo";

const DashboardSidebar = ({ isOpen, activeView, setActiveView, onClose }) => {
  const menuItems = [
    { id: "overview", icon: LayoutDashboard, label: "Overview" },
    { id: "broadcast", icon: Radio, label: "Broadcast" },
    { id: "threats", icon: Shield, label: "Active Threats" },
    { id: "groups", icon: Users, label: "Groups" },
    { id: "analytics", icon: BarChart3, label: "Analytics" },
    { id: "settings", icon: Settings, label: "Settings" },
  ];

  return (
    <>
      {/* Mobile Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside
        initial={{ x: -300 }}
        animate={{ x: isOpen ? 0 : -300 }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="fixed left-0 top-0 bottom-0 w-64 bg-white dark:bg-slate-800 border-r border-slate-200 dark:border-slate-700 z-50 overflow-y-auto"
      >
        <div className="p-6">
          {/* Logo */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-3">
              <div className="w-11 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center font-bold text-white">
                <Logo size="xxl" />
              </div>
              <div>
                <h2 className="font-bold text-slate-900 dark:text-white">
                  ChainBreaker
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Dashboard
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="lg:hidden p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg"
            >
              <X className="text-slate-600 dark:text-slate-400" size={20} />
            </button>
          </div>

          {/* Navigation */}
          <nav className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeView === item.id;

              return (
                <motion.button
                  key={item.id}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    setActiveView(item.id);
                    if (window.innerWidth < 1024) onClose();
                  }}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition ${
                    isActive
                      ? "bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                      : "text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700"
                  }`}
                >
                  <Icon size={20} />
                  <span className="font-medium">{item.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="ml-auto w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full"
                    />
                  )}
                </motion.button>
              );
            })}
          </nav>

          {/* Status Card */}
          <div className="mt-8 p-4 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl text-white">
            <p className="text-sm font-medium mb-1">System Status</p>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <p className="text-xs">All Systems Operational</p>
            </div>
          </div>
        </div>
      </motion.aside>
    </>
  );
};

export default DashboardSidebar;
