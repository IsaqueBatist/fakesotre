import { ShoppingCart } from "lucide-react";
import Logo from "../../assets/svg/fakestore.svg";
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
} from "./styles";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import { logout } from "../../redux/user/slice";
import { Link } from "react-router-dom";
import { useState } from "react";
import Cart from "../Cart/Cart";
import { selectProductsCount } from "../../redux/cart/cart.selectors";

export default function Header() {
  const [cartVisibla, setCartVisible] = useState(false);

  const username = useSelector(
    (state: RootState) => state.userReducer.currentUser?.username
  );

  const productCount = useSelector(selectProductsCount)

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("token");
  };

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
          <UserProfile src="https://placehold.co/50" />
          <DropdownMenu>
            <button type="button" onClick={handleLogout}>
              Sair
            </button>
          </DropdownMenu>
        </ProfileWrapper>
        <ShoppingCart size={30} onClick={() => setCartVisible(true)} />
        <Cart isVisible={cartVisibla} setCartVisible={setCartVisible} />
        ({productCount})
      </UserContainer>
    </MainContainer>
  );
}
