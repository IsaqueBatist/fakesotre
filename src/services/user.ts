import type { AxiosResponse } from "axios";
import type { IFormRegisterData } from "../types/formRegisterData";
import type { IUser } from "../types/user";
import api from "./api";

export const getUserById = async (id: number): Promise<IUser> => {
  const response = await api.get(`/users/${id}`);
  return response.data;
};

export const getAllUser = async (): Promise<IUser[]> => {
  const response = await api.get("/users");
  return response.data;
};

export const filterUserByUsername = async (
  username: string
): Promise<IUser> => {
  const users = await getAllUser();
  const user = users.find((u) => u.username.toLowerCase() === username.toLowerCase())
  console.log("Username", username)
  console.log("Users", users)
  console.log("User", user)

  if (!user) throw new Error("User not found");

  return user;
};

export const addUser = async (
  userData: IFormRegisterData
): Promise<AxiosResponse> => {
  return await api.post("/users", JSON.stringify(userData), {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  });
};
