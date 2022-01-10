// React
import { lazy, Suspense } from 'react';

// React Router
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import * as ROUTES from './constants/routes';

// Styled Components
import { GlobalStyles, MainContainer } from './App.style';

// Components
import Header from './components/Header';
import ProtectedRoute from './helpers/ProtectedRoute';

// Hooks
import useAuthListener from './hooks/useAuthListener';

// Context
import UserContext from './context/userContext';
import AuthUserRedirect from './helpers/AuthUserRedirect';

// Page imports
const Home = lazy(() => import('./pages/Home'));
const Register = lazy(() => import('./pages/Register'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
  const { user } = useAuthListener();

  return (
    <div className='App'>
      <GlobalStyles />
      <UserContext.Provider value={user}>
        <BrowserRouter>
          <Header />
          <MainContainer>
            <Suspense fallback={<h1>Loading...</h1>}>
              <Routes>
                <Route
                  path={ROUTES.HOME}
                  element={
                    <AuthUserRedirect redirectPath={ROUTES.DASHBOARD}>
                      <Home />
                    </AuthUserRedirect>
                  }
                />
                <Route
                  path={ROUTES.REGISTER}
                  element={
                    <AuthUserRedirect redirectPath={ROUTES.DASHBOARD}>
                      <Register />
                    </AuthUserRedirect>
                  }
                />
                <Route
                  path={ROUTES.DASHBOARD}
                  element={
                    <ProtectedRoute>
                      <Dashboard />
                    </ProtectedRoute>
                  }
                />
                <Route path='*' element={<NotFound />} />
              </Routes>
            </Suspense>
          </MainContainer>
        </BrowserRouter>
      </UserContext.Provider>
    </div>
  );
}

export default App;
