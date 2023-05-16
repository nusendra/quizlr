import axios from "axios";
import { API_URL } from "@env";

const axiosClient = axios.create();

axiosClient.defaults.baseURL = API_URL;

export const getFollowing = async () => {
  const data = await axiosClient.get("/following");
  return data;
};
