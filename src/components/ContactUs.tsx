import { FC, memo } from "react";
import { Formik } from "formik";

type ContactUsProps = {};

const ContactUs: FC<ContactUsProps> = (props) => {
  return (
    <form className="border-2 border-gray-600 rounded-lg w-[55%] p-12 sm:space-y-2 bg-gray-200  ">
      <div className="flex flex-col space-y-4 ">
        <input
          className="border-2 border-gray-400"
          placeholder="Enter Your Name"
        />
        <input
          className="border-2 border-gray-400"
          placeholder="Enter Your Email"
        />
        <input
          className="border-2 border-gray-400"
          placeholder="Feel free to Message/Sugesstion  "
        />
      </div>
      <button className="bg-gray-900 text-white font-semibold sm:px-3 sm:py-0.5 ">
        Submit
      </button>
    </form>
  );
};

ContactUs.defaultProps = {};

export default memo(ContactUs);
