export interface IPokemonList {
  count: number
  next: string
  previous: null
  results: [
    {
      name: string
      url: string
    }
  ]
}

export interface IPagination {
  limit: number
  offset: number
}
