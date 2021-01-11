import {makeStyles} from "@material-ui/core/styles"
import {backgrounds} from "../../../utils";

const useStyles = makeStyles({
  root: {
    position: "relative",
    boxShadow: "0px 24px 64px 0px rgba(0, 0, 0, 0.04)"
  },
  cardMedia: {
    borderRadius: "10px",
    maxHeight: "275px",
    padding: 0
  },
  cardAction: {
    textAlign: 'initial'
  },
  bottom: {
    "& .MuiCardContent-root": {
      paddingBottom: 0
    }
  },
  left: {
    "& .MuiCardContent-root": {
      paddingLeft: 0
    }
  },
  right: {
    "& .MuiCardContent-root": {
      paddingRight: 0
    }
  },
  buttonsAreaBottom: {
    position: "absolute",
    bottom: 40,
    right: 40
  },
  buttonsAreaTop: {
    position: "absolute",
    top: 40,
    right: 40
  },
  buttonLike: {
    background: "#F76545",
    border: "2px solid #FFF",
    marginLeft: "10px",
    "& path": {
      fill: "#FFF"
    }
  },
  buttonLink: {
    background: "#B2BEDA",
    border: "2px solid #FFF",
    marginLeft: "10px",
    "& path": {
      fill: "#FFF"
    }
  }
})

export default useStyles;
