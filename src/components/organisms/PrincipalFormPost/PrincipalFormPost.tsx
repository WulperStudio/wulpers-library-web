import { TextField } from "@material-ui/core"
import React from "react"
import Dropzone from "../../atoms/DropZone"
import MediumEditor from "../../atoms/MediumEditor"
import Typography from "../../atoms/Typography"
import FormRow, { FormContainer } from "../../containers/FormRow"
import slug from "slug"

interface PrincipalFormPostPost {
  values: any,
  setValues: any,
  errors: any,
  setErrors: any,
  prefixFiles?: string,
}

export default function PrincipalFormPost({
  values,
  setValues,
  errors,
  setErrors,
  prefixFiles,
}: PrincipalFormPostPost) {
  return (
    <FormContainer>
      <FormRow>
        <Typography gutterBottom variant="h6" component="h2" color="primary">
          {"POST DESCRIPTION -> Title section"}
        </Typography>
      </FormRow>

      <FormRow>
        <TextField
          label="Title"
          error={errors.title}
          helperText={errors.title ? "Incorrect entry." : ""}
          fullWidth
          defaultValue={values.title}
          value={values.title}
          onChange={(e: any) => {
            setErrors({ ...errors, title: false, slug: false })
            setValues({
              ...values,
              title: e.target.value,
              slug: slug(e.target.value),
            })
          }}
        />
      </FormRow>

      <FormRow>
        <TextField
          label="Slug"
          error={errors.slug}
          helperText={errors.slug ? "Incorrect entry." : ""}
          fullWidth
          defaultValue={values.slug}
          value={values.slug}
          InputProps={{ readOnly: true }}
          onChange={(e: any) => {
            setErrors({ ...errors, slug: false })
            setValues({ ...values, slug: e.target.value })
          }}
        />
      </FormRow>

      <FormRow>
        <Dropzone
          label="Attach image"
          error={errors.image}
          helperText={errors.image ? "Incorrect entry." : ""}
          onChange={(files: any) => {
            setErrors({
              ...errors,
              image: false,
            })
            if(values.image[0] && values.image[0].id){
              setValues({ ...values, deleteImageId: values.image[0].id, image: files})
            }else{
              setValues({ ...values, image: files })
            }
          }}
          initialFiles={values.image}
          prefixFiles={prefixFiles}
        />
      </FormRow>

      {/*<FormRow>
            <FormLabel size="small" component="legend">
              Status
            </FormLabel>
            <Switch
              checked={values.status === "Publish"}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setValues({
                  ...values,
                  status: e.target.checked ? "Publish" : "Draft",
                  publishedDate: e.target.checked ? Date.now().toString() : "",
                })
              }
              name="checkedA"
              inputProps={{ "aria-label": "secondary checkbox" }}
            />
            {values.status}
            </FormRow>*/}

      <FormRow>
        <MediumEditor
          label="Description"
          error={errors.content}
          helperText={
            errors.content
              ? "Incorrect entry."
              : "Select the text and choose the text format, bold, italic, underlined ..."
          }
          value={values.content}
          onChange={value => {
            setErrors({ ...errors, content: false })
            setValues({ ...values, content: value })
          }}
        />
      </FormRow>
    </FormContainer>
  )
}
