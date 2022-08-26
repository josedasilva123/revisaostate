import React, { useState, useContext} from "react";
import * as yup from "yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "../../styles/buttons";
import { Form, FormInput } from "../../styles/form";
import { IFormRegister, UserContext } from "../../contexts/UserContext";

const RegisterForm = () => {
  const [loading, setLoading] = useState(false);
  const { registerUser } = useContext(UserContext);

  const formSchema = yup.object().shape({
    name: yup
      .string()
      .required("O título é obrigatório!"),
    email: yup
      .string()
      .required("O e-mail é obrigatório!")
      .email('Forneceça um e-mail válido'),
    password: yup
      .string()
      .required("A senha é obrigatória!")  
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormRegister>({
    resolver: yupResolver(formSchema),
  });

  const onSubmit: SubmitHandler<IFormRegister> = (formData) => {
    registerUser(formData, setLoading);
  }

  return (
    <div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <h2>Cadastre-se</h2>
        <FormInput type="text" {...register("name")} placeholder="Nome"/>
        {errors.name?.message && (
          <p className="errors">{errors.name.message}</p>
        )}

        <FormInput type="email" {...register("email")} placeholder="E-mail"></FormInput>  
        {errors.email?.message && (
            <p className="errors">{errors.email.message}</p>
        )} 

        <FormInput type="password" {...register("password")} placeholder="Senha"></FormInput>  
        {errors.password?.message && (
            <p className="errors">{errors.password.message}</p>
        )}          

        <Button tag="button" type="submit" disabled={loading}>
          {loading ? 'Cadastrando...' : 'Cadastrar-se'}
        </Button>
      </Form>
    </div>
  );
};

export default RegisterForm;
