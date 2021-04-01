import React, { ReactNode, ReactElement } from "react"
import { BlogVariant1 } from "../../../utils"
import { ThemeProvider } from "@material-ui/core/styles"
import CssBaseline from "@material-ui/core/CssBaseline"
import useStyles from "./Blog.styles"
import Container from "@material-ui/core/Container"
import HeaderBlog from "../../molecules/HeaderBlog"

type Props = {
  children: ReactNode
  buttonBackOnclick?: (e: any) => any
  navBarConfig?: any
  navBarLinks?: any,
  nameBlog: string,
  logo?: string
}

Blog.defaultProps = {
  sidebar: true,
}

export default function Blog({
  children,
  buttonBackOnclick,
  navBarConfig,
  navBarLinks,
  nameBlog,
  logo,
}: Props): ReactElement {
  const classes = useStyles()
  return (
    <ThemeProvider theme={BlogVariant1}>
      <CssBaseline />
      <Container maxWidth="lg">
        <HeaderBlog
          buttonBackOnclick={buttonBackOnclick}
          navBarConfig={navBarConfig}
          logo={logo}
          links={navBarLinks}
        />
        {children}
        <footer className={classes.footer}>
          Powered by <strong>{nameBlog}</strong>
        </footer>
      </Container>
    </ThemeProvider>
  )
}
