import React from "react";
import styled from "@emotion/styled";
import ExitButton from "./ExitButton";
import Button from "./Button";

type themeProps = {
  theme: any;
  animation: any;
};

const Container = styled("div")`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: rgba(255, 255, 255, 0.2);
  z-index: 50;
`;
const ModalContainer = styled("div")<themeProps>`
  width: 90%;
  height: 6em;
  background-color: ${({ theme }) => theme.primary300};
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  z-index: 100;
  border-radius: 0.3rem;
  box-shadow: 3px 3px 10px;
  padding-top: 1em;
  text-align: center;
  font-size: 1.5em;
  animation: ${({ animation }) => animation} 0.3s both;

  @keyframes shrink {
    0% {
      overflow: auto;
      height: 6em;
      width: 90%;
      opacity: 1;
    }
    100% {
      overflow: hidden;
      height: 0em;
      width: 0%;
      opacity: 0;
    }
  }
`;

const ButtonBar = styled("div")`
  display: flex;
  margin-top: 1em;
  justify-content: space-evenly;
`;

const Modal = ({ status, toggleModal, forwarding, refresh }: any) => {
  const [animation, setAnimation] = React.useState("none");

  const closeModal = () => {
    setAnimation("shrink");
    setTimeout(() => {
      toggleModal();
    }, 200);
  };

  const clickOutOfModal = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  const backToMain = (event: any) => {
    forwarding(event, "slideOut", "./main");
  };

  const addNewPerson = () => {
    refresh();
    closeModal();
  };

  const Buttons = () => {
    if (status.code === 200) {
      return (
        <>
          <Button fontSize={18} onClick={(event: any) => backToMain(event)}>
            Back to main
          </Button>
          <Button fontSize={18} onClick={() => addNewPerson()}>
            Add person
          </Button>
        </>
      );
    } else if (status.code === 409) {
      return (
        <>
          <Button fontSize={18} onClick={() => closeModal()}>
            Okay
          </Button>
        </>
      );
    }
  };
  return (
    <Container
      onClick={(event: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
        clickOutOfModal(event)
      }
    >
      <ModalContainer animation={animation}>
        <ExitButton
          onClick={() => {
            closeModal();
          }}
        >
          X
        </ExitButton>
        {status.message}

        <ButtonBar>{Buttons()}</ButtonBar>
      </ModalContainer>
    </Container>
  );
};

export default Modal;
