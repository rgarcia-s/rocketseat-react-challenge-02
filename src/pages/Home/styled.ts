import styled from 'styled-components'
import backgroundImage from '../../assets/main-background.png'

export const MainInfoContainer = styled.div`
  background-image: url(${backgroundImage});

  max-width: 90rem;
  height: 34rem;
  margin: 0 auto;
  padding: 5.75rem 10rem;

  display: flex;
  gap: 3.5rem;

  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    font-size: 3rem;
    line-height: 1.3;
    color: ${(props) => props.theme['base-title']};

    margin-bottom: 1rem;
  }

  p {
    font-size: 1.25rem;
    line-height: 1.3;
    color: ${(props) => props.theme['base-subtitle']};

    margin-bottom: 4.125rem;
  }
`

export const InfoContentContainer = styled.div`
  display: flex;

  max-width: 35.4375rem;

  flex-wrap: wrap;

  row-gap: 1.25rem;

  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;

    gap: 0.75rem;

    &:nth-of-type(2n) {
      width: 18.375rem;
    }
  }
`

const ICON_COLORS = {
  yellow: 'yellow',
  yellowDark: 'yellow-dark',
  black: 'base-text',
  purple: 'purple',
} as const

interface IconProps {
  iconColor: keyof typeof ICON_COLORS
}

export const Icon = styled.div<IconProps>`
  background: ${(props) => props.theme[ICON_COLORS[props.iconColor]]};

  height: 2rem;
  width: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;

  svg {
    color: ${(props) => props.theme.background};

    width: 1rem;
  }
`
