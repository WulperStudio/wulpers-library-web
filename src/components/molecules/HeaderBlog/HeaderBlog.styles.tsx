import { makeStyles, Theme } from "@material-ui/core/styles"
import { backgrounds } from "../../../utils"

const useStyles = makeStyles((theme: Theme) => ({
  navBar: {
    width: "100%",
    height: "70px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "16px",
  },
  navDisplayFlex: {
    display: "flex",
    justifyContent: "space-between",
  },
  logo: {
    maxHeight: "70px",
  },
  linkText: {
    color: "#3D3769",
  },
  linkTextActive: {
    fontWeight: "bold",
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
      fill: backgrounds.primary,
    },
  },
  buttonNavBar: {
    padding: "5px 15px",
    textTransform: "none",
    borderWidth: "2px",
    borderRadius: "5px",
    "&:hover": {
      borderWidth: "2px",
    },
    "&.MuiButton-containedSecondary": {
      boxShadow: "0px 4px 5px 0px rgba(206, 212, 226, 1)",
      background: "rgba(89, 188, 171, 1)",
    },
  },
  buttonsContainer: {
    display: "flex",
    "& .MuiButtonBase-root, .MuiToggleButtonGroup-root, .MuiAvatar-root": {
      marginLeft: "16px",
    },
  },
  avatar: {
    width: "40px",
    height: "40px",
    border: "2px solid rgba(97, 62, 234, 0.5)",
    "&:hover": {
      cursor: "pointer",
      borderColor: "rgba(97, 62, 234, 1)",
    },
  },
  buttonLike: {
    background: "#F76545",
    "& path": {
      fill: "#FFF",
    },
  },
  separation: {
    borderLeft: "1px solid rgba(236, 236, 251, 1)",
    marginLeft: "15px"
  },
  submenu:{
    boxShadow: "none",
    background: "transparent"
  }
}))

export default useStyles
