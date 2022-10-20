import { readFileSync, writeFileSync } from "fs";

export type StoredUserType = {
  id: number;
  email: string;
  password: string;
  firstname: string;
  lastname: string;
  birthday: string;
  profileImage: string;
};

const getList = () => {
  const usersBuffer = readFileSync("data/user.json");
  const usersString = usersBuffer.toString();
  if (!usersString) {
    return [];
  }
  const users: StoredUserType[] = JSON.parse(usersString);
  return users;
};

//* email의 유저가 있는지 확인하기
const exist = ({ email }: { email: string }) => {
  const users = getList();
  return users.some((user) => user.email === email);
};

const write = async (users: StoredUserType[]) => {
  writeFileSync("data/user.json", JSON.stringify(users));
};

//* email 또는 id 유저 불러오기
const find = ({ email, id }: { email?: string; id?: number }) => {
  const users = getList();
  return users.find((user) => user.email === email || user.id === id);
};

export default { getList, exist, write, find };
