import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useGetPostsQuery } from '../../api/services/example/exampleService';
import PageLayout from '../layouts/PageLayout';

const Home: FC = () => {
  const { data: posts } = useGetPostsQuery();
  const [translate] = useTranslation('common');

  return (
    <PageLayout>
      <div className={'flex flex-col items-center justify-center h-full'}>
        <img
          src="https://uploads-ssl.webflow.com/6273c3d99415955ebb1ad133/6273c4a9fdadb47eb6d2b364_kolaybi_logo-p-500.png"
          alt="logo"
          width="300"
        />
        <span className="app-title">KolayBi FE Starter Pack</span>
        <span className="app-subtitle">{translate('GLOBAL.WELCOME')}</span>
        <span>{posts && posts?.length > 0 ? 'API: ✅' : 'API: ❌'}</span>
      </div>
    </PageLayout>
  );
};

export default Home;
