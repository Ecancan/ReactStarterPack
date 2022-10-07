import loadable, { DefaultComponent } from '@loadable/component';
import { RouteComponentProps } from 'react-router-dom';

export default (Loader: (props: unknown) => Promise<DefaultComponent<RouteComponentProps>>) => loadable(Loader);
