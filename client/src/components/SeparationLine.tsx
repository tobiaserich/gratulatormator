import styled from "@emotion/styled";

type SeparationLineProps = {
  distanceTop?: number;
  distanceBottom?: number;
  autoMargin?: boolean;
};

const SeparationLine = styled("div")<SeparationLineProps>`
  height: 1px;
  width: 280px;
  background-color: ${({ theme }: any) => theme.secondary300};
  margin-top: ${({ distanceTop = 0 }) => distanceTop}px;
  margin-bottom: ${({ distanceBottom = 0 }) => distanceBottom}px;
  border-radius: 25px;
  ${({ autoMargin }) => (autoMargin ? "margin:auto;" : "")};
`;

const ShortSeparationLine = styled(SeparationLine)`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 40px;
`;
export { SeparationLine, ShortSeparationLine };
