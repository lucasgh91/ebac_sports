import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Produto as ProdutoType } from '../App'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/'
  }),
  endpoints: (build) => ({
    getProdutos: build.query<ProdutoType[], void>({
      query: () => 'api/ebac_sports'
    })
  })
})
export const { useGetProdutosQuery } = api
export default api
