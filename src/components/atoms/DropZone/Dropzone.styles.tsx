import React from "react"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  DropzoneArea: {
    background: "transparent",
    height: "auto",
    minHeight: "50px",
    border: "none !important",
    margin: "6px 0",
    display: "flex",
    "&:focus": {
      border: "0px solid #FFFFFF",
    },
    "&.MuiDropzoneArea-active": {
      height: "200px",
    },
    "& .MuiDropzoneArea-textContainer": {
      display: "inline-block",
      width: "50px",
      minWidth: "50px",
      height: "50px",
      minHeight: "50px",
      border: "2px dashed #B2BEDA",
      marginRight: "20px",
      borderRadius: "5px",
      "&:hover": {
        border: "2px dashed #613EEA",
        "& svg": {
          "& path": {
            fill: "#613EEA",
          },
        },
      },
      "& p": {
        margin: 0,
      },
      "& svg": {
        height: "32px",
        width: "32px",
        marginTop: "8px",
        marginBottom: "8px",
        "& path": {
          fill: "#B2BEDA",
        },
      },
    },
    "& .MuiGrid-container": {
      width: "100%",
      margin: 0,
      display: "inline-block",
      textAlign: "left",
      "& .MuiDropzonePreviewList-imageContainer": {
        height: "auto",
        width: "auto",
        padding: "5px",
        marginRight: "20px",
        marginBottom: "20px",
        display: "inline-block",
        border: "2px dashed #B2BEDA",
        borderRadius: "5px",
        "& .MuiDropzonePreviewList-removeButton": {
          top: "inherit",
          right: "-5px",
          bottom: "-5px",
        },
        "& img": {
          height: "auto",
          maxHeight: "100px",
        },
      },
    },
  },
  DropzoneAreaError:{
    "& .MuiDropzoneArea-textContainer": {
      borderColor: "#f44336",
      "& svg": {
        "& path": {
          fill: "#f44336",
        },
      },
    },
    "& .MuiGrid-container": {
      "& .MuiDropzonePreviewList-imageContainer": {
        borderColor: "#f44336",
      }
    }
  }
}))

export default useStyles
