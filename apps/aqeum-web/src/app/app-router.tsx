import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { LandingPage } from '@dream-org/aqeum-web/feature/landing';
import { Shell } from '@dream-org/aqeum-web/core/shell';
import { ProtectedRoute } from '@dream-org/aqeum-web/core/auth';

const LazyHome = React.lazy(() =>
  import('@dream-org/aqeum-web/feature/home').then(({ HomePage }) => ({
    default: HomePage,
  }))
);

const LazyProfile = React.lazy(() =>
  import('@dream-org/aqeum-web/feature/profile').then(
    ({ AqeumWebFeatureProfile }) => ({
      default: AqeumWebFeatureProfile,
    })
  )
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
        path: '/profile',
        element: (
          <ProtectedRoute>
            <LazyProfile />
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
