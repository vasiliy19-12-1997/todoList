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
export interface IAuth {
  isAuth: boolean;
  setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}
export interface ISort {
  sort: keyof ITodo;
}
export interface IQuery {
  query: string;
}

export interface IFilter extends ISort, IQuery {}
