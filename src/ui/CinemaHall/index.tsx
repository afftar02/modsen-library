import React, { useCallback, useMemo } from 'react';
import useWindowDimensions from "hooks/useWindowDimensions";
import { CinemaHallProps } from "./types";
import {
  AvailableSeat,
  DescriptionContainer,
  DescriptionItem, Label, ReservedSeat,
  ScreenContainer,
  SeatsContainer, SelectedSeat,
  StyledSeat,
  Wrapper, Screen
} from "./styled";

function CinemaHall({
  seats,
  onSeatClick,
  chosenSeatIds,
  screenLabel,
  availableSeatLabel,
  reservedSeatLabel,
  selectedSeatLabel,
}: CinemaHallProps) {
  const { width } = useWindowDimensions();

  const seatWidth = useMemo(() => width > 700 ? 45 : 30, [width]);
  const seatSpace = useMemo(() => width > 700 ? 17 : 8, [width]);
  const centerSpace = useMemo(() => width > 700 ? 90 : 20, [width]);

  const rowsLengths = useMemo(() => {
    const map = new Map();
    for (const seat of seats) {
      map.set(seat.row, map.has(seat.row) ? map.get(seat.row) + 1 : 1);
    }
    return map;
  }, [seats]);

  const calculateSeatTopPosition = useCallback((row: number) => {
    if (row === 1) return 0;
    return (row - 1) * (seatWidth + seatSpace);
  }, [width]);

  const calculateSeatLeftPosition = useCallback(
    (seatNumber: number, row: number) => {
      // Calculating adding space for centering rows
      const seatsSpaceToAdd =
        ((Math.max(...rowsLengths.values()) - rowsLengths.get(row)) / 2) *
        (seatWidth + seatSpace);

      if (seatNumber === 1) return seatsSpaceToAdd;
      if (seatNumber <= rowsLengths.get(row) / 2) {
        return (seatNumber - 1) * (seatWidth + seatSpace) + seatsSpaceToAdd;
      } else {
        return (
          centerSpace +
          (seatNumber - 1) * seatWidth +
          (seatNumber - 2) * seatSpace +
          seatsSpaceToAdd
        );
      }
    },
    [rowsLengths, width]
  );

  const calculateWidth = useCallback(() => {
    const maxRowLength = Math.max(...rowsLengths.values());
    return (
      maxRowLength * seatWidth + (maxRowLength - 2) * seatSpace + centerSpace
    );
  }, [rowsLengths, width]);

  const calculateHeight = useCallback(() => {
    return rowsLengths.size * seatWidth + (rowsLengths.size - 1) * seatSpace;
  }, [rowsLengths, width]);

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
