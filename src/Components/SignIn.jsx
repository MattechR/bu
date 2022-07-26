import { useFormik } from "formik";
import { useState } from "react";
import Joi from "joi";
import FormikValidateUsingJoi from "../Utils/FormikValidateUsingJoi";
import Input from "./Common/Input";
import Header from "./Common/Header";

const SignIn = () => {
  const [error, setError] = useState("");
  const form = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: FormikValidateUsingJoi({
      email: Joi.string()
        .email({ tlds: { allow: false } })
        .required()
        .label("Email"),
      password: Joi.string().min(6).required().label("Password"),
    }),
  });
  return (
    <>
      <Header title="Sign in to your account" />

      <form noValidate onSubmit={form.handleSubmit}>
        {error && <div className="alert alert-danger">{error}</div>}

        <Input
          type="text"
          label="Email"
          error={form.touched.email && form.errors.email}
          {...form.getFieldProps("email")}
        />

        <Input
          type="text"
          label="password"
          error={form.touched.password && form.errors.password}
          {...form.getFieldProps("password")}
        />

        <div className="my-2">
          <button
            type="submit"
            className="btn btn-primary"
            disabled={!form.isValid}
          >
            Sign In
          </button>
        </div>
      </form>
    </>
  );
};

export default SignIn;
