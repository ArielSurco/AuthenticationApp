import {
  createContext, FC, useMemo, useState,
} from 'react';

export interface IAuthContext {
  isAuth: boolean
}

export interface IAuthProviderProps {
  children: JSX.Element | JSX.Element[]
}

export const AuthContext = createContext({} as IAuthContext);

export const AuthProvider: FC<IAuthProviderProps> = ({ children }: IAuthProviderProps) => {
  const [isAuth] = useState(false);

  const providerValues: IAuthContext = useMemo(() => ({ isAuth }), [isAuth]);

  return (
    <AuthContext.Provider value={providerValues}>
      {children}
    </AuthContext.Provider>
  );
};
