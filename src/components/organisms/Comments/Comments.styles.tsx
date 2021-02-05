import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    cursor: "cell",
    zIndex: 99999999,
  },
  ButonComment: {
    position: "fixed",
    bottom: "24px",
    left: "24px",
    background: "#DE6944",
    color: "white",
    "&:hover": {
      background: "#aa5338",
    },
    zIndex: 999999999,
  },
  pinIcon: {
    position: "absolute",
    cursor: "pointer",
    transition: "all .1s ease-in-out",
    "& span": {
      position: "absolute",
      top: 4,
      left: 4,
      color: "white",
      width: "20px",
      textAlign: "center",
      zIndex: 2,
    },
    "&:hover": {
      transform: "scale(1.2)",
    },
  },
  textFieldRoot: {
    padding: "0px",
    margin: "0px",
  },
  cssOutlinedInput: {
    border: "none",
  },
  cssOutlinedInputFocused: {
    border: "none",
  },
  buttonComment: {
    textTransform: "none",
    background: "#B2B2B2",
    marginRight: "10px",
  },
  buttonCancel: {
    textTransform: "none",
    borderColor: "#333333",
    color: "#333333",
  },
})

export default useStyles
