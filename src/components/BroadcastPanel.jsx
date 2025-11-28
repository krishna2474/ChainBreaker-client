import { useState } from 'react';
import { Send, Users } from 'lucide-react';

export default function BroadcastPanel({ session }) {
  const [message, setMessage] = useState('');
  const [sending, setSending] = useState(false);

  const handleBroadcast = async () => {
    setSending(true);
    try {
      // Fetch all groups first (In real app, select specific ones)
      // For Hackathon: We just blast everyone
      const groupsRes = await fetch('http://127.0.0.1:4000/api/dashboard/groups'); // Need this endpoint
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
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
      <div className="flex items-center gap-3 mb-4 text-gray-900">
        <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg">
          <Users size={20} />
        </div>
        <h3 className="font-semibold">Global Broadcast</h3>
      </div>
      
      <textarea
        className="w-full p-3 border border-gray-200 rounded-lg mb-4 text-sm focus:ring-2 focus:ring-indigo-500 outline-none"
        rows="3"
        placeholder="Type an alert message to send to ALL connected groups..."
        value={message}
        onChange={e => setMessage(e.target.value)}
      />
      
      <button
        onClick={handleBroadcast}
        disabled={sending || !message}
        className="w-full py-2.5 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
      >
        <Send size={16} />
        {sending ? 'Broadcasting...' : 'Send Alert to Network'}
      </button>
    </div>
  );
}