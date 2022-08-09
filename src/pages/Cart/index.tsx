import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
  Trash,
} from 'phosphor-react'
import { Header } from '../../components/Header'
import {
  AsideContentContainer,
  Container,
  ContentContainer,
  ContentContainerTitle,
} from './styles'

import expressoSVG from '../../assets/expresso.svg'

const Cart = () => {
  return (
    <>
      <Header />
      <Container>
        <main>
          <h4>Complete seu pedido</h4>
          <ContentContainer>
            <ContentContainerTitle>
              <MapPinLine />
              <div>
                <span>Endereço de Entrega</span>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </ContentContainerTitle>
            <form>
              <input type="text" placeholder="CEP" />
              <input type="text" placeholder="Rua" />
              <div>
                <input type="text" placeholder="Número" />
                <input type="text" placeholder="Complemento" />
              </div>
              <div>
                <input type="text" placeholder="Bairro" />
                <input type="text" placeholder="Cidade" />
                <input type="text" placeholder="UF" />
              </div>
            </form>
          </ContentContainer>

          <ContentContainer>
            <ContentContainerTitle>
              <CurrencyDollar />
              <div>
                <span>Pagamento</span>
                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
            </ContentContainerTitle>
            <div>
              <button type="button">
                <CreditCard />
                Cartão de crédito
              </button>
              <button type="button">
                <Bank />
                Cartão de débito
              </button>
              <button type="button">
                <Money />
                Dinheiro
              </button>
            </div>
          </ContentContainer>
        </main>

        <aside>
          <h4>Cafés selecionados</h4>
          <AsideContentContainer>
            <div>
              <img src={expressoSVG} alt="" />
              <div>
                <span>Expresso Tradicional</span>
                <div>
                  <button>+</button>
                  <input type="number" />
                  <button>+</button>

                  <button>
                    <Trash />
                    Remover
                  </button>
                </div>
              </div>
              <strong>R$ 9,90</strong>
            </div>

            <span>Total de itens R$ 29,70</span>
            <span>Entrega R$ 3,50</span>
            <strong>Total R$ 33,20</strong>

            <button>Confirmar Pedido</button>
          </AsideContentContainer>
        </aside>
      </Container>
    </>
  )
}

export { Cart }
