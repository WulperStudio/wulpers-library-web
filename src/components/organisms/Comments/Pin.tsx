import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import Popover from "@material-ui/core/Popover"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import ListItemAvatar from "@material-ui/core/ListItemAvatar"
import Divider from "@material-ui/core/Divider"
import Typography from "@material-ui/core/Typography"
import Avatar from "@material-ui/core/Avatar"
import PinIcon from "../../icons/Pin"
import NewMessage from "./NewMessage"
import MessagesContent from "./MessagesContent"

const useStyles = makeStyles({
  pinIcon: {
    position: "absolute",
    cursor: "pointer",
    transition: "all .1s ease-in-out",
    "& span": {
      position: "absolute",
      top: 4,
      left: 4,
      color: "white",
      width: "20px",
      textAlign: "center",
      zIndex: 2,
    },
    "&:hover": {
      transform: "scale(1.2)",
    },
  },
})

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
          <NewMessage createMessage={createMessage} i={i} closeAll={closeAll} />
        </div>
      </Popover>
    </>
  )
}
