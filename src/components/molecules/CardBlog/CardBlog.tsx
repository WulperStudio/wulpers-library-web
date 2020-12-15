import React from "react"
import {makeStyles} from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Typography from "@material-ui/core/Typography"
import Grid, {GridProps} from "@material-ui/core/Grid"
import ButtonBase from '@material-ui/core/ButtonBase';

const useStyles = makeStyles({
  root: {},
  cardMedia: {
    borderRadius: "10px",
    maxHeight: "275px"
  },
  cardAction: {
    textAlign: 'initial'
  }
})

export type CardBlogData = {
  title: string,
  preTitle: string,
  content: string,
  image: string,
}

export type CardBlogProps = {
  data: CardBlogData,
  variant?: "type1" | "type2" | "type3",
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

CardBlog.defaultProps = {
  variant: "type1",
  onClick: () => false
}

export default function CardBlog({variant, data, onClick}: CardBlogProps) {
  const classes = useStyles()
  // @ts-ignore
  let xs: GridProps.xs = 12
  // @ts-ignore
  let direction: GridProps.direction = "column"

  if (variant === "type2") {
    xs = 6
    direction = "row"
  }
  if (variant === "type3") {
    xs = 6
    direction = "row-reverse"
  }

  return (
    <Card className={classes.root}>
      <ButtonBase onClick={onClick} className={classes.cardAction}>
        <CardActionArea>
          <Grid
            container
            direction={direction}
            justify="center"
            alignItems="stretch"
          >
            <Grid item xs={xs}>
              <CardContent>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  image={data.image}
                  title="Contemplative Reptile"
                  className={classes.cardMedia}
                />
              </CardContent>
            </Grid>
            <Grid item xs={xs}>
              <CardContent>
                <span>{data.preTitle}</span>
                <Typography gutterBottom variant="h5" component="h2">{data.title}</Typography>
                <p>{data.content}</p>
              </CardContent>
            </Grid>
          </Grid>
        </CardActionArea>
      </ButtonBase>
    </Card>
  )

}