import { useState } from 'react';
import { Send, Users } from 'lucide-react';

export default function BroadcastPanel({ session }) {
  const [message, setMessage] = useState('');
  const [sending, setSending] = useState(false);

  const handleBroadcast = async () => {
    setSending(true);
    try {
      const groupsRes = await fetch('http://127.0.0.1:4000/api/dashboard/groups');
      const groups = await groupsRes.json();
      const groupIds = groups.map(g => g.chat_id);

      await fetch('http://127.0.0.1:4000/api/broadcast', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message, groupIds })
      });

      alert("Broadcast Sent Successfully!");
      setMessage("");
    } catch (err) {
      alert("Failed to broadcast");
    }
    setSending(false);
  };

  return (
    <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
      <div className="flex items-center space-x-2 mb-4">
        <Users className="text-cyan-500" size={20} />
        <h3 className="text-lg font-semibold text-white">Broadcast Message</h3>
      </div>
      
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your broadcast message..."
        className="w-full bg-slate-900 border border-slate-600 rounded-lg p-3 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 mb-4"
        rows={4}
      />
      
      <button
        onClick={handleBroadcast}
        disabled={sending || !message.trim()}
        className="w-full bg-cyan-500 hover:bg-cyan-400 disabled:bg-slate-600 text-slate-900 font-medium py-2 px-4 rounded-lg flex items-center justify-center space-x-2 transition"
      >
        <Send size={18} />
        <span>{sending ? 'Sending...' : 'Send Broadcast'}</span>
      </button>
    </div>
  );
}
