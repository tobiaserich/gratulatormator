import React from "react";
import styled from "@emotion/styled";
import LogoImg from "../assets/Logo.svg";

type LogoMeasurements = {
  w?: number;
  h?: number;
};

const LogoBackground = styled("div")<LogoMeasurements>`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  align-content: center;
  height: ${({ h }) => h}px;
  width: ${({ w }) => w}px;
  background-color: ${({ theme }: any) => theme.primary200};
  border-radius: 50%;
`;

const Logo = ({ w = 200, h = 200 }: LogoMeasurements) => {
  return (
    <LogoBackground w={w} h={h}>
      <img src={LogoImg} alt="img" />
    </LogoBackground>
  );
};

export default Logo;
