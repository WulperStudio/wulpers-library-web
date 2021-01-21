import React from "react"
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardHeader from "@material-ui/core/CardHeader"
import CardContent from "@material-ui/core/CardContent"
import CardActions from "@material-ui/core/CardActions"
import DeleteIcon from "@material-ui/icons/Delete"
import CloseIcon from "@material-ui/icons/Close"
import Fab from "@material-ui/core/Fab"
import Button from "@material-ui/core/Button"
import Select from "@material-ui/core/Select"
import MenuItem from "@material-ui/core/MenuItem"
import FormControl from "@material-ui/core/FormControl"
import InputLabel from "@material-ui/core/InputLabel"
import TextField from "./../../atoms/Form/TextField"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
    },
    headerContent: {
      borderBottom: "1px solid #EFF3FE",
      "& .MuiCardHeader-title": {
        fontSize: "16px",
      },
    },
    actionButtoms: {
      "& .MuiButtonBase-root": {
        width: "35px",
        height: "35px",
        marginLeft: "20px",
        backgroundColor: "#FFF",
      },
      "& svg": {
        "& path": {
          fill: "#613EEA",
        },
      },
    },
    sendToWriters: {
      padding: "12px",
    },
  })
)

export default function SiderbarEditionTask() {
  const [expanded, setExpanded] = React.useState(false)
  const classes = useStyles()

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  return (
    <Card className={classes.root}>
      <CardHeader
        action={
          <div className={classes.actionButtoms}>
            <Fab size="small">
              <DeleteIcon />
            </Fab>
            <Fab size="small">
              <CloseIcon />
            </Fab>
          </div>
        }
        title="Marketing Brief"
        className={classes.headerContent}
      />

      <CardContent>
        <p>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Sector</InputLabel>
            <Select fullWidth placeholder="Selecciona un usuario">
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </p>
        <p>
          <TextField
            id="date"
            label="Birthday"
            type="date"
            defaultValue=""
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
          />
        </p>
        <p>
          <TextField
            label="Goal"
            fullWidth
            multiline
            rows={4}
            defaultValue="Hemos certificado todos los documentos, y consideramos que es necesario firmar por parte de los hijos el documento que delega las acciones a la esposa."
          />
        </p>
      </CardContent>
      <CardActions disableSpacing>
        <Button
          type="button"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.sendToWriters}
        >
          Send to writers
        </Button>
      </CardActions>
    </Card>
  )
}
