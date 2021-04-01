import React from "react"
import ToggleButton from "@material-ui/lab/ToggleButton"
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup"
import useStyles from "./ SwitchTable.styles"
import Table from "../../icons/Table"
import Group from "../../icons/Group"

export type SwitchTableProps = {
  onChange: any
}

export default function SwitchTable({ onChange }: SwitchTableProps) {
  const classes = useStyles()
  const [alignment, setAlignment] = React.useState("table")

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    setAlignment(newAlignment)
    onChange(newAlignment)
  }

  return (
    <ToggleButtonGroup
      size="medium"
      value={alignment}
      exclusive
      onChange={handleChange}
      className={classes.root}
    >
      <ToggleButton value="table" className={classes.left}>
        <div className={classes.fab}>
          <Table />
        </div>
      </ToggleButton>
      <ToggleButton value="cards" className={classes.right}>
        <div className={classes.fab}>
          <Group />
        </div>
      </ToggleButton>
    </ToggleButtonGroup>
  )
}
