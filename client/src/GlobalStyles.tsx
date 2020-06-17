import React from "react";
import { Global, css } from "@emotion/core";

type GlobalStylesProps = {
  bg: string;
  theme?: any;
};
function GlobalStyles(props: GlobalStylesProps) {
  const background = props.bg === "landing" ? "unicolor" : "";
  return (
    <Global
      styles={({ theme }: any) => css`
        *,
        *:before,
        *:after {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          font-family: "montserrat", "sans-serif";
        }

        #root {
          min-height: 100vh;
          height: 100%;
          overflow-x: hidden;
          background: ${background === "unicolor"
            ? ""
            : `linear-gradient(${props.theme.primary300} 0%, ${props.theme.primary200} 70%)`};
        }
      `}
    />
  );
}

export default GlobalStyles;
