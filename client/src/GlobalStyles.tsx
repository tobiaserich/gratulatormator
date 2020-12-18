import React from "react";
import { Global, css } from "@emotion/core";

type ThemeProps = {
  [index: string]: string;
};
type GlobalStylesProps = {
  bg: string;
  theme?: ThemeProps;
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
          color: ${props.theme!.font};
          background: ${
            background === "unicolor"
              ? ""
              : `linear-gradient(${props.theme!.primary300} 0%, ${
                  props.theme!.primary200
                } 70%)`
          };
        }
        }

        #root {
          min-height: 100vh;
          height: 100%;
          max-width: 320px;
          margin: auto;
          overflow-x: hidden;
         
      `}
    />
  );
}

export default GlobalStyles;
