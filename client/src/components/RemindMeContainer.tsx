import styled from "@emotion/styled";
import unchecked from "../assets/checkboxUnchecked.svg";
import checked from "../assets/checkboxChecked.svg";

type checkBoxProps = {
  checkBoxChecked: boolean | undefined;
};
const RemindMeContainer = styled("label")<checkBoxProps>`
  display: flex;
  margin-top: 15px;
  margin-bottom: 25px;
  align-items: center;
  line-height: 1;
  &::after {
    margin-left: 10px;
    content: "";
    min-width: 24px;
    height: 21px;
    background-image: ${({ checkBoxChecked }) =>
      checkBoxChecked ? `url(${checked})` : `url(${unchecked})`};
  }
`;

export default RemindMeContainer;
