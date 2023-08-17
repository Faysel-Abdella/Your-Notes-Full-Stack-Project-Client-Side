import Form from "react-dom";

import Wrapper from "../assets/wrappers/homePageWrapper";
import FormRow from "../components/FormRow";
import CtaButton from "../components/CtaButton";
import MainSvg from "../utils/svgs/MainSvg";

import { PiArrowRightBold } from "react-icons/pi";
import { BsEyeSlash } from "react-icons/bs";
import { BsEye } from "react-icons/bs";

import bigcover from "../assets/images/bigcover.png";
import insidecover from "../assets/images/insidecover.png";

import useHomeContext from "../App";
import { useState } from "react";
import { Outlet } from "react-router-dom";

const HomePage = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const togglePasswordVisible = () => setPasswordVisible(!passwordVisible);
  const toggleConfirmPasswordVisible = () =>
    setConfirmPasswordVisible(!confirmPasswordVisible);

  return (
    <Wrapper>
      <img src={bigcover} alt="cover" className="img" />
      <div className="main-container">
        <main className="inside-main">
          <div className="image-container">
            <img
              src={insidecover}
              alt="inside cover"
              className="inside-image"
            />
            <div className="inside-image-container">
              <div className="inside-image-container-content">
                <div>
                  <MainSvg />
                </div>
                <h2 className="inside-image-container-content-text">
                  Your Notes
                </h2>
              </div>
            </div>
            <span className="lang">Ar</span>
          </div>
          <Outlet />
          {/* <div className="signup-container">
            <div className="inside-singup">
              <h1>Signup</h1>
              <form>
                <FormRow name="email" type="text" label="Email" />
                <FormRow
                  name="password"
                  type={passwordVisible ? "text" : "password"}
                  label="Password"
                  EyeIcon={passwordVisible ? BsEye : BsEyeSlash}
                  togglePassword={togglePasswordVisible}
                />
                <FormRow
                  name="confirmPassword"
                  type={confirmPasswordVisible ? "text" : "password"}
                  label="Confirm password"
                  EyeIcon={confirmPasswordVisible ? BsEye : BsEyeSlash}
                  togglePassword={toggleConfirmPasswordVisible}
                />
                <CtaButton text="Complete signup" Icon={PiArrowRightBold} />
              </form>
              <p className="normal-text">
                Already have an account?{" "}
                <a className="go-link" href="/">
                  Login
                </a>
              </p>
            </div>
          </div> */}
        </main>
      </div>
    </Wrapper>
  );
};
export default HomePage;