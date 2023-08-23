import { useAuthService } from '@dream-org/aqeum-web/core/auth';
import { Navigate } from 'react-router-dom';
import React from 'react';

export const LandingPage = () => {
  const { isAuthorized, login } = useAuthService();
  if (!isAuthorized()) {
    return (
      <div>
        Landing page <button onClick={login}>Login</button>
      </div>
    );
  }

  return <Navigate to="/home" replace />;
};
