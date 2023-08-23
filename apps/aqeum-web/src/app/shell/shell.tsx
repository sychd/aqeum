import styles from './shell.module.scss';
import { Link, Outlet } from 'react-router-dom';
import { AuthPanel } from '@dsych-org/shared-web/auth';

/* eslint-disable-next-line */
export interface ShellProps {}

export function Shell(props: ShellProps) {
  return (
    <div className={styles['container']}>
      <div>
        <AuthPanel />
        <nav>
          <Link to={'/home'}>Home</Link>
          <Link to={'/about'}>About</Link>
        </nav>{' '}
      </div>
      <h1>Welcome to Shell!</h1>
      <div style={{ backgroundColor: 'crimson', padding: 20 }}>
        <Outlet></Outlet>
      </div>
    </div>
  );
}
