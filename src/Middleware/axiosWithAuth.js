import axios from "axios";

export const BASE_URL = "https://lambda-mud-test.herokuapp.com/api";

export const axiosWithAuth = () => {
  const token = localStorage.getItem("key");

  return axios.create({
    headers: {
      Authorization: token ? `Token ${token}` : "",
    },
    baseURL: BASE_URL,
  });
};

export default axiosWithAuth;
