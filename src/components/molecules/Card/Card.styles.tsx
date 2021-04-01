import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    padding: "16px",
    boxShadow: "0px 4px 26px 0px rgba(0, 0, 0, 0.06)",
  },
  cardHeader: {
    padding: "0 0 16px",
  },
  avatar: {},
  action: {},
  container: {
    borderTop: "1px solid rgba(236, 236, 251, 1)",
    paddingTop: "16px",
    display: "flex",
    justifyContent: "space-around",
  },
  col: {
    textAlign: "center",
  },
});

export default useStyles;
