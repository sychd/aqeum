import { AppRouter } from './app-router';
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
