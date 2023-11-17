import React, { useMemo } from 'react';
import { SessionProps } from "./types";
import { CinemaFormat, SeatsContainer, SeatsText, SessionContainer, SessionTime } from "./styled";

function Session({
  start,
  end,
  format,
  availableSeats,
  onClick,
  formatLabel,
  seatsLabel,
  selected = false,
}: SessionProps) {
  const sessionTime = useMemo(() => {
    let startTimeStr = 'AM',
      endTimeStr = 'AM';
    const startDate = new Date(start);
    const endDate = new Date(end);

    if (startDate.getHours() > 12) {
      startDate.setHours(startDate.getHours() - 12);
      startTimeStr = 'PM';
    }
    if (endDate.getHours() > 12) {
      endDate.setHours(endDate.getHours() - 12);
      endTimeStr = 'PM';
    }

    return `${startDate.getHours()}:${startDate.getMinutes()} ${startTimeStr} - ${endDate.getHours()}:${endDate.getMinutes()} ${endTimeStr}`;
  }, [end, start]);

  return (
    <SessionContainer $selected={selected} onClick={onClick}>
      <SessionTime>{sessionTime}</SessionTime>
      <CinemaFormat>
        {formatLabel}: {format}
      </CinemaFormat>
      <SeatsContainer>
        <img src={'/images/seat.png'} alt={'seat'} />
        <SeatsText>
          {availableSeats ?? 0} {seatsLabel}
        </SeatsText>
      </SeatsContainer>
    </SessionContainer>
  );
}

export default Session;
