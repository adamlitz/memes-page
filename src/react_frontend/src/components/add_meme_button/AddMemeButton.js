import React, { useState } from 'react';
import { Fab, Dialog, DialogContent, DialogTitle, IconButton, Typography, Snackbar} from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import useStyles from './AddMemeButtonStyle.js';
import AddIcon from '@material-ui/icons/Add';
import CloseIcon from '@material-ui/icons/Close';
import AddMemeForm from '../add_meme_form/AddMemeForm.js';

function Alert(props) {
    return <MuiAlert
                elevation={6}
                variant="filled"
                {...props}
            />;
}

const AddMemeButton = () => {
    const classes = useStyles();

    const [open, setOpen] = useState(false);
    const [complete, setComplete] = useState(false);

    const handleModalOpen = () => {
        setOpen(true);
    };

    const handleModalClose = () => {
        setOpen(false);
    };

    const handleOnComplete = () => {
        setComplete(true);
    }

    const handleAlertClose = () => {
        setComplete(false);
    }

    return (
        <>
            <Fab
                className={classes.fab}
                color="secondary"
                aria-label="add"
                onClick={() => handleModalOpen()}
            >
                <AddIcon />
            </Fab>
                <Dialog
                    className={classes.dialog}
                    open={open}
                    onClose={() => handleModalClose()}
                    maxWidth="sm"
                    fullWidth={true}
                >
                    <DialogTitle className={classes.dialogTitle}>
                        <Typography>
                            Add meme
                        </Typography>
                            <IconButton
                                className={classes.closeButton}
                                onClick={handleModalClose}
                                variant="contained"
                                color="secondary"
                            >
                                <CloseIcon />
                            </IconButton>
                    </DialogTitle>
                    <DialogContent>
                        <AddMemeForm
                            handleModalClose={handleModalClose}
                            handleOnComplete={handleOnComplete}
                        />
                    </DialogContent>
                </Dialog>
                <Snackbar
                    open={complete}
                    onClose={() => handleAlertClose()}
                    autoHideDuration={3000}
                >
                    <Alert
                        className={classes.successAlert}
                        severity="success"
                    >
                        <Typography variant="h6">
                            Your meme has been successfully added!
                        </Typography>
                    </Alert>
                </Snackbar>
        </>
    );
}

export default AddMemeButton;