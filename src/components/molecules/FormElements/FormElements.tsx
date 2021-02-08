import React from "react"
import TextField from "../../atoms/Form/TextField"
import Dropzone from "../../atoms/DropZone"

export type TypesFormElements = "subtitle" | "image" | "video" | "url" | "phrase"

export type FormElementsProps = {
  id: number,
  error: boolean,
  value: any,
  type: TypesFormElements,
  onChange?: (e?: any) => any,
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
  url: {
    label: "Url",
    helperText: "Incorrect entry.",
    multiline: false,
    placeholder: "https://",
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
}: FormElementsProps) {
  const { label, helperText, multiline, placeholder } = ConfigElements[type]
  return (
    <>
      {(type === "subtitle" ||
        type === "phrase" ||
        type === "url" ||
        type === "video") && (
        <TextField
          label={label}
          error={error}
          helperText={error ? helperText : ""}
          fullWidth
          multiline={multiline}
          rows={multiline ? 4 : 1}
          value={value}
          onChange={onChange ? onChange : undefined}
          placeholder={placeholder}
        />
      )}
      {type === "image" && (
        <Dropzone
          label={label}
          error={error}
          helperText={error ? helperText : ""}
          onChange={e => {
            onChange ? onChange(e) : false
          }}
          initialFiles={[value[0].url] || undefined }
        />
      )}
    </>
  )
}
