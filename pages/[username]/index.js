import fetch from 'isomorphic-unfetch'
import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import ProfileCard from '../../components/profile/card'
import Feed from '../../components/feed'
import FeedItem from '../../components/feed/item'

const useStyles = makeStyles(theme => ({
  container: {
    padding: theme.spacing(2),
  },
}))

export default function Profile({user, username, posts}) {
  const classes = useStyles()

  return (
    <Container className={classes.container}>
      <Grid container spacing={2}>
        <Grid item md={3} xs={12}>
          <ProfileCard
            username={username}
            avatar={user.avatar}
            realName={user.fullName}
            about={user.about}
            backsplash={user.header || null}
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

Profile.getInitialProps = async ({req, query}) => {
  const userURL = `${process.env.API_HOST}/users/${query.username}`
  const postsURL = `${process.env.API_HOST}/users/${query.username}/posts`

  const [userResponse, postsResponse] = await Promise.all([
    fetch(userURL),
    fetch(postsURL),
  ])

  const [userJson, postsJson] = await Promise.all([
    userResponse.json(),
    postsResponse.json(),
  ])

  return {
    user: userJson,
    username: query.username,
    posts: postsJson.results,
  }
}
