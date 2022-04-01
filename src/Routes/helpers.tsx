import { ReactNode } from 'react';

import { 
  Route, 
  RouteProps, 
  useNavigate as useNavigationHandler, 
  BrowserRouter,
  Routes,
} from 'react-router-dom';

type OmittedRouteProps = 'path' | 'element';

type MakeRouteProps = Omit<RouteProps, OmittedRouteProps> & {
  component: ReactNode;
  navigationPath?: string;
};

type MakeBrowserRouteProps = {
  routes: JSX.Element[];
};

type NavigateParams = {
  pathToNavigate: string;
};

export function makeRoute({ component, navigationPath, ...rest }: MakeRouteProps) {
  return <Route element={component} path={navigationPath} {...rest}  />
};

export function useNavigate() {
  const handleNavigate  = useNavigationHandler();
  return { navigate: ({ pathToNavigate }: NavigateParams) => handleNavigate(pathToNavigate) }
};

export function makeRoutes({ routes }: MakeBrowserRouteProps) {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map(route => route)}
      </Routes>
    </BrowserRouter>
  )
};
