import { useState } from "react";
import Joi from "joi";
import { useFormik } from "formik";
import Input from "./Common/Input";
import PageHeader from "./Common/PageHeader";
import FormikValidateUsingJoi from "../Utils/FormikValidateUsingJoi";

const SignIn = ({ redirect }) => {
  const [error, setError] = useState("");

  const form = useFormik({
    validateOnMount: true,
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
      <PageHeader
        title="Sign In to Burger Hut"
        description="Sign in and order easily"
      />

      <form noValidate onSubmit={form.handleSubmit}>
        {error && <div className="alert alert-danger">{error}</div>}

        <Input
          type="email"
          label="Email"
          error={form.touched.email && form.errors.email}
          {...form.getFieldProps("email")}
        />
        <Input
          type="password"
          label="Password"
          error={form.touched.password && form.errors.password}
          {...form.getFieldProps("password")}
        />

        <div className="my-2">
          <button
            type="submit"
            disabled={!form.isValid}
            className="btn btn-primary bg-danger"
          >
            Sign In
          </button>
        </div>
      </form>
    </>
  );
};

export default SignIn;
