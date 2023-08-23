import { useGetUser, useLogin, useLogout } from './auth.api';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactNode } from 'react';

export function useAuthService() {
  // const store = useAuthStore();
  const { user, isUserLoading, refetch, userError } = useGetUser();
  const { login, isLoginLoading, loginError } = useLogin();
  const { logout, isLogoutLoading, logoutError } = useLogout();

  return {
    login() {
      return login().then(() => refetch());
    },
    logout() {
      return logout().then(() => refetch());
    },
    getUsername() {
      return user.name;
    },
    isAuthorized() {
      return !!user;
    },
    isLoading: isUserLoading || isLoginLoading || isLogoutLoading,
    error: userError || loginError || logoutError,
  };
}

const queryClient = new QueryClient();
export const AuthQueryClientProvider = ({
  children,
}: {
  children: ReactNode;
}) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);
