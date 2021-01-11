import React from "react";
import FormLabel, {FormLabelProps} from "@material-ui/core/FormLabel"
import useStyles from "./FormLabel.styles";


export interface FormLabelCustomProps extends FormLabelProps {
  size?: "small" | "medium" | "large",
}

FormLabelCustom.defaultProps = {
  size: "medium"
}

export default function FormLabelCustom({size, ...props}: FormLabelCustomProps) {
  const classes = useStyles()
  // @ts-ignore
  return <FormLabel className={classes[size]} {...props}/>
}