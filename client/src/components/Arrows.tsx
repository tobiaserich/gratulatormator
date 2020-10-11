import styled from "@emotion/styled";

type ArrowDownProps = {
  status?: boolean;
  theme: any;
};

const ArrowDown = styled("div")<ArrowDownProps>`
  display: inline-block;
  position: relative;
  height: 0px;
  width: 0px;
  border-top: 5px solid
    ${({ theme, status }) => (!status ? theme.neutral400 : "")};
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  padding-bottom: 4px;
  margin-right: 4px;
`;

export { ArrowDown };
