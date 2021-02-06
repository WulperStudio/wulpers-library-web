import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
  buttonDelete: {
    marginRight: "12px",
    background:"#FFF",
    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
    "& svg": {
        width: "18px",
        heigth: "18px",
        "& path": {
          fill: "#613EEA",
        },
      },
  },
  buttonMenu: {
    background:"#FFF",
    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
    "& svg": {
        "& path": {
          fill: "#613EEA",
        },
      },
  },
})

export default useStyles
