import { create } from "zustand";

export interface INewsSearchStore {
  search: string;
  selectedCategories: number[];
  categories: {
    icon: string;
    name: string;
    count: number;
  }[];
  updateSearchValue: (value: string) => void;
  updateSelectedCategories: (value: number[]) => void;
}

export const useNewsSearchStore = create<INewsSearchStore>((set) => ({
  search: "",
  categories: [
    {
      icon: "heart.svg",
      name: "Все",
      count: 31,
    },
    {
      icon: "heart.svg",
      name: "Все",
      count: 31,
    },
    {
      icon: "heart.svg",
      name: "Все",
      count: 31,
    },
    {
      icon: "heart.svg",
      name: "Все",
      count: 31,
    },
    {
      icon: "heart.svg",
      name: "Все",
      count: 31,
    },
    {
      icon: "heart.svg",
      name: "Все",
      count: 31,
    },
  ],
  selectedCategories: [],
  updateSearchValue: (value) => set({ search: value }),
  updateSelectedCategories: (value) => set({ selectedCategories: value }),
}));
