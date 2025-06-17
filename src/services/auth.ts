import type { IUserDataLogin } from "../types/authService";
import api from "./api";

export const atuhenticateUser = async (userData: IUserDataLogin): Promise<string> => {
  const response = await api.post('/auth/login', userData)
  return response.data
}