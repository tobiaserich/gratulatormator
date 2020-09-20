import styled from "@emotion/styled";

type themeProps = {
  theme: any;
};

const ExitButton = styled("button")<themeProps>`
  height: 30px;
  width: 30px;
  position: absolute;
  top: -10px;
  right: -10px;
  border-radius: 50%;
  border: none;
  font-weight: 600;
  background-color: ${({ theme }) => theme.primary300};
  border: 2px solid ${({ theme }) => theme.action100};
  color: ${({ theme }) => theme.action300};
  z-index: 1000;
`;

export default ExitButton;
