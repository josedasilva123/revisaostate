import React, { useState, useContext } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "../../styles/buttons";
import { Form, FormInput } from "../../styles/form";
import { UserContext } from "../../contexts/UserContext";

const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const { loginUser } = useContext(UserContext);

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
      <Form onSubmit={handleSubmit((formData) => loginUser(formData, setLoading))}>
        <h2>Faça login</h2>

        <FormInput type="email" {...register("email")} placeholder="E-mail"></FormInput>  
        {errors.email?.message && (
            <p className="errors">{errors.email.message}</p>
        )} 

        <FormInput type="password" {...register("password")} placeholder="Senha"></FormInput>  
        {errors.password?.message && (
            <p className="errors">{errors.password.message}</p>
        )}          

        <Button tag="button" type="submit" disabled={loading}>
          {loading ? 'Entrando...' : 'Entrar'}
        </Button>
      </Form>
    </div>
  );
};

export default LoginForm;
