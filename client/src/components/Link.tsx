import styled from "@emotion/styled";
import { Link as ReactLink } from "react-router-dom";

const Link = styled(ReactLink)`
  color: black;
  text-decoration: none;
`;

const RouterlessLink = styled("a")`
  color: black;
  text-decoration: none;
`;

export default Link;
export { RouterlessLink };
