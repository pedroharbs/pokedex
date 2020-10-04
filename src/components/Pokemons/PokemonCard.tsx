import { capitalize } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { IChildComponentProps, IPokemonCard } from '../../interfaces/Interfaces'
import { GetPokemonDetail } from '../../services/pokemonService'
import { padNumber } from '../../utils/utils'
import Loader from '../Loader/Loader'
import PokemonTypes from '../Pokemons/PokemonTypes'
import { useStyles } from './Styles'

const PokemonCard: React.FC<IChildComponentProps> = (props) => {
  const classes = useStyles()
  const [pokemonId, setPokemonID] = useState<string>('0')
  const [data, setData] = useState<IPokemonCard>({
    id: 0,
    name: '',
    sprites: {
      other: {
        dream_world: {
          front_default: '',
        },
      },
    },
    types: [
      {
        type: {
          name: '',
        },
      },
    ],
  })

  useEffect(() => {
    if (props.pokemon.url) {
      const pokemonId = props.pokemon.url.match('pokemon[/](.*)')
      setPokemonID(pokemonId ? pokemonId[1].toString() : '0')
      GetPokemonDetail(pokemonId ? pokemonId[1] : '').then((element: any) => {
        if (element.data) {
          setData(element.data)
        }
      })
    }
  }, [props.pokemon, props.pokemon.url])

  if (data.id === 0) {
    return Loader({ size: 150 })
  } else {
    return (
      <div>
        <Link className={classes.link} to={`/pokemon/${pokemonId}`}>
          <div className={classes.pokemonCardImage}>
            <img
              src={data.sprites.other.dream_world.front_default}
              style={{ height: 100, width: 100 }}
              alt={props.pokemon.name}
            />
          </div>
          <div className={classes.pokemonCardContent}>
            <h3 className={classes.pokemonCardName}>
              {capitalize(props.pokemon.name)}{' '}
              <span className={classes.pokemonCardID}>
                #{padNumber(data.id, 3)}
              </span>
            </h3>
            <h4 className="title">{'Types'}</h4>
            {data.types.map((element: any) => {
              return <PokemonTypes name={element.type.name} />
            })}
          </div>
        </Link>
      </div>
    )
  }
}

export default PokemonCard
