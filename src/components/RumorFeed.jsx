import { AlertTriangle, CheckCircle, Clock } from "lucide-react";

export default function RumorFeed({ rumors }) {
  if (!rumors || rumors.length === 0) {
    return (
      <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
        <h3 className="text-lg font-semibold text-white mb-4">Recent Rumors</h3>
        <p className="text-slate-400">No rumors detected yet.</p>
      </div>
    );
  }

  return (
    <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
      <h3 className="text-lg font-semibold text-white mb-4">Recent Rumors</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="text-slate-400 border-b border-slate-700">
            <tr>
              <th className="pb-2">Status</th>
              <th className="pb-2">Message Content</th>
              <th className="pb-2">Source</th>
              <th className="pb-2">Time</th>
            </tr>
          </thead>
          <tbody className="text-slate-300">
            {rumors.map((rumor, idx) => (
              <tr key={idx} className="border-b border-slate-700/50">
                <td className="py-3">
                  {rumor.status === 'verified_fake' && (
                    <span className="flex items-center space-x-1 text-red-400">
                      <AlertTriangle size={16} />
                      <span>Fake</span>
                    </span>
                  )}
                  {rumor.status === 'verified_real' && (
                    <span className="flex items-center space-x-1 text-green-400">
                      <CheckCircle size={16} />
                      <span>Real</span>
                    </span>
                  )}
                  {rumor.status === 'pending' && (
                    <span className="flex items-center space-x-1 text-yellow-400">
                      <Clock size={16} />
                      <span>Pending</span>
                    </span>
                  )}
                </td>
                <td className="py-3">{rumor.content}</td>
                <td className="py-3">Group {rumor.source_group_id?.slice(-4) || 'N/A'}</td>
                <td className="py-3">{new Date(rumor.created_at).toLocaleTimeString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
