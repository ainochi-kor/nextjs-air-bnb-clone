import { NextPage } from "next";
import dynamic from "next/dynamic";

//* dynamic을 이용하여 ssr을 하지 않고 불러온다.
//* window를 사용하게 될 예정이면 dynamic을 사용하여 ssr을 방지해야 한다.
const RegisterGoomGeometry = dynamic(
  import("../../../components/room/register/RegisterRoomGeometry"),
  { ssr: false }
);

const geometry: NextPage = () => {
  return <RegisterGoomGeometry />;
};

export default geometry;
