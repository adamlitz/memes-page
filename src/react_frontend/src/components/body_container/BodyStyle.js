import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    bodyContainer: {
      alignItems: 'center',
      backgroundColor: theme.palette.background.main,
      maxWidth: '100%',
    },
    progress: {
      width: '100%',
      alignItems: 'center',
      borderRadius: 10,
      height: 6,
    },
  }));

export default useStyles;