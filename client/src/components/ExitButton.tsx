import styled from "@emotion/styled";

type ThemeProps = {
  [index: string]: string;
};

type ExitButtonProps = {
  theme: ThemeProps;
};

const ExitButton = styled("button")<ExitButtonProps>`
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
