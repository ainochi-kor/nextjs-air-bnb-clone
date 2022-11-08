import Link from "next/link";
import styled from "styled-components";
import palette from "../../../styles/palette";
import Button from "../../common/Button";
import CheckMarkIcon from "../../../public/static/svg/register/dark_cyan_check_mark.svg";

interface P {
  disabled: boolean;
  inProgress: boolean;
  step: string;
  href: string;
}

const RegisterRoomCheckStep: React.FC<P> = ({
  disabled,
  inProgress,
  step,
  href,
}) => {
  if (inProgress) {
    return (
      <Container>
        <Link href={href}>
          <a className="register-room-check-step-in-progress">
            <span>{step}</span>
          </a>
        </Link>
        <Link href={href}>
          <a className="register-room-check-step-continue-button">
            <Button color="dark_cyan" size="small" width="55px">
              계속
            </Button>
          </a>
        </Link>
      </Container>
    );
  }
  if (disabled) {
    return (
      <Container>
        <p className="disabled-step">{step}</p>
      </Container>
    );
  }
  return (
    <Container>
      <Link href={href}>
        <a>
          <CheckMarkIcon />
          <span>{step}</span>
        </a>
      </Link>
    </Container>
  );
};

export default RegisterRoomCheckStep;

const Container = styled.li`
  display: inline-block;
  padding: 16px 0;
  a {
    display: flex;
    align-items: center;

    svg {
      margin-right: 12px;
    }

    span {
      font-size: 16px;
      font-weight: 600;
      text-decoration: underline;
    }
  }
  .register-room-check-step-in-progress {
    margin-left: 28px;
  }
  .register-room-check-step-continue-button {
    margin: 8px 0 0 28px;
  }
  .disabled-step {
    margin-left: 28px;
    font-size: 16px;
    color: ${palette.gray_76};
  }
`;
