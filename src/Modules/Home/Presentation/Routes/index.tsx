import { makeRoute } from '../../../../Routes/helpers';
import { Home } from '../Pages';

export const makeHomeRoutes = () => [
  makeRoute({ 
    component: <Home />, 
    navigationPath: '/', 
    index: true,
  }),
];