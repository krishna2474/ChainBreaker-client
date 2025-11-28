import { useState, useEffect } from 'react'
import { supabase } from './config/supabaseClient'
import Auth from './components/Auth'
import Dashboard from './components/Dashboard'

function App() {
  const [session, setSession] = useState(null)

  useEffect(() => {
    // 1. Check active session on load
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    // 2. Listen for login/logout events
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    return () => subscription.unsubscribe()
  }, [])

  return (
    <div>
      {!session ? <Auth /> : <Dashboard session={session} />}
    </div>
  )
}

export default App