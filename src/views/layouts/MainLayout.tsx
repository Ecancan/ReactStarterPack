import React, { FC, HTMLProps } from 'react';
import { Route, Switch } from 'react-router-dom';
import Loading from '../../components/common/Loading';
import Header from '../../components/header/Header';
import routes from '../../routes/routeData';

type IMainFrame = HTMLProps<HTMLDivElement>;

const MainLayout: FC<IMainFrame> = () => (
  <div className={'container mx-auto px-2'}>
    <Header />
    <Switch>
      {routes.map((item) => (
        <Route
          key={item.path}
          path={item.path}
          exact={item.exact}
          render={(componentProps) => <item.component {...componentProps} />}
        />
      ))}
    </Switch>
    <Loading />
  </div>
);

export default MainLayout;
