import { styled } from 'styled-components';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from "../Icon";
import useWindowDimensions from "../../hooks/useWindowDimensions";

type SlideType = {
  id: number;
  title: string;
  ageRestriction: number;
  quality: string;
  start: Date;
  posterUrl: string;
  genre?: string;
};

type VerticalCarouselProps = {
  data: SlideType[];
  titleColor: string;
  buttonsColor: string;
  linkPrefix: string;
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 497px;
`;

const CurrentContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
  max-width: 262px;

  &:hover {
    transform: scale(1.05);
  }
`;

const CurrentImage = styled.img`
  border-radius: 10px;
`;

const InfoContainer = styled.div`
  text-align: center;

  margin-top: 23px;
`;

const Title = styled.span<{ $color: string }>`
  color: ${(props) => props.$color};
  font-family: 'Poppins', sans-serif;
  font-size: 32px;
  font-weight: 500;
`;

const TagsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-top: 10px;
  max-width: 260px;
  overflow: scroll;

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }
  
  @media(max-width: 700px) {
    flex-direction: column;
  }
`;

const Tag = styled.div`
  display: flex;
  align-items: center;
  height: 30px;
  border-radius: 10px;
  background: #484747;

  color: #fff;
  font-family: 'Poppins', sans-serif;
  font-size: 15px;
  font-weight: 500;

  padding: 0 18px;
`;

const SliderContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  overflow: hidden;

  margin-left: 96px;
  
  @media(max-width: 700px){
    margin-left: 25px;
  }
`;

const ImageSlider = styled.div`
  height: 100%;
  width: 137px;
  overflow: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 34px;
  scroll-behavior: smooth;
  position: relative;

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }
`;

const ArrowsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 86px;

  margin-left: 37px;

  @media(max-width: 700px){
    margin-left: 20px;
  }
`;

const StyledIcon = styled(Icon)`
  cursor: pointer;
  transition: opacity 0.2s ease-in-out;

  &:hover {
    opacity: 0.5;
  }
`;

const Slide = styled.div<{ $isActive?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: 0.5s;
  cursor: pointer;

  ${(props) =>
    props.$isActive
      ? `
      height: 182px;
      width: 137px;
      `
      : `
      height: 124px;
      width: 84px;

      &:hover {
        opacity: 0.5;
      }
    `}
`;

const Image = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  transition: 0.5s;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  height: fit-content;
`;

const QualityText = styled.span`
  white-space: nowrap;
`;

const GenreText = styled.span`
  text-transform: capitalize;
`;

const FIRST_SLIDE_OFFSET = 216;
const LAST_SLIDE_OFFSET = 158;

function VerticalCarousel({
  data,
  titleColor,
  buttonsColor,
  linkPrefix,
}: VerticalCarouselProps) {
  const [canUserScroll, allowUserScroll] = useState(false);
  const [prevScroll, setPrevScroll] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(1);
  const currentItemRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement[]>([]);

  const { width } = useWindowDimensions();

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
      const y =
        currentIndex <= index
          ? itemsRef.current[index].offsetTop - FIRST_SLIDE_OFFSET
          : itemsRef.current[index].offsetTop - LAST_SLIDE_OFFSET;

      sliderRef.current?.scrollTo(0, y);
    },
    [currentIndex]
  );

  const updateCurrentIndex = useCallback(
    (index: number) => {
      setCurrentIndex(checkIndex(index));
    },
    [checkIndex]
  );

  const handleItemClick = (index: number) => {
    allowUserScroll(false);
    updateCurrentIndex(index);
    scrollToCurrentItem(checkIndex(index));
  };

  const handleSliderScroll = useCallback(() => {
    if (
      sliderRef.current &&
      Math.abs(sliderRef.current.scrollTop - prevScroll) >= 110 &&
      canUserScroll
    ) {
      if (sliderRef.current.scrollTop > prevScroll) {
        updateCurrentIndex(currentIndex + 1);
      } else if (sliderRef.current.scrollTop < prevScroll) {
        updateCurrentIndex(currentIndex - 1);
      }

      setPrevScroll(sliderRef.current.scrollTop);
    }
  }, [currentIndex, prevScroll, updateCurrentIndex, canUserScroll]);

  const bindRef = (element: HTMLDivElement | null, index: number) => {
    if (element) {
      itemsRef.current[index] = element;
    }
  };

  useEffect(() => {
    currentItemRef.current?.animate(
      [
        { bottom: '-50px', opacity: 0 },
        { bottom: 0, opacity: 1 },
      ],
      {
        duration: 500,
        iterations: 1,
      }
    );
  }, [currentIndex]);

  return (
    <Wrapper>
      <StyledLink to={`${linkPrefix}/${data.at(currentIndex)?.id}`}>
        <CurrentContainer ref={currentItemRef}>
          <CurrentImage
            src={data.at(currentIndex)?.posterUrl}
            alt="poster"
            width={width > 700 ? 262 : 162}
          />
          <InfoContainer>
            <Title $color={titleColor}>{data.at(currentIndex)?.title}</Title>
            <TagsContainer>
              <Tag>
                <span>{data.at(currentIndex)?.ageRestriction}+</span>
              </Tag>
              <Tag>
                <QualityText>{data.at(currentIndex)?.quality}</QualityText>
              </Tag>
              {data.at(currentIndex)?.genre && (
                <Tag>
                  <GenreText>{data.at(currentIndex)?.genre}</GenreText>
                </Tag>
              )}
            </TagsContainer>
          </InfoContainer>
        </CurrentContainer>
      </StyledLink>
      <SliderContainer>
        <ImageSlider
          ref={sliderRef}
          onScroll={handleSliderScroll}
          onMouseEnter={() => allowUserScroll(true)}
        >
          {data.map((item, index) => (
            <Slide
              key={item.id}
              onClick={() => handleItemClick(index)}
              $isActive={index === currentIndex}
              ref={(elem) => bindRef(elem, index)}
            >
              <Image src={item.posterUrl} alt="slide" />
            </Slide>
          ))}
        </ImageSlider>
        <ArrowsContainer>
          <StyledIcon
            id="arrow-up"
            width={22}
            height={32}
            viewBox="0 0 22 32"
            fill="none"
            stroke={buttonsColor}
            onClick={() => handleItemClick(currentIndex - 1)}
          />
          <StyledIcon
            id="arrow-down"
            width={22}
            height={32}
            viewBox="0 0 22 32"
            fill="none"
            stroke={buttonsColor}
            onClick={() => handleItemClick(currentIndex + 1)}
          />
        </ArrowsContainer>
      </SliderContainer>
    </Wrapper>
  );
}

export default VerticalCarousel;
