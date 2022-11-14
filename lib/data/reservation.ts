import { readFileSync, writeFileSync } from "fs";
import { StoredReservation } from "../../types/reservation";

//* 예약 리스트 데이터 불러오기
const getList = () => {
  const reservationsBuffer = readFileSync("data/reservations.json");
  const reservationsString = reservationsBuffer.toString();
  if (!reservationsString) {
    return [];
  }
  const reservations: StoredReservation[] = JSON.parse(reservationsString);
  return reservations;
};

//* id의 예약이 있는지 확인하기
const exist = (reservationId: number) => {
  const reservations = getList();
  return reservations.some((room) => room.id === reservationId);
};

//* id의 예약 불러오기
const find = (reservationId: number) => {
  const reservations = getList();
  return reservations.find((room) => room.id === reservationId);
};

//* 예약 리스트 저장하기
const write = (reservations: StoredReservation[]) => {
  writeFileSync("data/reservations.json", JSON.stringify(reservations));
};

export default { getList, exist, write, find };
