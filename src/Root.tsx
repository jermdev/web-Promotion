import { Navigate, Outlet, useLocation } from 'react-router-dom';

export const Root = (): JSX.Element => {
  const { pathname } = useLocation();
  
  console.log(pathname);
  
  if (pathname === '/') {
    return <Navigate to='/Home' />;
  }

  return (
      <Outlet />
  );
};
