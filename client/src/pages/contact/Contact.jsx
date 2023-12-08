import React, { useRef } from "react";
import Layout from "../../components/layout/Layout";
import axios from "axios";
import { toast } from "react-toastify";
import Loader from "../../components/loader/Loader";
import { MyContextState } from "../../context/data/myContext";

const Contact = () => {
  const nameRef = useRef(null);
  const phoneRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  const { loading, setLoading } = MyContextState();

  const submitHandler = async (e) => {
    e.preventDefault();

    const contactFormData = {
      name: nameRef.current.value,
      phone: phoneRef.current.value,
      email: emailRef.current.value,
      message: messageRef.current.value,
    };

    try {
      setLoading(true);
      const response = await axios.post(
        "https://reactecommerce-fea10-default-rtdb.asia-southeast1.firebasedatabase.app/contactUs.json",
        contactFormData
      );
      if (response.data) {
        toast.success("Message sent Successfully");
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }

    nameRef.current.value = "";
    phoneRef.current.value = "";
    emailRef.current.value = "";
    messageRef.current.value = "";
  };

  return (
    <Layout>
      <div className="w-full flex flex-col justify-center items-center h-screen">
        {loading && <Loader />}
        <h1 className="text-gray-900 text-lg font-bold">Contact Us</h1>
        <hr className="text-gray-900" />
        <form
          className="min-w-[65vw] bg-white drop-shadow-2xl  rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={submitHandler}
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="Name"
            >
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-blue-300 focus:shadow-outline"
              id="Name"
              type="text"
              ref={nameRef}
              required
              placeholder="Enter your Name"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="Email"
            >
              Email
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
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="phone"
            >
              Phone Number
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-blue-300 focus:shadow-outline"
              id="phone"
              type="number"
              min={0}
              ref={phoneRef}
              required
              placeholder="Enter your Phone Number"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="messageInp"
            >
              Message
            </label>
            <input
              className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-blue-300 focus:shadow-outline"
              id="meassage"
              ref={messageRef}
              type="textarea"
              rows={3}
              placeholder="Enter your query"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Contact;
