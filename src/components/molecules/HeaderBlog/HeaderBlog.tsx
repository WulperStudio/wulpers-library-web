import React from "react"
import ListItemText from "@material-ui/core/ListItemText"
import ListItem from "@material-ui/core/ListItem"
import List from "@material-ui/core/List"
import ArrowBackIcon from "@material-ui/icons/ArrowBack"
import Button from "@material-ui/core/Button"
import useStyles from "./HeaderBlog.styles"
import Fab from "../../atoms/Fab"
import Hidden from "@material-ui/core/Hidden/Hidden"
import Tooltip from "@material-ui/core/Tooltip"
import Avatar from "@material-ui/core/Avatar"
import HeartIcon from "../../icons/Heart"
import FilterIcon from "../../icons/Filter"
import Menu from "../../molecules/Menu/Menu"

export default function HeaderBlog({
  logo,
  links,
  buttonBackOnclick,
  navBarConfig,
  userName,
  userImage,
}: any) {
  const classes = useStyles()
  return (
    <nav className={classes.navBar}>
      {!buttonBackOnclick && logo && (
        <img src={logo} className={classes.logo} />
      )}
      {buttonBackOnclick && (
        <Fab
          color="inherit"
          aria-label="add"
          className={classes.buttonBack}
          size="medium"
          onClick={buttonBackOnclick}
        >
          <ArrowBackIcon />
        </Fab>
      )}
      <div>
        <Hidden smDown>
          <List
            component="nav"
            aria-labelledby="main navigation"
            className={classes.navDisplayFlex}
          >
            {links.map((link: any, i: number) => (
              <a
                href={link.href}
                key={i}
                className={classes.linkText}
                onClick={link.onClick}
              >
                <ListItem button>
                  <ListItemText primary={link.text} />
                </ListItem>
              </a>
            ))}
          </List>
        </Hidden>
      </div>
      <Hidden smDown>
        <div className={classes.buttonsContainer}>
          {navBarConfig &&
            navBarConfig.map(
              ({ title, onClick, icon, type, style, items }: any) => (
                <Tooltip key={title} title={title} placement="bottom">
                  <>
                    {type === "Submenu" && (
                      <Menu
                        button={
                          <Fab
                            size="small"
                            className={classes.submenu}
                            onClick={onClick}
                          >
                            <FilterIcon />
                          </Fab>
                        }
                        items={items}
                      />
                    )}
                    {type === "Fab" && (
                      <Fab
                        color="inherit"
                        className={classes.favNavBar}
                        size="small"
                        onClick={onClick}
                      >
                        <>{icon}</>
                      </Fab>
                    )}
                    {type === "Button" && (
                      <Button
                        variant={
                          style.includes("outlined") ? "outlined" : "contained"
                        }
                        color={
                          style.includes("secondary") ? "secondary" : "primary"
                        }
                        className={classes.buttonNavBar}
                        onClick={onClick}
                      >
                        {title}
                      </Button>
                    )}
                    {type === "Favourites" && (
                      <Fab
                        size="small"
                        className={classes.buttonLike}
                        onClick={onClick}
                      >
                        <HeartIcon />
                      </Fab>
                    )}
                    {type === "separation" && (
                      <div className={classes.separation} />
                    )}
                  </>
                </Tooltip>
              )
            )}

          <Avatar alt={userName} src={userImage} className={classes.avatar} />
        </div>
      </Hidden>
      <Hidden mdUp>
        <Fab
          color="inherit"
          aria-label="add"
          className={classes.buttonBack}
          size="medium"
          onClick={buttonBackOnclick}
        >
          <FilterIcon />
        </Fab>
      </Hidden>
    </nav>
  )
}
