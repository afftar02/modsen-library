import React, { useCallback, useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import CinemaHall from "./index";
import { SeatType } from "./types";

const meta: Meta<typeof CinemaHall> = {
  title: "UI/CinemaHall",
  component: CinemaHall,
};

export default meta;

type Story = StoryObj<typeof CinemaHall>;

const generateSeats = (): SeatType[] => {
  const result = [];
  const price = 5, seatsCount = 48;
  let id = 1, number = 1, row = 1;

  for(let i=0;i<seatsCount;i++){
    result.push({
      id,
      price,
      number,
      row,
      ticket: id % 5 === 0 ? { id } : null
    });

    id++;
    if(number === 8){
      number = 1;
      row++;
    } else {
      number++;
    }
  }

  return result;
};

const seats: SeatType[] = generateSeats();

const CinemaHallWithHooks = () => {
  const [chosenSeatIds, setChosenSeatIds] = useState<Array<number>>([]);

  const handleSeatClick = useCallback((seatId: number) => {
    setChosenSeatIds((prev) => {
      if (prev.includes(seatId)) {
        return prev.filter(item => item !== seatId);
      } else {
        prev.push(seatId);
        return prev;
      }
    });
  }, []);

  return (
    <CinemaHall
      seats={seats}
      onSeatClick={handleSeatClick}
      chosenSeatIds={chosenSeatIds}
      screenLabel={'Screen'}
      availableSeatLabel={'Available'}
      reservedSeatLabel={'Reserved'}
      selectedSeatLabel={'Selected'}
    />
  );
};

export const Primary: Story = {
  render: () => <CinemaHallWithHooks />,
};
