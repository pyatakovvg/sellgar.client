'use client';

import React from 'react';
import { observer } from 'mobx-react';

import { useIsLoading } from '../../hooks/useIsLoading.ts';

import { Loading } from './Loading';
import { PageContent } from './PageContent';

export const Page = observer(() => {
  const isLoading = useIsLoading();

  if (isLoading) {
    return <Loading />;
  }

  return <PageContent />;
});
