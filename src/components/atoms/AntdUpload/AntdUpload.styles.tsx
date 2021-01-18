import React from 'react'
import {makeStyles} from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  DropzoneArea: {
    background: "transparent",
    height: "auto",
    minHeight: "50px",
    border: "none !important",
    margin: "6px 0",
    "&:focus": {
      border: "none !important"
    },
    "&.MuiDropzoneArea-active": {
      height: "200px",
    },
    "& .MuiDropzoneArea-textContainer": {
      width: "50px",
      height: "50px",
      minHeight: "50px",
      border: "2px dashed #B2BEDA",
      borderRadius: "5px",
      "& p": {
        margin: 0
      },
      "& svg": {
        height: "32px",
        width: "32px",
        marginTop: "8px",
        marginBottom: "8px",
        "& path": {
          fill: "#B2BEDA",
        }
      },
    },
    "& .MuiGrid-container": {
      width: "auto",
      margin: 0,
      display: "inline-block",
      textAlign: "left",
      "& .MuiDropzonePreviewList-imageContainer": {
        width: "100%",
        minWidth: "100%",
        padding: "16px",
        display: "inline-block",
        "& img": {
          height: "auto",
          maxHeight: "100px"
        }
      }
    }
  },
  DropzoneAreaError: {
    background: "transparent",
    height: "auto",
    minHeight: "50px",
    border: "none !important",
    margin: "6px 0",
    "&:focus": {
      border: "none !important"
    },
    "&.MuiDropzoneArea-active": {
      height: "200px",
    },
    "& .MuiDropzoneArea-textContainer": {
      width: "50px",
      height: "50px",
      minHeight: "50px",
      border: "2px dashed #f44336",
      borderRadius: "5px",
      "& p": {
        margin: 0
      },
      "& svg": {
        height: "32px",
        width: "32px",
        marginTop: "8px",
        marginBottom: "8px",
        "& path": {
          fill: "#f44336",
        }
      },
    },
    "& .MuiGrid-container": {
      width: "auto",
      margin: 0,
      display: "inline-block",
      textAlign: "left",
      "& .MuiDropzonePreviewList-imageContainer": {
        width: "100%",
        minWidth: "100%",
        padding: "16px",
        display: "inline-block",
        "& img": {
          height: "auto",
          maxHeight: "100px"
        }
      }
    }
  }
}));

export default useStyles;