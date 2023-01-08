import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import ValidationError from "../Error/ValidationError";
import { Form, Label, Input, Select, Textarea, Button } from "./ContactForm.styled";

// Error text
const schema = yup.object().shape({
  firstName: yup.string().required("Please enter your First name").min(3, "Minimum of 3 characters"),
  lastName: yup.string().required("Please enter your Last name").min(4, "minimum of 4 characters"),
  email: yup.string().required("Please enter your Email").email("Must be in a valid email"),
  subject: yup
    .string()
    .required("Please enter your website")
    .matches(/^(?!select$)[a-z]+$/, "Please select Option"),
  message: yup.string().required("Please type your Message").min(10, "minimum of 10 characters"),
});

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  function onSubmit(data) {
    console.log("data", data);
  }

  // console.log("errors", errors);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Label>
        First Name:
        <Input {...register("firstName")} />
        {errors.firstName && <ValidationError>{errors.firstName.message}</ValidationError>}
      </Label>

      <Label>
        Last Name:
        <Input {...register("lastName")} />
        {errors.lastName && <ValidationError>{errors.lastName.message}</ValidationError>}
      </Label>

      <Label>
        Email:
        <Input {...register("email")} />
        {errors.email && <ValidationError>{errors.email.message}</ValidationError>}
      </Label>

      <div>
        <Select {...register("subject")}>
          <option defaultValue="select">Select Option</option>
          <option value="private">Private</option>
          <option value="firm">Firm</option>
        </Select>
        {errors.subject && <ValidationError>{errors.subject.message}</ValidationError>}
      </div>

      <Label>
        Message:
        <Textarea {...register("message")} />
        {errors.message && <ValidationError>{errors.message.message}</ValidationError>}
      </Label>

      <Button>Submit</Button>
    </Form>
  );
}
