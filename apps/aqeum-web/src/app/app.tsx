// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
import { AppRouter } from '@dream-org/aqeum-web/core/routing';
import { ErrorBoundary } from '@dream-org/shared-web/ui';
import { i18nInstance } from '@dream-org/shared-web/i18n';

i18nInstance();

export function App() {
  return (
    <ErrorBoundary>
      <AppRouter />
    </ErrorBoundary>
  );
}

export default App;
