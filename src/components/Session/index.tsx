import { styled } from 'styled-components';
import React, { MouseEventHandler, useMemo } from 'react';

type SessionProps = {
  start: Date;
  end: Date;
  format: string;
  formatLabel: string;
  seatsLabel: string;
  availableSeats?: number;
  selected?: boolean;
  onClick?: MouseEventHandler<HTMLDivElement>;
};

const SessionContainer = styled.div<{ $selected: boolean }>`
  padding: 16px 20px;
  flex-shrink: 0;
  border-radius: 20px;
  border: 4.039px solid transparent;
  ${(props) => props.$selected && 'border: 4.039px solid #d98639;'};
  background: rgba(90, 90, 92, 0.8);
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition: all 0.1s ease-in-out;
`;

const SessionTime = styled.span`
  color: #fff;
  font-family: 'Poppins', sans-serif;
  font-size: 20px;
  font-weight: 600;
`;

const CinemaFormat = styled.span`
  color: #fff;
  font-family: 'Poppins', sans-serif;
  font-size: 20px;
  font-weight: 400;
`;

const SeatsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const SeatsText = styled.span`
  color: #fff;
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  font-weight: 300;
`;

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
