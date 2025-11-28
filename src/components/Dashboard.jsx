import { useState, useEffect } from 'react'
import { supabase } from '../config/supabaseClient'
import BroadcastPanel from './BroadcastPanel'
import RumorFeed from './RumorFeed'
import { 
  LayoutDashboard, 
  LogOut, 
  ShieldAlert, 
  Users, 
  Activity,
  Loader2
} from 'lucide-react'

export default function Dashboard({ session }) {
  const [stats, setStats] = useState(null)
  const [loading, setLoading] = useState(true)

  // Fetch Live Stats from your Express Backend
  const fetchDashboardData = async () => {
    try {
      const response = await fetch('http://127.0.0.1:4000/api/dashboard/stats');
      const data = await response.json();
      setStats(data);
      setLoading(false);
    } catch (err) {
      console.error("Failed to load dashboard", err);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchDashboardData();
    // Optional: Auto-refresh every 5 seconds for "Live" feel
    const interval = setInterval(fetchDashboardData, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-50 font-sans text-gray-900">
      
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 hidden md:flex flex-col fixed h-full z-10">
        <div className="p-6">
          <div className="flex items-center gap-3 text-indigo-600 font-bold text-xl tracking-tight">
            <div className="h-8 w-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white text-sm shadow-md">CB</div>
            ChainBreaker
          </div>
        </div>
        
        <nav className="flex-1 px-4 space-y-1 mt-4">
          <a href="#" className="flex items-center gap-3 px-3 py-2.5 text-gray-900 bg-gray-100 rounded-lg text-sm font-medium">
            <LayoutDashboard size={18} />
            Live Intel
          </a>
        </nav>

        <div className="p-4 border-t border-gray-100">
          <button 
            onClick={() => supabase.auth.signOut()}
            className="flex items-center gap-3 px-3 py-2 w-full text-red-600 hover:bg-red-50 rounded-lg text-sm font-medium transition-colors"
          >
            <LogOut size={18} />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 md:ml-64">
        <header className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Command Center</h1>
            <p className="text-gray-500 text-sm mt-1">Monitoring misinformation across encrypted networks.</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="text-sm font-medium text-gray-600">System Active</span>
          </div>
        </header>

        {/* 1. Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-gray-500 text-sm font-medium">Connected Groups</h3>
              <Users className="text-indigo-500" size={20} />
            </div>
            <p className="text-3xl font-bold text-gray-900">
              {loading ? '-' : stats?.groupCount || 0}
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-gray-500 text-sm font-medium">Messages Analyzed</h3>
              <Activity className="text-blue-500" size={20} />
            </div>
            <p className="text-3xl font-bold text-gray-900">
              {loading ? '-' : stats?.recentRumors?.length || 0}
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-gray-500 text-sm font-medium">Active Threats</h3>
              <ShieldAlert className="text-red-500" size={20} />
            </div>
            <p className="text-3xl font-bold text-gray-900">
              {loading ? '-' : stats?.activeThreats || 0}
            </p>
          </div>
        </div>

        {/* 2. Broadcast Console & Live Feed */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left: Broadcast Panel */}
          <div className="lg:col-span-1">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Response Action</h2>
            <BroadcastPanel session={session} />
          </div>

          {/* Right: Live Feed */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-gray-900">Live Rumor Feed</h2>
              {loading && <Loader2 className="animate-spin text-gray-400" size={18} />}
            </div>
            
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
              <RumorFeed rumors={stats?.recentRumors || []} />
            </div>
          </div>
        </div>

      </main>
    </div>
  )
}