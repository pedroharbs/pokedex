import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { useStyles } from './Styles'

const About: React.FC = () => {
  const classes = useStyles()

  return (
    <>
      <article className={classes.article}>
        <p>
          {
            'The intuit of this project is basically training React.JS consuming the '
          }
          <a className={classes.links} href={'https://pokeapi.co/'}>
            PokeApi
          </a>
        </p>
        <p>
          {
            ' (The RESTful Pokemon API) and over the time improving new features and libs as recoil.JS and SWR.'
          }
        </p>
        <p>
          {'Repo: '}{' '}
          <a
            className={classes.links}
            href={'https://github.com/harbsprog/pokedex'}
          >
            Pokedex
          </a>
        </p>
      </article>
      <footer className={classes.footer}>
        <p>
          Made with <FontAwesomeIcon className={classes.love} icon={faHeart} />{' '}
          in <strong>Brazil</strong>.
        </p>
      </footer>
    </>
  )
}

export default About
