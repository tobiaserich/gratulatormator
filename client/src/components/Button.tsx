import styled from "@emotion/styled";

type ThemeProps = {
  theme: any;
  fontSize?: number;
};

const Button = styled("button")<ThemeProps>`
  font-family: auto;
  font-size: ${({ fontSize }) => fontSize}px;
  background-color: transparent;
  border: 2.3px solid ${({ theme }) => theme.action100};
  border-radius: 4px;
`;

export default Button;
