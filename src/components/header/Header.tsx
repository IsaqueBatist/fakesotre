import { ShoppingCart } from 'lucide-react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Logo from '../../assets/svg/fakestore.svg'
import { selectProductsCount } from '../../redux/cart/cart.selectors'
import type { RootState } from '../../redux/store'
import { logout } from '../../redux/user/slice'
import Cart from '../Cart/Cart'
import {
  DropdownMenu,
  ImageContainer,
  MainContainer,
  Navbar,
  ProfileWrapper,
  StoreContainer,
  UserContainer,
  UserName,
  UserProfile,
} from './styles'

export default function Header() {
  const [cartVisibla, setCartVisible] = useState(false)

  const username = useSelector((state: RootState) => state.userReducer.currentUser?.username)

  const productCount = useSelector(selectProductsCount)

  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logout())
    localStorage.removeItem('token')
  }

  return (
    <MainContainer>
      <StoreContainer>
        <ImageContainer src={Logo} alt="FakeStore Icon with Title" />
        <h2>FakeStore</h2>
      </StoreContainer>
      <Navbar>
        <ul>
          <li>
            <Link to="/">Products</Link>
          </li>
        </ul>
      </Navbar>
      <UserContainer role="complementary">
        <UserName>{username}</UserName>
        <ProfileWrapper>
          <UserProfile src={`https://api.dicebear.com/7.x/adventurer/svg?seed=${username}`} />
          <DropdownMenu>
            <button type="button" onClick={handleLogout}>
              Sair
            </button>
          </DropdownMenu>
        </ProfileWrapper>
        <ShoppingCart size={30} onClick={() => setCartVisible(true)} />
        <Cart isVisible={cartVisibla} setCartVisible={setCartVisible} />({productCount})
      </UserContainer>
    </MainContainer>
  )
}
