import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  max-width: 90rem;
  margin: 0 auto;
  padding: 2rem 1rem;
`
export const HeaderMenu = styled.div`
  display: flex;
  align-items: center;

  gap: 0.75rem;

  span {
    display: flex;
    align-items: center;

    height: 2.375rem;
    padding: 0.5rem;
    gap: 0.25rem;

    border-radius: 6px;

    background: ${(props) => props.theme['purple-light']};
    color: ${(props) => props.theme['purple-dark']};
    font-size: 0.875rem;
    line-height: 1.3;

    svg {
      width: 1.375rem;
      height: 1.375rem;
      color: ${(props) => props.theme.purple};
    }
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;

    height: 2.375rem;
    width: 2.375rem;

    background: ${(props) => props.theme['yellow-light']};

    border-radius: 6px;
    border: none;

    svg {
      width: 1.375rem;
      height: 1.375rem;
      color: ${(props) => props.theme['yellow-dark']};
    }

    position: relative;

    span {
      position: absolute;
      height: 1.25rem;
      width: 1.25rem;
      top: -0.625rem;
      right: -0.625rem;

      padding: 0;

      border-radius: 1000px;

      background-color: ${(props) => props.theme['yellow-dark']};

      display: flex;
      align-items: center;
      justify-content: center;

      font-size: 0.75rem;
      font-weight: 700;
      line-height: 1;
      color: ${(props) => props.theme.white};
    }
  }
`
