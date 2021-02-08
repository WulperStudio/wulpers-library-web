import React from "react"
import FormHelperText from "@material-ui/core/FormHelperText"
import { DropzoneArea } from "material-ui-dropzone"
import useStyles from "./Dropzone.styles"
import PlusIcon from "../../icons/Plus"
import clsx from "clsx"

export type DropzoneProps = {
  onChange?: (e: any) => any,
  initialFiles?: any,
  acceptedFiles?: string[],
  filesLimit?: number,
  error?: boolean,
  helperText?: string,
  label?: string,
  prefixFiles?: string,
}

Dropzone.defaultProps = {
  initialFiles: [],
  acceptedFiles: ["image/*"],
  filesLimit: 1,
  prefixFiles: "",
}

export default function Dropzone({
  onChange,
  initialFiles,
  acceptedFiles,
  filesLimit,
  error,
  helperText,
  label,
  prefixFiles,
}: DropzoneProps) {
  const classes = useStyles()
  let initialFilesValidated: string[] = []

  if (initialFiles.length) {
    initialFiles.forEach((image: { url?: string }) => {
      if (image.url) {
        initialFilesValidated.push(prefixFiles + image.url)
      }
    })
  }

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
        dropzoneClass={clsx(
          classes.DropzoneArea,
          error && classes.DropzoneAreaError
        )}
        showAlerts={["error"]}
        initialFiles={initialFilesValidated}
      />
      {helperText && (
        <FormHelperText error={error}>{helperText}</FormHelperText>
      )}
    </>
  )
}
