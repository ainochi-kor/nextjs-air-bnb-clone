import { UserType } from "./user";

//* 유저 redux state
export type UserState = UserType & {
  isLogged: boolean;
};

export type CommonState = {
  validateMode: boolean;
};
