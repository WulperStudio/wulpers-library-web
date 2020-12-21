import { makeStyles, Theme } from "@material-ui/core/styles"
import {backgrounds} from "../../../utils";

const useStyles = makeStyles((theme: Theme) => ({
  chipAvatar:{
    background:"transparent"
  },
  fabTable: {
    background: "none",
    border: "none",
    color: backgrounds.primary,
    boxShadow: "0px 4px 12px 0px rgba(178, 190, 218, 0.5)",
    "& path": {
      fill: backgrounds.primary
    }
  },
}))

export default useStyles
