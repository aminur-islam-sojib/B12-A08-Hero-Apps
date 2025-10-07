import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';
import MainLayout from '../Layout/MainLayout';
import Home from '../Pages/Home/Home';
import Apps from '../Pages/Apps/Apps';
import Installed from '../Pages/Installed/Installed';
import DetailsPage from '../Pages/DetailsPage/DetailsPage';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: '/Apps', element: <Apps /> },
      { path: '/Installed', element: <Installed /> },
      { path: '/Details/:id', element: <DetailsPage /> },
    ],
  },
]);
