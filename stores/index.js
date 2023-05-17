import { create } from "zustand";
import { getFollowing, getForYou, getAnswer } from "../api";

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
  correctAnswer: {},
  fetch: async () => {
    const { data } = await getForYou();
    const { data: correctAnswer } = await getAnswer(data.id);

    set({ forYou: data });
    set({ correctAnswer });
  },
}));
