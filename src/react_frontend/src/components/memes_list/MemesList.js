import React from 'react';
import graphql from 'babel-plugin-relay/macro';
import { usePaginationFragment } from 'react-relay/hooks';
import { List, ListItem, LinearProgress, Fab, Typography } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import useStyles from './MemeListStyles.js';

import Meme from '../meme_container/Meme.js';

const fragmentSpec = graphql`
  fragment MemesListFragment on Query
    @refetchable(queryName: "MemeListQuery") {
    allMemes (
      first: $first
      after: $after
      orderBy: $orderBy
    ) @connection(key: "meme_allMemes") {
      edges {
        node {
          id
          author {
            username
          }
          dateAdded
          image
          likes
          title
        }
      }
    }
  }
`;

const MemesList = (props) => {
  const classes = useStyles();

  const {
    data,
    loadNext,
    hasNext,
    isLoadingNext,
  } = usePaginationFragment(fragmentSpec, props.memes);

  if(data.allMemes === null) {
    return (
      <Typography
        variant="h4"
        className={classes.noMemesInfo}
      >
        Something went wrong, restart the app
      </Typography>
    )
  }

  const result = data.allMemes.edges;

  let noAnyMemes = false;

  if(data.allMemes.pageInfo.endCursor === null){
    noAnyMemes = true;
  }

  const renderItems = (items) => {
    return (
      <List
        className={classes.list}
        component="nav"
        aria-label="contacts"
      >
        {
          items.map(({node}, index) => (
            <ListItem
              className={classes.listItem}
              key={node.id}
            >
              <Meme props={node} />
            </ListItem>
          ))
        }
        {
          isLoadingNext ? (
            <LinearProgress className={classes.progress} color="secondary" />
          ): ''
        }
        {
           noAnyMemes ?
           <Typography
            variant="h4"
            className={classes.noMemesInfo}
           >
             No memes has been added yet, add some using the "Add button" in the bottom right corner and refresh the page
           </Typography>
           : ''
        }
      </List>
    );
  };

  const handleLoadNextButton = (itemsCount) => {
    loadNext(itemsCount);
  };

  return (
    <>
    {
      renderItems(result)
    }
    {
      hasNext ? (
        <Fab
          className={classes.refreshButton}
          onClick={() => handleLoadNextButton(10)}
          color="secondary"
          aria-label="expand"
        >
          <ExpandMoreIcon/>
        </Fab>
      ): ''
    }
    </>
  );
}

export default MemesList;