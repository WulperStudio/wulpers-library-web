import {makeStyles, Theme, styled} from "@material-ui/core/styles"

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    display: "flex",
    justifyContent: "space-between"
  },
  content: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    padding: "0 32px",
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  }
}))

export default useStyles
