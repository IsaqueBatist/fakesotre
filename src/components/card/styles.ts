import styled from 'styled-components'

export const CardContainer = styled.div`
  width: 22rem;
  height: 28rem;
  border: 0.1rem solid black;
  background-color: ${({ theme }) => theme.colors.Neutra.light[1]};

  display: flex;
  flex-direction: column;
  margin-left: 2rem;
`

export const CardImage = styled.img`
  width: 100%;
  height: 30%;
  object-fit: cover;
`

export const CardBody = styled.section`
  height: 70%;
  width: 100%;
  padding: 0.5rem;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  gap: 0.2rem;

  span#price {
    color: ${({ theme }) => theme.colors.primary.main};
    font-size: 1.8rem;
  }

  hr {
    width: 100%;
    color: ${({ theme }) => theme.colors.Neutra.dark[5]};
  }
`

export const ItemName = styled.p`
  color: ${({ theme }) => theme.colors.Neutra.dark[3]};
  font-size: 1rem;
`

export const ItemRating = styled.div`
  display: flex;
  background-color: yellow;
  img {
  }
`

export const ProductDescription = styled.div`
  color: ${({ theme }) => theme.colors.Neutra.dark[4]};
`

export const CategoryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.primary.main};
  padding: 1rem 2rem;
  width: 100%;
  height: 2.4rem;

  color: white;
  font-size: 1rem;
  font-weight: bold;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  border: none;
  border-radius: 0.6rem;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors?.primary?.medium};
  }
`
