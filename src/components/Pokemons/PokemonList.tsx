import React, { useState, useEffect } from 'react'
import { IPokemonList, IPagination } from '../../interfaces/Interfaces'
import { GetPokemonList } from '../../services/pokemonService'
import Loader from '../Loader/Loader'

const PokemonList: React.FC = () => {
  const [limitPreview, setLimitPreview] = useState(10)
  const [offsetPreview, setOffsetPreview] = useState(0)
  const [limitNext, setLimitNext] = useState(10)
  const [offsetNext, setOffsetNext] = useState(0)
  const [pagination, setPagination] = useState<IPagination>({
    limit: 10,
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

  if (!data) {
    return Loader({ size: 150 })
  }

  return (
    <div>
      {data.results.map((pokemon: any, idx: any) => (
        <h1 key={idx}>{pokemon.name}</h1>
      ))}
    </div>
  )
}

export default PokemonList
