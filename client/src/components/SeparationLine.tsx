import styled from "@emotion/styled";

type SeparationLineProps = {
  distanceTop: string;
};

const SeparationLine = styled("div")<SeparationLineProps>`
  height: 1px;
  width: 280px;
  background-color: ${({ theme }: any) => theme.secondary300};
  margin-top: ${({ distanceTop }) => distanceTop}px;
  border-radius: 25px;
`;

export default SeparationLine;
