import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type CarrinhoState = {
  itens: Produto[]
}

const initialState: CarrinhoState = {
  itens: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Produto>) => {
      const produtoAction = action.payload

      if (state.itens.find((produto) => produto.id === produtoAction.id)) {
        alert('Item já adicionado')
      } else {
        state.itens.push(produtoAction)
      }
    }
  }
})

export const { add } = carrinhoSlice.actions
export default carrinhoSlice.reducer
