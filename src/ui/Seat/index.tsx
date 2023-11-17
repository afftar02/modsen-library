import React, { useState } from 'react';
import { SeatProps } from "./types";
import { StyledSeat } from "./styled";

function Seat({ reserved, selected = false, onClick, ...props }: SeatProps) {
  const [active, setActive] = useState(selected);

  const handleClick = () => {
    if (!reserved) {
      setActive(!active);
      if (onClick) {
        onClick();
      }
    }
  };

  return (
    <StyledSeat
      $isReserved={reserved}
      $isSelected={!reserved && active}
      onClick={handleClick}
      {...props}
    />
  );
}

export default Seat;
