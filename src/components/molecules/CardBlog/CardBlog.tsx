import React from "react"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Typography from "@material-ui/core/Typography"
import Grid, {GridProps} from "@material-ui/core/Grid"
import Fab from "@material-ui/core/Fab"
import HeartIcon from "../../icons/Heart"
import LinkIcon from "../../icons/Link"
import useStyles from "./CardBlog.styles"
import ParseHTML from "../../atoms/ParseHTML"

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
  let xsImage: GridProps.xs = 12
  // @ts-ignore
  let xsContent: GridProps.xs = 12
  // @ts-ignore
  let direction: GridProps.direction = "column"
  let paddingNone: string = "bottom"
  let buttonsArea: string = "buttonsAreaTop"

  if (variant === "type2") {
    xsImage = 4
    xsContent = 8
    direction = "row"
    paddingNone = "right"
    buttonsArea = "buttonsAreaBottom"
  }
  if (variant === "type3") {
    xsImage = 4
    xsContent = 8
    direction = "row-reverse"
    paddingNone = "left"
    buttonsArea = "buttonsAreaBottom"
  }

  return (
    <Card className={classes.root}>
      <CardActionArea onClick={onClick} className={classes.cardAction}>
        <Grid
          container
          direction={direction}
          justify="center"
          alignItems="stretch"
        >
          {/* @ts-ignore*/}
          <Grid item xs={xsImage} className={classes[paddingNone]}>
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
          <Grid item xs={xsContent}>
            <CardContent>
              <span>{data.preTitle}</span>
              <Typography gutterBottom variant="h5" component="h2">{data.title}</Typography>
              <ParseHTML html={data.content} />
            </CardContent>
          </Grid>
        </Grid>
      </CardActionArea>
      {/* @ts-ignore*/}
      <div className={classes[buttonsArea]}>
        <Fab size="small" className={classes.buttonLink}>
          <LinkIcon/>
        </Fab>
        <Fab size="small" className={classes.buttonLike}>
          <HeartIcon/>
        </Fab>
      </div>

    </Card>
  )

}