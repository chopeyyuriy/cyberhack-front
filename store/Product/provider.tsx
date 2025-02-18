'use client'

import { setCurrentGameState, setGameListState } from '@/entities/Game/store/index';
import { IGame } from '@/shared/types/Products/index';
import { ReactNode, useRef } from 'react'
import { Provider } from 'react-redux'
import { ProductStore, setupStore } from './core';

interface InitialData {
  game: IGame;
}

interface Props {
  initialData: InitialData;
  children: ReactNode | ReactNode[];
}

export function ProductStoreProvider({
  initialData,
  children
}: Props) {
  const { game } = initialData;

  const storeRef = useRef<ProductStore | null>(null)
  if (!storeRef.current) {
    storeRef.current = setupStore()

    storeRef.current.dispatch(
      setCurrentGameState(game)
    );
  }

  return (<Provider store={storeRef.current}>
    {children}
  </Provider>)
}