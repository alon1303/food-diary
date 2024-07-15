import axios from "axios";
import Diary from "../types/types";

const apiClient = axios.create({
  baseURL: "http://localhost:8000",
  headers: {
    "Content-Type": "application/json",
    
  },
});

function addDiary() {
    const json = JSON.stringify({name:"das", format:"asdsa", userName:"asdassdsadas"})
    
  apiClient
    .post("/add-diary", json)
    .then((response) => console.log(response.data))
    .catch((error) => console.error(error));
}
export default addDiary;
