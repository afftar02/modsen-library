import React, { useMemo, useState } from 'react';
import { ReviewProps } from "./types";
import {
  AuthorDescription,
  ReviewContainer,
  ReviewText,
  ReviewTextContainer,
  ReviewTitle, ShowIcon,
  ShowMoreContainer, ShowMoreText
} from "./styled";

const DEFAULT_HEIGHT = 217;
const TEXT_OVERFLOW_COEFFICIENT = 2;

function Review({
  title,
  fromLabel,
  showMoreLabel,
  author,
  text,
  bgColor,
  hideLabel,
}: ReviewProps) {
  const [opened, setOpened] = useState(false);

  const isOverflowed = useMemo(
    () => text.length / TEXT_OVERFLOW_COEFFICIENT > DEFAULT_HEIGHT,
    [text]
  );

  const handleShowClick = () => {
    if (isOverflowed) {
      setOpened(!opened);
    }
  };

  return (
    <ReviewContainer
      $bgColor={bgColor}
      onClick={handleShowClick}
    >
      <ReviewTitle>{title}</ReviewTitle>
      <AuthorDescription>
        {fromLabel} {author}
      </AuthorDescription>
      <ReviewTextContainer $isOpened={opened || (!opened && !isOverflowed)}>
        <ReviewText>{text}</ReviewText>
      </ReviewTextContainer>
      {isOverflowed && (
        <ShowMoreContainer onClick={handleShowClick}>
          <ShowMoreText>{opened ? hideLabel : showMoreLabel}</ShowMoreText>
          <ShowIcon id={'show'} width={40} height={40} viewBox="0 0 40 40" $isOpened={opened} />
        </ShowMoreContainer>
      )}
    </ReviewContainer>
  );
}

export default Review;
