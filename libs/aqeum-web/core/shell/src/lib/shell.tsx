import { Link, Outlet } from 'react-router-dom';
import { AuthPanel } from '@dream-org/aqeum-web/core/auth';

export function Shell() {
  return (
    <div>
      <div>
        <AuthPanel />
        <nav>
          <Link to={'/home'}>Home</Link>
          <Link to={'/about'}>About</Link>
        </nav>
      </div>
      <h1>Welcome to Shell!</h1>
      <div style={{ backgroundColor: 'crimson', padding: 20 }}>
        <Outlet></Outlet>
      </div>
    </div>
  );
}
