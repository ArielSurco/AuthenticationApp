// External
import { useContext } from 'react';

// Internal
import { AuthContext, IAuthContext } from 'context';

const useAuth = (): IAuthContext => {
  const context: IAuthContext = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
};

export default useAuth;
