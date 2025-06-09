import Logo from '../../assets/svg/fakestore.svg'
import {
  ImageContainer,
  MainContainer,
  Navbar,
  StoreContainer,
  UserContainer,
  UserName,
  UserProfile,
} from './styles'

export default function Header() {
  return (
    <MainContainer>
      <StoreContainer>
        <ImageContainer src={Logo} alt="FakeStore Icon with Title" />
        <h2>FakeStore</h2>
      </StoreContainer>
      <Navbar>
        <ul>
          <li>
            <a href="#">Products</a>
          </li>
        </ul>
      </Navbar>
      <UserContainer role="complementary">
        <UserName>Username</UserName>
        <UserProfile src="https://placehold.co/50" />
      </UserContainer>
    </MainContainer>
  )
}
