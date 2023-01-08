import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { BASE_URL, TOKEN_PATH } from "../../services/API";
import ValidationError from "../Error/ValidationError";
import AuthContext from "../../services/AuthContext";

// Styled
import { Form, Submit } from "./LoginForm.styled";

const url = BASE_URL + TOKEN_PATH;

// Error text
const schema = yup.object().shape({
  identifier: yup.string().required("Please enter your Username"),
  password: yup.string().required("Please enter your Password"),
});

export default function LoginForm() {
  const [submitting, setSubmitting] = useState(false);
  const [loginError, setLoginError] = useState(null);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const [auth, setAuth] = useContext(AuthContext);

  async function onSubmit(data) {
    setSubmitting(true);
    setLoginError(null);

    // console.log(data);

    try {
      const response = await axios.post(url, data);
      // console.log("response", response.data);

      // Store response data
      setAuth(response.data);

      // Redirect to another page
      navigate("/admin", { replace: true });
    } catch (error) {
      console.log("error", error);

      // Respons to wrong Username or Password
      setLoginError("Wrong Username or Password");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      {loginError && <ValidationError>{loginError}</ValidationError>}
      <fieldset disabled={submitting}>
        <label>
          Username:
          <input {...register("identifier")} />
          {errors.identifier && <ValidationError>{errors.identifier.message}</ValidationError>}
        </label>
        <label>
          Password:
          <input {...register("password")} />
          {errors.password && <ValidationError>{errors.password.message}</ValidationError>}
        </label>
        <Submit>{submitting ? "Loggin in..." : "Login"}</Submit>
      </fieldset>
    </Form>
  );
}
