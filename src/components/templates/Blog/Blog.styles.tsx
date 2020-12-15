import {makeStyles, Theme} from "@material-ui/core/styles"

const useStyles = makeStyles((theme: Theme) => ({
  navbarDisplayFlex: {
    display: `flex !important`,
    justifyContent: `space-between !important`
  },
  navDisplayFlex: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  linkText: {
    textDecoration: 'none',
    color: '#3D3769'
  },
  logo: {
    borderRadius: '0 !important',
    background: '#FFFFFF'
  },
  rightMenu: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar:{
    border: "2px solid #613EEA",
    height: 35,
    width: 35,
    marginLeft: 28
  }
}))

export default useStyles
