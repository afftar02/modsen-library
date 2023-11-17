import React from "react";

import { FacebookButton, FacebookIcon } from "./styled";
import { FacebookAuthProps } from "./types";

function FacebookAuthButton({ authUrl, text }: FacebookAuthProps) {
  const handleClick = async () => {
    try {
      window.open(authUrl, '_self');
    } catch (err) {
      alert('Authorization error!');
    }
  };

  return (
    <FacebookButton onClick={handleClick}>
      <FacebookIcon id="facebook" width={19} height={20} viewBox="0 0 19 20" />
      <span>{text}</span>
    </FacebookButton>
  );
}

export default FacebookAuthButton;
