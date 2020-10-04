import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    boxShadow:
      '0 10px 15px -3px rgba(0,0,0,.1), 0 4px 6px -2px rgba(0,0,0,.05)',
    transition: '0.3s',
    borderRadius: '5px',
    '&:hover': {
      boxShadow: '0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)',
    },
    cursor: 'pointer',
  },
  pokemonType: {
    borderRadius: '.4rem',
    padding: '.25rem',
    margin: '.5rem',
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  pokemonCardContent: {
    padding: '8px 16px',
  },
  pokemonCardName: {
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: '20px',
  },
  pokemonCardImage: {
    borderRadius: '5px 5px 0 0',
  },
  pokemonCardID: {
    fontWeight: 'normal',
  },
  link: {
    textDecoration: 'none',
    color: 'rgba(0, 0, 0, 0.54)',
  },
}))

export { useStyles }
