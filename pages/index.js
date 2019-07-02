import React from 'react';
require('es6-promise').polyfill();
require('isomorphic-fetch');

import Container  from "@material-ui/core/Container";
import Grid from '@material-ui/core/Grid';

import NavBar from './components/appbar';
import Feed from './components/feed';
import FeedItem from './components/feed/item';


export default class Home extends React.Component {
  static async getInitialProps() {
    const url = `${process.env.API_HOST}/posts/feed`;
    const response = await fetch(url);
    const data = await response.json();
    return { next: data.next, results: data.results };
  }
  
  /**
   * This is wrapped in a grid component so that we can
   * put more items next to each other (like category sidebar)
   * in a sane and easy manner
   */
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Feed emptyText='We could not load any posts' onLoadNext={() => {}}>
                {this.props.results ? this.props.results.map((datum, index) => (
                    <FeedItem key={index} {...datum}/>
                )) : null}
              </Feed>
            </Grid>
          </Grid>
        </Container>
      </React.Fragment>
    )
  }
}