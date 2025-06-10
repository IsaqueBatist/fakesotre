import styled from 'styled-components'

export const CardContainer = styled.article`
  width: 26rem;
  height: 36rem;
  border: 0.1rem solid black;
  background-color: ${({ theme }) => theme.colors.Neutra.light[1]};
  box-shadow: 8px 2px 20px 2px #0000000f;

  display: flex;
  flex-direction: column;
  margin-left: 2rem;

  &:hover {
    scale: calc(1.02);
  }

  transition: all 0.2s ease;
`

export const CardImage = styled.img`
  width: 100%;
  height: 30%;
  object-fit: contain;
  padding: 0.5rem;
`

export const CardBody = styled.section`
  height: 70%;
  width: 100%;
  padding: 0.5rem;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  gap: 0.5rem;

  strong {
    color: ${({ theme }) => theme.colors.primary.main};
    font-size: 2.4rem;
  }

  hr {
    width: 100%;
    color: ${({ theme }) => theme.colors.Neutra.dark[5]};
  }
`

export const ItemName = styled.h3`
  color: ${({ theme }) => theme.colors.Neutra.dark[3]};
  font-size: 1.25rem;
`

export const ItemRating = styled.aside`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.2rem;

  img {
    height: 1.2rem;
  }
`

export const ProductDescription = styled.p`
  color: ${({ theme }) => theme.colors.Neutra.dark[4]};
  font-size: 1.2rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

export const CategoryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding: 0.5rem;
`

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.primary.main};
  padding: 1rem 2rem;
  width: 100%;

  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  margin-top: auto;

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
