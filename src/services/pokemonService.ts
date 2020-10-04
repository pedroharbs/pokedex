import React from 'react'
import api from './api'
import { IPokemonList } from '../interfaces/Interfaces'

export const GetPokemonList = async (limit = 10, offset = 0) => {
  const pokemons = await api.get<IPokemonList>(
    `?limit=${limit}&offset=${offset}`
  )

  return pokemons
}
