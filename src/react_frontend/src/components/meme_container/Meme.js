import React, { useState } from 'react';
import { Card, CardHeader, CardActions, CardContent, IconButton, Divider, Typography } from '@material-ui/core';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import { useStyles, imgStyle } from './MemeStyle.js';

import graphql from 'babel-plugin-relay/macro';
import { useMutation } from 'react-relay/hooks';

const Meme = ({props}) => {
    const classes = useStyles();

    const date = new Date(props.dateAdded);
    const parsedDate = date.toDateString()
                       + ' '
                       + date.getHours()
                       + ':'
                       + date.getMinutes();

    const [mutate] = useMutation(graphql`
        mutation MemeUpvoteMutation($input: UpVoteMemeInput!) {
            upvoteMeme(input: $input) {
                meme {
                    id
                }
            }
        }
    `);

    const [like, setLike] = useState(props.likes);

    const handleLikeButton = (memeId) => {
        mutate({
            variables: {
                input: {
                    meme: memeId,
                },
            },
            onError: err => console.error(err, err.source),
            onCompleted: () => {
                setLike(like => like + 1);
            },
        });
    }

    return(
        <Card className={classes.card}>
            <CardHeader
                title={<Typography variant="h4">
                        {props.title}
                       </Typography>}
                subheader={<Typography variant="h6">
                        Posted: {parsedDate}
                          </Typography>}
            />
                <Divider />
            <CardContent>
                <img
                    src={`${process.env.REACT_APP_MEDIA_URL}/${props.image}`}
                    alt=""
                    width="700px"
                    style={imgStyle}
                />
                    <CardActions className={classes.cardActions}>
                        <div className={classes.grow} />
                            <IconButton
                                className={classes.likeButton}
                                variant="contained"
                                color="secondary"
                                onClick={() => handleLikeButton(props.id)}
                            >
                            <ThumbUpIcon
                                fontSize="large"
                                color="primary"
                            />
                            </IconButton>
                            <Typography variant="h4">
                                {like}
                            </Typography>
                    </CardActions>
            </CardContent>
        </Card>
    );
}

export default Meme;