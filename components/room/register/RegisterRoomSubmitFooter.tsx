import Link from "next/link";
import styled from "styled-components";
import BackAroowIcon from "../../../public/static/svg/register/register_room_footer_back_arrow.svg";
import palette from "../../../styles/palette";
import Button from "../../common/Button";

const RegisterRoomSubmitFooter: React.FC = () => {
  //* 등록하기
  const onClickregisterRoom = async () => {};

  return (
    <Container>
      <Link href="/room/register/date">
        <a className="register-room-footer-back">
          <BackAroowIcon />
          뒤로
        </a>
      </Link>
      <Button onClick={onClickregisterRoom} color="bittersweet" width="102px">
        등록하기
      </Button>
    </Container>
  );
};

export default RegisterRoomSubmitFooter;

const Container = styled.footer`
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 548px;
  height: 82px;
  padding: 14px 30px 20px;
  background-color: white;
  z-index: 10;
  border-top: 1px solid ${palette.gray_dd};

  .register-room-footer-back {
    display: flex;
    align-items: center;
    color: ${palette.dark_cyan};
    cursor: pointer;
    svg {
      margin-right: 8px;
    }
  }
`;
