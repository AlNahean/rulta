"use client";

import React from "react";
import { AiFillFacebook, AiFillGoogleCircle } from "react-icons/ai";
import { ErrorMessage, Formik } from "formik";
import * as Yup from "yup";
const LogIn = () => {
  return (
    <div className=" log-in-page-wrapper min-h-screen w-full bg-zinc-700 text-white">
      <div className=" w-full ">
        <div className=" grid grid-cols-3 full-size">
          <div className="hidden lg:block lg:col-span-1  relative">
            <div className=" absolute inset-0  bg-gradient-to-br from-green-800 to-indigo-900"></div>
            <div className=" lg:flex lg:flex-col  full-size lg:col-span-1 center relative z-10 ">
              <img src="https://www.rulta.com/assets/logo.webp" alt="" />
              <h1 className=" text-5xl">Rulta</h1>
            </div>
          </div>
          <div className=" col-span-3 md:col-span-2 full-size min-h-screen center flex-col  px-4">
            <h1 className=" text-semibold text-2xl my-8">
              Welcome back! Log in
            </h1>
            <div className="  columns-2 md:columns-2 w-full">
              <div className=" flex items-center bg-emerald-700 px-6 py-2 gap-4 rounded-md">
                <div className=" text-4xl">
                  <AiFillFacebook />
                </div>
                <p>Sign In with Facebook</p>
              </div>
              <div className=" flex items-center bg-emerald-700 px-6 py-2 gap-4 rounded-md">
                <div className=" text-4xl">
                  <AiFillGoogleCircle />
                </div>
                <p>Sign In with Facebook</p>
              </div>
            </div>
            <div className=" center my-4 text-xl ">or</div>

            <div className=" w-full">
              <FormComponent />
            </div>

            <div className=" flex center"> Dont have an account? Sign up.</div>
            <div className=" flex center"> Forgot your password? </div>
          </div>
        </div>
      </div>
    </div>
  );
};

var FormComponent = () => {
  return (
    <Formik
      initialValues={{ firstName: "", lastName: "", email: "" }}
      validationSchema={Yup.object({
        name: Yup.string()
          .max(15, "Must be 15 characters or less")
          .required("Required"),
        email: Yup.string().email("Invalid email address").required("Required"),
        password: Yup.string()
          .min(8, "Password must be 8 characters long")
          .matches(/[0-9]/, "Password requires a number")
          .matches(/[a-z]/, "Password requires a lowercase letter")
          .matches(/[A-Z]/, "Password requires an uppercase letter")
          .matches(/[^\w]/, "Password requires a symbol"),
        confirm: Yup.string().oneOf(
          [Yup.ref("password"), null],
          'Must match "password" field value'
        ),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {(formik) => {
        console.log(formik);
        return (
          <div className=" ">
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block mb-2 text-lg font-medium text-gray-900 dark:text-white "
              >
                Email address
              </label>
              <input
                type="email"
                name="email"
                className=" bg-transparent text-inherit border-b   border-white text-sm   block w-full p-2.5  focus:outline-none"
                placeholder="john.doe@company.com"
                {...formik.getFieldProps("email")}
                style={{
                  borderBottom:
                    formik.touched.email && formik.errors.email
                      ? "1px solid red"
                      : formik.touched.email
                      ? "1px solid green"
                      : "",
                }}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className=" text-red-800 text-sm  mt-2">
                  {formik.errors.email}
                </div>
              ) : null}
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
              >
                Password
              </label>
              <input
                type="password"
                className=" bg-transparent text-inherit border-b   border-white text-sm   block w-full p-2.5  focus:outline-none"
                placeholder="•••••••••"
                name="password"
                {...formik.getFieldProps("password")}
                style={{
                  borderBottom:
                    formik.touched.password && formik.errors.password
                      ? "1px solid red"
                      : formik.touched.password
                      ? "1px solid green"
                      : "",
                }}
              />
              {formik.touched.password && formik.errors.password ? (
                <div className=" text-red-800 text-sm mt-2">
                  {formik.errors.password}
                </div>
              ) : null}
            </div>

            <button
              type="submit"
              className="text-white w-[100%] my-4 bg-emerald-700  hover:bg-emerald-500 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm  px-5 py-2.5 text-center "
            >
              Submit
            </button>
          </div>
        );
      }}
    </Formik>
  );
};

export default LogIn;
