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

export interface IChildComponentProps {
  pokemon: {
    name: string
    url: string
  }
}

export interface IChildComponentPropsPokemonType {
  name: string
}

export interface IPokemonCard {
  id: number | ''
  name: string
  sprites: {
    other: {
      dream_world: {
        front_default: string
      }
    }
  }
  types: [
    {
      type: {
        name: string
      }
    }
  ]
}
