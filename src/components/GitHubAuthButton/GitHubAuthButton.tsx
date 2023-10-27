import { styled } from 'styled-components';
import Icon from "../Icon/Icon";
import React from "react";

type GitHubAuthProps = {
  authUrl: string;
  text: string;
};

const GitHubButton = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 280px;
  height: 45px;
  border-radius: 10px;
  background: #000;
  cursor: pointer;
  opacity: 1;
  transition: opacity 0.2s ease-in-out;
  border: none;

  color: #fff;
  font-family: Inter, sans-serif;
  font-size: 14px;
  font-weight: 600;

  &:hover {
    opacity: 0.7;
  }
`;

const GitHubIcon = styled(Icon)`
  position: absolute;
  left: 18px;
`;

function GitHubAuthButton({ authUrl, text }: GitHubAuthProps) {
  const handleClick = async () => {
    try {
      window.open(authUrl, '_self');
    } catch (err) {
      alert('Authorization error!');
    }
  };

  return (
    <GitHubButton onClick={handleClick}>
      <GitHubIcon id="github" width={22} height={24} viewBox="0 0 22 24" />
      <span>{text}</span>
    </GitHubButton>
  );
}

export default GitHubAuthButton;
