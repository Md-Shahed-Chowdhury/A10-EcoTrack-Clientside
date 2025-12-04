import React, { use } from "react";
import { NavLink, useLocation } from "react-router";
import { MyContext } from "../provider/ContextProvider";
import { toast } from "react-toastify";


const ForgetPass = () => {
  const { state } = useLocation();
  const { passReset } = use(MyContext);
  const handleResetPass = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    passReset(email)
      .then(() => {
        toast("Password reset email sent");
        const gmailUrl = `https://mail.google.com`;
        window.open(gmailUrl, "_blank");
      })
      .catch((error) => {
        toast(error.message);
      });
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
     
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Reset Your Password!</h1>
        </div>
        <div className="card bg-primary max-w-md md:w-120 w-full  shrink-0 shadow-2xl p-3 md:p-6 lg:p-8">
          <form onSubmit={handleResetPass} className="card-body">
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input
                type="email"
                className="input"
                placeholder="Email"
                name="email"
                defaultValue={state}
              />

              <button className="btn btn-neutral mt-4">Reset Password</button>
            </fieldset>
          </form>
          <hr />
          <NavLink className="btn btn-accent mt-4" to="/login">
            Back to login
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ForgetPass;
