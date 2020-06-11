import styled from "@emotion/styled";

type infoprops = {
  fontSize?: number;
  topSpacing?: number;
};

const Info = styled("div")<infoprops>`
  font-size: ${({ fontSize = 1.6 }) => fontSize}em;
  font-weight: 600;
  ${({ topSpacing }) => (topSpacing ? `margin-top:${topSpacing}px` : "")}
`;
export default Info;
