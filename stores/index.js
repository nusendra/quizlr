import { create } from "zustand";
import { getFollowing, getForYou, getAnswer } from "../api";
import { tabOptions } from "../utils/constants";

export const useFollowingStore = create((set, get) => ({
  following: [],
  showAnswer: false,
  activeItemIndex: 0,
  fetch: async () => {
    const data = await getFollowing();
    set((state) => ({ following: [...state.following, data] }));

    // get more data for initial load
    if (get().following.length < 2) {
      const data2 = await getFollowing();
      set((state) => ({ following: [...state.following, data2] }));
    }
  },
  setAnswer: () => set((state) => ({ showAnswer: !state.showAnswer })),
  resetAnswer: () => set({ showAnswer: false }),
  setActiveIndex: (index) => set({ activeItemIndex: index }),
}));

export const useForYouStore = create((set) => ({
  forYou: {},
  showAnswer: false,
  setAnswer: () => set((state) => ({ showAnswer: !state.showAnswer })),
  correctAnswer: {},
  fetch: async () => {
    const data = await getForYou();
    const correctAnswer = await getAnswer(data.id);

    set({ forYou: data });
    set({ correctAnswer });
  },
  resetAnswer: () => set({ showAnswer: true }),
}));

export const useTabStore = create((set) => ({
  activeTab: tabOptions.FOLLOWING,
  setActiveTab: (tab) => set({ activeTab: tab }),
}));
