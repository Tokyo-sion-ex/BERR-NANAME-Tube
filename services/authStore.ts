import { create } from 'zustand';

interface AuthState {
  user: any;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  login: async (email, password) => {
    const { data, error } = await supabase
      .auth
      .signInWithPassword({ email, password });
    if (error) throw error;
    set({ user: data.user });
  },
  signup: async (email, password) => {
    const { data, error } = await supabase
      .auth
      .signUp({ email, password });
    if (error) throw error;
    set({ user: data.user });
  },
  logout: async () => {
    await supabase.auth.signOut();
    set({ user: null });
  },
}));
