import { Heading, Link } from '@library/kit';

import React from 'react';

import s from './default.module.scss';

export const Header = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.header}>
        <Heading variant={'H3'}>Категории</Heading>
      </div>
      <div>
        <Link href={'/categories/create'}>Добавить категорию</Link>
      </div>
    </div>
  );
};