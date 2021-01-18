import React, { useState } from "react"
import useStyles from "./AntdUpload.styles"
import PlusIcon from "../../icons/Plus"
import FormHelperText from "@material-ui/core/FormHelperText"
import FormLabel from "../FormLabel"
import { Upload, Modal } from "antd"
import "antd/dist/antd.css"

function getBase64(file: any) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result)
    reader.onerror = error => reject(error)
  })
}

export type AntdUploadProps = {
  onChange?: () => any,
  initialFiles?: string[],
  acceptedFiles?: string[],
  filesLimit?: number,
  error?: boolean,
  helperText?: string,
  label?: string,
}
AntdUpload.defaultProps = {
  initialFiles: [],
  acceptedFiles: ["image/*"],
  filesLimit: 1,
  error: false,
  helperText: "",
  label: "",
}

export default function AntdUpload({
  onChange,
  initialFiles,
  acceptedFiles,
  filesLimit,
  error,
  helperText,
  label,
}: AntdUploadProps) {
  const classes = useStyles()
  const [state, setState] = useState({
    previewVisible: false,
    previewImage: "",
    previewTitle: "",
    fileList: [],
  })

  const handleCancel = () => setState({ ...state, previewVisible: false })

  const handlePreview = async (file: any) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj)
    }

    setState({
      ...state,
      previewImage: file.url || file.preview,
      previewVisible: true,
      previewTitle:
        file.name || file.url.substring(file.url.lastIndexOf("/") + 1),
    })
  }

  const handleChange = ({ fileList }) => setState({ ...state, fileList })

  return (
    <div>
      {label && <FormHelperText error={error}>{label}</FormHelperText>}
      <Upload
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        listType="picture-card"
        fileList={state.fileList}
        onPreview={handlePreview}
        onChange={handleChange}
        maxCount={1}
        accept="image/*"
      >
        <PlusIcon />
      </Upload>
      <Modal
        visible={state.previewVisible}
        title={state.previewTitle}
        footer={null}
        onCancel={handleCancel}
      >
        <img alt="example" style={{ width: "100%" }} src={state.previewImage} />
      </Modal>
      {helperText && (
        <FormHelperText error={error}>{helperText}</FormHelperText>
      )}
    </div>
  )
}
