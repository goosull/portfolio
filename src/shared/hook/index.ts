import { create } from "zustand";

interface ScrollStore {
  homeScrollPosition: string | null;
  setHomeScrollPosition: (position: string | null) => void;
}

export const useScrollStore = create<ScrollStore>((set) => ({
  homeScrollPosition: null,
  setHomeScrollPosition: (position) => set({ homeScrollPosition: position }),
}));
