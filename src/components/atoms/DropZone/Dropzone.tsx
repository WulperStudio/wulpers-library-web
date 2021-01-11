import React, {useState} from 'react'
import {DropzoneArea} from 'material-ui-dropzone'
import useStyles from "./Dropzone.styles"
import PlusIcon from "../../icons/Plus";

export type DropzoneProps = {
  onChange?: () => any,
  initialFiles?: string[],
  acceptedFiles?: string[],
  filesLimit?: number
}
Dropzone.defaultProps = {
  initialFiles: [],
  acceptedFiles: ['image/*'],
  filesLimit: 1,
}

export default function Dropzone({onChange, initialFiles, acceptedFiles, filesLimit}: DropzoneProps) {
  const classes = useStyles();

  return (
    <DropzoneArea
      // @ts-ignore
      Icon={PlusIcon}
      acceptedFiles={acceptedFiles}
      onChange={onChange}
      filesLimit={filesLimit}
      dropzoneText=""
      dropzoneClass={classes.DropzoneArea}
      showAlerts={['error']}
      initialFiles={initialFiles}
    />
  );
}