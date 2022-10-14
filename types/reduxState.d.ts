import { UserType } from "./user";

//* 유저 redux state
export type UserState = UserType & {
  isLogged: boolean;
};
