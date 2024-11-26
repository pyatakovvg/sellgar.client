import { Spinner } from '@library/kit';

import React from 'react';

import s from './default.module.scss';

export const ModuleLoader = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.content}>
        <Spinner />
      </div>
    </div>
  );
};
