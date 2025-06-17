import {
  FormLogin,
  FormTittle,
  HelpText,
  InputForm,
  MainLoginContainer,
  SubmmitButton,
} from './styles'

export default function Login() {
  return (
    <MainLoginContainer>
      <FormLogin>
        <FormTittle>Login</FormTittle>
        <InputForm>
          <label htmlFor="iemail">Email</label>
          <input
            required
            type="email"
            id="iemail"
            placeholder="example@gmail.com"
            autoComplete="email"
          />
        </InputForm>
        <InputForm>
          <label htmlFor="ipassword">Password</label>
          <input required type="password" id="ipassword" autoComplete="current-password" />
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
