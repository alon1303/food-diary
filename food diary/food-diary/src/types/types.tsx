

export interface IDiary{
    name:string
    format:string    
    userName:string
}

export interface IUser{
    user_name:string
    password?:string
}
export interface UserNameState {
    value: string;
  }