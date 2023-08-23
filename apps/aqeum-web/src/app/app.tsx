// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
import { AppRouter } from '@dsych-org/aqeum-web/core/routing';
import { ErrorBoundary } from '@dsych-org/shared-web/ui';

export function App() {
  return (
    <ErrorBoundary>
      <AppRouter />
    </ErrorBoundary>
  );
}

export default App;
