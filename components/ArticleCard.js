import React from 'react'
import {create} from 'domain'
import moment from 'moment'
import Link from 'next/link'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Grid from '@material-ui/core/Grid'
import {makeStyles} from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
  card: {
    display: 'flex',
    height: 400,
  },
  cardAction: {
    display: 'flex',
    flex: '1 0 auto',
    flexDirection: 'column',
  },
  description: {
    width: '100%',
  },
  media: {
    flex: 1,
    width: '100%',
  },
}))

export default function ArticleCard(props) {
  const classes = useStyles()

  const {
    absPath,
    author,
    created,
    gridSize,
    header,
    numberOfLikes,
    title,
    thumbnail,
  } = props

  const formattedCreatedDate = moment(created)

  return (
    <Grid item xs={12} sm={6 * gridSize} md={4 * gridSize} lg={3 * gridSize}>
      <Card className={classes.card}>
        <Link href={absPath}>
          <CardActionArea className={classes.cardAction}>
            <CardMedia
              className={classes.media}
              image={thumbnail || header}
              title={title}
            />
            <CardContent className={classes.description}>
              <Typography variant="h5" component="h2">
                {title}
              </Typography>
              <Typography
                gutterBottom
                variant="subtitle2"
                color="textSecondary"
                component="h6"
              >
                by {author.fullName}
              </Typography>
              <Typography variant="body2" color="textPrimary" component="p">
                {formattedCreatedDate.format('MMMM Do YYYY h:mmA')}{' '}
                {numberOfLikes} {numberOfLikes === 1 ? 'like' : 'likes'}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Link>
      </Card>
    </Grid>
  )
}
