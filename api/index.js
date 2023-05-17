import { API_URL } from "@env";

export const getFollowing = async () => {
  const response = await fetch(`${API_URL}/following`);
  const data = await response.json();

  return data;
};

export const getForYou = async () => {
  const response = await fetch(`${API_URL}/for_you`);
  const data = await response.json();

  return data;
};

export const getAnswer = async (id) => {
  const response = await fetch(`${API_URL}/reveal?id=${id}`);
  const data = await response.json();

  return data;
};
