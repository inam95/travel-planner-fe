import { useQuery } from '@tanstack/react-query';
import { FC, PropsWithChildren } from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { getAuthUser } from '../api';

const ProtectedPage: FC<PropsWithChildren> = ({ children }) => {
  const { isLoading, data } = useQuery(['user-auth-status'], getAuthUser);
  const location = useLocation();

  if (isLoading) return <div>Loading...</div>;

  if (data?.data) return <>{children}</>;
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default ProtectedPage;
