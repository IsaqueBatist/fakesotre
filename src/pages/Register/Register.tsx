import { useForm } from "react-hook-form";
import {
  MainRegisterContainer,
  FormRegister,
  FormTitle,
  InputForm,
  SubmitButton,
  HelpText,
  ErrorMessage
} from "./styles";
import { Link } from "react-router-dom";
import type { IFormRegisterData } from "../../types/formRegisterData";

type IFormRegisterForm = IFormRegisterData & {
  confirmPassword: string;
};

export default function Register() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IFormRegisterForm>();

  const onSubmit = (data: IFormRegisterForm) => {
    console.log("Submitted:", data);
  };

  console.log(errors);

  const password = watch("password");

  return (
    <MainRegisterContainer>
      <FormRegister onSubmit={handleSubmit(onSubmit)}>
        <FormTitle>Register</FormTitle>
        <InputForm>
          <label>Username</label>
          <input
            placeholder="username"
            autoComplete="username"
            {...register("username", { required: "This fild is requirted" })}
          />
          {errors.username && (
            <ErrorMessage>{errors.username.message}</ErrorMessage>
          )}
        </InputForm>
        <InputForm>
          <label>Email</label>
          <input
            placeholder="exemple@gmail.com"
            autoComplete="email"
            type="email"
            {...register("email", { required: "This fild is requirted" })}
          />
          {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
        </InputForm>
        <InputForm>
          <label>Password</label>
          <input
            type="password"
            autoComplete="new-password"
            {...register("password", { required: "This fild is requirted" })}
          />
          {errors.password && (
            <ErrorMessage>{errors.password.message}</ErrorMessage>
          )}
        </InputForm>
        <InputForm>
          <label>Confirm Password</label>
          <input
            type="password"
            {...register("confirmPassword", {
              required: "This fild is requirted",
              validate: (value) =>
                value === password || "Passwords do not match",
            })}
          />
          {errors.confirmPassword && (
            <ErrorMessage>{errors.confirmPassword?.message}</ErrorMessage>
          )}
        </InputForm>

        <SubmitButton type="submit">Register</SubmitButton>

        <HelpText>
          Already have an account?
          <Link to="/auth/login"> Login</Link>
        </HelpText>
      </FormRegister>
    </MainRegisterContainer>
  );
}
