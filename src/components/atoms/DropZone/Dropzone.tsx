import React, {useState} from 'react'
import {DropzoneArea} from 'material-ui-dropzone'

const Dropzone = () => {

  const [files, setFiles] = useState([])

  const handleChange = (files: any) => {
    setFiles(files);
  }

  return (
    <DropzoneArea onChange={handleChange}/>
  )

}

export default Dropzone;