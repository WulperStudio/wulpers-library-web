import React from "react"
import Container from "@material-ui/core/Container"
import Button from "@material-ui/core/Button"
import Fab from "@material-ui/core/Fab"
import WhatsappIcon from "../../icons/Whatsapp"
import useStyles from "./HeaderLandings.styles"

export type HeaderLandingsProps = {
  backgroundSrc?: string,
  logoSrc?: string,
  title?: string
}

export default function HeaderLandings({
  backgroundSrc,
  logoSrc,
  title
}: HeaderLandingsProps) {
  const classes = useStyles()
  return (
    <header className={classes.header}>
      {backgroundSrc && (
        <div className={classes.backgroundContaniner}><img src={backgroundSrc} className={classes.backgroundImage} /></div>
      )}
      <Container className={classes.container} maxWidth="lg">
        <nav className={classes.navBar}>
          <div>{logoSrc && <img src={logoSrc} />}</div>
          <div className={classes.buttonsContainer}>
            <a href="#">Productos</a>
            <a href="#">Quienes somos</a>
            <a href="#">Filiales</a>
            <Button variant="contained" color="primary">
              Novedades
            </Button>
          </div>
        </nav>
        <div className={classes.contentHeader}>
          <h1 className={classes.title}>{title}</h1>
          <Button variant="contained" color="primary">
            Coticemos
          </Button>
        </div>
        <Fab color="primary" className={classes.whatsapp}>
          <WhatsappIcon />
        </Fab>
      </Container>
      <div className={classes.style1} />
    </header>
  )
}
