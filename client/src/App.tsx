import React from "react";
import GlobalStyles from "./GlobalStyles";
import { ThemeProvider } from "emotion-theming";
import colors from "./themes/colors";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <>
      <ThemeProvider theme={colors}>
        <GlobalStyles />
      </ThemeProvider>
    </>
  );
}

export default App;
