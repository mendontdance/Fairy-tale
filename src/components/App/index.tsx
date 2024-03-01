import { useRoutes } from 'react-router-dom';
import { ROUTES } from '../../router';

const App = () => {
  return useRoutes(ROUTES);
};

export default App;
