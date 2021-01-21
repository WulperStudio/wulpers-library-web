import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Popover from "@material-ui/core/Popover";
import Button from "@material-ui/core/Button";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import TextField from "@material-ui/core/TextField";
import PinIcon from "../../icons/Pin";

const useStyles = makeStyles({
  pinIcon: {
    position: "absolute",
    cursor: "pointer",
    transition: "all .1s ease-in-out",
    "& span": {
      position: "absolute",
      top: 9,
      left: 9,
      color: "white",
      width: "20px",
      textAlign: "center",
      zIndex: 2
    },
    "&:hover": {
      transform: "scale(1.2)"
    }
  }
});

export default function Pin({
  comments,
  setComments,
  comment,
  open,
  setOpen,
  i
}:any) {
  const [message, setMessage] = useState("");
  const classes = useStyles();
  return (
    <>
      <div
        className={classes.pinIcon}
        style={{
          top: comment.y - 38,
          left: comment.x - 18
        }}
        onClick={(e) => {
          e.stopPropagation();
          let newOpen = [];
          newOpen[i] = true;
          setOpen(newOpen);
          //alert(comment.message);
        }}
        aria-owns={"test" + i}
      >
        <span>{i + 1}</span>
        <PinIcon />
      </div>

      <Popover
        open={open[i]}
        onClick={(e) => e.stopPropagation()}
        onClose={() => setOpen([])}
        style={{
          position: "absolute",
          top: comment.y - 10,
          left: comment.x - 100,
          zIndex: 99999999
        }}
      >
        <div
          style={{
            minWidth: "324px"
          }}
        >
          <ListItem>
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="/broken-image.jpg" />
            </ListItemAvatar>
            <ListItemText primary="Remy Sharp" secondary="Jan 9, 2014" />
          </ListItem>
          <Typography component="p" style={{ padding: "0 18px 18px" }}>
            {comment.message}
          </Typography>
          <Divider component="hr" />
          <ListItem>
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="/broken-image.jpg" />
            </ListItemAvatar>
            <ListItemText primary="Remy Sharp" secondary="Jan 9, 2014" />
          </ListItem>
          <Typography component="p" style={{ padding: "0 18px 18px" }}>
            {comment.message}
          </Typography>
          <Divider component="hr" />
          <div style={{ padding: "8px 18px" }}>
            <TextField
              id="outlined-basic"
              variant="outlined"
              size="small"
              multiline
              rows={2}
              fullWidth
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <div style={{ textAlign: "right", padding: "0px 18px 18px" }}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                let updateComment = [...comments];
                updateComment[i] = { ...comment, message: message };
                console.log(updateComment);
                setComments(updateComment);
                setMessage("");
              }}
              size="small"
            >
              Comment
            </Button>
          </div>
        </div>
      </Popover>
    </>
  );
}
