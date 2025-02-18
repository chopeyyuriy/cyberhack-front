import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux'
import { ProductDispatch, RootState } from './core';

export const useProductDispatch = () => useDispatch<ProductDispatch>();
export const useProductSelector: TypedUseSelectorHook<RootState> = useSelector;
// export const useAppStore = useStore.withTypes<AppStore>()

export { ProductStoreProvider } from "./provider";