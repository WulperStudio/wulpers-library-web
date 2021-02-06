import React from 'react'
import FormHelperText from "@material-ui/core/FormHelperText"
import {DropzoneArea} from 'material-ui-dropzone'
import useStyles from "./Dropzone.styles"
import PlusIcon from "../../icons/Plus";
import clsx from "clsx";

export type DropzoneProps = {
  onChange?: (e:any) => any,
  initialFiles?: string[],
  acceptedFiles?: string[],
  filesLimit?: number,
  error?: boolean,
  helperText?: string,
  label?: string,
}
Dropzone.defaultProps = {
  initialFiles: [],
  acceptedFiles: ['image/*'],
  filesLimit: 1,
}

export default function Dropzone({onChange, initialFiles, acceptedFiles, filesLimit, error, helperText, label}: DropzoneProps) {
  const classes = useStyles();

  return (
    <>
      {label && <FormHelperText error={error}>{label}</FormHelperText>}
      <DropzoneArea
        // @ts-ignore
        Icon={PlusIcon}
        acceptedFiles={acceptedFiles}
        onChange={onChange}
        filesLimit={filesLimit}
        dropzoneText=""
        dropzoneClass={clsx(classes.DropzoneArea, error && classes.DropzoneAreaError)}
        showAlerts={['error']}
        initialFiles={initialFiles}
      />
      {helperText && <FormHelperText error={error}>{helperText}</FormHelperText>}
    </>
  );
}