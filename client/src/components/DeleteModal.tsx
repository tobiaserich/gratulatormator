import React from "react";
import { useHistory } from "react-router-dom";
import styled from "@emotion/styled";
import closeButton from "../assets/closeButton.svg";
import Button from "./Button";
import { deleteBirthday } from "../api/birthdays";

type modalProps = {
  handleVisibility: React.Dispatch<React.SetStateAction<boolean>>;
  id: string;
  birthdayChildName: string;
};

type ThemeProps = {
  [index: string]: string;
};

type modalContainerProps = {
  theme: ThemeProps;
};
const Background = styled("div")`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
  background-color: rgba(255, 255, 255, 0.8);
  height: 100%;
  width: 100%;
`;

const ModalContainer = styled("div")<modalContainerProps>`
  width: 280px;
  height: 150px;
  background: ${({ theme }) =>
    `linear-gradient(${theme.primary300} 0%, ${theme.primary200} 70%)`};
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  border: 2px solid ${({ theme }) => theme.action300};
  border-radius: 5px;
  box-shadow: 2px 2px 5px ${({ theme }) => theme.neutral400};
`;

const CloseButton = styled("img")`
  position: absolute;
  top: 2px;
  right: 3px;
`;

const Text = styled("p")`
  text-align: center;
  margin-top: 30px;
  margin-bottom: 30px;
  font-family: "montserrat";
`;

const ButtonContainer = styled("div")`
  display: flex;
  justify-content: space-evenly;
`;

const DeleteModal: React.FC<modalProps> = ({
  handleVisibility,
  id,
  birthdayChildName,
}) => {
  const [deleted, setDeleted] = React.useState<boolean>(false);

  const history = useHistory();
  const handleClose = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (event.target === event.currentTarget) {
      handleVisibility(false);
    }
  };

  const deleteUser = async (): Promise<void> => {
    const status = await deleteBirthday(id);
    if (status.code === 200) {
      setDeleted(true);
    }
  };

  const forwarding = (): void => {
    history.push("../main");
  };

  return (
    <Background
      onClick={(event: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
        handleClose(event)
      }
    >
      <ModalContainer>
        <CloseButton
          src={closeButton}
          onClick={() => handleVisibility(false)}
        />
        {!deleted ? (
          <>
            <Text>Are you sure you want to delete {birthdayChildName}?</Text>
            <ButtonContainer>
              <Button
                fontFamily="montserrat"
                fontSize={16}
                onClick={(): Promise<void> => deleteUser()}
                onTouchStart={() => ""}
              >
                yes
              </Button>
              <Button
                fontFamily="montserrat"
                fontSize={16}
                onClick={(): void => handleVisibility(false)}
                onTouchStart={() => ""}
              >
                no
              </Button>
            </ButtonContainer>
          </>
        ) : (
          <>
            <Text>User deleted</Text>
            <ButtonContainer>
              <Button
                fontFamily="montserrat"
                fontSize={16}
                onClick={(): void => forwarding()}
                onTouchStart={() => ""}
              >
                Ok
              </Button>
            </ButtonContainer>
          </>
        )}
      </ModalContainer>
    </Background>
  );
};

export default DeleteModal;
