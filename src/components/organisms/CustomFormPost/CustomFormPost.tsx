import React, { useEffect } from "react"
import Grid from "@material-ui/core/Grid"
import Fab from "@material-ui/core/Fab"
import Fade from "@material-ui/core/Fade"
import Menu from "../../molecules/Menu/Menu"
import FormRow, { FormContainer } from "../../containers/FormRow"
import Typography from "../../atoms/Typography"
import FilterIcon from "../../icons/Filter"
import FormElements, {
  TypesFormElements,
  FormElementsProps,
} from "../../molecules/FormElements"
import { validateUrl, validateYoutubeUrl } from "./CustomFormPost.utils"

export type CustomFormPostProps = {
  onChange: (e: any) => any,
  values: FormElementsProps[],
  setValues?: any,
  title?: string,
}

export function ValidateForm(jsonObj: FormElementsProps[]) {
  let values = [...jsonObj]
  let errors = false
  for (let i = 0; i < values.length; i++) {
    if (
      values[i].type === "subtitle" ||
      values[i].type === "phrase" ||
      values[i].type === "image"
    ) {
      if (!values[i].value) {
        values[i].error = true
        errors = true
      }
    }
    if (values[i].type === "url") {
      if (values[i].value === "" || !validateUrl(values[i].value)) {
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
  onChange,
  title,
  values,
  setValues,
}: CustomFormPostProps) {
  
  useEffect(() => {
    console.log("forms>>>", values)
  }, [values])

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
        <Fab color="inherit" size="medium" aria-label="edit">
          <FilterIcon />
        </Fab>
      }
      items={[
        { title: "Insert image", onClick: () => addForm("image") },
        { title: "Insert video", onClick: () => addForm("video") },
        { title: "Insert phrase", onClick: () => addForm("phrase") },
        { title: "Insert URL", onClick: () => addForm("url") },
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
        <Fade in={true} style={{ transitionDelay: "500ms" }}>
          <FormRow menu={values.length - 1 === i && <MenuCustom />}>
            <FormElements
              {...item}
              onChange={(e: any) => {
                if (item.type !== "image") {
                  updateForm(item.id, "error", false)
                  updateForm(item.id, "value", e.target.value)
                } else {
                  updateForm(item.id, "error", false)
                  updateForm(item.id, "value", e[0])
                }
              }}
            />
          </FormRow>
        </Fade>
      ))}
    </FormContainer>
  )
}
