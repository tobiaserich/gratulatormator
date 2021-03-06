import styled from "@emotion/styled";

type ThemeProps = {
  [index: string]: string;
};
type ButtonProps = {
  theme: ThemeProps;
  fontSize?: number;
  fontFamily?: string;
  spacingRight?: number;
  spacingTop?: number;
  weight?: string;
  borderColor?: string;
  buttonWidth?: number;
  forwarding?: any;
};

const Button = styled("button")<ButtonProps>`
  font-family: ${({ fontFamily = "inherit" }) => fontFamily};
  ${({ fontSize }) => (fontSize ? `font-size:${fontSize}px` : "")};
  ${({ weight }) => (weight ? `font-weight:${weight}` : "")}};
  background-color: transparent;
  border: 2.3px solid ${({ borderColor, theme }) =>
    borderColor ? borderColor : theme.action100};
  border-radius: 4px;
  -webkit-box-shadow: 0px 0px 4px 1px #6498A0; 
box-shadow: 0px 0px 4px 1px #6498A0;
  ${({ spacingRight }) => `margin-right: ${spacingRight}px`};
  ${({ spacingTop }) => `margin-top: ${spacingTop}px`};
 ${({ buttonWidth }) => (buttonWidth ? `width:${buttonWidth}px` : "")};
 :active {
  background-color: ${({ theme }) => theme.primary300};
}
  `;

export default Button;
