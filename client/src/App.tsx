import React from "react";
import GlobalStyles from "./GlobalStyles";
import { ThemeProvider } from "emotion-theming";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import colors from "./themes/colors";
import LandingPage from "./pages/LandingPage";
import Header from "./components/Header";
import Main from "./pages/Main";
import AddNewPerson from "./pages/AddNewPerson";
import BirthdayChildInfo from "./pages/BirthdayChildInfo";
import Registration from "./pages/Registration";
import UserSettings from "./pages/UserSettings";
import Footer from "./components/Footer";
import { verifyUser } from "./api/user";

function App(): JSX.Element {
  const [currentBackground, setCurrentBackground] = React.useState<string>(
    "landing"
  );
  const [userVerification, setUserVerification] = React.useState<boolean>(
    false
  );
  const currentPath = window.location.pathname;
  //Check the current path for background color adjustment.
  //Also check if the user is logged in, to forward him to the user section.
  React.useEffect((): void => {
    const verificateUser = async (): Promise<void> => {
      const verification = await verifyUser();
      setUserVerification(verification);
    };
    verificateUser();
    const background = currentPath === "/" ? "landing" : "general";
    setCurrentBackground(background);
  }, []);

  if (userVerification === true && currentPath === "/") {
    window.location.replace("/main");
    return <></>;
  } else {
    return (
      <Router>
        <ThemeProvider theme={colors}>
          <GlobalStyles bg={currentBackground} theme={colors} />
          <Switch>
            <Route exact path="/">
              {userVerification === true ? "" : <LandingPage />}
            </Route>
            <Route>
              <Header />
              <Switch>
                <Route exact path="/main">
                  <Main />
                </Route>
                <Route path="/addNewPerson/">
                  <AddNewPerson />
                </Route>
                <Route path="/birthdayChildInfo/:id">
                  <BirthdayChildInfo />
                </Route>
                <Route path="/registration">
                  <Registration />
                </Route>
                <Route path="/userSettings">
                  <UserSettings />
                </Route>
                <Route path="*">
                  <Redirect to="/main" />
                </Route>
              </Switch>
              <Footer />
            </Route>
            <Route path="*">
              <Redirect to="/" />
            </Route>
          </Switch>
        </ThemeProvider>
      </Router>
    );
  }
}

export default App;
