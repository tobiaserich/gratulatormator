import React from "react";
import styled from "@emotion/styled";
import settings from "../assets/settings.svg";
import { Link } from "react-router-dom";
const Container = styled("footer")`
  position: fixed;
  bottom: 0;
  height: 30px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5dc6b;
  border-radius: 27px 27px 0px 0px;
`;

const SettingsButton = styled("img")`
  min-height: 50px;
  min-width: 50px;
  padding: 10px;
  border-radius: 50%;
  position: absolute;
  bottom: 0px;
  background-color: #f5dc6b;
`;

const NewLink = styled(Link)`
  min-width: 50px;
  min-height: 50px;
`;

const Footer = () => {
  return (
    <>
      <Container>
        <NewLink to="./userSettings">
          <SettingsButton src={settings} />
        </NewLink>
      </Container>
    </>
  );
};

export default Footer;
