import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Send,
  AlertCircle,
  CheckCircle,
  Shield,
} from "lucide-react";
import { motion } from "framer-motion";
import Button from "../components/ui/Button";

const Demo = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      type: "bot",
      text: "👋 Hi! I'm ChainBreaker Bot. Forward me any suspicious message and I'll fact-check it for you.",
      timestamp: new Date().toLocaleTimeString(),
    },
  ]);

  const exampleRumors = [
    "⚠️ URGENT: Government shutting down all banks tomorrow!",
    "💰 Free money scheme: Share this to 10 groups to get ₹50,000!",
    "🚨 New virus spreading faster than COVID. Stay home!",
    "📱 WhatsApp will start charging ₹399/month from next week",
  ];

  const handleSendMessage = (text) => {
    if (!text.trim()) return;

    // Add user message
    const userMsg = {
      type: "user",
      text: text,
      timestamp: new Date().toLocaleTimeString(),
    };
    setMessages((prev) => [...prev, userMsg]);
    setMessage("");

    // Simulate bot response
    setTimeout(() => {
      const botResponse = {
        type: "bot-alert",
        text: "Analyzing message...",
        timestamp: new Date().toLocaleTimeString(),
      };
      setMessages((prev) => [...prev, botResponse]);

      setTimeout(() => {
        const factCheck = {
          type: "bot-factcheck",
          status: "fake",
          title: "Misinformation Detected",
          content:
            "This message contains false information. Our AI has verified it against trusted sources including Google Fact Check API and NewsAPI.",
          source: "Verified by: RBI Official, Press Information Bureau",
          timestamp: new Date().toLocaleTimeString(),
        };
        setMessages((prev) => [...prev, factCheck]);

        setTimeout(() => {
          const broadcast = {
            type: "broadcast",
            text: "⚡ Broadcast Alert: Similar rumor detected in 8 other groups. Auto-clarification sent.",
            timestamp: new Date().toLocaleTimeString(),
          };
          setMessages((prev) => [...prev, broadcast]);
        }, 1000);
      }, 2000);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      {/* Header */}
      <div className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <button
            onClick={() => navigate("/")}
            className="flex items-center space-x-2 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            <ArrowLeft size={20} />
            <span>Back to Home</span>
          </button>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
              <Shield className="text-white" size={16} />
            </div>
            <span className="font-bold text-slate-900 dark:text-white">
              ChainBreaker Demo
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Try ChainBreaker Live
          </h1>
          <p className="text-slate-600 dark:text-slate-400 mb-6">
            Send a suspicious message or try one of our examples below
          </p>

          {/* Example Buttons */}
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {exampleRumors.map((rumor, i) => (
              <button
                key={i}
                onClick={() => handleSendMessage(rumor)}
                className="px-4 py-2 bg-slate-100 dark:bg-slate-800 hover:bg-blue-100 dark:hover:bg-blue-900/30 border border-slate-200 dark:border-slate-700 rounded-lg text-sm text-slate-700 dark:text-slate-300 transition"
              >
                {rumor}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Chat Interface */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-4 flex items-center space-x-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <Shield className="text-white" size={20} />
            </div>
            <div>
              <h3 className="font-semibold text-white">ChainBreaker Bot</h3>
              <p className="text-xs text-blue-100">Active • Responds in ~2s</p>
            </div>
          </div>

          {/* Messages */}
          <div className="h-[500px] overflow-y-auto p-4 space-y-4 bg-slate-50 dark:bg-slate-900">
            {messages.map((msg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex ${
                  msg.type === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {msg.type === "user" ? (
                  <div className="bg-blue-500 text-white rounded-2xl rounded-tr-sm px-4 py-3 max-w-md">
                    <p className="text-sm">{msg.text}</p>
                    <p className="text-xs text-blue-100 mt-1">
                      {msg.timestamp}
                    </p>
                  </div>
                ) : msg.type === "bot-factcheck" ? (
                  <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl rounded-tl-sm px-4 py-3 max-w-md">
                    <div className="flex items-center space-x-2 mb-2">
                      <AlertCircle className="text-red-500" size={16} />
                      <span className="text-sm font-semibold text-red-500">
                        {msg.title}
                      </span>
                    </div>
                    <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                      {msg.content}
                    </p>
                    <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-3 border border-green-200 dark:border-green-500/30">
                      <div className="flex items-center space-x-2 mb-2">
                        <CheckCircle className="text-green-500" size={16} />
                        <span className="text-xs font-semibold text-green-600 dark:text-green-400">
                          Fact Check
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-400">
                        {msg.source}
                      </p>
                    </div>
                    <p className="text-xs text-slate-400 mt-2">
                      {msg.timestamp}
                    </p>
                  </div>
                ) : msg.type === "broadcast" ? (
                  <div className="w-full bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-500/30 rounded-lg p-3">
                    <p className="text-xs text-amber-800 dark:text-amber-300">
                      {msg.text}
                    </p>
                  </div>
                ) : (
                  <div className="bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white rounded-2xl rounded-tl-sm px-4 py-3 max-w-md">
                    <p className="text-sm">{msg.text}</p>
                    <p className="text-xs text-slate-400 mt-1">
                      {msg.timestamp}
                    </p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 bg-white dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700">
            <div className="flex space-x-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) =>
                  e.key === "Enter" && handleSendMessage(message)
                }
                placeholder="Type a message to fact-check..."
                className="flex-1 px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-full focus:outline-none focus:border-blue-500 text-slate-900 dark:text-white"
              />
              <button
                onClick={() => handleSendMessage(message)}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition flex items-center space-x-2"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-8"
        >
          <p className="text-slate-600 dark:text-slate-400 mb-4">
            Ready to protect your community?
          </p>
          <Button variant="primary" onClick={() => navigate("/contact")}>
            Get Started Now
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default Demo;
