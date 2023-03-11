// External
import { Navigate, Outlet } from 'react-router-dom';

// Internal
import { ROUTES } from '../../constants/routes';

const PrivateWrapper = () => {
  const isAuth = false;

  return isAuth ? <Outlet /> : <Navigate to={ROUTES.login} />;
};

export default PrivateWrapper;
