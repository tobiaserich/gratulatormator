import styled from "@emotion/styled";

type ContainerProps = {
  font?: string;
  animation?: string;
};

const MainContainer = styled("main")<ContainerProps>`
  display: flex;
  position:relative;
  flex-direction: column;
  align-items: center;
  ${({ font }) => (font ? `font-family:"${font}"` : "")};

  animation: 0.250s ${({ animation }) => animation} both;
  
  
  @keyframes zoomIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
    @keyframes slideIn {
      0% {
      right:100%;
      }
      100% {
        right:0%;
      }
    }
  }
  @keyframes slideOut {
    0% {
      left:0%;
    }
    100% {
      left:100%;
    }
  }
`;

export default MainContainer;
