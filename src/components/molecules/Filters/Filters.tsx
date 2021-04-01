import React from "react";
import useStyles from "./Filters.styles";
import Button from "@material-ui/core/Button";
import Badge from "@material-ui/core/Badge";
import { Points } from "../../icons";

export interface FiltersProps {}

Filters.defaultProps = {};

export default function Filters(props: FiltersProps) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button fullWidth={true}>Drafts (5)</Button>
      <Button fullWidth={true} className={classes.buttonActive}>
        Being reviewed (1)
      </Button>
      <Button fullWidth={true}>
        <Badge color="error" variant="dot" invisible={false}>
        UX testing
        </Badge>
      </Button>
      <Button fullWidth={true}>Published</Button>
      <Button>
        <Points />
      </Button>
    </div>
  );
}
