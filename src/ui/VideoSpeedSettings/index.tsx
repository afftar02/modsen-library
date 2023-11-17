import Icon from "ui/Icon";
import React from "react";
import { VideoSpeedSettingsProps } from "./types";
import { ParamTitleBlock, SettingsContainer, SettingsParamItem, SettingsText, TickIcon } from "./styled";

const speedValues = [0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2];

function VideoSpeedSettings({
  speed,
  onChangeSpeed,
  onReturn,
}: VideoSpeedSettingsProps) {
  return (
    <SettingsContainer>
      <ParamTitleBlock onClick={onReturn}>
        <Icon
          id={'left-arrow-nested'}
          height={20}
          width={20}
          viewBox="0 0 24 24"
        />
        <SettingsText>Speed</SettingsText>
      </ParamTitleBlock>
      {speedValues.map((value, index) => (
        <SettingsParamItem onClick={() => onChangeSpeed(value)} key={index}>
          {speed === value && (
            <TickIcon id={'tick'} height={20} width={20} viewBox="0 0 24 24" />
          )}
          <SettingsText>{value === 1 ? 'Normal' : value}</SettingsText>
        </SettingsParamItem>
      ))}
    </SettingsContainer>
  );
}

export default VideoSpeedSettings;
