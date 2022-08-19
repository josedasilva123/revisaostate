import React from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "../../styles/buttons";
import { Form, FormInput } from "../../styles/form";

const LoginForm = () => {
  const formSchema = yup.object().shape({
    email: yup
      .string()
      .required("O e-mail é obrigatório!"),
    password: yup
      .string()
      .required("A senha é obrigatória!")  
  });
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  return (
    <div>
      <Form onSubmit={handleSubmit()}>
        <h2>Faça login</h2>

        <FormInput type="email" {...register("text")} placeholder="E-mail"></FormInput>  
        {errors.email?.message && (
            <p className="errors">{errors.email.message}</p>
        )} 

        <FormInput type="password" {...register("text")} placeholder="E-mail"></FormInput>  
        {errors.password?.message && (
            <p className="errors">{errors.password.message}</p>
        )}          

        <Button tag="button" type="submit" fullWidth={true}>
          Adicionar nota
        </Button>
      </Form>
    </div>
  );
};

export default LoginForm;
