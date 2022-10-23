import axios from ".";

//* 현재 위치 정보 가져오기 api
export const getLocationInfoAPI = async ({
  latitude,
  longitude,
}: {
  latitude: number;
  longitude: number;
}) => {
  axios.get(`/api/maps/locations?latitude=${latitude}&longitude=${longitude}`);
};
