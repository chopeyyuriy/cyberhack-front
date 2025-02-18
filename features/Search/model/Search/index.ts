import { create } from "zustand";

import { debounce } from "@/shared";

export interface ISearchStore {
  isModalOpened: boolean;
  search: string;

  updateSearchValue: (value: string) => void;
  updateModalState: (value: boolean) => void;
}

export const useSearchStore = create<ISearchStore>((set) => ({
  search: "",
  isModalOpened: false,
  updateSearchValue: (value) => debounce<any>(set({ search: value }), 250),
  updateModalState: (value) => set({ isModalOpened: value }),
}));
