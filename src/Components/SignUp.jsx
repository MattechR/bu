import Joi from "joi";
import { useFormik } from "formik";
import { FormikValidateUsingJoi } from "../Utils/FormikValidateUsingJoi";
import Input from "./Common/Input";
import PageHeader from "./Common/PageHeader";
import { useState } from "react";

const SignUp = () => {
  const [error, setError] = useState("");

  const form = useFormik({
    validateOnMount: true,
    initialValues: {
      email: "",
      password: "",
      name: "",
      phone: "",
    },
    validate: FormikValidateUsingJoi({
      email: Joi.string()
        .email({ tlds: { allow: false } })
        .required()
        .label("Email"),
      password: Joi.string().min(6).required().label("Password"),
      name: Joi.string().min(2).required().label("Name"),
      phone: Joi.string().min(2).required().label("Phone"),
    }),
  });

  return (
    <>
      <PageHeader
        title="Sign Up to Burger Hut"
        description="Get a subscription for discounts"
      />

      <form noValidate autoComplete="off" onSubmit={form.handleSubmit}>
        {error && <div className="alert alert-danger">{error}</div>}

        <Input
          type="text"
          label="Name"
          error={form.touched.name && form.errors.name}
          {...form.getFieldProps("name")}
        />
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
        <Input
          type="tel"
          label="Phone"
          error={form.touched.phone && form.errors.phone}
          {...form.getFieldProps("phone")}
        />

        <div className="my-2">
          <button
            disabled={!form.isValid}
            className="btn btn-primary bg-danger"
          >
            Sign Up
          </button>
        </div>
      </form>
    </>
  );
};

export default SignUp;
