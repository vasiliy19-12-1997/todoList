export interface IAddress {
  street: string;
  city: string;
  zipcode: string;
}
export interface IUser {
  id: number;
  name: string;
  email: string;
  address: IAddress;
}
export interface ITodo {
  id: number;
  title: string;
  completed: boolean;
}
export interface Auth {
  isAuth: boolean;
  setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}
