import React from "react"
import TableRow from "@material-ui/core/TableRow"
import TableCell from "@material-ui/core/TableCell"
import Checkbox from "@material-ui/core/Checkbox"
import Chip from "@material-ui/core/Chip"
import Avatar from "@material-ui/core/Avatar"
import {FormatRow} from "../../organisms/Table"
import useStyles from "./Table.styles"
import Fab from "@material-ui/core/Fab"

type Props = {
  isItemSelected: boolean,
  index: number,
  formatRows: FormatRow[],
  isCheckbox: boolean,
  dataRowKey: string,
  dataRow: any,
  key: string,
  handleClick(event: React.MouseEvent<unknown>, name: string): any
}

export default function EnhancedTableRow({
                                           isItemSelected,
                                           index,
                                           formatRows,
                                           isCheckbox,
                                           dataRowKey,
                                           handleClick,
                                           dataRow
                                         }: Props) {
  const labelId = `enhanced-table-checkbox-${index}`
  const classes = useStyles()
  return (
    <TableRow
      hover // @ts-ignore
      role="checkbox"
      aria-checked={isItemSelected}
      tabIndex={-1}
      key={dataRowKey}
      selected={isItemSelected}
      style={{width: '100%'}}
    >

      {isCheckbox && (
        <TableCell padding="checkbox" onChange={(event) => handleClick(event, dataRowKey)}>
          <Checkbox
            checked={isItemSelected}
            inputProps={{"aria-labelledby": labelId}}
          />
        </TableCell>
      )}

      {formatRows.map(({key, image, chip, align, button, onClick}, i: number) => {
        // @ts-ignore
        const data = dataRow[key]
        return (
          <TableCell
            key={i}
            align={align}
            onClick={(event) => button === undefined ? handleClick(event, dataRowKey) : false}>

            {(button !== undefined) && (
              <Fab color="inherit" size="small" className={classes.fabTable} onClick={() => {
                onClick ? onClick(dataRowKey) : false
              }}>
                {button}
              </Fab>
            )}

            {(image !== undefined && button === undefined) && (
              <Chip className={classes.chipAvatar} label={data} avatar={<Avatar alt={data} src={dataRow[image]}/>}/>
            )}

            {(chip && image === undefined && button === undefined) && (
              <Chip label={data} color="secondary" size="small"/>
            )}

            {(!image && !chip && !button) && data}

          </TableCell>
        )
      })}
    </TableRow>
  )
}
