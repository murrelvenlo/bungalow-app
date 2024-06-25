import axios from "axios";
import { handleError } from "../helpers/error-handler";
import { UserProfileToken } from "../types/user";

const api = "http://localhost:4000/api";

export const loginAPI = async (email: string, password: string) => {
  try {
    const data = await axios.post<UserProfileToken>(api + "/auth/login", {
      email: email,
      password: password,
    });
    return data;
  } catch (error) {
    handleError(error);
  }
};

export const registerAPI = async (
  username: string,
  email: string,
  password: string
) => {
  try {
    const data = await axios.post<UserProfileToken>(api + "/auth/register", {
      username: username,
      email: email,
      password: password,
    });
    return data;
  } catch (error) {
    handleError(error);
  }
};
