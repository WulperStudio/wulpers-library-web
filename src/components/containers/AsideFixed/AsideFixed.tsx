import React, {ReactNode, ReactElement} from "react"
import useStyles from "./AsideFixed.styles"

type Props = {
  children: ReactNode,
  asideContent: ReactNode
}

export default function AsideFixed({asideContent, children}: Props): ReactElement {
  const classes = useStyles()
  return (
    <div className={classes.container}>
      <div className={classes.content}>{children}</div>
      <aside className={classes.aside}>{asideContent}</aside>
    </div>
  )
}
