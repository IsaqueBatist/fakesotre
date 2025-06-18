import { useForm } from 'react-hook-form'
import type { IFormLoginData } from '../../types/formLoginData'
import { loginUser } from '../../utils/loginUser'
import {
  ErrorMessage,
  FormLogin,
  FormTittle,
  HelpText,
  InputForm,
  MainLoginContainer,
  SubmmitButton,
} from './styles'
import { useNavigate } from 'react-router-dom'

const defaultValues: IFormLoginData = {
  password: '',
  username: '',
}

export default function Login() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<IFormLoginData>({
    defaultValues,
    mode: 'onBlur',
  })

  const navigate = useNavigate()

  const onSubmit = (data: IFormLoginData) => {
    if (isValid) {
      loginUser(data)
      reset()
    }
  }

  return (
    <MainLoginContainer>
      <FormLogin onSubmit={handleSubmit(onSubmit)}>
        <FormTittle>Login</FormTittle>
        <InputForm>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            placeholder="username"
            autoComplete="username"
            {...register('username', { required: 'This fild is required' })}
          />
          {errors.username && <ErrorMessage>{errors.username.message}</ErrorMessage>}
        </InputForm>
        <InputForm>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            autoComplete="current-password"
            {...register('password', { required: 'This fild is required' })}
          />
          {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
        </InputForm>
        <SubmmitButton type="submit" aria-label="Log in to your account">
          Log in
        </SubmmitButton>
        <HelpText role="note">
          Don't have an account?
          <a href="/auth/register"> Register</a>
        </HelpText>
      </FormLogin>
    </MainLoginContainer>
  )
}
