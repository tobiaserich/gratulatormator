import styled from "@emotion/styled";

type ThemeProps = {
  theme: any;
  fontSize?: number;
  fontFamily?: string;
  spacingRight?: number;
  spacingTop?: number;
  weight?: string;
  borderColor?: string;
  buttonWidth?: number;
};

const Button = styled("button")<ThemeProps>`
  font-family: ${({ fontFamily = "inherit" }) => fontFamily};
  ${({ fontSize }) => (fontSize ? `font-size:${fontSize}px` : "")};
  ${({ weight }) => (weight ? `font-weight:${weight}` : "")}};
  background-color: transparent;
  border: 2.3px solid ${({ borderColor, theme }) =>
    borderColor ? borderColor : theme.action100};
  border-radius: 4px;
  ${({ spacingRight }) => `margin-right: ${spacingRight}px`};
  ${({ spacingTop }) => `margin-top: ${spacingTop}px`};
 ${({ buttonWidth }) => (buttonWidth ? `width:${buttonWidth}px` : "")};
  `;

export default Button;
