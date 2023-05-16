import { create } from "zustand";
import { getFollowing } from "../api";

export const useFollowingStore = create((set) => ({
  following: {},
  fetch: async () => {
    const { data } = await getFollowing();
    set({ following: data });
  },
}));
