import { create } from 'zustand';

interface AuthStore {
  user: { name: string; isAuthorized: boolean };
  setUser: (name: string) => void;
  resetUser: () => void;
}
export const useAuthStore = create<AuthStore>()((set) => ({
  user: { name: '', isAuthorized: false },
  setUser: (name: string) =>
    set(() => ({ user: { name, isAuthorized: true } })),
  resetUser: () => set({ user: { name: '', isAuthorized: false } }),
}));
