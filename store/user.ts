import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserState } from "../types/reduxState";
import { UserType } from "../types/user";

//* 초기 상태
const initialState: UserState = {
  id: 0,
  email: "",
  lastname: "",
  firstname: "",
  birthday: "",
  isLogged: false,
  profileImage: "",
};
const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    //* 로그인 한 유저 변경하기
    setLoggedUser(state, action: PayloadAction<UserType>) {
      state = { ...action.payload, isLogged: true };
      return state;
    },
    //* 유저 초기화 하기
    initUser(state) {
      state = initialState;
      return state;
    },
  },
});

export const userActions = { ...user.actions };

export default user;
