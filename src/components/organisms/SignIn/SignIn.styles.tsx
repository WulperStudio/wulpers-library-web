import {makeStyles} from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
  paper: {
    //marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    textTransform: 'none',
    margin: theme.spacing(3, 0, 2),
  },
  link: {
    fontWeight: 'bolder',
    color: theme.palette.primary.main,
    cursor: 'pointer',
    '&:hover': {
      textDecoration: 'underline'
    }
  }
}));

export default useStyles;
