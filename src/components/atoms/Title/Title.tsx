import reactStringReplace from "react-string-replace";
import React, {ReactElement} from "react";
import useStyles from "./Title.styles";

export default function Title({children}: { children: string }): ReactElement {
  const classes = useStyles()
  let replacedTitle = reactStringReplace(children, /\*\*(.*)\*\*/g, (match: string, i: number) => (
    <span key={match + i} className={classes.bold}>{match}</span>
  ))
  replacedTitle = reactStringReplace(replacedTitle, /\*\_(.*)\_\*/g, (match: string, i: number) => (
    <span key={match + i} className={classes.boldUnderlined}>{match}</span>
  ))
  replacedTitle = reactStringReplace(replacedTitle, /\\n/g, (match: string, i: number) => (
    <br />
  ))
  return <>{replacedTitle}</>
}