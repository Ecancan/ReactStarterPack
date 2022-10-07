import React from 'react';
import { useGlobalLoading } from '../../hooks/useSlices';

const Loading = () => {
  const { loading } = useGlobalLoading();

  return (
    <>
      {loading > 0 && (
        <div
          className={
            'absolute top-0 left-0 w-full bg-black opacity-50 h-full flex flex-row items-center justify-center'
          }
        >
          <p className={'text-5xl text-white'}>Loading...</p>
        </div>
      )}
    </>
  );
};

export default Loading;
