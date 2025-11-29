import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { supabase } from "../../config/supabaseClient";
import { useTheme } from "../../context/ThemeContext";
import DashboardHeader from "./DashboardHeader";
import DashboardSidebar from "./DashboardSidebar";
import StatsOverview from "./StatsOverview";
import RumorTrendChart from "./RumorTrendChart";
import ActiveThreats from "./ActiveThreats";
import RecentActivity from "./RecentActivity";
import GroupsOverview from "./GroupsOverview";
import VerificationAccuracy from "./VerificationAccuracy";
import BroadcastPanel from "./BroadcastPanel";

const Dashboard = ({ session }) => {
  const { isDark } = useTheme();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeView, setActiveView] = useState("overview");
  const [dashboardData, setDashboardData] = useState({
    stats: {
      totalRumors: 0,
      activeThreats: 0,
      groupsProtected: 0,
      verificationRate: 0,
      rumorsToday: 0,
      responseTime: 0,
    },
    trends: [],
    threats: [],
    recentActivity: [],
    groups: [],
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboardData();
    const interval = setInterval(fetchDashboardData, 30000); // Refresh every 30s
    return () => clearInterval(interval);
  }, []);

  const fetchDashboardData = async () => {
    try {
      // Simulated data - replace with actual API calls
      setDashboardData({
        stats: {
          totalRumors: 2847,
          activeThreats: 12,
          groupsProtected: 156,
          verificationRate: 94.8,
          rumorsToday: 47,
          responseTime: 1.8,
        },
        trends: generateTrendData(),
        threats: generateThreatsData(),
        recentActivity: generateActivityData(),
        groups: generateGroupsData(),
      });
      setLoading(false);
    } catch (error) {
      console.error("Failed to fetch dashboard data:", error);
      setLoading(false);
    }
  };

  const generateTrendData = () => {
    const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    return days.map((day) => ({
      day,
      detected: Math.floor(Math.random() * 100) + 20,
      verified: Math.floor(Math.random() * 80) + 10,
      fake: Math.floor(Math.random() * 60) + 5,
    }));
  };

  const generateThreatsData = () => {
    const threats = [
      {
        id: 1,
        title: "Bank closure rumors",
        severity: "high",
        groups: 8,
        firstSeen: "2 hours ago",
      },
      {
        id: 2,
        title: "Fake government scheme",
        severity: "critical",
        groups: 12,
        firstSeen: "4 hours ago",
      },
      {
        id: 3,
        title: "Health misinformation",
        severity: "medium",
        groups: 5,
        firstSeen: "6 hours ago",
      },
      {
        id: 4,
        title: "Political deepfake",
        severity: "high",
        groups: 9,
        firstSeen: "8 hours ago",
      },
      {
        id: 5,
        title: "Product scam alert",
        severity: "low",
        groups: 3,
        firstSeen: "1 day ago",
      },
    ];
    return threats;
  };

  const generateActivityData = () => {
    const activities = [
      {
        id: 1,
        type: "detection",
        message: "Rumor detected in Housing Society Group",
        time: "2 mins ago",
      },
      {
        id: 2,
        type: "verification",
        message: "Verified as FAKE: Bank closure news",
        time: "5 mins ago",
      },
      {
        id: 3,
        type: "broadcast",
        message: "Alert sent to 8 groups",
        time: "10 mins ago",
      },
      {
        id: 4,
        type: "group",
        message: "New group connected: Tech Community",
        time: "15 mins ago",
      },
      {
        id: 5,
        type: "detection",
        message: "Rumor detected in Family Group",
        time: "20 mins ago",
      },
    ];
    return activities;
  };

  const generateGroupsData = () => {
    return [
      {
        id: 1,
        name: "Housing Society",
        platform: "whatsapp",
        members: 234,
        rumorsDetected: 12,
        status: "active",
      },
      {
        id: 2,
        name: "Tech Community",
        platform: "telegram",
        members: 567,
        rumorsDetected: 8,
        status: "active",
      },
      {
        id: 3,
        name: "Family Group",
        platform: "whatsapp",
        members: 23,
        rumorsDetected: 5,
        status: "active",
      },
      {
        id: 4,
        name: "Sports Club",
        platform: "telegram",
        members: 89,
        rumorsDetected: 3,
        status: "paused",
      },
    ];
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-slate-600 dark:text-slate-400">
            Loading Dashboard...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex">
      {/* Sidebar */}
      <DashboardSidebar
        isOpen={sidebarOpen}
        activeView={activeView}
        setActiveView={setActiveView}
        onClose={() => setSidebarOpen(false)}
      />

      {/* Main Content */}
      <div
        className={`flex-1 transition-all duration-300 ${
          sidebarOpen ? "lg:ml-64" : "ml-0"
        }`}
      >
        {/* Header with Theme Toggle */}
        <DashboardHeader
          session={session}
          onMenuClick={() => setSidebarOpen(!sidebarOpen)}
          sidebarOpen={sidebarOpen}
        />

        {/* Dashboard Content */}
        <main className="p-4 md:p-6 lg:p-8">
          <AnimatePresence mode="wait">
            {activeView === "overview" && (
              <motion.div
                key="overview"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                {/* Welcome Section */}
                <div className="mb-8">
                  <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
                    Welcome back,{" "}
                    {session?.user?.user_metadata?.full_name ||
                      session?.user?.email?.split("@")[0] ||
                      "User"}
                    ! 👋
                  </h1>
                  <p className="text-slate-600 dark:text-slate-400">
                    Here's what's happening with your misinformation detection
                    network today.
                  </p>
                </div>

                {/* Stats Overview */}
                <StatsOverview stats={dashboardData.stats} />

                {/* Charts & Analytics Row */}
                <div className="grid lg:grid-cols-2 gap-6">
                  <RumorTrendChart data={dashboardData.trends} />
                  <VerificationAccuracy
                    accuracy={dashboardData.stats.verificationRate}
                  />
                </div>

                {/* Active Threats & Recent Activity */}
                <div className="grid lg:grid-cols-2 gap-6">
                  <ActiveThreats threats={dashboardData.threats} />
                  <RecentActivity activities={dashboardData.recentActivity} />
                </div>

                {/* Groups Overview */}
                <GroupsOverview groups={dashboardData.groups} />
              </motion.div>
            )}

            {activeView === "broadcast" && (
              <motion.div
                key="broadcast"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <BroadcastPanel
                  session={session}
                  groups={dashboardData.groups}
                />
              </motion.div>
            )}

            {activeView === "threats" && (
              <motion.div
                key="threats"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="max-w-4xl mx-auto">
                  <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
                    Active Threats
                  </h1>
                  <ActiveThreats threats={dashboardData.threats} />
                </div>
              </motion.div>
            )}

            {activeView === "groups" && (
              <motion.div
                key="groups"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div>
                  <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
                    Connected Groups
                  </h1>
                  <GroupsOverview groups={dashboardData.groups} />
                </div>
              </motion.div>
            )}

            {activeView === "analytics" && (
              <motion.div
                key="analytics"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="space-y-6">
                  <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
                    Analytics
                  </h1>
                  <div className="grid lg:grid-cols-2 gap-6">
                    <RumorTrendChart data={dashboardData.trends} />
                    <VerificationAccuracy
                      accuracy={dashboardData.stats.verificationRate}
                    />
                  </div>
                  <StatsOverview stats={dashboardData.stats} />
                </div>
              </motion.div>
            )}

            {activeView === "settings" && (
              <motion.div
                key="settings"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="max-w-4xl mx-auto"
              >
                <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
                  Settings
                </h1>
                <div className="bg-white dark:bg-slate-800 rounded-xl p-8 border border-slate-200 dark:border-slate-700">
                  <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                    Account Settings
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        value={session?.user?.email}
                        disabled
                        className="w-full px-4 py-2 bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-lg text-slate-900 dark:text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        value={session?.user?.user_metadata?.full_name || ""}
                        placeholder="Your name"
                        className="w-full px-4 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-lg text-slate-900 dark:text-white"
                      />
                    </div>
                    <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition">
                      Save Changes
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
