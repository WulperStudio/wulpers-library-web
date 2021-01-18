import React, {ReactNode} from "react";
import {withStyles} from "@material-ui/core/styles";
import Menu, {MenuProps} from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemText from "@material-ui/core/ListItemText";
import useStyles from "./Menu.styles";

interface StyledMenuProps extends MenuProps {
  orientation?: "right" | "left" | "center"
}

const StyledMenu = withStyles({
  paper: {
    width: 230,
    marginTop: 10,
    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
    borderRadius: "6px",
  }
})(({orientation, ...props}: StyledMenuProps) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: orientation || "left"
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: orientation || "left"
    }}
    {...props}
  />
));

type Items = {
  title: string,
  onClick: (key: any) => any
}

type CustomizedMenusProps = {
  items: Items[],
  button: ReactNode,
  returnKey?: string
}

export default function CustomizedMenus({items, button, returnKey}: CustomizedMenusProps) {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <div onClick={handleClick} style={{display:"inline-block"}}> {button}</div>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        orientation="left"
      >
        {items.map(({title, onClick}, index) => (
          <MenuItem key={index} onClick={() => onClick ? onClick(returnKey?returnKey:title) : false}>
            <ListItemText
              className={classes.listItemText}
              primary={title}
            />
          </MenuItem>
        ))}
      </StyledMenu>
    </>
  );
}
