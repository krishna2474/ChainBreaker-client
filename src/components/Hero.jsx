import { Shield, AlertCircle, CheckCircle } from "lucide-react";
import { MessageCircle, Send } from "lucide-react";
import Button from "./ui/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ComingSoonModal from "./ui/ComingSoonModal";

const Hero = () => {
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-blue-50 to-white dark:from-slate-900 dark:via-slate-900 dark:to-slate-800 pt-16">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100/50 via-transparent to-transparent dark:from-blue-900/20"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center space-x-2 bg-blue-100 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-500/30 rounded-full px-4 py-2 backdrop-blur-sm">
              <Shield className="text-blue-600 dark:text-blue-400" size={16} />
              <span className="text-sm text-blue-700 dark:text-blue-300 font-medium">
                AI-Powered Misinformation Detection
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white leading-tight">
              Stop Rumors Before
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                They Go Viral
              </span>
            </h1>

            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              ChainBreaker is an autonomous AI network that detects, verifies,
              and counters misinformation across WhatsApp and Telegram groups in
              real-time. Protect your community from fake news.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" icon={MessageCircle} onClick={() => setModalOpen(true)}>
                Add to WhatsApp
              </Button>
              <Button variant="secondary" icon={Send} onClick={() => navigate("/contact")}>
                Add to Telegram
              </Button>
            </div>

            {/* Mock Chat Interface */}
            <div className="mt-16 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 text-left max-w-3xl mx-auto shadow-2xl">
              <div className="flex items-center space-x-2 mb-6 pb-4 border-b dark:border-slate-800">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                  <Shield className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white">
                    ChainBreaker Bot
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Active in 24 groups
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {/* User Message */}
                <div className="flex justify-end">
                  <div className="bg-blue-500 text-white rounded-2xl rounded-tr-sm px-4 py-3 max-w-md">
                    <p className="text-sm">
                      ⚠️ URGENT: Government is shutting down all banks tomorrow!
                      Withdraw your money NOW!
                    </p>
                  </div>
                </div>

                {/* Bot Response */}
                <div className="flex justify-start">
                  <div className="bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white rounded-2xl rounded-tl-sm px-4 py-3 max-w-md">
                    <div className="flex items-center space-x-2 mb-2">
                      <AlertCircle className="text-red-500" size={16} />
                      <span className="text-sm font-semibold text-red-500">
                        Misinformation Detected
                      </span>
                    </div>
                    <p className="text-sm mb-3">
                      This message contains false information. I've verified it
                      against trusted sources.
                    </p>
                    <div className="bg-white dark:bg-slate-900 rounded-lg p-3 border border-slate-200 dark:border-slate-700">
                      <div className="flex items-center space-x-2 mb-2">
                        <CheckCircle className="text-green-500" size={16} />
                        <span className="text-xs font-semibold text-green-600 dark:text-green-400">
                          Fact Check
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-400">
                        No such announcement has been made. Banks are operating
                        normally. Source: RBI Official, Google Fact Check API
                      </p>
                    </div>
                  </div>
                </div>

                {/* Broadcast Alert */}
                <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-500/30 rounded-lg p-3">
                  <p className="text-xs text-amber-800 dark:text-amber-300">
                    <span className="font-semibold">⚡ Broadcast Alert:</span>{" "}
                    Similar rumor detected in 12 other groups.
                    Auto-clarification sent.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ComingSoonModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        feature="WhatsApp"
      />
    </>
  );
};

export default Hero;
