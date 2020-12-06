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
    paddingLeft: 320
  },
  aside: {
    height: "100vh",
    padding: 20,
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    width: 260,
    position: "fixed",
  }
}))

export default useStyles
