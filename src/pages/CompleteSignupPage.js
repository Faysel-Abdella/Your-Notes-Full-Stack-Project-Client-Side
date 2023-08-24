import { Form, redirect, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import Wrapper from "../assets/wrappers/commonWrapper";
import FormRow from "../components/FormRow";
import CtaButton from "../components/CtaButton";

import { PiArrowRightBold, PiArrowLeftBold } from "react-icons/pi";

import customFetch from "../utils/customeFecth";
import { toast } from "react-toastify";

export const action = async ({ request }) => {
  //Change the request to the formData to simplify
  const formData = await request.formData();
  //Change the formData w/c is array to normal JS obj to send to the backend
  const data = Object.fromEntries(formData);

  try {
    await customFetch.post("/complete-signup", data);
    toast.success("Signup completed", { autoClose: 1000 });
    return redirect("/login");
  } catch (error) {
    //use conditional nesting
    toast.error(error?.response?.data?.message, { autoClose: 4000 });
    return error;
  }
};

const CompletePage = () => {
  const signupEmail = useSelector((state) => state.email);
  const signupPassword = useSelector((state) => state.password);
  const signupConfirmPassword = useSelector((state) => state.confirmPassword);

  const navigate = useNavigate();

  console.log(
    "Data from store",
    signupEmail,
    signupPassword,
    signupConfirmPassword
  );

  return (
    <Wrapper>
      <div className="signup-container">
        <div className="inside-singup">
          <h1 className="header-text">Complete Signup</h1>
          <Form method="POST">
            <FormRow name="username" type="text" label="Username" />
            <FormRow name="phone" label="Phone" />
            <FormRow name="birthDayYear" label="Birthday Year" />

            <input name="email" type="hidden" value={signupEmail} />
            <input name="password" type="hidden" value={signupPassword} />
            <input
              name="confirmPassword"
              type="hidden"
              value={signupConfirmPassword}
            />

            <CtaButton
              text="Complete signup"
              Icon={PiArrowRightBold}
              type="submit"
            />
            <CtaButton
              text="Back"
              Icon={PiArrowLeftBold}
              type="button"
              onClick={() => navigate("/")}
            />
          </Form>
          <p className="normal-text">
            Already have an account?{" "}
            <a className="go-link" href="/login">
              Login
            </a>
          </p>
        </div>
      </div>
    </Wrapper>
  );
};
export default CompletePage;
