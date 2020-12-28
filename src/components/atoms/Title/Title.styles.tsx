import {makeStyles, Theme} from "@material-ui/core/styles"

const useStyles = makeStyles((theme: Theme) => ({
  bold: {
    fontWeight: 700
  },
  boldUnderlined: {
    fontWeight: 700,
    borderBottom: "3px solid #613EEA"
  }
}))

export default useStyles
