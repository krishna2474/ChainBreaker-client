import { useState, useEffect } from 'react';
import { supabase } from '../config/supabaseClient';
import Auth from '../components/Auth';
import Dashboard from '../components/Dashboard';

const AppPage = () => {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-cyan-500">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900">
      {!session ? <Auth /> : <Dashboard session={session} />}
    </div>
  );
};

export default AppPage;
