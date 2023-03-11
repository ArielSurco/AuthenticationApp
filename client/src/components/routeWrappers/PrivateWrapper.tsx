// External
import { Navigate, Outlet } from 'react-router-dom';

// Internal
import { useAuth } from 'hooks';
import { ROUTES } from '../../constants/routes';

const PrivateWrapper = () => {
  const { isAuth } = useAuth();

  return isAuth ? <Outlet /> : <Navigate to={ROUTES.login} />;
};

export default PrivateWrapper;
