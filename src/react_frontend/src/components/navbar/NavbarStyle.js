import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    grow: {
        flexGrow: 1,
    },
    navbar: {
        position: 'static',
    },
    aboutLink: {
        marginRight: '20px',
    },
    githubLink: {
        marginRight: '20px',
    },
    backgroundColorBox: {
        alignItems: 'center',
        marginTop: '20px',
    },
    backgroundColorSwitch: {
        marginBottom: '20px',
    },
    sunIcon: {
        marginBottom: '2px',
    },
    moonIcon: {
        marginBottom: '2px',
        marginLeft: '-6px',
    },
}));

export default useStyles;