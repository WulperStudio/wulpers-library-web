import React, {ReactChild, ReactElement} from "react"
import useStyles from "./NavBar.styles"
import Fab from "@material-ui/core/Fab"
import ArrowBackIcon from "@material-ui/icons/ArrowBack"
import reactStringReplace from "react-string-replace"
import Tooltip from "@material-ui/core/Tooltip"
import Switch from "../../atoms/SwitchTable"
import Button from "@material-ui/core/Button"

export type navBarConfigType = {
  title: string,
  onClick?: (x: any) => any,
  icon?: ReactChild,
  type: "Fav" | "Switch" | "Button"
}

export type navBarProps = {
  title: string,
  buttonBackOnclick?: () => any,
  navBarConfig?: navBarConfigType[]
}
NavBar.defaultProps = {
  showButtonBack: false
}

export default function NavBar({title, buttonBackOnclick, navBarConfig}: navBarProps): ReactElement {
  const classes = useStyles()
  let replacedTitle = reactStringReplace(title, /\*\*(.*)\*\*/g, (match: string, i: number) => (
    <span key={match + i} className={classes.bold}>{match}</span>
  ))
  replacedTitle = reactStringReplace(replacedTitle, /\*\_(.*)\_\*/g, (match: string, i: number) => (
    <span key={match + i} className={classes.boldUnderlined}>{match}</span>
  ))

  return (
    <nav className={classes.navBar}>
      <h6 className={classes.title}>
        {buttonBackOnclick && (
          <Fab color="inherit" aria-label="add" className={classes.buttonBack} size="medium"
               onClick={buttonBackOnclick}>
            <ArrowBackIcon/>
          </Fab>
        )}
        {replacedTitle}
      </h6>
      {navBarConfig && (
        <div className={classes.buttonsContainer}>
          {navBarConfig.map(({title, onClick, icon, type}) => (
            <Tooltip key={title} title={title} placement="bottom">
              <>
                {type === "Fav" && (
                  <Fab color="inherit" className={classes.favNavBar} size="small"
                       onClick={onClick}>
                    <>{icon}</>
                  </Fab>
                )}
                {type === "Switch" && (<Switch onChange={onClick}/>)}
                {type === "Button" && (
                  <Button variant="contained" color="primary" className={classes.buttonNavBar} onClick={onClick}>
                    {title}
                  </Button>
                )}
              </>
            </Tooltip>
          ))}
        </div>
      )}
    </nav>
  )
}

