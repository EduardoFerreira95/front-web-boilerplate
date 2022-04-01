import { makeRoutes } from "./helpers";
import { makeHomeRoutes } from '../Modules/Home/Presentation';

export function Routes() {
  const routes = new Array().concat(makeHomeRoutes());
  return makeRoutes({ routes });
}