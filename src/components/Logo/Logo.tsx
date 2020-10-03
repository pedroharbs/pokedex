import React from 'react'
import icons from '../../assets/logo.webp'

const Logo = ({ size = 50 }) => (
  <img src={icons} style={{ height: size }} alt={'Pokedex'} />
)

export default Logo
