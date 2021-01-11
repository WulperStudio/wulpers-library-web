import React, {ReactNode} from "react";
import {withStyles} from "@material-ui/core/styles";
import Menu, {MenuProps} from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemText from "@material-ui/core/ListItemText";

const StyledMenu = withStyles({
  paper: {
    width: 230,
    marginTop: 10
  }
})((props: MenuProps) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center"
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center"
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {}
}))(MenuItem);

type Props = {
  items: string[],
  button: ReactNode
}

export default function CustomizedMenus({items, button}: Props) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <div onClick={handleClick} style={{display: "inline-block"}}> {button}</div>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {items.map((item, index) => (
          <StyledMenuItem key={index}>
            <ListItemText primary={item} />
          </StyledMenuItem>
        ))}
      </StyledMenu>
    </>
  );
}
