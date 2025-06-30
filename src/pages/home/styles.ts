import styled from 'styled-components'

export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  align-items: center;
  justify-content: center;
  flex: 1 1 0;
`

export const FiltersContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  gap: 0.8rem;

  width: 100%;
  padding: 0.8rem;
`


export const CategoriesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1 1 0;
  padding: 0.8rem;
  gap: 0.8rem;
`

export const Category = styled.div`
  background-color: ${({ theme }) => theme.colors.seconday.light};
  padding: 0.4rem 0.5rem;
  font-size: 1.2rem;
  border-radius: ${({ theme }) => theme.borderRadius};

  &:hover {
    cursor: pointer;
  }
`
export const CategoryDisabled = styled(Category)`
  background-color: ${({ theme }) => theme.colors.Neutra.light[3]};
  &:hover {
    background-color: ${({ theme }) => theme.colors.seconday.light};
  }
`
