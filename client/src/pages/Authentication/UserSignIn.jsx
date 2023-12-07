import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { MyContextState } from "../../context/data/myContext";
import { toast } from "react-toastify";
import Loader from "../../components/loader/Loader";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/FirebaseConfig";
import { useNavigate } from "react-router-dom";

const UserSignIn = () => {
  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();

  const { loading, setLoading } = MyContextState();

  const handleSignin = async (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    if (email === "" || password === "") {
      return toast.error("All fields are required");
    }

    try {
      setLoading(true);
      const result = await signInWithEmailAndPassword(auth, email, password);
      localStorage.setItem("user", JSON.stringify(result));
      toast.success("Signin Successfully");
      navigate("/");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full flex flex-col justify-center items-center h-screen">
      {loading && <Loader />}
      <h1 className="text-gray-900 text-lg font-bold">Sign In</h1>
      <hr className="text-gray-900" />
      <form
        className="min-w-[65vw] bg-white drop-shadow-2xl  rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSignin}
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="Email"
          >
            UserName/Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-blue-300 focus:shadow-outline"
            id="Email"
            type="email"
            ref={emailRef}
            required
            placeholder="Enter your userName/email"
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="passwordInp"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-blue-300 focus:shadow-outline"
            id="passwordInp"
            ref={passwordRef}
            required
            type="password"
            placeholder="******************"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign In
          </button>
          <Link
            to="/signup"
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
          >
            Don't have Account? Click to Register!
          </Link>
        </div>
      </form>
      <p className="text-center font-bold text-gray-700 text-xs">
        &copy;2023 Mart Corp. All rights reserved.
      </p>
    </div>
  );
};

export default UserSignIn;
