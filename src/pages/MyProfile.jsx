import React, { use } from "react";
import { MyContext } from "../provider/ContextProvider";
import { updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.init";
import { toast } from "react-toastify";


const MyProfile = () => {
  const { setUser, user } = use(MyContext);
  const handleProfileUpdate = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photoURL = e.target.photoURL.value;

    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoURL,
    })
      .then(() => {
        console.log("Profile Updated");
        setUser({ ...user, displayName: name, photoURL: photoURL });
        toast("Profile Updated Successfully");
      })
      .catch((error) => toast(error.message));
  };

  return (
    <div className="p-5">
      
      <h1 className="text-5xl font-bold text-center text-base-300">
        My Profile
      </h1>
      <div className="flex flex-col md:flex-row justify-center items-start md:items-center gap-5  mt-10">
        <div className="w-[calc(100vw-40px)] md:w-100">
          <img
            src={user.photoURL}
            className="w-[calc(100vw-40px)] md:w-70 shadow-secondary shadow-lg mb-2"
          />
          <h2 className="text-lg md:text-3xl font-semibold">
            Name: {user.displayName}
          </h2>
          <h2 className="text-lg md:text-2xl font-semibold">
            Email: {user.email}
          </h2>
          <h2 className=" font-semibold ">
            PhotoURL:{" "}
            <a
              href={user.photoURL}
              className="text-blue-400 hover:underline block truncate w-[300px]"
              target="_blank"
            >
              {user.photoURL}
            </a>
          </h2>
        </div>
        <div className="w-70 sm:w-100">
          <h2 className="font-semibold text-2xl">Update Your Profile</h2>
          <form onSubmit={handleProfileUpdate}>
            <fieldset className="fieldset">
              <label className="label">Name</label>
              <input
                type="text"
                className="input"
                placeholder="Name"
                name="name"
                required
                defaultValue={user?.displayName}
              />
              <label className="label">PhotoURL</label>
              <input
                type="text"
                className="input"
                placeholder="photoURL"
                name="photoURL"
                defaultValue={user?.photoURL}
                required
              />
              <button className="btn bg-black text-white w-1/5">Update</button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
