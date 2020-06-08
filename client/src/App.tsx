import React from "react";
import GlobalStyles from "./GlobalStyles";
import { ThemeProvider } from "emotion-theming";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import colors from "./themes/colors";
import LandingPage from "./pages/LandingPage";
import Header from "./components/Header";
import Main from "./pages/Main";
import AddNewPerson from "./pages/AddNewPerson";

function App() {
  const [currentBackground, setCurrentBackground] = React.useState("none");
  React.useEffect(() => {
    const actualPath = window.location.pathname;
    const background = actualPath === "/" ? "landing" : "general";
    setCurrentBackground(background);
  }, []);
  return (
    <Router>
      <ThemeProvider theme={colors}>
        <GlobalStyles bg={currentBackground} theme={colors} />
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route>
            <Header />
            <Switch>
              <Route path="/main">
                <Main />
              </Route>
              <Route path="/AddNewPerson">
                <AddNewPerson />
              </Route>
            </Switch>
          </Route>
        </Switch>
      </ThemeProvider>
    </Router>
  );
}

export default App;
