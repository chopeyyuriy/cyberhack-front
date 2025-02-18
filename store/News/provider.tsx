'use client'

import { setNewsDataState } from '@/entities/News/store/index';
import { ReactNode, useRef } from 'react'
import { Provider } from 'react-redux'
import { NewsStore, setupStore } from './core';

interface InitialData {
  news: any;
}

interface Props {
  initialData: InitialData;
  children: ReactNode | ReactNode[];
}

export function NewsStoreProvider({
  initialData,
  children
}: Props) {
  const { news } = initialData;

  const storeRef = useRef<NewsStore | null>(null)
  if (!storeRef.current) {
    storeRef.current = setupStore()

    storeRef.current.dispatch(
      setNewsDataState(news)
    );
  }

  return (<Provider store={storeRef.current}>
    {children}
  </Provider>)
}