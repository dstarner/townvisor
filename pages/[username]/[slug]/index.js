import React from 'react'
require('es6-promise').polyfill()
require('isomorphic-fetch')
import {Container, Grid, Typography} from '@material-ui/core'
import {withStyles} from '@material-ui/styles'
import Content from '../../components/post/content'
import Comment from '../../components/post/comments'

const styles = theme => ({
  commentsHeading: {
    marginTop: theme.spacing(3),
  },
})

class Post extends React.Component {
  static async getInitialProps({query}) {
    const postURL = `${process.env.API_HOST}/posts/${query.slug}/`
    const postResponse = await fetch(postURL)
    const postData = await postResponse.json()

    const commentsURL = `${process.env.API_HOST}/posts/${query.slug}/comments/`
    const commentsResponse = await fetch(commentsURL)
    const commentsData = await commentsResponse.json()

    return {
      postDetails: postData,
      comments: commentsData.results,
    }
  }

  /**
   * This is wrapped in a grid component so that we can
   * put more items next to each other (like category sidebar)
   * in a sane and easy manner
   */
  render() {
    let {classes, postDetails, comments} = this.props
    return (
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Content
              title={postDetails.title}
              author={postDetails.author.username}
              markdown={postDetails.mdContent}
              statistics={['Less than 100 views', '5 Reactions ❤️']}
              headerCaption={postDetails.headerCaption}
              headerSrc={postDetails.header}
            />
            <Typography className={classes.commentsHeading} variant="h3">
              Comments
            </Typography>
            {comments.map((comment, index) => (
              <Comment {...comment} depth={0} key={index} />
            ))}
          </Grid>
        </Grid>
      </Container>
    )
  }
}

export default withStyles(styles)(Post)
