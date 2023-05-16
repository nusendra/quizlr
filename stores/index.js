import { create } from "zustand";
import { getFollowing, getForYou } from "../api";

export const useFollowingStore = create((set) => ({
  following: {},
  showAnswer: false,
  fetch: async () => {
    const { data } = await getFollowing();
    set({ following: data });
  },
  setAnswer: () => set((state) => ({ showAnswer: !state.showAnswer })),
}));

export const useForYouStore = create((set) => ({
  forYou: {},
  fetch: async () => {
    const { data } = await getForYou();
    set({ forYou: data });
  },
}));
