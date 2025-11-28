import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from '../components/ui/Button';
import Footer from '../components/Footer';

const Contact = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    plan: 'Organization',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! We will contact you within 24 hours.');
    setFormData({ name: '', email: '', organization: '', plan: 'Organization', message: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      {/* Header */}
      <div className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <button
            onClick={() => navigate('/')}
            className="flex items-center space-x-2 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            <ArrowLeft size={20} />
            <span>Back to Home</span>
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Get in Touch
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400">
            Let's discuss how ChainBreaker can protect your community
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700 shadow-xl"
          >
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              Send us a message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-none focus:border-blue-500 text-slate-900 dark:text-white"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-none focus:border-blue-500 text-slate-900 dark:text-white"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Organization
                </label>
                <input
                  type="text"
                  value={formData.organization}
                  onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-none focus:border-blue-500 text-slate-900 dark:text-white"
                  placeholder="Your Company"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Interested Plan
                </label>
                <select
                  value={formData.plan}
                  onChange={(e) => setFormData({ ...formData, plan: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-none focus:border-blue-500 text-slate-900 dark:text-white"
                >
                  <option>Community</option>
                  <option>Organization</option>
                  <option>Enterprise</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Message *
                </label>
                <textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-none focus:border-blue-500 text-slate-900 dark:text-white resize-none"
                  placeholder="Tell us about your requirements..."
                />
              </div>

              <Button type="submit" variant="primary" icon={Send} className="w-full">
                Send Message
              </Button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="text-blue-600 dark:text-blue-400" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Email Us</h3>
                  <p className="text-slate-600 dark:text-slate-400">support@chainbreaker.ai</p>
                  <p className="text-slate-600 dark:text-slate-400">sales@chainbreaker.ai</p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="text-blue-600 dark:text-blue-400" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Live Chat</h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-3">Available Mon-Fri, 9am-6pm IST</p>
                  <Button variant="secondary" size="sm">Start Chat</Button>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="text-blue-600 dark:text-blue-400" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Call Us</h3>
                  <p className="text-slate-600 dark:text-slate-400">+91 98765 43210</p>
                  <p className="text-sm text-slate-500 dark:text-slate-500 mt-1">Mon-Fri, 9am-6pm IST</p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-blue-600 dark:text-blue-400" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Office</h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    Bangalore, Karnataka<br />
                    India - 560001
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
