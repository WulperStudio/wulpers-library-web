import {makeStyles, Theme} from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    top: "7px",
    position: "relative"
  },
  fab: {
    width: "40px",
    height: "40px",
    background: "#EEEDF3",
    color: "#B9C0DE",
    borderRadius: "50%",
    display: "inherit",
    alignItems: "inherit",
    justifyContent: "inherit"
  },
  left: {
    borderRadius: "50px",
    padding: "2px 8px 2px 4px",
    border: "none",
    background: "#EEEDF3",
    "&.Mui-selected": {
      backgroundColor: "#EEEDF3",
      "&:hover": {
        backgroundColor: "#EEEDF3"
      },
      "& div": {
        background: "#FFF",
        color: "#3D3769"
      }
    }
  },
  right: {
    borderRadius: "50px",
    padding: "2px 4px 2px 8px",
    border: "none",
    background: "#EEEDF3",
    "&.Mui-selected": {
      backgroundColor: "#EEEDF3",
      "&:hover": {
        backgroundColor: "#EEEDF3"
      },
      "& div": {
        background: "#FFF",
        color: "#3D3769"
      }
    }
  }
}))

export default useStyles;