import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Popover from "@material-ui/core/Popover"
import PinIcon from "../../icons/Pin"
import NewMessage from "./NewMessage"
import MessagesContent from "./MessagesContent"
import useStyles from "./Comments.styles"

export default function Pin({
  createMessage,
  comment,
  open,
  setOpen,
  i,
  closeAll
}: any) {
  const classes = useStyles()

  return (
    <>
      <div
        className={classes.pinIcon}
        style={{
          top: comment.y - 38,
          left: comment.x - 18,
        }}
        onClick={e => {
          e.stopPropagation()
          let newOpen = []
          newOpen[i] = true
          setOpen(newOpen)
          //alert(comment.message);
        }}
        aria-owns={"test" + i}
      >
        <span>{i + 1}</span>
        <PinIcon />
      </div>

      <Popover
        open={open[i]}
        onClick={e => e.stopPropagation()}
        onClose={() => setOpen([])}
        style={{
          position: "absolute",
          top: comment.y - 10,
          left: comment.x - 100,
          zIndex: 99999999,
        }}
      >
        <div
          style={{
            minWidth: "324px",
          }}
        >
          <MessagesContent messages={comment.messages} />
          <NewMessage createMessage={createMessage} i={i} closeAll={closeAll} comment={comment} />
        </div>
      </Popover>
    </>
  )
}
