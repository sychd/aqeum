import { Link } from 'react-router-dom';
import { FancyBox } from '@dream-org/shared-web/ui';
import { useTranslation } from 'react-i18next';

/* eslint-disable-next-line */
export interface HomePageProps {
  test: string;
}

export function HomePage(props: HomePageProps) {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('greeting')}</h1>
      <h2>Welcome to HomePage! Prop: {props.test}</h2>
      <FancyBox>
        <Link to={'/about'}>Go to About</Link>
      </FancyBox>
    </div>
  );
}

export default HomePage;
