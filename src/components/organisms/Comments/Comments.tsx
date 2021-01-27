import React, { useState } from "react"
import CommentsIcon from "../../icons/Comments"
import CancelIcon from "../../icons/Cancel"
import { makeStyles } from "@material-ui/core/styles"
import Fab from "@material-ui/core/Fab"
import Pin from "./Pin"

const useStyles = makeStyles({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    cursor: "cell",
    zIndex: 99999999,
  },
  ButonComment: {
    position: "fixed",
    bottom: "24px",
    left: "24px",
    background: "#DE6944",
    color: "white",
    "&:hover": {
      background: "#aa5338",
    },
    zIndex: 999999999,
  },
})


export default function App() {
  const classes = useStyles()
  const [showComments, setShowComments] = useState(false)
  const [open, setOpen] = useState([])
  const [coordinates, setCoordinates] = useState({ x: "", y: "" })
  const [comments, setComments] = useState([
    {
      x: 365,
      y: 123,
      messages: [
        {
          userName: "Remy Sharp",
          userImage: "",
          date: 1611367941038,
          message: "Este es un comentario de pruebas",
        },
      ],
    },
    {
      x: 236,
      y: 456,
      messages: []
    },
  ])

  const createMessage = (id: number, message: string) => {

    let updateComment = [...comments]
    let messages = updateComment[id].messages
    const newMessage = {
      userName: "Remy Sharp",
      userImage: "",
      date: Date.now(), 
      message
    }
    messages.push(newMessage)
    updateComment[id] = {
      ...updateComment[id],
      messages: messages,
    }
    //console.log(updateComment)
    setComments(updateComment)
  }

  const closeAll = () =>{
    setOpen([])
  }

  let height = Math.max(
    document.body.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.clientHeight,
    document.documentElement.scrollHeight,
    document.documentElement.offsetHeight
  )

  const getHeight = {
    height: height,
  }

  return (
    <>
      {showComments && (
        <div
          onMouseMove={e => {
            setCoordinates({ x: e.pageX, y: e.pageY })
          }}
          className={classes.container}
          style={getHeight}
          onClick={e => {
            if (showComments) {
              //let message = prompt("Add commnet");
              let newOpen = []
              newOpen[comments.length] = true
              setOpen(newOpen)
              setComments([...comments, { messages:[], ...coordinates }])
            }
          }}
        >
          {comments.map((comment, i) => (
            <Pin
              createMessage={createMessage}
              comment={comment}
              i={i}
              setOpen={setOpen}
              open={open}
              closeAll={closeAll}
            />
          ))}
        </div>
      )}
      <Fab
        className={classes.ButonComment}
        onClick={() => setShowComments(!showComments)}
      >
        {!showComments && <CommentsIcon />}
        {showComments && <CancelIcon />}
      </Fab>
    </>
  )
}
