// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
import { AppRouter } from '@dsych-org/aqeum-web/core/routing';
import { ErrorBoundary } from '@dsych-org/shared-web/ui';
import { i18nInstance } from '@dsych-org/shared-web/i18n';

i18nInstance();

export function App() {
  return (
    <ErrorBoundary>
      <AppRouter />
    </ErrorBoundary>
  );
}

export default App;
