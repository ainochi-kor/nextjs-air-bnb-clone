import axios from ".";

type MakeReservationAPIBody = {
  userId: number;
  checkInDate: string;
  checkOutDate: string;
  adultCount: number;
  childrenCount: number;
  infantsCount: number;
};

//* 숙소 예약하기
export const makeReservationAPI = (body: MakeReservationAPIBody) =>
  axios.post("/api/reservations", body);
