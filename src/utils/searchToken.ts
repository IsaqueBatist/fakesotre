import axios from "axios";
import { atuhenticateUser } from "../services/auth";
import type { IUserDataLogin } from "../types/authService";

export const searchToken = async (
  userData: IUserDataLogin
): Promise<string | undefined> => {
  try {
    const token = await atuhenticateUser(userData);
    if (!token) {
      throw new Error("Invalid or missing token.");
    }
    localStorage.setItem("token", JSON.stringify(token));
    axios.defaults.headers.common["Authorization"] = token;
    return token;
  } catch (err: any) {
    const message =
      err.response?.data?.message || // erro de API
      err.message || // erro padrão
      "Erro desconhecido ao buscar token.";
    throw new Error(message);
  }
};
