import { useState } from 'react'
import { supabase } from '../config/supabaseClient'
import { motion } from 'framer-motion'
import { Mail, Lock, Loader2 } from 'lucide-react'

export default function Auth() {
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [msg, setMsg] = useState(null)
  const [isError, setIsError] = useState(false)

  const handleAuth = async (e, type) => {
    e.preventDefault()
    setLoading(true)
    setMsg(null)
    
    const cleanEmail = email.trim()
    
    let result
    if (type === 'LOGIN') {
      result = await supabase.auth.signInWithPassword({ email: cleanEmail, password })
    } else {
      result = await supabase.auth.signUp({ email: cleanEmail, password })
    }

    const { error } = result
    
    if (error) {
      setMsg(error.message)
      setIsError(true)
    } else {
      if (type === 'SIGNUP') {
        setMsg("Account created! You can now log in.")
        setIsError(false)
      }
    }
    setLoading(false)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4 font-sans">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
          <div className="text-center mb-8">
            <div className="h-12 w-12 bg-brand-500 rounded-xl mx-auto flex items-center justify-center text-white font-bold text-xl mb-4 shadow-lg shadow-brand-500/20">
              S
            </div>
            <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Welcome back</h2>
            <p className="text-gray-500 mt-2 text-sm">Enter your credentials to access your workspace</p>
          </div>

          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2.5 pl-10 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all duration-200"
                  placeholder="name@company.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2.5 pl-10 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all duration-200"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <div className="pt-2 flex flex-col gap-3">
              <button 
                onClick={(e) => handleAuth(e, 'LOGIN')}
                disabled={loading} 
                className="w-full px-4 py-2.5 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-gray-900/10"
              >
                {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : 'Sign In'}
              </button>
              
              <button 
                onClick={(e) => handleAuth(e, 'SIGNUP')}
                disabled={loading} 
                className="w-full px-4 py-2.5 bg-white text-gray-700 font-medium rounded-lg border border-gray-200 hover:bg-gray-50 transition-all duration-200 text-sm"
              >
                Create an account
              </button>
            </div>
          </form>

          {msg && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className={`mt-6 p-3 rounded-lg text-sm flex items-center justify-center ${isError ? 'bg-red-50 text-red-600 border border-red-100' : 'bg-green-50 text-green-600 border border-green-100'}`}
            >
              {msg}
            </motion.div>
          )}
        </div>
        
        <p className="text-center mt-6 text-sm text-gray-400">
          Powered by Express & Supabase
        </p>
      </motion.div>
    </div>
  )
}