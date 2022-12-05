import { Navigate, createHashRouter } from 'react-router-dom';
import App from './app';
import FirstPage from './first-page';
import Home from './home';
import SecondPage from './second-page';
import ThirdPage from './third-page';

const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: 'home', element: <Home /> },
      { path: 'first-page', element: <FirstPage /> },
      { path: 'second-page', element: <SecondPage /> },
      { path: 'third-page', element: <ThirdPage /> },
      { path: '*', element: <Navigate to='home' replace /> }
    ]
  },
  {
    path: '*',
    element: <Navigate to='/' replace />
  }
]);

export default router;
