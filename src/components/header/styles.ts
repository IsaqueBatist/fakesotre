import styled from 'styled-components'

export const MainContainer = styled.header`
  width: 100%;
  height: 6rem;
  background-color: ${({ theme }) => theme.colors?.primary.medium};
  padding: 3rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  color: ${({ theme }) => theme.colors.Neutra.light[1]};
`

export const ImageContainer = styled.img`
  width: 5rem;
  height: 6rem;
  filter: drop-shadow(4px 4px 6px rgba(0, 0, 0, 0.1));
`

export const StoreContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

export const Navbar = styled.nav`
  ul {
    display: flex;
    list-style: none;
    gap: 2rem;

    li a {
      font-size: 1.5rem;
      font-weight: bold;
      color: inherit;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

export const UserName = styled.p`
  font-size: 1.5rem;
`

export const UserProfile = styled.img`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  outline: 0.05rem solid black;
`
