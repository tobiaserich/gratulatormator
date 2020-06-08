import styled from "@emotion/styled";

type ContainerProps = {
  font?: string;
};

const MainContainer = styled("main")<ContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${({ font }) => (font ? `font-family:"${font}"` : "")}
`;

export default MainContainer;
