import { createBrowserRouter } from 'react-router';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import { lazy, Suspense } from 'react';
import Loading from '../components/Loading';

const MainLayout = lazy(() => import('../Layout/MainLayout'));
const Home = lazy(() => import('../Pages/Home/Home'));
const Apps = lazy(() => import('../Pages/Apps/Apps'));
const Installed = lazy(() => import('../Pages/Installed/Installed'));
const DetailsPage = lazy(() => import('../Pages/DetailsPage/DetailsPage'));

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<Loading />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: '/Apps',
        element: (
          <Suspense fallback={<Loading />}>
            <Apps />
          </Suspense>
        ),
      },
      {
        path: '/Installed',
        element: (
          <Suspense fallback={<Loading />}>
            <Installed />
          </Suspense>
        ),
      },
      {
        path: '/Details/:id',
        element: (
          <Suspense fallback={<Loading />}>
            <DetailsPage />
          </Suspense>
        ),
      },
    ],
  },
]);
