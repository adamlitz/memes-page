import React, { useState, useEffect, useReducer } from 'react';
import { Button, CircularProgress, FormControl, TextField } from '@material-ui/core';
import useStyles from './AddMemeFormStyle.js';
import toBase64 from './toBase64';
import submitReducer from './submitReducer.js';

import graphql from 'babel-plugin-relay/macro';
import { useMutation } from 'react-relay/hooks';

const initialState = {
    title: '',
    error: false,
    errorText: '',
    fileUploadError: false,
    fileUploadErrorText: '',
    isUploading: false,
}

const AddMemeForm = ({handleModalClose, handleOnComplete}) => {
    const classes = useStyles();

    const [state, dispatch] = useReducer(submitReducer, initialState);
    const { title , error , errorText, fileUploadError, fileUploadErrorText, isUploading } = state;

    const [file, setFile] = useState(null);
    const [image, setImage] = useState('');

    const [mutate, loading] = useMutation(graphql`
            mutation AddMemeFormMutation($input: CreateMemeInput!) {
                createMeme(input: $input) {
                    meme {
                        image
                        title
                    }
                }
            }
        `
    );

    async function uploadFile() {
        dispatch({ type: 'fileIsUploading', });

        await toBase64(file[0])
            .then(base64String => {
                setImage(base64String);
                dispatch({ type: 'fileIsUploaded', });
            })
            .catch(error => {
                console.error("File upload failure, reason: ,", error);
            })
    }

    useEffect(() => {
        if(file) {
            dispatch({ type: 'fileIsInPlace', })
            uploadFile();
        }
    }, [file]);

    useEffect(() => {
        if (title.length > 150) {
            dispatch({
                type: 'titleIsTooLong',
                fieldName: 'title',
                payload: title,
            })
        }
        else if (/^[a-zA-Z-0-9_ ]+$/.test(title) === false && title.length > 0) {
            dispatch({
                type: 'titleIsIncorrect',
                fieldName: 'title',
                payload: title,
            })
        }
        else {
            dispatch({
                type: 'titleIsInPlace',
                fieldName: 'title',
                payload: title,
            })
        }
    }, [title]);

    const onSubmit = (event) => {
        event.preventDefault(); //prevent default behavior which is full page reload

        if(title.length < 1) {
            dispatch({ type: 'titleIsMissing', });
        }

        if(!file) {
            dispatch({ type: 'fileIsMissing', })
        }

        if(file && title.length > 1) {
            mutate({
                variables: {
                    input: {
                        image: image,
                        title: title
                    },
                },
                onError: err => console.error(err),
                onCompleted: () => {
                    handleModalClose();
                    handleOnComplete();
                },
            });
        }
    }

    return (
        <form onSubmit={onSubmit}>
            <FormControl
                className={classes.FormControl}
                fullWidth={true}
            >
                    <TextField
                        className={classes.memeTitleInput}
                        label="Meme title"
                        placeholder="Type your title here"
                        helperText={errorText}
                        error={error}
                        onChange={e =>
                                    dispatch({
                                        type: 'titleIsMissing',
                                        field: 'title',
                                        value: e.target.value,
                                    })
                                 }
                    />
                    <TextField
                        className={classes.imageInput}
                        label="Image"
                        placeholder="Upload image"
                        error={fileUploadError}
                        onChange={e => setFile(e.target.files)}
                        type="file"
                        accept="image/png, image/jpeg"
                        helperText={fileUploadErrorText}
                    />
                    <Button
                        className={classes.uploadButton}
                        type="submit"
                        variant="contained"
                        onSubmit={onSubmit}
                    >
                        Upload
                    </Button>
                        {isUploading ? <CircularProgress className={classes.uploadProgress} /> : null}
                        {loading ? <CircularProgress className={classes.loadingProgress}/> : null}
            </FormControl>
        </form>
    );
}

export default AddMemeForm;