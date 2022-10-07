import React, { FC } from 'react';

const PageHader: FC<{ title: string; subTitle?: string }> = (props) => {
  const { title, subTitle } = props;

  return (
    <div className={'mb-0'}>
      <h1 className={'text-gray-200 font-bold text-5xl'}>{title}</h1>
      {subTitle && <p className={'font-normal text-xl text-slate-600 font-medium mb-5'}>{subTitle}</p>}
    </div>
  );
};

export default PageHader;
