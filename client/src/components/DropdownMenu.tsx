import React from "react";
import styled from "@emotion/styled";
import { ArrowDown } from "../components/Arrows";
type DropdownMenuProps = {
  items: string[];
  dropdownValue?: React.Dispatch<React.SetStateAction<string>>;
  status?: boolean;
  daysToRemind?: string;
  handleDaysToRemind?: any;
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
  status = true,
  daysToRemind = "0",
  handleDaysToRemind,
}) => {
  const [select, setSelect] = React.useState<string>(items[0]);
  const [openDropdown, setOpenDropdown] = React.useState<boolean>(false);
  const [dropdownStatus, setDropdownStatus] = React.useState<boolean>(true);

  React.useEffect((): void => {
    setDropdownStatus(status);
  }, [status]);

  React.useEffect((): void => {
    if (handleDaysToRemind) {
      const remindDays = parseInt(daysToRemind) - 1;
      setSelect(items[remindDays]);
    }
  }, []);

  const openDropdownMenu = (): void => {
    if (dropdownStatus) {
      setOpenDropdown(true);
    }
  };

  const closeDropdownMenu = (): void => {
    setOpenDropdown(false);
  };

  const showItems = (): JSX.Element[] => {
    return items.map((item, index) => {
      return (
        <Item
          key={item}
          onClick={(): void => {
            setSelect(item);
            closeDropdownMenu();
            if (dropdownValue) {
              dropdownValue(item);
            }
            if (handleDaysToRemind) {
              handleDaysToRemind(item);
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
              onClick={(): void => {
                openDropdownMenu();
              }}
              colorChangeOnHover={false}
            >
              {select}
            </Item>
          )}
        </Dropdown>
      </Container>
      {!openDropdown ? (
        <ArrowDown onClick={(): void => openDropdownMenu()} status={status} />
      ) : (
        ""
      )}
      {openDropdown ? (
        <ModalBackground onClick={(): void => closeDropdownMenu()} />
      ) : (
        ""
      )}
    </>
  );
};

export default DropdownMenu;
