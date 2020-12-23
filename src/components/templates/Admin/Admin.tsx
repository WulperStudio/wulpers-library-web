import React, {ReactNode, ReactElement, ReactChild} from "react"
import SideBar, {sideBarConfigType} from "../../molecules/SideBar"
import {defaultTheme} from "../../../utils"
import {ThemeProvider} from "@material-ui/core/styles"
import CssBaseline from "@material-ui/core/CssBaseline"
import useStyles from "./Admin.styles"
import NavBar, {navBarConfigType} from "../../molecules/NavBar";
import TwoColumnsFullWidth from "../../containers/TwoColumnsFullWidth";

type Props = {
  title: string,
  children: ReactNode,
  sideBarConfig?: sideBarConfigType[],
  navBarConfig?: navBarConfigType[],
  buttonBackOnClick?: () => any,
  loginView?: boolean,
  innerSecondary?: ReactChild,
}

export default function AdminTheme({
                                     children,
                                     title,
                                     sideBarConfig,
                                     navBarConfig,
                                     buttonBackOnClick,
                                     loginView,
                                     innerSecondary
                                   }: Props): ReactElement {
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
        <TwoColumnsFullWidth innerSecondary={innerSecondary}>{children}</TwoColumnsFullWidth>
      )}
    </ThemeProvider>
  )
}
