import { motion } from "framer-motion";
import {
  Menu,
  Bell,
  LogOut,
  User,
  Moon,
  Sun,
  PanelLeftClose,
  PanelLeft,
} from "lucide-react";
import { supabase } from "../../config/supabaseClient";
import { useTheme } from "../../context/ThemeContext";
import Logo from "../ui/Logo";

const DashboardHeader = ({ session, onMenuClick, sidebarOpen }) => {
  const { isDark, toggleTheme } = useTheme();

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  return (
    <header className="sticky top-0 z-40 bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
      <div className="flex items-center justify-between px-4 md:px-6 py-4">
        {/* Left Side */}
        <div className="flex items-center space-x-4">
          {/* Menu Toggle - Always Visible */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onMenuClick}
            className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition"
            title={sidebarOpen ? "Collapse sidebar" : "Expand sidebar"}
          >
            {sidebarOpen ? (
              <PanelLeftClose
                className="text-slate-600 dark:text-slate-400"
                size={24}
              />
            ) : (
              <PanelLeft
                className="text-slate-600 dark:text-slate-400"
                size={24}
              />
            )}
          </motion.button>

          <div className="hidden sm:flex items-center space-x-3">
            <div>
              <h2 className="font-bold text-slate-900 dark:text-white">
                Detection Dashboard
              </h2>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center space-x-2">
          {/* Theme Toggle */}
          <motion.button
            whileHover={{ scale: 1.05, rotate: 180 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleTheme}
            className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition"
            title={isDark ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDark ? (
              <Sun className="text-yellow-500" size={20} />
            ) : (
              <Moon className="text-slate-600" size={20} />
            )}
          </motion.button>

          {/* Notifications */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition"
            title="Notifications"
          >
            <Bell className="text-slate-600 dark:text-slate-400" size={20} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </motion.button>

          {/* User Menu */}
          <div className="relative group">
            <button className="flex items-center space-x-3 p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition">
              <div className="hidden md:block text-right">
                <p className="text-sm font-medium text-slate-900 dark:text-white">
                  {session?.user?.user_metadata?.full_name || "User"}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {session?.user?.email}
                </p>
              </div>
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                <User className="text-white" size={20} />
              </div>
            </button>

            {/* Dropdown */}
            <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-slate-800 rounded-lg shadow-xl border border-slate-200 dark:border-slate-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
              <button
                onClick={handleLogout}
                className="w-full flex items-center space-x-2 px-4 py-3 hover:bg-slate-50 dark:hover:bg-slate-700 text-red-600 dark:text-red-400 transition rounded-lg"
              >
                <LogOut size={18} />
                <span>Sign Out</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
