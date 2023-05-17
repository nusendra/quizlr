import { create } from "zustand";
import { getFollowing, getForYou, getAnswer } from "../api";
import { tabOptions } from "../utils/constants";

export const useFollowingStore = create((set) => ({
  following: {},
  showAnswer: false,
  fetch: async () => {
    const { data } = await getFollowing();
    set({ following: data });
  },
  setAnswer: () => set((state) => ({ showAnswer: !state.showAnswer })),
  resetAnswer: () => set({ showAnswer: false }),
}));

export const useForYouStore = create((set) => ({
  forYou: {},
  showAnswer: false,
  setAnswer: () => set((state) => ({ showAnswer: !state.showAnswer })),
  correctAnswer: {},
  fetch: async () => {
    const { data } = await getForYou();
    const { data: correctAnswer } = await getAnswer(data.id);

    set({ forYou: data });
    set({ correctAnswer });
  },
  resetAnswer: () => set({ showAnswer: true }),
}));

export const useTabStore = create((set) => ({
  activeTab: tabOptions.FOLLOWING,
  setActiveTab: (tab) => set({ activeTab: tab }),
}));
