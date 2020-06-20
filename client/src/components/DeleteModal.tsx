import React from "react";
import styled from "@emotion/styled";
import closeButton from "../assets/closeButton.svg";
import Button from "./Button";

type modalProps = {
  handleVisibility: React.Dispatch<React.SetStateAction<boolean>>;
};

type modalContainerProps = {
  theme: any;
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

const DeleteModal: React.FC<modalProps> = ({ handleVisibility }) => {
  const handleClose = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (event.target === event.currentTarget) {
      handleVisibility(false);
    }
  };

  const deleteUser = () => {
    //placeholder for delete functionality
  };

  return (
    <Background onClick={(event) => handleClose(event)}>
      <ModalContainer>
        <CloseButton
          src={closeButton}
          onClick={() => handleVisibility(false)}
        />
        <Text>Are you sure you want to delete Max Mustermann?</Text>
        <ButtonContainer>
          <Button
            fontFamily="montserrat"
            fontSize={16}
            onClick={() => deleteUser()}
            onTouchStart={() => ""}
          >
            yes
          </Button>
          <Button
            fontFamily="montserrat"
            fontSize={16}
            onClick={() => handleVisibility(false)}
            onTouchStart={() => ""}
          >
            no
          </Button>
        </ButtonContainer>
      </ModalContainer>
    </Background>
  );
};

export default DeleteModal;
