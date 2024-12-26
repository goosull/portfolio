import { create } from "zustand";

interface ScrollPosition {
  path: string;
  position: number | null;
}

interface ScrollStore {
  homeScrollPositions: ScrollPosition[]; // 여러 path를 저장하는 배열
  setHomeScrollPosition: (position: number | null, path: string) => void;
  getHomeScrollPosition: (path: string) => number | null;
}

export const useScrollStore = create<ScrollStore>((set, get) => ({
  homeScrollPositions: [],

  setHomeScrollPosition: (position, path) => {
    set((state) => {
      // 기존 path가 있는지 확인
      const existingIndex = state.homeScrollPositions.findIndex(
        (entry) => entry.path === path
      );

      // 기존 path가 있으면 업데이트, 없으면 새로 추가
      if (existingIndex !== -1) {
        const updatedPositions = [...state.homeScrollPositions];
        updatedPositions[existingIndex] = { path, position };
        return { homeScrollPositions: updatedPositions };
      } else {
        return {
          homeScrollPositions: [
            ...state.homeScrollPositions,
            { path, position },
          ],
        };
      }
    });
  },

  getHomeScrollPosition: (path) => {
    const { homeScrollPositions } = get();
    const match = homeScrollPositions.find((entry) => entry.path === path);
    console.log(homeScrollPositions, "homeScrollPositions", path, "path");
    return match ? match.position : null;
  },
}));
