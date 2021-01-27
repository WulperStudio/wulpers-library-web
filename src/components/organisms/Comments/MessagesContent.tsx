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
import { MessageSharp } from "@material-ui/icons"
import format from "date-fns/format";

const useStyles = makeStyles({})

export default function MessagesContent({
  messages
}: any) {
  return (
    <>
      {messages.length > 0 && messages.map(({userName,userImage,date,message}:any) => (
        <>
          <ListItem>
            <ListItemAvatar style={{minWidth:"42px"}}>
              <Avatar alt={userName} src={userImage} style={{width:"32px", height:"32px"}}/>
            </ListItemAvatar>
            <ListItemText primary={userName}  />
            <ListItemText secondary={format(new Date(date), "LLL dd, yyyy HH:mm")} style={{ textAlign: "right", fontSize:"9px"}} />
          </ListItem>
          <Typography component="p" style={{ padding: "0 18px 18px" }}>
            {message}
          </Typography>
          <Divider component="hr" />
        </>
      ))}
    </>
  )
}
