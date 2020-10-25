import styled from "@emotion/styled";

type ThemeProps = {
  [index: string]: string;
};

type infoprops = {
  fontSize?: number;
  topSpacing?: number;
  status?: string;
  theme: ThemeProps;
};

const Info = styled("div")<infoprops>`
  font-size: ${({ fontSize = 1.6 }) => fontSize}em;
  font-weight: 600;
  ${({ topSpacing }) => (topSpacing ? `margin-top:${topSpacing}px` : "")};
  color: ${({ status, theme }) =>
    status === "disable" ? theme.neutral400 : ""};
`;
export default Info;
