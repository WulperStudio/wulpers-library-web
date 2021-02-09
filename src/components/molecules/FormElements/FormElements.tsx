import React from "react"
import TextField from "../../atoms/Form/TextField"
import Dropzone from "../../atoms/DropZone"
import MediumEditor from "../../atoms/MediumEditor"

export type TypesFormElements =
  | "subtitle"
  | "image"
  | "video"
  | "phrase"

export type FormElementsProps = {
  id: number,
  error: boolean,
  value: any,
  type: TypesFormElements,
  onChange?: (e?: any) => any,
  prefixFiles?: string,
}

export const ConfigElements = {
  subtitle: {
    label: "Subtitle",
    helperText: "Incorrect entry.",
    multiline: false,
    placeholder: "",
  },
  image: {
    label: "Attach image",
    helperText: "Incorrect entry.",
    multiline: false,
    placeholder: "",
  },
  video: {
    label: "Attach video",
    helperText: "Incorrect entry.",
    multiline: false,
    placeholder: "https://www.youtube.com",
  },
  phrase: {
    label: "Paragraph",
    helperText: "Incorrect entry.",
    multiline: true,
    placeholder: "",
  },
}

export default function FormElements({
  error,
  value,
  type,
  onChange,
  prefixFiles
}: FormElementsProps) {
  const { label, helperText, multiline, placeholder } = ConfigElements[type]
  return (
    <>
      {(type === "subtitle" || type === "video") && (
        <TextField
          label={label}
          error={error}
          helperText={error ? helperText : ""}
          fullWidth
          multiline={multiline}
          rows={multiline ? 4 : 1}
          value={value}
          onChange={(e)=> onChange ? onChange(e.target.value) : false}
          placeholder={placeholder}
        />
      )}
      {type === "phrase" && (
        <MediumEditor
          label={label}
          error={error}
          helperText={error ? helperText : "Select the text and choose the text format, bold, italic, underlined ..."}
          value={value}
          onChange={(value) => onChange ? onChange(value) : false}
        />
      )}
      {type === "image" && (
        <Dropzone
          label={label}
          error={error}
          helperText={error ? helperText : ""}
          onChange={files => onChange ? onChange(files) : false}
          initialFiles={value}
          prefixFiles={prefixFiles}
        />
      )}
    </>
  )
}
