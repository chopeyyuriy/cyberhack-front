'use client'

import { setGameListState } from '@/entities/Game/store/index';
import { IUpdateAccountDTO } from '@/entities/Session/dto/index';
import { setUserState, setWalletState } from '@/entities/Session/store/index'
import { IGame } from '@/shared/types/Products/index';
import { ReactNode, useRef } from 'react'
import { Provider } from 'react-redux'
import { AppStore, setupStore } from './core';

interface InitialData {
  user: IUpdateAccountDTO;
  game: {
    list: IGame[];
  }
}

interface Props {
  initialData: InitialData;
  children: ReactNode | ReactNode[];
}

export function AppStoreProvider({
  initialData,
  children
}: Props) {
  const { user, game } = initialData;

  const storeRef = useRef<AppStore | null>(null)
  if (!storeRef.current) {
    storeRef.current = setupStore();

    storeRef.current.dispatch(
      setUserState(user)
    );
    storeRef.current.dispatch(
      setGameListState(game.list)
    );
  }

  return (<Provider store={storeRef.current}>
    {children}
  </Provider>)
}