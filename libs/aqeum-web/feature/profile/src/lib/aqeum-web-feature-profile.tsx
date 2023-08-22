import styles from './aqeum-web-feature-profile.module.scss';

/* eslint-disable-next-line */
export interface AqeumWebFeatureProfileProps {}

export function AqeumWebFeatureProfile(props: AqeumWebFeatureProfileProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to AqeumWebFeatureProfile!</h1>
    </div>
  );
}

export default AqeumWebFeatureProfile;
