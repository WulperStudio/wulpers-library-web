import React from "react"
import Editor from "react-medium-editor"
import FormLabel from "../FormLabel"
import useStyles from "./MediumEditor.styles"
import clsx from "clsx"
import { FormHelperText } from "@material-ui/core"

export type toolbarOptions =
  | "bold"
  | "italic"
  | "underline"
  | "strikethrough"
  | "subscript"
  | "superscript"
  | "anchor"
  | "image"
  | "quote"
  | "pre"
  | "orderedlist"
  | "unorderedlist"
  | "indent"
  | "outdent"
  | "justifyLeft"
  | "justifyCenter"
  | "justifyRight"
  | "justifyFull"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"

export type MediumEditorProps = {
  label: string,
  value?: string,
  onChange?: (e: any) => any,
  placeholder?: string,
  buttons?: toolbarOptions[],
  error?: boolean,
  helperText: string
}

MediumEditor.defaultProps = {
  label: "",
  value: "",
  onChange: () => false,
  placeholder: "Type your text",
  buttons: ["bold", "italic", "underline", "anchor"],
  error: false,
  helperText: ""
}

export default function MediumEditor({
  label,
  value,
  onChange,
  buttons,
  placeholder,
  error,
  helperText
}: MediumEditorProps) {
  const classes = useStyles()
  const options = {
    placeholder: { text: placeholder },
    toolbar: { buttons },
  }
  return (
    <>
      {label && <FormLabel error={error} size="small" component="legend">
        {label}
      </FormLabel>}
      <Editor
        className={clsx(classes.mediumEditor,error && classes.mediumEditorError)}
        tag="div"
        options={options}
        text={value}
        onChange={onChange}
      />
      {helperText && <FormHelperText error={error}>{helperText}</FormHelperText>}
    </>
  )
}
