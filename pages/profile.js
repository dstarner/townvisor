import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import ProfileCard from './components/profile/card'
import Feed from './components/feed'
import FeedItem from './components/feed/item'

const useStyles = makeStyles(theme => ({
  container: {
    padding: theme.spacing(2),
  },
}))

export default function Profile({username, userDetails, posts}) {
  const classes = useStyles()

  return (
    <Container className={classes.container}>
      <Grid container spacing={2}>
        <Grid item md={3} xs={12}>
          <ProfileCard
            username={username}
            avatar={userDetails.avatar}
            realName={userDetails.fullName}
            about={userDetails.about}
            backsplash={userDetails.header ? userDetails.header : undefined}
          />
        </Grid>
        <Grid item md={9} xs={12}>
          <Feed
            emptyText="This user has not posted anything yet!"
            onLoadNext={() => {}}
          >
            {posts
              ? posts.map((datum, index) => <FeedItem key={index} {...datum} />)
              : null}
          </Feed>
        </Grid>
      </Grid>
    </Container>
  )
}

Profile.getInitialProps = async ({query}) => {
  const userURL = `${process.env.API_HOST}/users/${query.username}`
  const userResponse = await fetch(userURL)
  const userDetails = await userResponse.json()

  const postsURL = `${process.env.API_HOST}/users/${query.username}/posts`
  const postsResponse = await fetch(postsURL)
  const postDetails = await postsResponse.json()

  return {
    username: query.username,
    userDetails,
    posts: postDetails.results,
  }
}
