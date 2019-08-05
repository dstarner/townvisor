import React from 'react'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import {makeStyles} from '@material-ui/core/styles'
import ArticleCard from '../components/ArticleCard'

const useStyles = makeStyles(theme => ({
  container: {
    paddingBottom: theme.spacing(2),
    paddingTop: theme.spacing(2),
  },
}))

export default function Landing({results}) {
  const classes = useStyles()

  console.log(results)

  return (
    <Container className={classes.container}>
      <Grid container spacing={2}>
        {results
          ? results.map((result, i) => (
              <ArticleCard key={i} gridSize={i === 0 ? 2 : 1} {...result} />
            ))
          : null}
      </Grid>
    </Container>
  )
}

Landing.getInitialProps = async () => {
  const url = `${process.env.API_HOST}/posts/feed`
  const response = await fetch(url)
  const data = await response.json()
  return {next: data.next, results: data.results}
}
