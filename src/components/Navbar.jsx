import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun, LogIn } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./ui/Button";
import { useTheme } from "../context/ThemeContext";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const menuItems = ["Features", "How it Works", "Pricing", "Contact"];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <motion.div
              className="flex items-center space-x-2 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/")}
            >
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center font-bold text-white shadow-lg">
                CB
              </div>
              <span className="text-xl font-bold text-slate-900 dark:text-white">
                ChainBreaker
              </span>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-6">
              {menuItems.map((item) => (
                <a
                  key={item}
                  href={
                    item === "Contact"
                      ? "/contact"
                      : `#${item.toLowerCase().replace(/\s/g, "-")}`
                  }
                  className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
                >
                  {item}
                </a>
              ))}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              >
                {isDark ? (
                  <Sun size={20} className="text-yellow-500" />
                ) : (
                  <Moon size={20} className="text-slate-700" />
                )}
              </motion.button>
              <Button variant="primary" onClick={() => navigate("/demo")}>
                Try Demo
              </Button>
              <Button
                variant="secondary"
                icon={LogIn}
                onClick={() => navigate("/app")}
              >
                Sign In
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              className="lg:hidden text-slate-900 dark:text-white p-2"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Mobile Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-[280px] bg-white dark:bg-slate-900 shadow-2xl z-50 lg:hidden overflow-y-auto"
            >
              <div className="p-6">
                {/* Close Button */}
                <div className="flex justify-end mb-8">
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsOpen(false)}
                    className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  >
                    <X size={24} className="text-slate-900 dark:text-white" />
                  </motion.button>
                </div>

                {/* Menu Items */}
                <nav className="space-y-1">
                  {menuItems.map((item, index) => (
                    <motion.a
                      key={item}
                      href={
                        item === "Contact"
                          ? "/contact"
                          : `#${item.toLowerCase().replace(/\s/g, "-")}`
                      }
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="block px-4 py-3 text-slate-700 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-slate-800 hover:text-blue-600 dark:hover:text-blue-400 rounded-lg transition-colors font-medium"
                      onClick={() => setIsOpen(false)}
                    >
                      {item}
                    </motion.a>
                  ))}
                </nav>

                {/* Theme Toggle */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-700"
                >
                  <button
                    onClick={toggleTheme}
                    className="w-full flex items-center justify-between px-4 py-3 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors"
                  >
                    <span className="text-slate-700 dark:text-slate-300 font-medium">
                      {isDark ? "Light Mode" : "Dark Mode"}
                    </span>
                    {isDark ? (
                      <Sun size={20} className="text-yellow-500" />
                    ) : (
                      <Moon size={20} className="text-slate-700" />
                    )}
                  </button>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="mt-6 space-y-3"
                >
                  <Button
                    variant="secondary"
                    icon={LogIn}
                    className="w-full"
                    onClick={() => {
                      setIsOpen(false);
                      navigate("/app");
                    }}
                  >
                    Sign In
                  </Button>
                  <Button
                    variant="primary"
                    className="w-full"
                    onClick={() => {
                      setIsOpen(false);
                      navigate("/demo");
                    }}
                  >
                    Try Demo
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
