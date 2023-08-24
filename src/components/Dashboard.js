import { useEffect, useReducer, useState } from "react";

import ProfileNavBar from "./ProfileNavBar";

import Wrapper from "../assets/wrappers/dashboardWrapper";

import logo from "../assets/images/dashbordlogo.svg";
import user from "../assets/images/user.svg";
import dark from "../assets/images/dark.svg";
import sun from "../assets/images/sun.svg";
import backgroundImage from "../assets/images/dashboardcover.png";

const Dashboard = () => {
  const initialState = {
    showNav: false,
    isArabic: false,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "toggle lang":
        return {
          showNav: state.showNav,
          isArabic: !state.isArabic,
          isDark: state.isDark,
        };
      case "toggle nav":
        return {
          showNav: !state.showNav,
          isArabic: state.isArabic,
          isDark: state.isDark,
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const [darkTheme, setDarkTheme] = useState(
    () => localStorage.getItem("darkTheme") === "true"
  );

  useEffect(() => {
    localStorage.setItem("darkTheme", darkTheme);
    document.body.classList.toggle("dark-theme", darkTheme);
  }, [darkTheme]);

  const toggleTheme = () => {
    setDarkTheme((prevTheme) => !prevTheme);
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem("darkTheme");
    if (storedTheme !== null) {
      setDarkTheme(storedTheme === "true");
    }
  }, []);

  return (
    <Wrapper>
      <div className="top-dashboard">
        <div className="logo-and-text">
          <img src={logo} alt="logo" className="dashboard-logo" />
          <h2>Your Notes</h2>
        </div>

        <div className={`add-info ${state.showNav ? "nav-open" : ""}`}>
          <h2>Ar</h2>
          <span onClick={toggleTheme}>
            {darkTheme && <img src={sun} alt="dark" />}
            {!darkTheme && <img src={dark} alt="dark" />}
          </span>
          <span onClick={() => dispatch({ type: "toggle nav" })}>
            <img src={user} alt="user" />
          </span>

          <nav className="profile-navbar">
            <ProfileNavBar />
          </nav>
        </div>
      </div>

      <div className="background"></div>

      <div className="dashboard-image-container">
        <img src={backgroundImage} alt="" className="dashboard-image" />
      </div>
    </Wrapper>
  );
};
export default Dashboard;
