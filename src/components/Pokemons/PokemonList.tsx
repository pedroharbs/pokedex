import React, { useState, useEffect } from 'react'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

import { IPokemonList, IPagination } from '../../interfaces/Interfaces'
import { GetPokemonList } from '../../services/pokemonService'
import PokemonCard from './PokemonCard'
import { useStyles } from './Styles'

const PokemonList: React.FC = () => {
  const classes = useStyles()

  const [limitPreview, setLimitPreview] = useState(10)
  const [offsetPreview, setOffsetPreview] = useState(0)
  const [limitNext, setLimitNext] = useState(10)
  const [offsetNext, setOffsetNext] = useState(0)
  const [pagination, setPagination] = useState<IPagination>({
    limit: 12,
    offset: 0,
  })
  const [data, setData] = useState<IPokemonList | undefined>({
    count: 0,
    next: '',
    previous: null,
    results: [
      {
        name: '',
        url: '',
      },
    ],
  })

  useEffect(() => {
    GetPokemonList(pagination.limit, pagination.offset).then((element: any) => {
      if (element.data) {
        if (element.data.next) {
          setLimitNext(element.data.next.match('limit=?(.*)')[1])
          setOffsetNext(element.data.next.match('offset=(.*?)&')[1])
        }
        if (element.data.preview) {
          setLimitPreview(element.data.preview.match('limit=?(.*)')[1])
          setOffsetPreview(element.data.preview.match('offset=(.*?)&')[1])
        }
        setData(element.data)
      }
    })
  }, [limitNext, limitPreview, offsetNext, offsetPreview, pagination])

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <React.Fragment>
          {data?.results.map((pokemon: any, idx: any) => (
            <Grid item xs={4}>
              <Paper className={classes.paper}>
                <PokemonCard key={idx} pokemon={pokemon} />
              </Paper>
            </Grid>
          ))}
        </React.Fragment>
      </Grid>
    </div>
  )
}

export default PokemonList
