import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header_scoials">
      <a href="https://linkedin.com" target="_blank" rel="noreferer noreferrer">
        <BsLinkedin />
      </a>
      <a href="https://github.com/grvrjt" target="_blank" rel="noreferer noreferrer">
        <BsGithub />
      </a>
    </div>
  );
};

export default HeaderSocials;
