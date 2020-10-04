import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  footer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '100px',
    paddingBottom: '3rem',
  },
  love: {
    color: '#DB3D44',
    display: 'inline-flex',
    verticalAlign: 'middle',
    fontSize: '1.2em',
  },
  article: {
    fontWeight: 'bold',
    fontSize: '20px',
    textAlign: 'center',
  },
  links: {
    textDecoration: 'none',
    color: '#DB3D44',
  },
}))

export { useStyles }
