import React, { FC, HTMLProps } from 'react';
import PageHeader from '../../components/common/PageHeader';

const PageLayout: FC<HTMLProps<HTMLDivElement> & { title?: string; subTitle?: string }> = (props) => {
  const { title, subTitle, children } = props;

  return (
    <div className={'py-6'}>
      {title && <PageHeader title={title} subTitle={subTitle} />}
      {children}
    </div>
  );
};

export default PageLayout;
