import React from "react";
import Link from "next/link";
import { makeQueryString } from "../../../lib/utils";
import { useSelector } from "../../../store";
import Button from "../../common/Button";
import SearchIcon from "../../../public/static/svg/search/white_search.svg";

const SearchRoomButton: React.FC = () => {
  const searchRoom = useSelector((state) => state.searchRoom);

  const roomListHref = makeQueryString("/room", searchRoom);

  return (
    <Link href={roomListHref}>
      <a>
        <Button icon={<SearchIcon />} color="amaranth" width="89px">
          검색
        </Button>
      </a>
    </Link>
  );
};

export default SearchRoomButton;
