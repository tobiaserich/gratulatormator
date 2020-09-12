import React from "react";
import GlobalStyles from "./GlobalStyles";
import { ThemeProvider } from "emotion-theming";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import colors from "./themes/colors";
import LandingPage from "./pages/LandingPage";
import Header from "./components/Header";
import Main from "./pages/Main";
import AddNewPerson from "./pages/AddNewPerson";
import UserInfo from "./pages/UserInfo";
import Registration from "./pages/Registration";
import { verifyUser } from "./api/user";

function App() {
  const [currentBackground, setCurrentBackground] = React.useState("none");
  const [userVerification, setUserVerification] = React.useState(false);
  const actualPath = window.location.pathname;
  React.useEffect(() => {
    const verificateUser = async () => {
      const verification = await verifyUser();
      setUserVerification(verification);
      console.log(userVerification);
    };
    verificateUser();
    const background = actualPath === "/" ? "landing" : "general";
    setCurrentBackground(background);
  }, []);

  const redirection =
    userVerification === true && actualPath === "/"
      ? window.location.replace("/main")
      : "";

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
              <Route path="/main">
                <Main />
              </Route>
              <Route path="/addNewPerson">
                <AddNewPerson />
              </Route>
              <Route path="/userInfo">
                <UserInfo />
              </Route>

              <Route path="/registration">
                <Registration />
              </Route>
            </Switch>
          </Route>
        </Switch>
      </ThemeProvider>
    </Router>
  );
}

export default App;
