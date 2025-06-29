import styled from "styled-components";

export const CartSidebar = styled.aside<{ visible: boolean }>`
  position: fixed;
  top: 0;
  right: ${({ visible }) => (visible ? '0' : '-400px')};
  width: 400px;
  height: 100vh;
  background-color: #fff;
  box-shadow: -4px 0 10px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  transition: right 0.3s ease;
  z-index: 1000;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  border: none;
  background: none;
  font-size: 1.5rem;
  cursor: pointer;
`;
