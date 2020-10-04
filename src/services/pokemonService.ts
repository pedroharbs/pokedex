import api from './api'
import { IPokemonList, IPokemonCard } from '../interfaces/Interfaces'

export const GetPokemonList = async (limit = 10, offset = 0) => {
  return await api.get<IPokemonList>(`?limit=${limit}&offset=${offset}`)
}

export const GetPokemonDetail = async (id: string | '') => {
  return await api.get<IPokemonCard>(id)
}
