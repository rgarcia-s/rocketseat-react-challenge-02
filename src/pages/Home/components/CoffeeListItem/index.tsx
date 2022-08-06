import {
  AddToCartButton,
  AddToCartForm,
  AddToCartInput,
  ChangeAmountButton,
  Container,
} from './styles'

import expressoSVG from '../../../../assets/expresso.svg'
import { ShoppingCart } from 'phosphor-react'
import { useState } from 'react'

const CoffeeListItem = () => {
  const [amountToAdd, setAmountToAdd] = useState(1)

  const handleAddAmountToAdd = () => {
    setAmountToAdd((state) => {
      if (state < 9) {
        return state + 1
      }
      return state
    })
  }

  const handleSubtractAmountToAdd = () => {
    setAmountToAdd((state) => {
      if (state > 1) {
        return state - 1
      }
      return state
    })
  }

  return (
    <Container>
      <img src={expressoSVG} alt="Café expresso" />

      <span>Tradicional</span>

      <h3>Expresso Tradicional</h3>

      <p>O tradicional café feito com água quente e grãos moídos</p>

      <AddToCartForm>
        <label>
          R$ <strong>9,90</strong>
        </label>

        <ChangeAmountButton type="button" onClick={handleSubtractAmountToAdd}>
          -
        </ChangeAmountButton>
        <AddToCartInput
          readOnly
          type="number"
          min={1}
          max={9}
          placeholder="0"
          value={amountToAdd}
        />
        <ChangeAmountButton type="button" onClick={handleAddAmountToAdd}>
          +
        </ChangeAmountButton>

        <AddToCartButton>
          <ShoppingCart weight="fill" />
        </AddToCartButton>
      </AddToCartForm>
    </Container>
  )
}

export { CoffeeListItem }
