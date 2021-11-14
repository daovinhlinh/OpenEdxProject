import { Navigate, Outlet, RouteProps, useLocation } from 'react-router-dom';

export const PrivateRoute = (props: RouteProps) => {
  let location = useLocation();
  //Check if user is logged in
  const isLoggedIn = Boolean(localStorage.getItem('access_token'));
  if (!isLoggedIn) return <Navigate to='/login' state={{ from: location }} />;

  return <Outlet {...props} />
}
