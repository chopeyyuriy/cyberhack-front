import { create } from "zustand";

export interface IAuthorizationStore {
  email: string;
  password: string;
  password_confirmation: string;

  setEmail: (value: string) => void;
  setPassword: (value: string) => void;
  setPasswordConfirmation: (value: string) => void;
}

export const useAuthorizationStore = create<IAuthorizationStore>((set) => ({
  email: "",
  password: "",
  password_confirmation: "",
  setEmail: (value) => set({ email: value }),
  setPassword: (value) => set({ password: value }),
  setPasswordConfirmation: (value) => set({ password_confirmation: value }),
}));
