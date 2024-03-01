import React from 'react';
import { RouteObject } from 'react-router-dom';
import MainPage from '../components/MainPage';
import { FairyTale } from '../components/FairyTale';

export const ROUTES: RouteObject[] = [
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '/first-fairy-tale',
    element: <FairyTale />,
  },
];
