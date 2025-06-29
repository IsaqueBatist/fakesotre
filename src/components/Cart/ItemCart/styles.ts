import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.Neutra.light[1]};
  border-radius: 12px;
  padding: 1rem;
  margin-bottom: 1rem;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  color: ${({ theme }) => theme.colors.Neutra.dark[1]};
`;

export const Info = styled.div`
  flex: 1 1 0;
`;

export const Name = styled.h4`
  margin: 0;
  font-size: 1.1rem;
`;

export const Price = styled.span`
  color: ${({ theme }) => theme.colors.Neutra.dark[5]};
  font-size: 0.9rem;
`;

export const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const Quantity = styled.span`
  font-size: 1rem;
  width: 32px;
  text-align: center;
`;

export const IconButton = styled.button`
  background: none;
  border: none;
  color: #333;
  cursor: pointer;
  padding: 0.3rem;
  border-radius: 6px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.Neutra.light[2]};
  }
`;

export const RemoveButton = styled(IconButton)`
  color: #d11a2a;

  &:hover {
    background-color: #fddede;
  }
`;
