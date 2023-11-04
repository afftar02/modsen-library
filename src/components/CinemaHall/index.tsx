import { styled } from 'styled-components';
import React, { useCallback, useMemo } from 'react';
import Seat from "../Seat";

export type SeatType = {
  id: number;
  price: number;
  number: number;
  row: number;
  ticket?: { id: number } | null;
};


type CinemaHallProps = {
  screenLabel: string;
  availableSeatLabel: string;
  reservedSeatLabel: string;
  selectedSeatLabel: string;
  seats: Array<SeatType>;
  onSeatClick: (seatId: number, price: number) => void;
  chosenSeatIds?: number[];
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  background: #313131;
  flex-shrink: 0;
  padding: 13px 50px;
`;

const ScreenContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Screen = styled.span`
  color: #fff;
  font-family: 'Poppins', sans-serif;
  font-size: 55px;
  font-weight: 400;
`;

const DescriptionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 46px;
`;

const DescriptionItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Label = styled.span`
  color: #fff;
  font-family: 'Poppins', sans-serif;
  font-size: 24px;
  font-weight: 400;
`;

const AvailableSeat = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 10px;
  border: 3px solid #787878;
  box-sizing: border-box;
`;

const ReservedSeat = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 10px;
  background: #c4c4c4;
`;

const SelectedSeat = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 10px;
  background: #d98639;
`;

const SeatsContainer = styled.div<{ $width: number; $height: number }>`
  position: relative;
  height: ${(props) => `${props.$height}px`};
  width: ${(props) => `${props.$width}px`};
`;

const StyledSeat = styled(Seat)<{ $left: number; $top: number }>`
  position: absolute;
  left: ${(props) => `${props.$left}px`};
  top: ${(props) => `${props.$top}px`};
`;

const SEAT_WIDTH = 45,
  SEAT_SPACE = 17,
  CENTER_SPACE = 90;

function CinemaHall({
  seats,
  onSeatClick,
  chosenSeatIds,
  screenLabel,
  availableSeatLabel,
  reservedSeatLabel,
  selectedSeatLabel,
}: CinemaHallProps) {
  const rowsLengths = useMemo(() => {
    const map = new Map();
    for (const seat of seats) {
      map.set(seat.row, map.has(seat.row) ? map.get(seat.row) + 1 : 1);
    }
    return map;
  }, [seats]);

  const calculateSeatTopPosition = useCallback((row: number) => {
    if (row === 1) return 0;
    return (row - 1) * (SEAT_WIDTH + SEAT_SPACE);
  }, []);

  const calculateSeatLeftPosition = useCallback(
    (seatNumber: number, row: number) => {
      // Calculating adding space for centering rows
      const seatsSpaceToAdd =
        ((Math.max(...rowsLengths.values()) - rowsLengths.get(row)) / 2) *
        (SEAT_WIDTH + SEAT_SPACE);

      if (seatNumber === 1) return seatsSpaceToAdd;
      if (seatNumber <= rowsLengths.get(row) / 2) {
        return (seatNumber - 1) * (SEAT_WIDTH + SEAT_SPACE) + seatsSpaceToAdd;
      } else {
        return (
          CENTER_SPACE +
          (seatNumber - 1) * SEAT_WIDTH +
          (seatNumber - 2) * SEAT_SPACE +
          seatsSpaceToAdd
        );
      }
    },
    [rowsLengths]
  );

  const calculateWidth = useCallback(() => {
    const maxRowLength = Math.max(...rowsLengths.values());
    return (
      maxRowLength * SEAT_WIDTH + (maxRowLength - 2) * SEAT_SPACE + CENTER_SPACE
    );
  }, [rowsLengths]);

  const calculateHeight = useCallback(() => {
    return rowsLengths.size * SEAT_WIDTH + (rowsLengths.size - 1) * SEAT_SPACE;
  }, [rowsLengths]);

  return (
    <Wrapper>
      <ScreenContainer>
        <Screen>{screenLabel}</Screen>
      </ScreenContainer>
      <SeatsContainer $width={calculateWidth()} $height={calculateHeight()}>
        {seats.map((seat) => (
          <StyledSeat
            key={seat.id}
            reserved={seat.ticket !== null}
            selected={chosenSeatIds?.includes(seat.id)}
            $top={calculateSeatTopPosition(seat.row)}
            $left={calculateSeatLeftPosition(seat.number, seat.row)}
            onClick={() => onSeatClick(seat.id, seat.price)}
          />
        ))}
      </SeatsContainer>
      <DescriptionContainer>
        <DescriptionItem>
          <AvailableSeat />
          <Label>{availableSeatLabel}</Label>
        </DescriptionItem>
        <DescriptionItem>
          <ReservedSeat />
          <Label>{reservedSeatLabel}</Label>
        </DescriptionItem>
        <DescriptionItem>
          <SelectedSeat />
          <Label>{selectedSeatLabel}</Label>
        </DescriptionItem>
      </DescriptionContainer>
    </Wrapper>
  );
}

export default CinemaHall;
