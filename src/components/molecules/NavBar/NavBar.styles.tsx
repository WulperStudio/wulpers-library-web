import {makeStyles, Theme} from "@material-ui/core/styles"
import {backgrounds} from "../../../utils"

const useStyles = makeStyles((theme: Theme) => ({
  navBar: {
    width: "100%",
    height: "64px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "16px"
  },
  title: {
    fontSize: "1.25rem",
    fontFamily: "Poppins, sans-serif",
    fontWeight: 500,
    lineHeight: "1.6",
    margin: 0
  },
  bold: {
    fontWeight: 700
  },
  boldUnderlined: {
    fontWeight: 700,
    borderBottom: "3px solid #613EEA"
  },
  buttonBack: {
    background: "none",
    border: "none",
    marginRight: "16px",
    color: backgrounds.primary,
    boxShadow: "0px 4px 10px 0px rgba(178, 190, 218, 0.5)",
  },
  favNavBar: {
    background: "none",
    border: "none",
    color: backgrounds.primary,
    boxShadow: "0px 4px 10px 0px rgba(178, 190, 218, 0.5)",
    "& path": {
      fill: backgrounds.primary
    }
  },
  buttonNavBar: {
    boxShadow: "0px 3px 5px 0px rgba(217, 217, 217, 1)",
  },
  buttonsContainer: {
    "& .MuiButtonBase-root, .MuiToggleButtonGroup-root": {
      marginLeft: "16px"
    }
  }
}))

export default useStyles
