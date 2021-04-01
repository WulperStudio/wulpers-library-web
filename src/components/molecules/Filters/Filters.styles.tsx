import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    display: "flex",
    background: "#FFFFFF",
    boxShadow: "0px 4px 26px rgba(0, 0, 0, 0.06)",
    borderRadius: 6,
    padding: 7,
    "& button": {
      textTransform: "none",
      margin: "0 2px",
      padding: 4,
    },
    marginBottom: 24
  },
  buttonActive: {
    backgroundColor: "rgba(113, 85, 246, 0.15)",
    borderEadius: 5
  },
});

export default useStyles;
