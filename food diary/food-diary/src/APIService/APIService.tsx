import axios from "axios";
import { IDiary, IPage, IUser } from "../types/types";
import { error } from "console";

const apiClient = axios.create({
  baseURL: "http://localhost:8000",
  headers: {
    "Content-Type": "application/json",
  },
});

export async function addDiary(diary: IDiary):Promise<boolean | undefined> {
  const json = JSON.stringify(diary);
  try {
    const response = await apiClient.post<boolean>("/diarys/add-diary", json);
    return response.data;
  } catch (e: any) {
    console.error("add diary Error!: ", e);
  }
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
export async function getUserId(username: string): Promise<string | undefined> {
  try {
    const response = await apiClient.get<string>("/users/get-user-id", {
      params: {
        username,
      },
    });
    return response.data;
  } catch (e: any) {
    console.error("get user id error:", e);
  }
}
export async function getDiarysByUserId(
  userId: string
): Promise<IDiary[] | undefined> {
  try {
    const response = await apiClient.get<IDiary[]>(
      "/diarys/get-diarys-by-user-id",
      {
        params: {
          user_id: userId,
        },
      }
    );

    return response.data;
  } catch (e) {
    console.error("Get diarys by usr id Error!: ", e);
  }
}
export async function getPagesByDiaryId(
  diaryId: string
): Promise<IPage[] | undefined> {
  try {
    const response = await apiClient.get<IPage[]>(
      "/pages/get-pages-by-diary-id",
      {
        params: {
          diary_id:diaryId,
        },
      }
    );

    return response.data;
  } catch (e) {
    console.error("Get pages by diary id Error!: ", e);
  }
}
export async function deleteDiary(diaryId:string){ 
  try{
    const response = await apiClient.delete<boolean>('/diarys/delete-diary-by-id',{
      params:{
        diary_id:diaryId
      }
    })
    return response.data
  }
  catch(e:any){
    console.error("Delete Diary Error!: ", e)
  }
}
export async function deletePage(pageId:string){ 
  try{
    const response = await apiClient.delete<boolean>('/diarys/delete-page-by-id',{
      params:{
        page_id:pageId
      }
    })
    return response.data
  }
  catch(e:any){
    console.error("Delete Diary Error!: ", e)
  }
}
