import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux'
import { NewsDispatch, RootState } from './core';

export const useNewsDispatch = () => useDispatch<NewsDispatch>();
export const useNewsSelector: TypedUseSelectorHook<RootState> = useSelector;
// export const useAppStore = useStore.withTypes<AppStore>()

export { NewsStoreProvider } from "./provider";