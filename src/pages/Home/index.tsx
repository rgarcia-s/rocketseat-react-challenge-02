import { Header } from '../../components/Header'
import { Icon, InfoContentContainer, MainInfoContainer } from './styled'

import mainInfoImage from '../../assets/main-info-image.svg'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

const Home = () => {
  return (
    <>
      <Header />
      <MainInfoContainer>
        <div>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
          <InfoContentContainer>
            <div>
              <Icon iconColor="yellowDark">
                <ShoppingCart weight="fill" />
              </Icon>
              <span>Compra simples e segura</span>
            </div>
            <div>
              <Icon iconColor="black">
                <Package weight="fill" />
              </Icon>
              <span>Embalagem mantém o café intacto</span>
            </div>
            <div>
              <Icon iconColor="yellow">
                <Timer weight="fill" />
              </Icon>
              <span>Entrega rápida e rastreada</span>
            </div>
            <div>
              <Icon iconColor="purple">
                <Coffee weight="fill" />
              </Icon>
              <span>O café chega fresquinho até você</span>
            </div>
          </InfoContentContainer>
        </div>
        <div>
          <img src={mainInfoImage} alt="" />
        </div>
      </MainInfoContainer>
    </>
  )
}

export { Home }
