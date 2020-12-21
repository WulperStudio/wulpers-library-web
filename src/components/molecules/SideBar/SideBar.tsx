import React, {ReactElement} from "react"
import Fab from '@material-ui/core/Fab'
import Tooltip from "@material-ui/core/Tooltip"
import clsx from "clsx"
import useStyles from "./SideBar.styles"
import Logo from "../../icons/Logo"

export type sideBarConfigType = {
  title: string,
  active: boolean,
  onClick: () => any,
  icon: React.ReactChild,
  type: "primary" | "secondary"
}

export type SideBarProps = {
  sideBarConfig: sideBarConfigType[]
}

export default function SideBar({sideBarConfig}: SideBarProps) {
  const classes = useStyles()
  return (
    <nav className={classes.sidebar}>

      <div className={classes.logo}>
        <Fab color="inherit" aria-label="add" className={clsx(classes.fab, classes.white)} size="medium">
          <Logo/>
        </Fab>
      </div>

      <div className={classes.menu}>
        <div>
          {sideBarConfig
            .filter(({type}: sideBarConfigType) => type === "primary")
            .map(({title, icon, onClick, active}: sideBarConfigType) => (
              <Tooltip key={title} title={title} placement="right">
                <Fab color="primary" className={classes.fab} size="medium" onClick={onClick}>
                  {icon}
                </Fab>
              </Tooltip>
            ))}
        </div>

        <div>
          {sideBarConfig
            .filter(({type}: sideBarConfigType) => type === "secondary")
            .map(({title, icon, onClick, active}: sideBarConfigType) => (
              <Tooltip key={title} title={title} placement="right">
                <Fab color="primary" className={classes.fab} size="medium" onClick={onClick}>
                  {icon}
                </Fab>
              </Tooltip>
            ))}
        </div>

      </div>

    </nav>
  )
}
