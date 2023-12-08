import React from "react";
import Layout from "../../components/layout/Layout";
import signatureImg from "../../assets/signature.png";
import aboutImg1 from "../../assets/about1.jpg";
import aboutImg2 from "../../assets/about2.jpg";

const About = () => {
  return (
    <Layout>
      <div className="bg-white py-10 px-3 lg:px-0">
        <div className="max-w-7xl mx-auto flex flex-col  lg:flex-row lg:items-center">
          <div className="lg:w-1/2">
            <div className="mb-6 lg:mb-0">
              <h2 className="text-3xl font-bold mb-4">About Our Store</h2>
              <p className="text-gray-600 mb-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <p className="text-gray-600 mb-4">
                It has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
              <p className="text-gray-600 mb-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <div className="mt-6">
                <img src={signatureImg} alt="signature" className="w-40" />
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 bottom-40 space-around lg:ml-5 relative">
            <img
              src={aboutImg1}
              alt="image1"
              className="w-full mb-6 lg:absolute lg:left-0 lg:w-3/4"
            />
            {/* <img
              src={aboutImg2}
              alt="image2"
              className="w-full lg:absolute lg:left-1/4 lg:w-1/4"
            /> */}
          </div>
        </div>
      </div>
      {/* <div className="w-full flex flex-col justify-center items-center h-screen">
        <div className="mb-md-3 mb-sm-3">
          <h2>About Our Store</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <p>
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged.
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <div className="signature">
            <img src={signatureImg} alt="image" />
          </div>
        </div>
      </div> */}
    </Layout>
  );
};

export default About;
