import React, {ReactNode, ReactElement} from "react"
import {BlogVariant1} from "../../../utils"
import {ThemeProvider} from "@material-ui/core/styles"
import CssBaseline from "@material-ui/core/CssBaseline"
import useStyles from "./Blog.styles"
import Toolbar from "@material-ui/core/Toolbar"
import IconButton from "@material-ui/core/IconButton"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import Container from "@material-ui/core/Container"
import Button from "@material-ui/core/Button"
import Avatar from '@material-ui/core/Avatar'

type Props = {
  children: ReactNode
}

Blog.defaultProps = {
  sidebar: true
}

export default function Blog({children}: Props): ReactElement {
  const classes = useStyles()
  return (
    <ThemeProvider theme={BlogVariant1}>
      <CssBaseline/>
      <Toolbar>
        <Container maxWidth="lg" className={classes.navbarDisplayFlex}>
          <IconButton className={classes.logo} edge="start" color="inherit" aria-label="home">
            Boola<strong>News</strong>
          </IconButton>
          <List component="nav" aria-labelledby="main navigation" className={classes.navDisplayFlex}>
            <a href="/hola" key="Business" className={classes.linkText}>
              <ListItem button>
                <ListItemText primary="Business"/>
              </ListItem>
            </a>
            <a href="/hola" key="AgTech" className={classes.linkText}>
              <ListItem button>
                <ListItemText primary="AgTech"/>
              </ListItem>
            </a>
            <a href="/hola" key="FinTech" className={classes.linkText}>
              <ListItem button>
                <ListItemText primary="FinTech"/>
              </ListItem>
            </a>
            <a href="/hola" key="AdTech" className={classes.linkText}>
              <ListItem button>
                <ListItemText primary="AdTech"/>
              </ListItem>
            </a>
            <a href="/hola" key="Cripto" className={classes.linkText}>
              <ListItem button>
                <ListItemText primary="Cripto"/>
              </ListItem>
            </a>
            <a href="/hola" key="Industry 4.0" className={classes.linkText}>
              <ListItem button>
                <ListItemText primary="Industry 4.0"/>
              </ListItem>
            </a>
          </List>
          <div className={classes.rightMenu}>
            <Button variant="outlined" color="primary">
              Filters
            </Button>
            <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/3.jpg" className={classes.avatar}/>
          </div>
        </Container>
      </Toolbar>
      <Container maxWidth="lg">
        <>{children}</>
      </Container>
    </ThemeProvider>
  )
}
