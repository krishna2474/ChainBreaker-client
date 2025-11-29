import { motion } from "framer-motion";
import { Users, MessageCircle, Send, MoreVertical } from "lucide-react";

const GroupsOverview = ({ groups }) => {
  const getPlatformIcon = (platform) => {
    return platform === "whatsapp" ? MessageCircle : Send;
  };

  const getStatusColor = (status) => {
    return status === "active"
      ? "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400"
      : "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400";
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
            Connected Groups
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Groups using ChainBreaker
          </p>
        </div>
        <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition">
          Add Group
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-200 dark:border-slate-700">
              <th className="text-left py-3 px-4 text-sm font-medium text-slate-600 dark:text-slate-400">
                Group
              </th>
              <th className="text-left py-3 px-4 text-sm font-medium text-slate-600 dark:text-slate-400">
                Platform
              </th>
              <th className="text-left py-3 px-4 text-sm font-medium text-slate-600 dark:text-slate-400">
                Members
              </th>
              <th className="text-left py-3 px-4 text-sm font-medium text-slate-600 dark:text-slate-400">
                Rumors
              </th>
              <th className="text-left py-3 px-4 text-sm font-medium text-slate-600 dark:text-slate-400">
                Status
              </th>
              <th className="text-left py-3 px-4 text-sm font-medium text-slate-600 dark:text-slate-400"></th>
            </tr>
          </thead>
          <tbody>
            {groups.map((group, index) => {
              const PlatformIcon = getPlatformIcon(group.platform);

              return (
                <motion.tr
                  key={group.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="border-b border-slate-100 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition"
                >
                  <td className="py-4 px-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                        <Users className="text-white" size={18} />
                      </div>
                      <span className="font-medium text-slate-900 dark:text-white">
                        {group.name}
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center space-x-2">
                      <PlatformIcon
                        className="text-slate-600 dark:text-slate-400"
                        size={16}
                      />
                      <span className="text-sm text-slate-600 dark:text-slate-400 capitalize">
                        {group.platform}
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <span className="text-sm text-slate-900 dark:text-white">
                      {group.members}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-medium text-slate-900 dark:text-white">
                        {group.rumorsDetected}
                      </span>
                      <span className="text-xs text-slate-500 dark:text-slate-400">
                        detected
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                        group.status
                      )}`}
                    >
                      {group.status}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <button className="p-2 hover:bg-slate-200 dark:hover:bg-slate-600 rounded-lg transition">
                      <MoreVertical
                        className="text-slate-600 dark:text-slate-400"
                        size={16}
                      />
                    </button>
                  </td>
                </motion.tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default GroupsOverview;
