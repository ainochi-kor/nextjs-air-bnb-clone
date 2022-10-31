import React, { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import { useDispatch } from "react-redux";
import Link from "next/link";
import HamburgerIcon from "../public/static/svg/header/hamburger.svg";
import { logoutAPI } from "../lib/api/auth";
import { userActions } from "../store/user";
import { useSelector } from "../store";

const HeaderUserProfile: React.FC = () => {
  //* 유저메뉴 열고,닫힘 여부
  const [isUsermenuOpened, setIsUsermenuOpened] = useState(false);
  const userProfileImage = useSelector((state) => state.user.profileImage);

  const dispatch = useDispatch();

  //* 로그아웃 하기
  const logout = async () => {
    try {
      await logoutAPI();
      dispatch(userActions.initUser());
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <OutsideClickHandler
      onOutsideClick={() => {
        if (isUsermenuOpened) {
          setIsUsermenuOpened(false);
        }
      }}
    >
      <button
        className="header-user-profile"
        type="button"
        onClick={() => setIsUsermenuOpened(!isUsermenuOpened)}
      >
        <HamburgerIcon />
        <img
          src={userProfileImage}
          className="header-user-profile-image"
          alt=""
        />
      </button>
      {isUsermenuOpened && (
        <ul className="header-usermenu">
          <li>숙소 관리</li>
          <Link href="/room/register/building">
            <a
              role="presentation"
              onClick={() => {
                setIsUsermenuOpened(false);
              }}
            >
              <li>숙소 등록하기</li>
            </a>
          </Link>
          <div className="header-usermenu-divider" />
          <li role="presentation" onClick={logout}>
            로그아웃
          </li>
        </ul>
      )}
    </OutsideClickHandler>
  );
};

export default HeaderUserProfile;
