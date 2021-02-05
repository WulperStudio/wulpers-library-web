import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import useStyles from "./Comments.styles"
import TextField from "../../atoms/Form/TextField"

export default function NewMessage({ createMessage, i, closeAll, comment }: any) {
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
              createMessage(comment.id, message, i)
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
