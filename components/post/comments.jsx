import React from 'react'
import * as Moment from 'moment'
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Collapse,
  IconButton,
  TextField,
  Typography,
} from '@material-ui/core'
import makeStyles from '@material-ui/core/styles/makeStyles'

import FavoriteIcon from '@material-ui/icons/Favorite'
import FlagIcon from '@material-ui/icons/Flag'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'
import ReplyIcon from '@material-ui/icons/Reply'
import ShareIcon from '@material-ui/icons/Share'

import {useToggle} from '../../util/hooks'

const useStyles = makeStyles(theme => ({
  replyCollapse: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  card: {
    marginTop: theme.spacing(1),
    marginLeft: props => theme.spacing(3 * props.depth),
  },
}))

const Comment = props => {
  const {depth, content, author, created, replies} = props
  let [expanded, toggleExpanded] = useToggle(true)
  let [replying, toggleReplying] = useToggle(false)
  const classes = useStyles(props)

  const time = Moment(created)
  const showSince = time.isAfter(Moment(new Date()).add(-1, 'days'))

  return (
    <React.Fragment>
      <Card className={classes.card}>
        <CardHeader
          avatar={<Avatar>D</Avatar>}
          title={author.fullName}
          subheader={`${time.format('MMMM Do')} ${
            showSince ? '(' + time.fromNow() + ')' : ''
          }`}
          action={
            <IconButton aria-label="Report Comment" onClick={toggleExpanded}>
              {expanded ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
            </IconButton>
          }
        />
        <Collapse in={expanded}>
          <CardContent>
            <Typography>{content}</Typography>
            <Collapse in={replying} className={classes.replyCollapse}>
              <TextField
                multiline
                fullWidth
                label={`Respond to ${author.firstName}`}
              />
            </Collapse>
          </CardContent>
          <CardActions disableSpacing>
            {depth < 2 ? (
              <IconButton aria-label="Reply" onClick={toggleReplying}>
                <ReplyIcon />
              </IconButton>
            ) : null}
            <IconButton aria-label="Add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="Share">
              <ShareIcon />
            </IconButton>
            <IconButton aria-label="Report Comment">
              <FlagIcon />
            </IconButton>
          </CardActions>
        </Collapse>
      </Card>
      {replies && replies.length > 0 ? (
        <Collapse in={expanded}>
          {replies.map((reply, index) => (
            <Comment {...reply} key={index} depth={depth + 1} />
          ))}
        </Collapse>
      ) : null}
    </React.Fragment>
  )
}

export default Comment
