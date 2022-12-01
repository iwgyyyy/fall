import { createBrowserRouter, Navigate } from 'react-router-dom';
import App from './app';
import FirstPage from './first-page';
import Home from './home';
import SecondPage from './second-page';
import ThirdPage from './third-page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'home',
        element: <Home />
      },
      {
        path: 'first-page',
        element: <FirstPage />
      },
      {
        path: 'second-page',
        element: <SecondPage />
      },
      {
        path: 'third-page',
        element: <ThirdPage />
      },
      {
        path: '*',
        element: <div>404 not found</div>
      }
    ]
  },
  {
    path: '*',
    element: <Navigate to='/' />
  }
]);

export default router;
