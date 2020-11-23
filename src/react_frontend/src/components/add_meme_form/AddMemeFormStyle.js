import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    formControl: {
        color: 'secondary',
        margin: 'normal',
    },
    memeTitleInput: {
        marginTop: '0px',
    },
    imageInput: {
        marginTop: '15px',
    },
    uploadButton: {
        marginTop: '45px',
        marginBottom: '15px',
    },
    uploadProgress: {
        marginBottom: '15px',
        alignSelf: 'center',
    },
    loadingProgress: {
        marginBottom: '15px',
        alignSelf: 'center',
    },
  }));

export default useStyles;