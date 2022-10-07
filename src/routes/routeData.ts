import { LoadableComponent } from '@loadable/component';
import { RouteComponentProps } from 'react-router-dom';
import loadableUtil from '../utils/loadableUtil';

export const Home = loadableUtil(() => import(/* webpackChunkName: 'home' */ '../views/home/Home'));

export interface RouteProps {
  path: string;
  exact?: boolean;
  name: string;
  component: LoadableComponent<RouteComponentProps>;
}

export const routes: RouteProps[] = [
  {
    path: '/',
    exact: true,
    name: 'Home',
    component: Home
  }
];
export default routes;
