import { capitalize } from '@material-ui/core'
import React from 'react'

import { useStyles } from './Styles'

import { IChildComponentPropsPokemonType } from '../../interfaces/Interfaces'

const PokemonTypes: React.FC<IChildComponentPropsPokemonType> = (props) => {
  const classes = useStyles()

  const getStyles = (name: string) => {
    return {
      backgroundColor: selectColor(name),
    }
  }

  const selectColor = (name: string) => {
    switch (name) {
      case 'normal':
        return '#A8A77A'
      case 'fire':
        return '#ee8130'
      case 'water':
        return '#6390f0'
      case 'electric':
        return '#f7d02c'
      case 'grass':
        return '#7ac74c'
      case 'ice':
        return '#96d9d6'
      case 'fighting':
        return '#c22e28'
      case 'poison':
        return '#a33ea1'
      case 'ground':
        return '#e2bf65'
      case 'flying':
        return '#a98ff3'
      case 'psychic':
        return '#f95587'
      case 'bug':
        return '#a6b91a'
      case 'rock':
        return '#b6a136'
      case 'ghost':
        return '#735797'
      case 'dragon':
        return '#6f35fc'
      case 'dark':
        return '#705746'
      case 'steel':
        return '#b7b7ce'
      case 'fairy':
        return '#d685ad'
      default:
        return undefined
    }
  }

  return (
    <span className={classes.pokemonType} style={getStyles(props.name)}>
      {capitalize(props.name)}
    </span>
  )
}

export default PokemonTypes
