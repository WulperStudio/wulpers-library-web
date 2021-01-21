import React, { useState } from "react";
import CommentsIcon from "../../icons/Comments";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import Pin from "./Pin";

const useStyles = makeStyles({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    cursor: "cell",
    zIndex: 99999999
  },
  ButonComment: {
    position: "fixed",
    top: "10px",
    left: "10px",
    background: "#19A0FB",
    color: "white",
    "&:hover": {
      background: "#137fc6"
    },
    zIndex: 999999999
  }
});

export default function App() {
  const classes = useStyles();
  const [showComments, setShowComments] = useState(false);
  const [open, setOpen] = useState(false);
  const [coordinates, setCoordinates] = useState({ x: "", y: "" });
  const [comments, setComments] = useState([
    {
      message: "Este es un comentario de pruebas",
      x: 365,
      y: 123
    },
    {
      message: "otro comentario",
      x: 236,
      y: 456
    }
  ]);

  let height = Math.max(
    document.body.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.clientHeight,
    document.documentElement.scrollHeight,
    document.documentElement.offsetHeight
  );

  const getHeight = {
    height: height
  };

  return (
    <>
      {showComments && (
        <div
          onMouseMove={(e) => {
            setCoordinates({ x: e.pageX, y: e.pageY });
          }}
          className={classes.container}
          style={getHeight}
          onClick={(e) => {
            if (showComments) {
              //let message = prompt("Add commnet");
              let newOpen = [];
              newOpen[comments.length] = true;
              setOpen(newOpen);
              setComments([...comments, { message: "", ...coordinates }]);
            }
          }}
        >
          {comments.map((comment, i) => (
            <Pin
              setComments={setComments}
              comments={comments}
              comment={comment}
              i={i}
              setOpen={setOpen}
              open={open}
            />
          ))}
        </div>
      )}
      <Fab
        className={classes.ButonComment}
        onClick={() => setShowComments(!showComments)}
        size="small"
      >
        <CommentsIcon />
      </Fab>
    </>
  );
}
