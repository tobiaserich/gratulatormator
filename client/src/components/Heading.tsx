import styled from "@emotion/styled";

type HeadingProps = {
  strokeColor?: string;
  topSpacing?: number;
  fontSize?: number;
};

const Heading = styled("h1")<HeadingProps>`
  margin-top: ${({ topSpacing }) => topSpacing}px;
  font-family: "Luckiest guy", "sans-serif";
  font-size: ${({ fontSize = "" }) => (fontSize ? fontSize : "")}em;
  font-weight: 200;
  letter-spacing: 0.3px;
  background: ${({ strokeColor }: HeadingProps) =>
    strokeColor === "default"
      ? "-webkit-linear-gradient(-90deg, #bb0000 0%, transparent 90%)"
      : strokeColor};
  -webkit-background-clip: text;
  -webkit-text-stroke: 1px transparent;
`;

const SubHeading = styled("h2")`
  margin: 0;
`;

export { Heading, SubHeading };
