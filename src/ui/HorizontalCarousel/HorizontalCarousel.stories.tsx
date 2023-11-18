import React, { useMemo, useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";

import HorizontalCarousel from "./index";

const meta: Meta<typeof HorizontalCarousel> = {
  title: "UI/HorizontalCarousel",
  component: HorizontalCarousel,
};

export default meta;

type Story = StoryObj<typeof HorizontalCarousel>;

const CarouselWithHooks = () => {
  const [value, setValue] = useState(new Date());

  const dates = useMemo(() => {
    const currentDate = new Date();
    const result = new Array<Date>();

    for(let i=0;i<7;i++){
      const nextDate = new Date(currentDate);
      nextDate.setDate(nextDate.getDate() + i);
      result.push(nextDate);
    }

    return result;
  },[]);

  return <HorizontalCarousel data={dates} value={value} onClick={(date) => setValue(date)} />;
};

export const Primary: Story = {
  render: () => <CarouselWithHooks />,
};
