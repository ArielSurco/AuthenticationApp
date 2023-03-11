// External
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Internal
import { AuthProvider } from 'context';
import {
  Error404, Login, Profile, Register,
} from './pages';
import { LoginFlowWrapper, PrivateWrapper } from './components';
import { ROUTES } from './constants/routes';

const App = () => (
  <AuthProvider>
    <BrowserRouter>
      <Routes>
        {/* Login flow routes */}
        <Route element={<LoginFlowWrapper />}>
          <Route path={ROUTES.login} element={<Login />} />
          <Route path={ROUTES.register} element={<Register />} />
        </Route>

        {/* Private routes */}
        <Route element={<PrivateWrapper />}>
          <Route path={ROUTES.default} element={<Profile />} />
          <Route path={ROUTES.profile} element={<Profile />} />
        </Route>

        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  </AuthProvider>
);

export default App;
