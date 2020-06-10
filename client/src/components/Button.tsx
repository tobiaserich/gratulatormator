import styled from "@emotion/styled";

type ThemeProps = {
  theme: any;
  fontSize?: number;
  spacingRight?: number;
};

const Button = styled("button")<ThemeProps>`
  font-family: inherit;
  font-size: ${({ fontSize }) => fontSize}px};
  background-color: transparent;
  border: 2.3px solid ${({ theme }) => theme.action100};
  border-radius: 4px;
  margin-right: ${({ spacingRight }) => spacingRight + "px"};
`;

export default Button;
