import type { Meta, StoryObj } from "@storybook/react";

import Session from "./index";

const meta: Meta<typeof Session> = {
  title: "UI/Session",
  component: Session,
};

export default meta;

type Story = StoryObj<typeof Session>;

export const Primary: Story = {
  args: {
    start: new Date(),
    end: new Date(),
    format: '2D',
    availableSeats: 30,
    formatLabel: 'Cinema',
    seatsLabel: 'seats available',
    selected: false,
  },
};
