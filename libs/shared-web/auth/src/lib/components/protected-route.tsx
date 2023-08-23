import React, { ReactNode } from 'react';
import { useAuthService } from '../auth.service';
import { Navigate } from 'react-router-dom';

export const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const { isAuthorized } = useAuthService();
  // some more complex rules
  if (!isAuthorized()) {
    return <Navigate to="/landing" replace />;
  }

  return children;
};
