import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    list: {
        alignItems: 'center',
    },
    listItem: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '20px',
    },
    refreshButton: {
        position: 'fixed',
        bottom: theme.spacing(2),
        left: theme.spacing(2),
    },
    infoAlert: {
        alignItems: 'center',
    },
    progress: {
        alignItems: 'center',
        borderRadius: 10,
        height: 10,
    },
    noMemesInfo: {
        alignItems: 'center',
        justifyContent: 'center',
    },
}));


export default useStyles;