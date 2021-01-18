import {makeStyles, Theme, styled} from "@material-ui/core/styles"

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row-reverse",
  },
  content: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    padding: "0 32px",
    paddingRight: "35%",
  },
  aside: {

    padding: 20,
    width: "30%",
    position: "fixed",
  }
}))

export default useStyles
