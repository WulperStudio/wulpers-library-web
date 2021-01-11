import React, {ReactNode, ReactElement, ReactChild} from "react"
import SideBar, {sideBarConfigType} from "../../molecules/SideBar"
import {defaultTheme} from "../../../utils"
import {ThemeProvider} from "@material-ui/core/styles"
import CssBaseline from "@material-ui/core/CssBaseline"
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';

import useStyles from "./Admin.styles"
import NavBar, {navBarConfigType} from "../../molecules/NavBar";
import FullWidth from "../../containers/TwoColumnsFullWidth";

type AdminThemeProps = {
  title: string,
  children: ReactNode,
  sideBarConfig?: sideBarConfigType[],
  navBarConfig?: navBarConfigType[],
  buttonBackOnClick?: () => any,
  loginView?: boolean,
  innerSecondary?: ReactChild,
  loading?: boolean
}

export default function AdminTheme({
                                     children,
                                     title,
                                     sideBarConfig,
                                     navBarConfig,
                                     buttonBackOnClick,
                                     loginView,
                                     innerSecondary,
                                     loading
                                   }: AdminThemeProps): ReactElement {
  const classes = useStyles()
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline/>
      {!loginView && (
        <div className={classes.container}>
          {sideBarConfig && <SideBar sideBarConfig={sideBarConfig}/>}
          <div className={classes.content}>
            <NavBar title={title} buttonBackOnclick={buttonBackOnClick} navBarConfig={navBarConfig}/>
            {children}
          </div>
        </div>
      )}
      {loginView && (
        <FullWidth innerSecondary={innerSecondary}>{children}</FullWidth>
      )}

      <Backdrop className={classes.backdrop} open={!!loading}>
        <CircularProgress color="inherit"/>
      </Backdrop>

    </ThemeProvider>
  )
}
