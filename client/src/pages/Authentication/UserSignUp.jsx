import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { MyContextState } from "../../context/data/myContext";
import { toast } from "react-toastify";
import Loader from "../../components/loader/Loader";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, Timestamp, addDoc } from "firebase/firestore";
import { auth, fireDB } from "../../firebase/FirebaseConfig";

const UserSignUp = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const { loading, setLoading } = MyContextState();

  const emptyFormInputCredentials = () => {
    nameRef.current.value = "";
    emailRef.current.value = "";
    passwordRef.current.value = "";
  };

  const signup = async (e) => {
    e.preventDefault();

    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    if (name === "" || email === "" || password === "") {
      return toast.error("All fields are required");
    }

    try {
      setLoading(true);
      const users = await createUserWithEmailAndPassword(auth, email, password);

      console.log(users);
      //once auth success using its uid store in firedb
      const user = {
        name: name,
        uid: users.user.uid,
        email: users.user.email,
        time: Timestamp.now(),
      };

      const userRef = collection(fireDB, "users");
      await addDoc(userRef, user);

      toast.success("Signup Succesfully");

      emptyFormInputCredentials();

      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full flex flex-col justify-center items-center h-screen">
      {loading && <Loader />}
      <h1 className="text-gray-900 text-lg font-bold">Sign Up</h1>
      <hr className="text-gray-900" />
      <form
        className="min-w-[65vw] bg-white drop-shadow-2xl rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={signup}
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="Email"
          >
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-blue-300 focus:shadow-outline"
            id="name"
            type="text"
            ref={nameRef}
            required
            placeholder="Enter your FullName"
          />
        </div>
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
            type="password"
            required
            placeholder="******************"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign Up
          </button>
          <Link
            to="/login"
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
          >
            Already have Account? Click to Login!
          </Link>
        </div>
      </form>
      <p className="text-center font-bold text-gray-700 text-xs">
        &copy;2023 Mart Corp. All rights reserved.
      </p>
    </div>
  );
};

export default UserSignUp;
