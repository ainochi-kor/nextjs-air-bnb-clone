import { useDispatch } from "react-redux";
import useModal from "../hooks/useModal";
import { authActions } from "../store/auth";
import AuthModal from "./auth/AuthModal";

const HeaderAuths: React.FC = () => {
  const { openModal, ModalPortal, closeModal } = useModal();
  const dispatch = useDispatch();

  return (
    <>
      <div className="header-auth-buttons">
        <button
          className="header-sign-up-button"
          onClick={() => {
            dispatch(authActions.setAuthMode("signup"));
            openModal();
          }}
          type="button"
        >
          회원가입
        </button>
        <button
          className="header-login-button"
          type="button"
          onClick={() => {
            dispatch(authActions.setAuthMode("login"));
            openModal();
          }}
        >
          로그인
        </button>
      </div>
      <ModalPortal>
        <AuthModal closeModal={closeModal} />
      </ModalPortal>
    </>
  );
};

export default HeaderAuths;
