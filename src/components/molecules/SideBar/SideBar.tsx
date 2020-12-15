import React, {ReactElement} from "react"
import Fab from '@material-ui/core/Fab'
import Tooltip from "@material-ui/core/Tooltip"
import clsx from "clsx"
import useStyles from "./SideBar.styles"
import Logo from "../../icons/Logo"
import Lightning from "../../icons/Lightning"
import User from "../../icons/User"
import Talking from "../../icons/Talking"
import Muscles from "../../icons/Muscles"
import Headset from "../../icons/Headset"
import Config from "../../icons/Config"

export default function SideBar() {
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
          <Tooltip title="Add" aria-label="add" placement="right">
            <Fab color="primary" aria-label="add" className={classes.fab} size="medium" href="/">
              <Lightning/>
            </Fab>
          </Tooltip>
          <Tooltip title="Add" aria-label="add" placement="right">
            <Fab color="primary" aria-label="add" className={classes.fab} size="medium">
              <User/>
            </Fab>
          </Tooltip>
          <Tooltip title="Add" aria-label="add" placement="right">
            <Fab color="primary" aria-label="add" className={classes.fab} size="medium">
              <Muscles/>
            </Fab>
          </Tooltip>
          <Tooltip title="Add" aria-label="add" placement="right">
            <Fab color="primary" aria-label="add" className={classes.fab} size="medium">
              <Talking/>
            </Fab>
          </Tooltip>
        </div>

        <div>
          <Tooltip title="Add" aria-label="add" placement="right">
            <Fab color="primary" aria-label="add" className={classes.fab} size="medium">
              <Headset/>
            </Fab>
          </Tooltip>
          <Tooltip title="Add" aria-label="add" placement="right">
            <Fab color="primary" aria-label="add" className={classes.fab} size="medium">
              <Config/>
            </Fab>
          </Tooltip>
        </div>

      </div>

    </nav>
  )
}
