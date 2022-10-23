import { useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { bedTypes } from "../../../lib/staticData";
import { useSelector } from "../../../store";
import { registerRoomActions } from "../../../store/registerRoom";
import palette from "../../../styles/palette";
import { BedType } from "../../../types/room";
import Button from "../../common/Button";
import Counter from "../../common/Counter";
import Selector from "../../common/Selector";

const RegisterRoomPublicBedTypes: React.FC = () => {
  const dispatch = useDispatch();
  const publicBedList = useSelector(
    (state) => state.registerRoom.publicBedList
  );
  const initialBedOptions = () => publicBedList.map((bed) => bed.type);
  //* 선택된 침대 옵션들
  const [activedBedOptions, setActivedBedOptions] =
    useState<BedType[]>(initialBedOptions);
  const [opened, setOpened] = useState(false);

  const totalBedsCount = useMemo(() => {
    let total = 0;
    publicBedList.forEach((bed) => {
      total += bed.count;
    });
    return total;
  }, [publicBedList]);

  const bedsText = useMemo(() => {
    const texts = publicBedList.map((bed) => `${bed.type} ${bed.count}개`);
    return texts.join(",");
  }, [publicBedList]);

  //* 남은 침대 옵션들
  const lastBedOptions = useMemo(() => {
    return bedTypes.filter((bedType) => !activedBedOptions.includes(bedType));
  }, [activedBedOptions, publicBedList]);

  return (
    <Container>
      <div className="register-room-bed-type-top">
        <div>
          <p className="register-room-bed-type-bedroom">공용공간</p>
          <p className="register-room-bed-type-bedroom-counts">
            침대 {totalBedsCount}개<br />
            {bedsText}
          </p>
        </div>
        <Button
          onClick={() => setOpened(!opened)}
          styleType="register"
          color="white"
        >
          {opened && "완료"}
          {!opened &&
            (totalBedsCount === 0 ? "침대 추가하기" : "침대 수정하기")}
        </Button>
      </div>
      {opened && (
        <div className="register-room-public-bed-type-counters">
          {activedBedOptions.map((type) => (
            <div className="register-room-bed-type-counter" key={type}>
              <Counter
                label={type}
                value={
                  publicBedList.find((bed) => bed.type === type)?.count || 0
                }
                key={type}
                onChange={(value) =>
                  dispatch(
                    registerRoomActions.setPublicBedTypeCount({
                      type,
                      count: value,
                    })
                  )
                }
              />
            </div>
          ))}
          <Selector
            type="register"
            options={lastBedOptions}
            disabledOptions={["다른 침대 추가"]}
            value="다른 침대 추가"
            useValidation={false}
            onChange={(e) =>
              setActivedBedOptions([
                ...activedBedOptions,
                e.target.value as BedType,
              ])
            }
          />
        </div>
      )}
    </Container>
  );
};

export default RegisterRoomPublicBedTypes;

const Container = styled.li`
  width: 100%;
  padding: 28px 0;
  border-top: 1px solid ${palette.gray_dd};
  &:last-child {
    border-bottom: 1px solid ${palette.gray_dd};
  }

  .register-room-bed-type-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .register-room-bed-type-bedroom {
    font-size: 19px;
    color: ${palette.gray_48};
  }
  .register-room-public-bed-type-counters {
    width: 320px;
    margin-top: 28px;
  }
  .register-room-bed-type-bedroom-counts {
    font-size: 19px;
    color: ${palette.gray_76};
  }
  .register-room-bed-type-counter {
    width: 290px;
    margin-bottom: 18px;
  }
`;
