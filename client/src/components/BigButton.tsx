import styled from "@emotion/styled";

type ThemeProps = {
  theme: any;
  fontSize?: number;
  fontFamily?: string;
  spacingTop?: number;
};

const BigButton = styled("button")<ThemeProps>`
  font-family: ${({ fontFamily = "inherit" }) => fontFamily};
  font-size: ${({ fontSize }) => fontSize}px};
  background-color: ${({ theme }) => theme.action200};
  color:white;
  border:none;
  padding:5px 20px 5px 20px;
  border-radius: 4px;
   ${({ spacingTop }) => `margin-top: ${spacingTop}px`};
   :active {
    background-color: ${({ theme }) => theme.action300};
  }
`;

export default BigButton;
