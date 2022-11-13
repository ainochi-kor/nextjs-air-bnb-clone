import styled from "styled-components";
import palette from "../../../styles/palette";

const SearchRoomBar: React.FC = () => {
  return (
    <Container>
      <div className="search-room-bar-inputs">
        
      </div>
    </Container>
  );
};

export default SearchRoomBar;

const Container = styled.div`
  widht: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.08);
  border-radius: 12px;

  .search-room-bar-inputs {
    display: flex;
    align-item: center;
    width: 100%;
    .search-room-bar-input-divider {
      width: 1px;
      height: 44px;
      background-color: ${palette.gray_dd};
    }
  }
`;
