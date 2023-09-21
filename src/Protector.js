import React from 'react';
import { Navigate } from 'react-router-dom';
import userContext from './Datacontexter';

function Protector({ children }) {
  if (!userContext.isSignedIn) {
    return <Navigate to="/" replace />;
  }
  return children;
}

export default Protector;
