import styled from "styled-components";
import palette from "../../../styles/palette";

const SearchRoomBarLocation: React.FC = () => {
  return <Container>위치</Container>;
};

export default SearchRoomBarLocation;

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 70px;
  border: 2px solid transparent;
  border-radius: 12px;
  cursor: pointer;
  &:hover {
    border-color: ${palette.gray_dd};
  }
  .search-room-bar-location-texts {
    position: absolute;
    width: calc(100% - 40px);
    top: 16px;
    left: 20px;
    
  }
`;
