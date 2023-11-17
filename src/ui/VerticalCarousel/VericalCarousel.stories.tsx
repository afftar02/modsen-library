import React from "react";
import { BrowserRouter } from "react-router-dom";
import type { Meta, StoryObj } from "@storybook/react";

import VerticalCarousel from "./index";

const meta: Meta<typeof VerticalCarousel> = {
  title: "UI/VerticalCarousel",
  component: VerticalCarousel,
};

export default meta;

type Story = StoryObj<typeof VerticalCarousel>;

type VerticalCarouselProps = {
  titleColor: string;
  buttonsColor: string;
};

const data = [
  {
    id: 1,
    title: 'Slide 1',
    ageRestriction: 12,
    quality: 'HD',
    start: new Date('2024-01-01'),
    posterUrl: '/images/slide1.jpg',
    genre: 'action'
  },
  {
    id: 2,
    title: 'Slide 2',
    ageRestriction: 14,
    quality: 'IMAX',
    start: new Date('2024-01-01'),
    posterUrl: '/images/slide2.jpg',
    genre: 'horror'
  },
  {
    id: 3,
    title: 'Slide 3',
    ageRestriction: 18,
    quality: '4K',
    start: new Date('2024-01-01'),
    posterUrl: '/images/slide3.jpg',
    genre: 'adventure'
  },
  {
    id: 4,
    title: 'Slide 4',
    ageRestriction: 12,
    quality: 'HD',
    start: new Date('2024-01-01'),
    posterUrl: '/images/slide4.jpg',
    genre: 'action'
  },
  {
    id: 5,
    title: 'Slide 5',
    ageRestriction: 12,
    quality: 'Full HD',
    start: new Date('2024-01-01'),
    posterUrl: '/images/slide5.jpg',
    genre: 'drama'
  },
];

const VerticalCarouselWithHooks = ({titleColor, buttonsColor}: VerticalCarouselProps) => {
  return (
    <BrowserRouter>
      <VerticalCarousel
        data={data}
        titleColor={titleColor}
        buttonsColor={buttonsColor}
        linkPrefix={'/film'}
      />
    </BrowserRouter>
  );
};

export const Primary: Story = {
  render: ({titleColor, buttonsColor}) =>
    <VerticalCarouselWithHooks titleColor={titleColor} buttonsColor={buttonsColor} />,
  args: {
    titleColor: '#000',
    buttonsColor: '#000'
  }
};
