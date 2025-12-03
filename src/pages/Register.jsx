import { use, useState } from "react";
import { FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router";
import { MyContext } from "../provider/ContextProvider";
import { updateProfile } from "firebase/auth";
import auth from '../firebase/firebase.init'
import { toast } from "react-toastify";


const Register = () => {
  const { emailRegister, setUser, googleLogin } = use(MyContext);
  const [error,setError] = useState("");
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);

  const handleGoogleLogin = () => {
    googleLogin()
      .then((res) => {
        const CurrentUser = res.user;
        toast("Login Successful");
        setUser(CurrentUser);
        navigate("/");
      })
      .catch((error) => {
        toast(error.message);
      });
  };
  const handleRegister = (e) => {
    e.preventDefault();
    const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[^A-Za-z0-9]).{6,}$/;

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoUrl = form.photoUrl.value;
    const password = form.password.value;
    setError('');
    if(!regex.test(password)){
      setError("Password should have atleast 6 characters,1 lowercase,1 uppercase letter,1 special character!");
      return;
    }
    emailRegister(email, password)
      .then((user) => {
        const CurrentUser = user.user;
        toast("Registered Successfully");
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photoUrl,
        })
          .then(() => {
            console.log("Profile Updated");
            setUser({ ...CurrentUser, displayName: name, photoURL: photoUrl });
            navigate("/");
          })
          .catch((error) => toast(error.message));
      })
      .catch((error) => {
        toast(error.message);
      });
  };
  return (
    <div>
      
      <div className="hero">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
          </div>
          <div className="card bg-primary max-w-md md:w-120 shrink-0 shadow-2xl p-3 md:p-6 lg:p-8">
            <h2 className="text-center text-2xl md:text-4xl font-bold">
              Welcome To EcoTrack
            </h2>
            <p className="text-center mt-2">
              A Sustainable Living Community
            </p>
            <div className="card-body">
              <form onSubmit={handleRegister}>
                <fieldset className="fieldset">
                  <label className="label">Name</label>
                  <input
                    type="text"
                    className="input"
                    placeholder="Name"
                    name="name"
                    required
                  />
                  <label className="label">Email</label>
                  <input
                    type="email"
                    className="input"
                    placeholder="Email"
                    name="email"
                    required
                  />
                  <label className="label">Photo URL</label>
                  <input
                    type="text"
                    className="input"
                    placeholder="Photo"
                    name="photoUrl"
                    required
                  />
                  <label className="label">Password</label>
                  <div className=" relative">
                    <input
                      type={visible ? "text" : "password"}
                      className="input"
                      placeholder="Password"
                      name="password"
                      required
                    />

                    <button
                      onClick={() => setVisible(!visible)}
                      type="button"
                      className="absolute top-2 right-2 md:right-10 lg:right-5  text-lg"
                    >
                      {visible ? <FaEye /> : <FaEyeSlash />}
                    </button>
                  </div>
                  <button className="btn btn-neutral mt-4">Register</button>
                </fieldset>
              </form>
            </div>
            <p>
              Already have an account?{" "}
              <NavLink to="/login" className="text-blue-600">
                login Now
              </NavLink>
            </p>
            <hr />
            <button
              onClick={handleGoogleLogin}
              className="btn btn-black mt-4"
            >
              <FaGoogle /> Continue with Google
            </button>
            {error && <div className="font-semibold text-red-600 text-lg">{error}</div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
