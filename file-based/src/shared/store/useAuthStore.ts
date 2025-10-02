import { create } from "zustand";

export const useAuthStore = create((set) => ({
  id: null as string | null,
  setId: (id: string) => set({ id }),
}));
