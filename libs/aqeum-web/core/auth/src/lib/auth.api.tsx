import {
  QueryClient,
  QueryClientProvider,
  useMutation,
  useQuery,
} from 'react-query';
import { CACHE_KEY } from './auth.constants';
import axios from 'axios';
import { ReactNode } from 'react';

//common axios setup should be extracted to <app-scope>/core/api
// here is one-line for example
const justRandomAPICall = () => axios.get('https://api.apis.guru/v2/list.json');
export function useGetUser() {
  const {
    data: user,
    isLoading: isUserLoading,
    error: userError,
    refetch,
  } = useQuery(CACHE_KEY.USER, () => {
    return justRandomAPICall().then(() => {
      const user = localStorage.getItem('user');
      return user ? JSON.parse(user) : null;
    });
  });

  return { user, isUserLoading, refetch, userError };
}
export function useLogin() {
  const {
    mutateAsync: login,
    isLoading: isLoginLoading,
    error: loginError,
  } = useMutation(CACHE_KEY.LOGIN, () => {
    return justRandomAPICall().then(() => {
      localStorage.setItem('user', JSON.stringify({ name: 'John' }));
    });
  });

  return { login, isLoginLoading, loginError };
}

export function useLogout() {
  const {
    mutateAsync: logout,
    isLoading: isLogoutLoading,
    error: logoutError,
  } = useMutation(CACHE_KEY.LOGOUT, () => {
    return justRandomAPICall().then(() => {
      localStorage.removeItem('user');
    });
  });

  return { logout, isLogoutLoading, logoutError };
}
