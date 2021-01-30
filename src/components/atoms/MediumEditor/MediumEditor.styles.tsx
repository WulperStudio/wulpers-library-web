import React from "react"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  mediumEditor: {
    outline: "none",
    transition: "border-bottom-color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    borderBottom: "1px solid rgba(0, 0, 0, 0.42)",
    position:"relative",
    paddingBottom: "8px",
    "&::before": {
      left: 0,
      right: 0,
      bottom: 0,
      content: "\" \"",
      position: "absolute",
      transform: "scaleX(0)",
      transition: "transform 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms",
      borderBottom: "2px solid #613EEA",
      pointerEvents: "none",
    },
    "&:focus": {
      "&::before": {
        transform: "scaleX(1)",
      },
    },
  },
}))

export default useStyles
