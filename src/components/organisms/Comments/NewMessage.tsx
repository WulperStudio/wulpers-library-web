import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import Popover from "@material-ui/core/Popover"
import Button from "@material-ui/core/Button"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import ListItemAvatar from "@material-ui/core/ListItemAvatar"
import Divider from "@material-ui/core/Divider"
import Typography from "@material-ui/core/Typography"
import Avatar from "@material-ui/core/Avatar"
import TextField from "@material-ui/core/TextField"
import PinIcon from "../../icons/Pin"

const useStyles = makeStyles({
  textFieldRoot: {
    padding: "0px",
    margin: "0px",
  },
  cssOutlinedInput: {
    border: "none",
  },
  cssOutlinedInputFocused: {
    border: "none",
  },
  buttonComment: {
    textTransform: "none",
    background: "#B2B2B2",
    marginRight: "10px",
  },
  buttonCancel: {
    textTransform: "none",
    borderColor: "#333333",
    color: "#333333",
  },
})

export default function NewMessage({ createMessage, i, closeAll }: any) {
  const [message, setMessage] = useState("")
  const classes = useStyles()
  return (
    <div>
      <div style={{ padding: "8px 18px" }}>
        <TextField
          size="small"
          variant="outlined"
          multiline
          rows={2}
          fullWidth
          value={message}
          placeholder="Add a comment"
          onChange={e => setMessage(e.target.value)}
          InputProps={{
            classes: {
              root: classes.textFieldRoot,
              focused: classes.cssOutlinedInputFocused,
              notchedOutline: classes.cssOutlinedInput,
            },
          }}
        />
      </div>
      <div style={{ padding: "0px 18px 18px" }}>
        <Button
          className={classes.buttonComment}
          variant="contained"
          color="primary"
          onClick={() => {
            if (message) {
              createMessage(i, message)
              setMessage("")
            }
          }}
          size="medium"
        >
          Comment
        </Button>
        <Button
          className={classes.buttonCancel}
          variant="outlined"
          color="primary"
          onClick={() => {
            setMessage("")
            closeAll()
          }}
          size="medium"
        >
          Cancel
        </Button>
      </div>
    </div>
  )
}
