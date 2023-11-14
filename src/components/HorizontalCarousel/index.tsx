import { styled } from 'styled-components';
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Icon from "../Icon";
import useWindowDimensions from "../../hooks/useWindowDimensions";

type HorizontalCarouselProps = {
  data: Date[];
  value: Date;
  onClick?: (date: Date) => void;
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SliderContainer = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
`;

const Slider = styled.div`
  width: 764px;
  height: 130px;
  overflow: hidden;
  display: flex;
  align-items: flex-start;
  gap: 40px;
  scroll-behavior: smooth;
  position: relative;
  margin: 0 40px;
  padding-top: 25px;
  padding-bottom: 15px;

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }
  
  @media(max-width: 1000px){
    width: 484px;
  }
  @media(max-width: 700px){
    margin: 0;
    overflow: scroll;
    gap: 10px;
    width: 336px;
  }
`;

const StyledIcon = styled(Icon)`
  cursor: pointer;
  transition: opacity 0.2s ease-in-out;

  &:hover {
    opacity: 0.5;
  }
`;

const Slide = styled.div<{ $isActive: boolean; $isNearActive: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: 0.5s;
  cursor: pointer;
  width: 98px;
  height: 96px;
  background-color: #bdbdbd;
  border: 1px solid #000;
  border-radius: 10px;
  color: #000;
  text-align: center;
  font-family: 'Nunito Sans', sans-serif;
  font-size: 48px;
  font-weight: 300;

  &:hover {
    opacity: 0.7;
  }

  &:first-child {
    margin-left: 30px;
  }
  &:last-child {
    margin-right: 30px;
  }

  @media(max-width: 700px){
    width: 78px;
    height: 76px;

    &:first-child {
      margin-left: 5px;
    }
    &:last-child {
      margin-right: 5px;
    }
  }

  ${(props) =>
  props.$isActive &&
  `
    height: 128px;
    width: 130px;
    background-color: #D98639;
    cursor: default;
    
    &:hover {
      opacity: 1;
    }
    
    @media(max-width: 700px){
      height: 108px;
      width: 110px;
    }
   `};
  ${(props) => props.$isNearActive && `
    width: 114px;
    height: 112px;
    
    @media(max-width: 700px){
      width: 94px;
      height: 92px;
    }
  `};
`;

const Divider = styled.div`
  width: 764px;
  height: 2px;
  flex-shrink: 0;
  background-color: #fff;

  @media(max-width: 1000px){
    width: 484px;
  }
  @media(max-width: 700px){
    width: 336px;
  }
`;

function HorizontalCarousel({ data, value, onClick }: HorizontalCarouselProps) {
  const sliderRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement[]>([]);
  const [prevIndex, setPrevIndex] = useState(0);

  const { width } = useWindowDimensions();

  const firstSlideOffset = useMemo(() => {
    if(width > 1000) return 335;
    else if(width > 700) return 195;
    else return 145;
  }, [width]);
  const lastSlideOffset = useMemo(() => {
    if(width > 1000) return 298;
    else if(width > 700) return 158;
    else return 96;
  }, [width]);

  const currentIndex = useMemo(() => {
    const index = data.findIndex((item) => item.getDate() === value.getDate());

    return index > 0 ? index : 0;
  }, [data, value]);

  const checkIndex = useCallback(
    (index: number) => {
      if (index < 0) return data.length - 1;
      else if (index >= data.length) return 0;
      return index;
    },
    [data]
  );

  const scrollToCurrentItem = useCallback(
    (index: number) => {
      const x =
        prevIndex <= index
          ? itemsRef.current[index].offsetLeft - firstSlideOffset
          : itemsRef.current[index].offsetLeft - lastSlideOffset;

      sliderRef.current?.scrollTo(x, 0);
    },
    [currentIndex]
  );

  const handleItemClick = (index: number) => {
    if (onClick) {
      setPrevIndex(currentIndex);
      onClick(data[checkIndex(index)]);
    }
  };

  const bindRef = (element: HTMLDivElement | null, index: number) => {
    if (element) {
      itemsRef.current[index] = element;
    }
  };

  useEffect(() => {
    scrollToCurrentItem(currentIndex);
  }, [checkIndex, currentIndex, scrollToCurrentItem]);

  return (
    <Wrapper>
      <Divider />
      <SliderContainer>
        {width > 700 && (
          <StyledIcon
            id="arrows-left"
            width={55}
            height={34}
            viewBox="0 0 55 34"
            onClick={() => handleItemClick(currentIndex - 1)}
          />
        )}
        <Slider ref={sliderRef}>
          {data.map((item, index) => (
            <Slide
              key={index}
              onClick={() => handleItemClick(index)}
              $isActive={index === currentIndex}
              $isNearActive={
                index === currentIndex - 1 || index === currentIndex + 1
              }
              ref={(elem) => bindRef(elem, index)}
            >
              {item.getDate()}
            </Slide>
          ))}
        </Slider>
        {width > 700 && (
          <StyledIcon
            id="arrows-right"
            width={55}
            height={34}
            viewBox="0 0 55 34"
            onClick={() => handleItemClick(currentIndex + 1)}
          />
        )}
      </SliderContainer>
      <Divider />
    </Wrapper>
  );
}

export default HorizontalCarousel;
