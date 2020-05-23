import styled from "@emotion/styled";

type SeparationLineProps = {
  distanceTop?: number;
  distanceBottom?: number;
};

const SeparationLine = styled("div")<SeparationLineProps>`
  height: 1px;
  width: 280px;
  background-color: ${({ theme }: any) => theme.secondary300};
  margin-top: ${({ distanceTop = 0 }) => distanceTop}px;
  margin-bottom: ${({ distanceBottom = 0 }) => distanceBottom}px;
  border-radius: 25px;
`;

export default SeparationLine;
