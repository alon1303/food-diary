import axios from "axios";
import {IDiary} from "../types/types";

const apiClient = axios.create({
  baseURL: "http://localhost:8000",
  headers: {
    "Content-Type": "application/json",
    
  },
});

function addDiary(diary:IDiary) {
    const json = JSON.stringify(diary)
    
  apiClient
    .post("/add-diary", json)
    .then((response) => console.log(response.data))
    .catch((error) => console.error(error));
}
export default addDiary;
