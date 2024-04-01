import React from 'react';
import { RouteObject } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import FairyTale from '../pages/FairyTale';
import FairyTaleTest from '../pages/FairyTaleTest';

export const ROUTES: RouteObject[] = [
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '/story',
    element: <FairyTale />,
  },
  {
    path: '/test',
    element: <FairyTaleTest />,
  },
];
