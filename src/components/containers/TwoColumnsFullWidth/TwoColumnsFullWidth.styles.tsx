import {makeStyles, Theme} from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: '100vh',
    background: '#F6F7FB'
  },
  paper: {
    boxShadow: "0px 4px 26px 0px rgba(0, 0, 0, 0.06)",
    padding: theme.spacing(8),
    "& .MuiContainer-root & div":{
      padding: 0,
    }
  }
}));

export default useStyles;