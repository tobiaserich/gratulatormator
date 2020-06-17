import React from "react";
import styled from "@emotion/styled";
import { ArrowDown } from "../components/Arrows";
type DropdownMenuProps = {
  items: string[];
  dropdownValue?: React.Dispatch<React.SetStateAction<string>>;
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
  height: 22px;
`;

const Dropdown = styled("div")<dropdownProps>`
  position: relative;
  z-index: 2;
  display: inline-flex;
  flex-direction: column;
  max-height: 170px;
  padding-right: 5px;
  overflow: auto;
  overflow-x: hidden;
  scrollbar-width: thin;

  ${({ dropdownActive, theme }) =>
    dropdownActive
      ? `margin-right:10px;background-color:${theme.primary200};box-shadow:4px 4px 3px ${theme.neutral400};`
      : ""};
`;

const Item = styled("li")<itemProps>`
  list-style-type: none;
  cursor: default;
  padding-right: 5px;
  ${({ colorChangeOnHover = true }) =>
    colorChangeOnHover
      ? `
      :hover {background-color: lightblue;}`
      : ""};
`;

const DropdownMenu: React.FC<DropdownMenuProps> = ({
  items,
  dropdownValue,
}) => {
  const [select, setSelect] = React.useState(items[0]);
  const [openDropdown, setOpenDropdown] = React.useState(false);
  const openDropdownMenu = () => {
    setOpenDropdown(true);
  };

  const closeDropdownMenu = () => {
    setOpenDropdown(false);
  };

  const showItems = () => {
    return items.map((item, index) => {
      return (
        <Item
          key={item}
          onClick={() => {
            setSelect(item);
            closeDropdownMenu();
            if (dropdownValue) {
              dropdownValue(item);
            }
          }}
        >
          {item}
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

export default DropdownMenu;
