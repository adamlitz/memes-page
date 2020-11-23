import React from 'react';
import useStyles from './BodyStyle.js';
import graphql from 'babel-plugin-relay/macro';
import { usePreloadedQuery, loadQuery } from 'react-relay/hooks';
import { LinearProgress, Container } from '@material-ui/core';
import RelayEnvironment from '../../utils/relayEnvironment';

import AddMemeButton from '../add_meme_button/AddMemeButton.js';
import MemesList from '../memes_list/MemesList.js';

const { Suspense } = React;

const rootQuery = graphql`
  query BodyQuery($first: Int!, $after: String!, $orderBy: String!) {
    ...MemesListFragment
  }
`;

const preloadedQuery = loadQuery.loadQuery(RelayEnvironment, rootQuery,
    {
      first: 10,
      after: '',
      orderBy: '-date_added',
    }
  );

const RenderMemes = (props) => {
  const data = usePreloadedQuery(rootQuery, props.preloadedQuery);

  return (
    <MemesList memes={data} />
  );
}

const Body = () => {
  const classes = useStyles();

  return (
    <Container className={classes.bodyContainer}>
        <Suspense fallback={
                            <LinearProgress
                              className={classes.progress}
                              color="secondary"
                            />
                           }>
            <RenderMemes preloadedQuery={preloadedQuery} />
            <AddMemeButton />
        </Suspense>
    </Container>
  );
}

export default Body;