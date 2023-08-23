import styles from './home-page.module.scss';
import { Link } from 'react-router-dom';
import { FancyBox } from '@dsych-org/shared-web/ui';

/* eslint-disable-next-line */
export interface HomePageProps {
  test: string;
}

export function HomePage(props: HomePageProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to HomePage! Prop: {props.test}</h1>
      <FancyBox>
        <Link to={'/about'}>Go to About</Link>
      </FancyBox>
    </div>
  );
}

export default HomePage;
