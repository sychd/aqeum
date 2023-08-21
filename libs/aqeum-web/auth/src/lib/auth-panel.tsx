import { useAuthService } from './auth.service';

export function AuthPanel() {
  const authService = useAuthService();

  if (authService.isAuthorized()) {
    return (
      <div>
        <span>Hello, {authService.getUsername()}!</span>
        <br />
        <button onClick={() => authService.logout()}>Logout</button>
      </div>
    );
  }

  return <button onClick={() => authService.login()}>Login</button>;
}
