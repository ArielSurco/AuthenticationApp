// External
import { Navigate, Outlet } from 'react-router-dom';

// Internal
import { ROUTES } from '../../constants/routes';

const LoginFlowWrapper = () => {
  const isAuth = false;

  return isAuth ? <Navigate to={ROUTES.default} /> : <Outlet />;
};

export default LoginFlowWrapper;
