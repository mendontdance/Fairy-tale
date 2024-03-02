import { RootStore } from './store';
import { useContext, createContext } from 'react';

export const RootStoreContext = createContext<RootStore | null>(null);

export const useStore = () => {
  const context = useContext(RootStoreContext);
  if (context === null) {
    throw new Error('Provider is not defined');
  }
  return context;
};
