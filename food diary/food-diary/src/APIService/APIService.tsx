import axios from "axios";
import { IDiary, IUser } from "../types/types";

const apiClient = axios.create({
  baseURL: "http://localhost:8000",
  headers: {
    "Content-Type": "application/json",
  },
});

export function addDiary(diary: IDiary) {
  const json = JSON.stringify(diary);
  apiClient
    .post("/diarys/add-diary", json)
    .then((response) => console.log(response.data))
    .catch((error) => console.error(error));
}

export async function check_username(userName: string) {
  try {
    const response = await apiClient.get(`/users/check-username/${userName}`);

    return response.data;
  } catch (e: any) {
    console.log("Check username error!: ");
    console.log(e);
  }
}

export async function addUser(user: IUser) {
  const json = JSON.stringify(user);
  await apiClient
    .post("/users/add-user", json)
    .then((response) => console.log(response.data))
    .catch((error) => console.log(error));
}
export async function login(user_name: string, password: string) {
  try {
    const response = await apiClient.get(`/users/login`, {
      params: {
        user_name,
        password,
      },
    });
    return response.data;
  } catch (e: any) {
    console.log("Login Error!: ");
    console.log(e);
  }
}
