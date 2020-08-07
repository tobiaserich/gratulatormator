import styled from "@emotion/styled";
type themeProps = {
  theme: any;
};
type InputProps = {
  spacingTop?: string;
};

type LabelProps = {
  labelWidth?: string;
};
const Formular = styled("form")`
  font-weight: 600;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Label = styled("label")<LabelProps>`
  width: ${({ labelWidth = "55%" }) => labelWidth};
  display: flex;
  flex-direction: column;
`;

const Input = styled("input")<InputProps>`
  font-size: 24px;
  background-color: transparent;
  color: ${({ theme }: any) => theme.neutral500};
  border: none;
  margin-top: ${({ spacingTop = "-5px" }) => spacingTop};
  margin-bottom: 10px;
  padding-left: 4px;
  border-radius: 5px;
  box-shadow: inset 3px 3px 7px -6px ${({ theme }: any) => theme.neutral500};
`;

const InputValidation = styled("div")<themeProps>`
  margin-top: -10px;
  font-size: 12px;
  color: ${({ theme }) => theme.error200};
`;

export { Formular, Label, Input, InputValidation };
