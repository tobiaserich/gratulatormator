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
          font-size:16px;
          background: ${
            background === "unicolor"
              ? ""
              : `linear-gradient(${props.theme.primary300} 0%, ${props.theme.primary200} 70%)`
          };
        }
        }

        #root {
          min-height: 100vh;
          height: 100%;
          max-width: 320px;
          margin: auto;
          padding-top:0.5rem;
          overflow-x: hidden;
         
      `}
    />
  );
}

export default GlobalStyles;
