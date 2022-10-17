import { RootState, useSelector } from "../../store";
import SignUpModal from "./SignUpModal";

interface IProps {
  closeModal: () => void;
}

const AuthModal: React.FC<IProps> = ({ closeModal }) => {
  const authMode = useSelector((state: RootState) => state.auth.authMode);
  return (
    <div>
      {authMode === "signup" && <SignUpModal closeModal={closeModal} />}
      {authMode === "login" && <div>로그인</div>}
    </div>
  );
};
