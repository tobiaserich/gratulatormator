import React from "react";
import { Global, css } from "@emotion/core";

function GlobalStyles() {
  return (
    <Global
      styles={(theme) => css`
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
        }
      `}
    />
  );
}

export default GlobalStyles;
