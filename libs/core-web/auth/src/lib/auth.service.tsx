import { useAuthStore } from './auth.store';

export function useAuthService() {
  const store = useAuthStore();

  return {
    login() {
      store.setUser('beloved user');
    },
    logout() {
      store.resetUser();
    },
    getUsername() {
      return store.user.name;
    },
    isAuthorized() {
      return store.user.isAuthorized;
    },
  };
}
