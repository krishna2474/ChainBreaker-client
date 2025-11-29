import { motion } from "framer-motion";
import { Activity, Shield, CheckCircle, Radio, Users } from "lucide-react";

const RecentActivity = ({ activities }) => {
  const getActivityIcon = (type) => {
    switch (type) {
      case "detection":
        return {
          icon: Shield,
          color:
            "text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30",
        };
      case "verification":
        return {
          icon: CheckCircle,
          color:
            "text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/30",
        };
      case "broadcast":
        return {
          icon: Radio,
          color:
            "text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-900/30",
        };
      case "group":
        return {
          icon: Users,
          color:
            "text-orange-600 dark:text-orange-400 bg-orange-100 dark:bg-orange-900/30",
        };
      default:
        return {
          icon: Activity,
          color:
            "text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-700",
        };
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
            Recent Activity
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Live system updates
          </p>
        </div>
        <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
          <Activity className="text-blue-600 dark:text-blue-400" size={20} />
        </div>
      </div>

      <div className="space-y-4 max-h-96 overflow-y-auto">
        {activities.map((activity, index) => {
          const { icon: Icon, color } = getActivityIcon(activity.type);

          return (
            <motion.div
              key={activity.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-start space-x-3"
            >
              <div
                className={`w-10 h-10 ${color} rounded-lg flex items-center justify-center flex-shrink-0`}
              >
                <Icon size={18} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-slate-900 dark:text-white font-medium">
                  {activity.message}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  {activity.time}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Live Indicator */}
      <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-700">
        <div className="flex items-center justify-center space-x-2">
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-2 h-2 bg-green-500 rounded-full"
          />
          <span className="text-xs text-slate-600 dark:text-slate-400">
            Live monitoring active
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default RecentActivity;
