import React, { ReactNode, ReactElement } from "react"
import { BlogVariant1 } from "../../../utils"
import { ThemeProvider } from "@material-ui/core/styles"
import CssBaseline from "@material-ui/core/CssBaseline"
import useStyles from "./Landing.styles"

type Props = {
  children: ReactNode
}

Landing.defaultProps = {
  sidebar: true,
}

export default function Landing({
  children
}: Props): ReactElement {
  const classes = useStyles()
  return (
    <ThemeProvider theme={BlogVariant1}>
      <CssBaseline />
        {children}
    </ThemeProvider>
  )
}
