'use client';

import { Heading } from '@library/kit';

import React from 'react';
import { observer } from 'mobx-react';

import { useGetData } from '../hooks/useGetData.ts';

import { Page } from './Page';

import s from './default.module.scss';

export const Module = observer(() => {
  const getData = useGetData();

  React.useEffect(() => {
    (async () => {
      await getData();
    })();
  }, []);

  return (
    <div className={s.wrapper}>
      <div className={s.header}>
        <Heading variant={'H2'}>Хранилище</Heading>
      </div>
      <div className={s.content}>
        <Page />
      </div>
    </div>
  );
});
