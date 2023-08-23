// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
import { AppRouter } from '@dream-org/aqeum-web/core/routing';
import { ErrorBoundary } from '@dream-org/shared-web/ui';
import { i18nInstance } from '@dream-org/shared-web/i18n';
import { AuthQueryClientProvider } from '@dream-org/aqeum-web/core/auth';

i18nInstance();

export function App() {
  return (
    <AuthQueryClientProvider>
      <ErrorBoundary>
        <AppRouter />
      </ErrorBoundary>
    </AuthQueryClientProvider>
  );
}

export default App;
