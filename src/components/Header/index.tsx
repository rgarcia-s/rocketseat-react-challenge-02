import { HeaderContainer, HeaderMenu } from './styles'

import logoSVG from '../../assets/logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'

const Header = () => {
  return (
    <HeaderContainer>
      <img src={logoSVG} alt="" />
      <HeaderMenu>
        <span>
          <MapPin weight="fill" />
          Cabo Frio, RJ
        </span>
        <button>
          <ShoppingCart weight="fill" />
        </button>
      </HeaderMenu>
    </HeaderContainer>
  )
}

export { Header }
