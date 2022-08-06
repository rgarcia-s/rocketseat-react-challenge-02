import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background: ${(props) => props.theme['base-card']};

  width: 16rem;
  height: 19.375rem;

  padding: 1.25rem;

  border-radius: 6px 36px;

  img {
    width: 7.5rem;

    margin: -2.5rem 0 0.75rem;
  }

  div {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    gap: 0.25rem;

    margin-bottom: 1rem;
  }

  span {
    background: ${(props) => props.theme['yellow-light']};
    color: ${(props) => props.theme['yellow-dark']};

    font-size: 0.625rem;
    font-weight: 700;
    text-transform: uppercase;
    line-height: 1.3;

    padding: 0.25rem 0.5rem;
    border-radius: 100px;
  }

  h3 {
    font-size: 1.25rem;
    line-height: 1.3;

    margin-bottom: 0.5rem;
  }

  p {
    font-size: 0.875rem;
    line-height: 1.3;
    text-align: center;

    color: ${(props) => props.theme['base-label']};

    margin-bottom: 2rem;
  }
`

export const AddToCartForm = styled.form`
  display: flex;
  align-items: center;

  label {
    font-size: 0.875rem;
    line-height: 1.3;
  }

  strong {
    font-size: 1.5rem;
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;

    margin-right: 1.5rem;
  }
`

export const AddToCartInput = styled.input`
  padding: 0.5rem;

  height: 2.375rem;
  width: 1.5rem;

  border: none;

  background: ${(props) => props.theme['base-button']};

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  -moz-appearance: textfield;

  &:focus {
    position: relative;
  }
`

export const ChangeAmountButton = styled.button`
  height: 2.375rem;
  width: 1.5rem;

  border: none;

  background: ${(props) => props.theme['base-button']};

  color: ${(props) => props.theme.purple};

  font-size: 1.25rem;

  &:focus {
    position: relative;
  }

  &:nth-of-type(1) {
    border-radius: 6px 0 0 6px;
  }

  &:nth-of-type(2) {
    border-radius: 0 6px 6px 0;

    margin-right: 0.5rem;
  }
`

export const AddToCartButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  border-radius: 6px;

  padding: 0.5rem;

  background: ${(props) => props.theme['purple-dark']};

  svg {
    color: ${(props) => props.theme['base-card']};

    width: 1.375rem;
    height: 1.375rem;
  }
`
