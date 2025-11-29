import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import {
  Shield,
  AlertTriangle,
  Users,
  TrendingUp,
  Clock,
  CheckCircle,
} from "lucide-react";
import { useEffect } from "react";

const AnimatedNumber = ({ value, duration = 2 }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => {
    if (typeof value === "string" && value.includes("%")) {
      return `${Math.round(latest * 10) / 10}%`;
    }
    if (typeof value === "string" && value.includes("s")) {
      return `${Math.round(latest * 10) / 10}s`;
    }
    return Math.round(latest).toLocaleString();
  });

  useEffect(() => {
    const numericValue =
      typeof value === "string"
        ? parseFloat(value.replace(/[^0-9.]/g, ""))
        : value;

    const controls = animate(count, numericValue, {
      duration,
      ease: "easeOut",
    });

    return controls.stop;
  }, [value, count, duration]);

  return <motion.span>{rounded}</motion.span>;
};

const StatsOverview = ({ stats }) => {
  const statCards = [
    {
      title: "Total Rumors Detected",
      value: stats.totalRumors,
      icon: Shield,
      color: "from-blue-500 to-indigo-600",
      change: "+12.5%",
      trend: "up",
    },
    {
      title: "Active Threats",
      value: stats.activeThreats,
      icon: AlertTriangle,
      color: "from-red-500 to-pink-600",
      change: "-8.2%",
      trend: "down",
    },
    {
      title: "Groups Protected",
      value: stats.groupsProtected,
      icon: Users,
      color: "from-green-500 to-emerald-600",
      change: "+15.3%",
      trend: "up",
    },
    {
      title: "Verification Rate",
      value: `${stats.verificationRate}%`,
      icon: CheckCircle,
      color: "from-purple-500 to-indigo-600",
      change: "+2.1%",
      trend: "up",
    },
    {
      title: "Rumors Today",
      value: stats.rumorsToday,
      icon: TrendingUp,
      color: "from-yellow-500 to-orange-600",
      change: "+5.7%",
      trend: "up",
    },
    {
      title: "Avg Response Time",
      value: `${stats.responseTime}s`,
      icon: Clock,
      color: "from-cyan-500 to-blue-600",
      change: "-0.3s",
      trend: "down",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {statCards.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -4 }}
            className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-all"
          >
            <div className="flex items-start justify-between mb-4">
              <div
                className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-lg flex items-center justify-center`}
              >
                <Icon className="text-white" size={24} />
              </div>
              <div
                className={`px-2 py-1 rounded-full text-xs font-medium ${
                  stat.trend === "up"
                    ? "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400"
                    : "bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400"
                }`}
              >
                {stat.change}
              </div>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">
              <AnimatedNumber value={stat.value} duration={2} />
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              {stat.title}
            </p>
          </motion.div>
        );
      })}
    </div>
  );
};

export default StatsOverview;
