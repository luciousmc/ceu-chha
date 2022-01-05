// React
import { lazy, Suspense } from 'react';

// React Router
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import * as ROUTES from './constants/routes';

// Styles
import { GlobalStyles, MainContainer } from './App.style';

// Components
import Header from './components/Header';

// Page imports
const Landing = lazy(() => import('./pages/Landing'));
const Register = lazy(() => import('./pages/Register'));

function App() {
  return (
    <div className='App'>
      <GlobalStyles />
      <BrowserRouter>
        <Header />
        <MainContainer>
          <Suspense fallback={<h1>Loading...</h1>}>
            <Routes>
              <Route path={ROUTES.LANDING} element={<Landing />} />
              <Route path={ROUTES.REGISTER} element={<Register />} />
            </Routes>
          </Suspense>
        </MainContainer>
      </BrowserRouter>
    </div>
  );
}

export default App;
