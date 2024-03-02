import { useRoutes } from 'react-router-dom';
import { ROUTES } from '../../router';
import './styles.scss';
const App = () => {
  return useRoutes(ROUTES);
};

export default App;
