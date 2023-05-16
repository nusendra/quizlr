import { create } from "zustand";
import { getFollowing } from "../api";

export const useFollowingStore = create((set) => ({
  following: {},
  showAnswer: false,
  fetch: async () => {
    const { data } = await getFollowing();
    set({ following: data });
  },
  setAnswer: () => set((state) => ({ showAnswer: !state.showAnswer })),
}));
