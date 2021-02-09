import React, { useState } from "react"
import Fab from "@material-ui/core/Fab"
import CommentsIcon from "../../icons/Comments"
import CancelIcon from "../../icons/Cancel"
import Pin from "./Pin"
import useStyles from "./Comments.styles"

type CommentsProps = {
  initialValues: any,
  onChange?: (type: string, values: any) => any,
  userName?: string,
  userImage?: string
}
Comments.defaultProps = {
  initialValues: [],
  userName: "Undefined",
  userImage: "",
}

export default function Comments({
  initialValues,
  onChange,
  userName,
  userImage,
}: CommentsProps) {
  const classes = useStyles()
  const [showComments, setShowComments] = useState(false)
  const [open, setOpen] = useState([])
  const [coordinates, setCoordinates] = useState({ x: "", y: "" })
  const [comments, setComments] = useState(initialValues)

  const createMessage = (id: number, message: string, i:number) => {
    let updateComment = [...comments]
    let messages = updateComment[i].messages
    const newMessage = {
      userName: userName,
      userImage: userImage,
      date: Date.now(),
      message,
      comment:id,
    }
    messages.push(newMessage)
    if (onChange) {
      onChange("newMessage", newMessage)
    }
    updateComment[i] = {
      ...updateComment[i],
      messages: messages,
    }
    setComments(updateComment)
  }

  const closeAll = () => {
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
          onClick={async e => {
            if (showComments) {
              let newOpen = []
              newOpen[comments.length] = true
              if (onChange) {
                const id = await onChange("newComments", {
                  domain: window.location.href,
                  ...coordinates
                })
                if(id){
                  setComments([...comments, { id, messages: [], ...coordinates }])
                }
              }else{
                setComments([...comments, { messages: [], ...coordinates }])
              }
              setOpen(newOpen)
            }
          }}
        >
          {comments.map((comment:any, i:number) => (
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
