import React from 'react';
import { RouteObject } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import FairyTale from '../pages/FairyTale';

export const ROUTES: RouteObject[] = [
  {
    path: '/fairy-tale',
    element: <MainPage />,
  },
  {
    path: '/fairy-tale/story',
    element: <FairyTale />,
  },
];
