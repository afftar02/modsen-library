import React, { ChangeEvent, useCallback, useEffect, useRef, useState } from 'react';
import { secToMin } from 'helpers/ConvertSecToMin';
import { timeToSec } from 'helpers/ConvertTimeToSec';
import useWindowDimensions from "hooks/useWindowDimensions";

import VideoSettings from "ui/VideoSettings";

import { DEFAULT_HEIGHT, DEFAULT_WIDTH, FULLSCREEN_HEIGHT, FULLSCREEN_WIDTH, initialTime, THUMB_WIDTH } from "./config";
import {
  CenterControlsContainer,
  ControlIcon,
  ControlsBar,
  ControlsContainer,
  PlayerContainer, ProgressBar, ProgressBarContainer, RightControlsContainer,
  StyledVideo, TimeBlock
} from "./styled";
import { VideoPlayerProps } from "./types";

function VideoPlayer({ src }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isControlsHidden, setIsControlsHidden] = useState(false);
  const [speed, setSpeed] = useState(1);
  const [currentTime, setCurrentTime] = useState(initialTime);
  const [duration, setDuration] = useState(initialTime);
  const videoRef = useRef<HTMLVideoElement>(null);
  const cursorMoveTimeoutIdRef = useRef(0);
  const progressBarRef = useRef<HTMLInputElement>(null);

  const { width } = useWindowDimensions();

  const calculateProgress = useCallback(
    () => {
      const barWidth = progressBarRef.current?.offsetWidth ?? 0;

      return (timeToSec(currentTime) / timeToSec(duration)) *
       (barWidth - THUMB_WIDTH) +
       THUMB_WIDTH / 2;
    },
    [currentTime, duration]
  );

  const togglePlay = useCallback(() => {
    if (isPlaying) {
      videoRef.current?.pause();
    } else {
      videoRef.current?.play();
    }
    setIsPlaying(prev => !prev);
  }, [isPlaying]);

  const toggleVolume = useCallback(() => {
    if (isMuted && videoRef.current) {
      videoRef.current.muted = false;
    } else if (videoRef.current) {
      videoRef.current.muted = true;
    }
    setIsMuted(!isMuted);
  }, [isMuted]);

  const toggleScreenSize = useCallback(() => {
    if (videoRef.current) {
      if (!isFullScreen) {
        videoRef.current.style.width = FULLSCREEN_WIDTH;
        videoRef.current.style.height = FULLSCREEN_HEIGHT;
      } else {
        videoRef.current.style.width = DEFAULT_WIDTH;
        videoRef.current.style.height = DEFAULT_HEIGHT;
      }
      setIsFullScreen(!isFullScreen);
    }
  }, [isFullScreen]);

  const handleProgressBarChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (videoRef.current) {
        videoRef.current.currentTime = +e.target.value;
        setCurrentTime(secToMin(videoRef.current.currentTime));
      }
    },
    []
  );

  const skipTime = useCallback((time: number, isBackward?: boolean) => {
    if (videoRef.current) {
      if (!isBackward) {
        videoRef.current.currentTime += time;
      } else {
        videoRef.current.currentTime -= time;
      }
      setCurrentTime(secToMin(videoRef.current.currentTime));
    }
  }, []);

  const handleChangeSpeed = useCallback((speed: number) => {
    if (videoRef.current) {
      videoRef.current.playbackRate = speed;
      setSpeed(speed);
    }
  }, []);

  const handleMouseMove = useCallback(() => {
    clearTimeout(cursorMoveTimeoutIdRef.current);
    setIsControlsHidden(false);

    cursorMoveTimeoutIdRef.current = Number(
      setTimeout(() => setIsControlsHidden(true), 1500)
    );
  }, []);

  const handleKeyPressed = useCallback(
    (event: globalThis.KeyboardEvent) => {
      event.preventDefault();
      handleMouseMove();
      switch (event.code) {
        case 'Space':
          togglePlay();
          break;
        case 'KeyM':
          toggleVolume();
          break;
        case 'KeyF':
          toggleScreenSize();
          break;
        case 'ArrowLeft':
          skipTime(10, true);
          break;
        case 'ArrowRight':
          skipTime(10);
          break;
        case 'Comma':
          if (speed > 0.25) {
            handleChangeSpeed(speed - 0.25);
          }
          break;
        case 'Period':
          if (speed < 2) {
            handleChangeSpeed(speed + 0.25);
          }
          break;
        default:
          break;
      }
    },
    [
      handleChangeSpeed,
      handleMouseMove,
      skipTime,
      speed,
      togglePlay,
      toggleScreenSize,
      toggleVolume,
    ]
  );

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.onloadedmetadata = () => {
        if (videoRef.current) {
          setDuration(secToMin(videoRef.current.duration));
        }
      };
    }
  }, []);

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        if (videoRef.current) {
          setCurrentTime(secToMin(videoRef.current.currentTime));
        }
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isPlaying]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPressed);

    return () => {
      document.removeEventListener('keydown', handleKeyPressed);
    };
  }, [handleKeyPressed]);

  return (
    <PlayerContainer onMouseMove={handleMouseMove} onDoubleClick={togglePlay}>
      <StyledVideo
        ref={videoRef}
        width={850}
        height={480}
        autoPlay
        muted={isMuted}
      >
        <source src={src} type="video/mp4" />
        <track kind="captions" srcLang="en" />
      </StyledVideo>
      <ControlsContainer $isHidden={isControlsHidden}>
        <CenterControlsContainer>
          <ControlIcon
            id={'skip-backward-10'}
            height={40}
            width={40}
            viewBox="0 0 64 64"
            onClick={() => skipTime(10, true)}
          />
          {isPlaying ? (
            <ControlIcon
              id={'pause'}
              height={40}
              width={40}
              viewBox="-1 0 8 8"
              onClick={togglePlay}
            />
          ) : (
            <ControlIcon
              id={'play'}
              height={40}
              width={40}
              viewBox="-3 0 28 28"
              onClick={togglePlay}
            />
          )}
          <ControlIcon
            id={'skip-forward-10'}
            height={40}
            width={40}
            viewBox="0 0 64 64"
            onClick={() => skipTime(10)}
          />
        </CenterControlsContainer>
        <ControlsBar $isFullscreen={isFullScreen}>
          {isPlaying ? (
            <ControlIcon
              id={'pause-control'}
              height={30}
              width={30}
              viewBox="0 0 512 512"
              onClick={togglePlay}
            />
          ) : (
            <ControlIcon
              id={'play-control'}
              height={30}
              width={30}
              viewBox="0 0 60 60"
              onClick={togglePlay}
            />
          )}
          <ProgressBarContainer>
            <TimeBlock>
              {currentTime.min}:
              {currentTime.sec > 9 ? currentTime.sec : `0${currentTime.sec}`}
            </TimeBlock>
            <ProgressBar
              type="range"
              min={0}
              max={timeToSec(duration)}
              value={timeToSec(currentTime)}
              ref={progressBarRef}
              $progressWidth={calculateProgress()}
              onChange={handleProgressBarChange}
            />
            <TimeBlock>
              {duration.min}:
              {duration.sec > 9 ? duration.sec : `0${duration.sec}`}
            </TimeBlock>
          </ProgressBarContainer>
          <RightControlsContainer>
            {isMuted ? (
              <ControlIcon
                id={'muted-control'}
                height={20}
                width={20}
                viewBox="0 0 512 512"
                onClick={toggleVolume}
              />
            ) : (
              <ControlIcon
                id={'volume-control'}
                height={20}
                width={20}
                viewBox="0 0 24 24"
                onClick={toggleVolume}
              />
            )}
            <VideoSettings speed={speed} onChangeSpeed={handleChangeSpeed} />
            {width > 900 && (
                <ControlIcon
                id={'screen-control'}
                height={20}
                width={20}
                viewBox="0 0 24 24"
                onClick={toggleScreenSize}
              />
            )}
          </RightControlsContainer>
        </ControlsBar>
      </ControlsContainer>
    </PlayerContainer>
  );
}

export default VideoPlayer;
