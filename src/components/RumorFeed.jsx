import { AlertTriangle, CheckCircle, Clock } from "lucide-react";

export default function RumorFeed({ rumors }) {
  if (!rumors || rumors.length === 0) {
    return <div className="text-gray-500 text-center p-8">No rumors detected yet. Start chatting with the bot!</div>;
  }

  return (
    <div className="overflow-hidden">
      <table className="min-w-full text-left text-sm">
        <thead className="bg-gray-50 border-b border-gray-200 text-gray-500">
          <tr>
            <th className="px-6 py-3 font-medium">Status</th>
            <th className="px-6 py-3 font-medium">Message Content</th>
            <th className="px-6 py-3 font-medium">Source</th>
            <th className="px-6 py-3 font-medium">Time</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {rumors.map((rumor) => (
            <tr key={rumor.id} className="hover:bg-gray-50 transition-colors">
              <td className="px-6 py-4">
                {rumor.status === 'verified_fake' && <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800"><AlertTriangle size={12}/> Fake</span>}
                {rumor.status === 'pending_verification' && <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800"><Clock size={12}/> Analyzing</span>}
                {rumor.status === 'safe' && <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800"><CheckCircle size={12}/> Safe</span>}
              </td>
              <td className="px-6 py-4 max-w-xs truncate text-gray-900 font-medium">
                {rumor.content}
              </td>
              <td className="px-6 py-4 text-gray-500">
                Group {rumor.source_group_id.slice(-4)}
              </td>
              <td className="px-6 py-4 text-gray-400">
                {new Date(rumor.created_at).toLocaleTimeString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}