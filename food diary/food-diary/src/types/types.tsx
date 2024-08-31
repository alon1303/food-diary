export interface IDiary {
  _id?: string;
  name: string;
  format: string;
  user_id: string;
  create_date?:string
}
export interface IUser {
  _id?: string;
  user_name: string;
  password?: string;
  is_logged?: boolean;
}
export interface IPage {
  _id?:string;
  name:string;
  content:string;
  diary_id:string;
}
