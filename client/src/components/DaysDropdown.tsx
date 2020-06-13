import React from "react";
import styled from "@emotion/styled";
import { ArrowDown } from "../components/Arrows";

type itemProps = {
  colorChangeOnHover?: boolean;
  initalItem?: boolean;
  dropdownActive?: boolean;
  touch?: boolean;
};

type dropdownProps = {
  dropdownActive: boolean;
};

const ModalBackground = styled("div")`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  background-color: transparent;
  height: 100%;
  width: 100%;
`;

const Dropdown = styled("div")<dropdownProps>`
  position: relative;
  z-index: 2;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  margin: 0px;
  max-height: 170px;
  overflow: auto;
  width: ${({ dropdownActive }) => (dropdownActive ? "48px" : "")};

  scrollbar-width: thin;
`;

const Item = styled("li")<itemProps>`
  width: auto;
  list-style-type: none;
  text-align: center;
  min-width: 34px;
  cursor: default;
  padding-right: ${({ dropdownActive }) => (dropdownActive ? "14px" : "")};
  ${({ colorChangeOnHover = true }) =>
    colorChangeOnHover
      ? `
      :hover {background-color: lightblue;}`
      : ""};
  ${({ colorChangeOnHover, touch }) =>
    colorChangeOnHover && touch ? `background-color:green;` : ""};
`;

const DaysDropdown = () => {
  const [select, setSelect] = React.useState("01");
  const [openDropdown, setOpenDropdown] = React.useState(false);
  const [touch, setTouch] = React.useState(false);
  const [items, setItems] = React.useState([
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
  ]);

  const openDropdownMenu = () => {
    setOpenDropdown(true);
  };

  const closeDropdownMenu = () => {
    setOpenDropdown(false);
  };

  const startTouch = () => {
    setTouch(true);
  };
  const endTouch = () => {
    setTouch(false);
  };

  const showItems = () => {
    return items.map((item) => {
      return (
        <Item
          onClick={() => {
            setSelect(item);
            closeDropdownMenu();
          }}
          onTouchStart={() => startTouch()}
          onTouchEnd={() => endTouch()}
          dropdownActive={openDropdown}
          touch={touch}
        >
          {item}
        </Item>
      );
    });
  };

  return (
    <>
      <Dropdown dropdownActive={openDropdown}>
        {openDropdown ? (
          showItems()
        ) : (
          <Item
            onClick={() => {
              openDropdownMenu();
            }}
            colorChangeOnHover={false}
            initalItem={true}
          >
            {select}
          </Item>
        )}
      </Dropdown>
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
