export type SeatType = {
  id: number;
  price: number;
  number: number;
  row: number;
  ticket?: { id: number } | null;
};


export type CinemaHallProps = {
  screenLabel: string;
  availableSeatLabel: string;
  reservedSeatLabel: string;
  selectedSeatLabel: string;
  seats: Array<SeatType>;
  onSeatClick: (seatId: number, price: number) => void;
  chosenSeatIds?: number[];
};