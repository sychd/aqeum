import styles from './aqeum-web-feature-home.module.scss';

/* eslint-disable-next-line */
export interface AqeumWebFeatureHomeProps {}

export function AqeumWebFeatureHome(props: AqeumWebFeatureHomeProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to AqeumWebFeatureHome!</h1>
    </div>
  );
}

export default AqeumWebFeatureHome;
