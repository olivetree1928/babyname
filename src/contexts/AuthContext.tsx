import { createContext, useContext, useEffect, useState } from 'react';
import { User } from '@supabase/supabase-js';
import { supabase } from '../lib/supabase';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<{ error: any }>;
  signUp: (email: string, password: string) => Promise<{ error: any }>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 检查是否有测试用户登录
    const testUserToken = localStorage.getItem('supabase.auth.token');
    if (testUserToken) {
      try {
        const testUser = JSON.parse(testUserToken);
        if (testUser.user && testUser.user.id === 'test-user-id') {
          setUser(testUser.user as User);
          setLoading(false);
          return;
        }
      } catch (e) {
        console.error('解析测试用户令牌时出错', e);
      }
    }

    // 正常的 Supabase 身份验证流程
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      (async () => {
        setUser(session?.user ?? null);
      })();
    });

    return () => subscription.unsubscribe();
  }, []);

  const signIn = async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    return { error };
  };

  const signUp = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signUp({ email, password });

    if (!error && data.user) {
      await supabase.from('qiming_profiles').insert({
        id: data.user.id,
        email: data.user.email!,
      });
    }

    return { error };
  };

  const signOut = async () => {
    await supabase.auth.signOut();
    // 清除本地存储并刷新页面以确保完全退出
    localStorage.removeItem('supabase.auth.token');
    window.location.reload();
  };

  return (
    <AuthContext.Provider value={{ user, loading, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
