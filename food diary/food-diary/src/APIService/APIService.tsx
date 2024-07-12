import axios from "axios";
import Diary from "../types/types";

const apiClient = axios.create({
    baseURL: 'http://localhost:8080/api',
    headers: {
      'Content-Type': 'application/json',
    },
  });

function addDiary(diary:Diary){
    
        apiClient.post("/add-diary", diary)
        .then(response => console.log(response.data))
        .catch(error=>console.error(error));        
    
}
export default addDiary