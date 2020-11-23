import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    card: {
        minWidth: '700px',
        margin: 'auto',
        boxShadow: '0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)',
        backgroundColor: 'secondary',
    },
    cardActions: {
        alignContent: 'right'
    },
    grow: {
        flexGrow: 1,
    },
    likeButton: {},
  }));

const imgStyle = {}

export { useStyles, imgStyle };