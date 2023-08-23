import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Shell } from './shell/shell';
import { ProtectedRoute } from '@dsych-org/shared-web/auth';
import { LandingPage } from '@dsych-org/aqeum-web/feature/landing';

const LazyHome = React.lazy(() =>
  import('@dsych-org/aqeum-web/feature/home').then(({ HomePage }) => ({
    default: HomePage,
  }))
);

const router = createBrowserRouter([
  {
    path: '/landing',
    element: <LandingPage />,
  },
  {
    path: '/',
    element: <Shell />,
    children: [
      {
        path: '/home',
        element: (
          <ProtectedRoute>
            <LazyHome test={'Hello hi'} />
          </ProtectedRoute>
        ),
      },
      {
        path: '/about',
        element: <div>About</div>,
      },
    ],
  },
]);

export const AppRouter = () => <RouterProvider router={router} />;
