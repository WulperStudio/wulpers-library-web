import React, { useEffect } from "react"
import Fab from "@material-ui/core/Fab"
import Fade from "@material-ui/core/Fade"
import Menu from "../../molecules/Menu/Menu"
import FormRow, { FormContainer } from "../../containers/FormRow"
import Typography from "../../atoms/Typography"
import FilterIcon from "../../icons/Filter"
import Cancel from "../../icons/Cancel"
import FormElements, {
  TypesFormElements,
  FormElementsProps,
} from "../../molecules/FormElements"
import { validateUrl, validateYoutubeUrl } from "./CustomFormPost.utils"
import useStyles from "./CustomFormPost.style"

export type CustomFormPostProps = {
  values: FormElementsProps[],
  setValues?: any,
  title?: string,
  prefixFiles?: string,
}

export function ValidateForm(jsonObj: FormElementsProps[]) {
  let values = [...jsonObj]
  let errors = false
  for (let i = 0; i < values.length; i++) {
    if (values[i].type === "subtitle" || values[i].type === "phrase") {
      if (!values[i].value) {
        values[i].error = true
        errors = true
      }
    }
    if (values[i].type === "image") {
      if (!values[i].value.length) {
        values[i].error = true
        errors = true
      }
    }
    if (values[i].type === "video") {
      if (values[i].value === "" || !validateYoutubeUrl(values[i].value)) {
        values[i].error = true
        errors = true
      }
    }
  }
  return { errors, values }
}

export default function CustomFormPost({
  title,
  values,
  setValues,
  prefixFiles,
}: CustomFormPostProps) {
  const classes = useStyles()

  const addForm = (type: TypesFormElements) => {
    if (setValues) {
      setValues([
        ...values,
        {
          id: values.length === 0 ? 0 : values[values.length - 1].id + 1,
          value: "",
          error: false,
          type: type,
        },
      ])
    }
  }

  const removeForm = (id: number) => {
    if (setValues) {
      setValues(values.filter(v => v.id !== id))
    }
  }

  const updateForm = (id: number, attr: string, value: any) => {
    let jsonObj = [...values]
    for (let i = 0; i < jsonObj.length; i++) {
      if (jsonObj[i].id === id) {
        // @ts-ignore
        jsonObj[i][attr] = value
        if (setValues) {
          setValues(jsonObj)
        }
      }
    }
  }

  const MenuCustom = () => (
    <Menu
      button={
        <Fab className={classes.buttonMenu} color="inherit" size="medium">
          <FilterIcon />
        </Fab>
      }
      items={[
        { title: "Insert image", onClick: () => addForm("image") },
        { title: "Insert video", onClick: () => addForm("video") },
        { title: "Insert phrase", onClick: () => addForm("phrase") },
        { title: "Insert subtitle", onClick: () => addForm("subtitle") },
      ]}
    />
  )

  return (
    <FormContainer>
      {title && (
        <FormRow>
          <Typography gutterBottom variant="h6" component="h2" color="primary">
            {title}
          </Typography>
        </FormRow>
      )}
      {values.length === 0 && (
        <Fade in={true} style={{ transitionDelay: "100ms" }}>
          <FormRow menu={<MenuCustom />}>
            <div />
          </FormRow>
        </Fade>
      )}
      {values.map((item, i) => (
        <Fade key={i} in={true} style={{ transitionDelay: "500ms" }}>
          <FormRow
            menu={
              values.length - 1 === i && (
                <>
                  <Fab
                    className={classes.buttonDelete}
                    color="inherit"
                    size="small"
                    onClick={() => {
                      removeForm(i)
                    }}
                  >
                    <Cancel />
                  </Fab>
                  <MenuCustom />
                </>
              )
            }
          >
            <FormElements
              {...item}
              prefixFiles={prefixFiles}
              onChange={(value: any) => {
                updateForm(item.id, "error", false)
                updateForm(item.id, "value", value)
              }}
            />
          </FormRow>
        </Fade>
      ))}
    </FormContainer>
  )
}
