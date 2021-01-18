import React, { ReactNode } from "react"
import Grid from "@material-ui/core/Grid"

export type FormRowProps = {
  children: ReactNode,
  menu?: ReactNode
}

export function FormContainer ({ children }: FormRowProps) {
    return(
        <Grid container spacing={3} style={{marginBottom:"32px"}}>{children}</Grid>
    )
}

export default function FormRow({ children, menu }: FormRowProps) {
  return (
    <>
       <Grid container item xs={3} justify="flex-end" alignItems={"flex-end"}>
          {menu && menu}
      </Grid>
      <Grid item xs={9}>
        {children}
      </Grid>
    </>
  )
}
