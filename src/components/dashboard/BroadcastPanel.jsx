import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Users, MessageCircle, CheckCircle } from "lucide-react";

const BroadcastPanel = ({ session, groups }) => {
  const [message, setMessage] = useState("");
  const [selectedGroups, setSelectedGroups] = useState([]);
  const [sending, setSending] = useState(false);

  const activeGroups = groups.filter((g) => g.status === "active");

  const handleSelectAll = () => {
    if (selectedGroups.length === activeGroups.length) {
      setSelectedGroups([]);
    } else {
      setSelectedGroups(activeGroups.map((g) => g.id));
    }
  };

  const toggleGroup = (groupId) => {
    if (selectedGroups.includes(groupId)) {
      setSelectedGroups(selectedGroups.filter((id) => id !== groupId));
    } else {
      setSelectedGroups([...selectedGroups, groupId]);
    }
  };

  const handleBroadcast = async () => {
    if (!message.trim() || selectedGroups.length === 0) return;

    setSending(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    alert(`Broadcast sent to ${selectedGroups.length} groups!`);
    setMessage("");
    setSelectedGroups([]);
    setSending(false);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
          Broadcast Center
        </h1>
        <p className="text-slate-600 dark:text-slate-400">
          Send messages to multiple groups simultaneously
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm"
      >
        {/* Message Composer */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-slate-900 dark:text-white mb-2">
            Your Message
          </label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your broadcast message here..."
            rows={6}
            className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 text-slate-900 dark:text-white resize-none"
          />
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
            {message.length} / 1000 characters
          </p>
        </div>

        {/* Group Selection */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <label className="text-sm font-medium text-slate-900 dark:text-white">
              Select Groups ({selectedGroups.length} selected)
            </label>
            <button
              onClick={handleSelectAll}
              className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
            >
              {selectedGroups.length === activeGroups.length
                ? "Deselect All"
                : "Select All"}
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-3">
            {activeGroups.map((group) => {
              const isSelected = selectedGroups.includes(group.id);
              const PlatformIcon =
                group.platform === "whatsapp" ? MessageCircle : Send;

              return (
                <motion.button
                  key={group.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => toggleGroup(group.id)}
                  className={`p-4 rounded-lg border-2 transition text-left ${
                    isSelected
                      ? "border-blue-500 bg-blue-50 dark:bg-blue-900/30"
                      : "border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-700"
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                        <Users className="text-white" size={18} />
                      </div>
                      <div>
                        <h4 className="font-medium text-slate-900 dark:text-white">
                          {group.name}
                        </h4>
                        <div className="flex items-center space-x-2 mt-1">
                          <PlatformIcon
                            size={12}
                            className="text-slate-500 dark:text-slate-400"
                          />
                          <span className="text-xs text-slate-500 dark:text-slate-400">
                            {group.members} members
                          </span>
                        </div>
                      </div>
                    </div>
                    {isSelected && (
                      <CheckCircle
                        className="text-blue-600 dark:text-blue-400 flex-shrink-0"
                        size={20}
                      />
                    )}
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Send Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleBroadcast}
          disabled={sending || !message.trim() || selectedGroups.length === 0}
          className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 shadow-lg shadow-blue-500/30"
        >
          {sending ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              <span>Sending...</span>
            </>
          ) : (
            <>
              <Send size={20} />
              <span>
                Send to {selectedGroups.length} Group
                {selectedGroups.length !== 1 ? "s" : ""}
              </span>
            </>
          )}
        </motion.button>
      </motion.div>
    </div>
  );
};

export default BroadcastPanel;
