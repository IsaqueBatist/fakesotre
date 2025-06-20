import styled from "styled-components";

export const MainLoginContainer = styled.div`
  width: 100%;
  min-height: 100dvh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormLogin = styled.form`
  width: 40rem;
  background-color: ${({ theme }) => theme.colors.Neutra.light[2]};
  border-radius: ${({ theme }) => theme.borderRadius};

  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  justify-content: flex-start;
  align-items: center;

  padding: 2rem;
  box-shadow: 6px 5px 16px 1px #0000002e;
`;

export const FormTittle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 4rem;
  color: ${({ theme }) => theme.colors.primary.main};
  font-weight: bold;
`;

export const InputForm = styled.div`
  width: 100%;
  /* padding: 1rem; */

  display: flex;
  flex-direction: column;

  gap: 0.8rem;

  label {
    font-size: 1.5rem;
  }

  input {
    padding: 1.5rem 2rem;
    outline: none;
    border: none;
    border-radius: ${({ theme }) => theme.borderRadius};

    font-size: 1.3rem;
    transition: box-shadow 0.5s ease;

    &:focus {
      box-shadow: -1px 0px 6px 2px ${({ theme }) => theme.colors.primary.light};
    }
  }
`;

export const SubmmitButton = styled.button`
  padding: 1.5rem 2rem;
  width: 100%;
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ theme }) => theme.colors.primary.medium};
  border: none;
  color: ${({ theme }) => theme.colors.Neutra.light[1]};
  font-size: 1.2rem;
  font-weight: bold;

  &:hover {
    background-color: ${({ theme }) => theme.colors.seconday.main};
    cursor: pointer;
  }
`;

export const HelpText = styled.p`
  font-size: 1.2rem;
  text-align: center;
  a {
    color: ${({ theme }) => theme.colors.primary.medium};
  }
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 1.2rem;
`;
