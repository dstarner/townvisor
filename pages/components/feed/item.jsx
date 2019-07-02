import React from 'react';
import PropTypes from 'prop-types';
import * as Moment from 'moment';

import makeStyles from '@material-ui/core/styles/makeStyles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import Link from '../link';

const useStyles = makeStyles(theme => ({
  title: {
    textDecoration: 'none',
    color: 'black',
  },
  author: {
    textDecoration: 'none',
    color: 'black',
    fontWeight: '500',
  },
  card: {
    margin: theme.spacing(1),
    display: 'flex',
    flexDirection: 'row-reverse',
  },
  details: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  statistics: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    paddingBottom: theme.spacing(1),
  },
}));

const FeedItem = ({ title, absPath, author, thumbnail, header, created, views }) => {
  const classes = useStyles();
  const matches = useMediaQuery('(max-width:600px)');

  const imgURL = thumbnail || header;
  const time = Moment(created);
  const showSince = time.isAfter(Moment(new Date()).add(-1, 'days'));


  return (
    <Card className={classes.card} style={matches ? {flexDirection: 'column'} : {}}>
      {
          imgURL && imgURL.length > 0 ? (
            <CardMedia
                className={classes.cover}
                style={matches ? {height: '151px', flex: 'inherit', width: 'inherit'} : {}}
                image={imgURL}
                title={title}
            />
          ) : null
      }
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Link href={absPath}>
            <Typography className={classes.title} component="h5" variant="h5">
              {title}
            </Typography>
          </Link>
          {
            author ? (
                <Typography variant="subtitle1" color="textSecondary">
                  By <Link className={classes.author} href={`${author.profileUrl}`}>@{author.username}</Link>
                </Typography>
            ) : null
          }
        </CardContent>
        <div className={classes.statistics}>
            {created ? <Typography variant="subtitle1" color="textSecondary">{`${time.format('MMMM Do')} ${showSince ? "(" + time.fromNow() + ")" : ''}`}</Typography> : null }
            {views ? <Typography variant="subtitle1" color="textSecondary">{views < 25 ? 'Less than 25' : views} views</Typography>  : null }
        </div>
      </div>
    </Card>
  );
}

FeedItem.propTypes = {
    title: PropTypes.string.isRequired,
    absPath: PropTypes.string.isRequired,
    author: PropTypes.object.isRequired,
    image: PropTypes.string,
    created: PropTypes.string,
    views: PropTypes.number,
}

export default FeedItem;