import React from "react";
import styled from "@emotion/styled";
import { ArrowDown } from "../components/Arrows";
type daysDropdownProps = {
  days: number;
};

type itemProps = {
  colorChangeOnHover?: boolean;
};

type dropdownProps = {
  dropdownActive: boolean;
  theme: any;
};

const ModalBackground = styled("div")`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  height: 100%;
  width: 100%;
  background-color: transparent;
`;
const Container = styled("div")<dropdownProps>`
  position: relative;
  display: inline-block;
  width: ${({ dropdownActive }) => (dropdownActive ? "48px" : "34px")};
  height: 22px;
`;

const Dropdown = styled("div")<dropdownProps>`
  position: relative;
  z-index: 2;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  max-height: 170px;
  width: 44px;
  margin-left: -5px;
  overflow: auto;
  scrollbar-width: thin;

  ${({ dropdownActive, theme }) =>
    dropdownActive
      ? `background-color:${theme.primary200};box-shadow:4px 4px 3px ${theme.neutral400};`
      : ""};
`;

const Item = styled("li")<itemProps>`
  list-style-type: none;
  width: 34px;
  text-align: center;
  cursor: default;
  margin-right: 5px;
  ${({ colorChangeOnHover = true }) =>
    colorChangeOnHover
      ? `
      :hover {background-color: lightblue;}`
      : ""};
`;

const DaysDropdown: React.FC<daysDropdownProps> = ({ days }) => {
  const [select, setSelect] = React.useState("01");
  const [openDropdown, setOpenDropdown] = React.useState(false);

  const openDropdownMenu = () => {
    setOpenDropdown(true);
  };

  const closeDropdownMenu = () => {
    setOpenDropdown(false);
  };

  const showItems = () => {
    return new Array(days).fill("").map((day, index) => {
      const dayDate =
        index + 1 < 10 ? "0" + (index + 1) : (index + 1).toString();
      return (
        <Item
          onClick={() => {
            setSelect(dayDate);
            closeDropdownMenu();
          }}
        >
          {dayDate}
        </Item>
      );
    });
  };

  return (
    <>
      <Container dropdownActive={openDropdown}>
        <Dropdown dropdownActive={openDropdown}>
          {openDropdown ? (
            showItems()
          ) : (
            <Item
              onClick={() => {
                openDropdownMenu();
              }}
              colorChangeOnHover={false}
            >
              {select}
            </Item>
          )}
        </Dropdown>
      </Container>
      {!openDropdown ? <ArrowDown onClick={() => openDropdownMenu()} /> : ""}
      {openDropdown ? (
        <ModalBackground onClick={() => closeDropdownMenu()} />
      ) : (
        ""
      )}
    </>
  );
};

export default DaysDropdown;
