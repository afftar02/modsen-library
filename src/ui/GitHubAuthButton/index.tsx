import React from "react";

import { GitHubButton, GitHubIcon } from "./styled";
import { GitHubAuthProps } from "./types";

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
