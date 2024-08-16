export interface IDiary {
  name: string;
  format: string;
  user_id: string;
}

export interface IUser {
  _id?: string;
  user_name: string;
  password?: string;
  is_logged?:boolean;
}
