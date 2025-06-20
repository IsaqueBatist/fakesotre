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
  const user = users.find((u) => u.username === username);

  if (!user) throw new Error("User not found");

  return user;
};
