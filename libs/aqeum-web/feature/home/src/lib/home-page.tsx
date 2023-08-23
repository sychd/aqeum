import styles from './home-page.module.scss';
import { Link } from 'react-router-dom';

/* eslint-disable-next-line */
export interface HomePageProps {
  test: string;
}

export function HomePage(props: HomePageProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to HomePage! Prop: {props.test}</h1>
      <Link to={'/about'}>Go to About</Link>
    </div>
  );
}

export default HomePage;
