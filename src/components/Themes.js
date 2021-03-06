import { makeStyles, fade } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    titleContainer: {
      backgroundColor: '#2e1534',
      color: '#fff',
      padding: '2% 5%',
      textAlign: 'center',
    },
    
    tabContainer: {
      backgroundColor: '#2e1534',
      transition: '0.3s',
    },
    padding: {
      padding: theme.spacing(3),
    },
    // These are properties for SmallScreenSize
    appBar: {
      backgroundColor: '#2e1534',
    },
    appBarStiky: {
      display: 'inline',
      position: 'fixed',
      width: '100%',
      zIndex: 10,
      marginBottom: '100px',
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    smallScreenBlogTitle: {
      flexGrow: 1,
      display: 'block',
      // display: 'none',
      // [theme.breakpoints.up('sm')]: {
      //   display: 'block',
      // },
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: 'auto',
      // width: '100%',
      // [theme.breakpoints.up('sm')]: {
      //   marginLeft: theme.spacing(1),
      //   width: 'auto',
      // },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      // width: '100%',
      // [theme.breakpoints.up('sm')]: {
      //   width: '12ch',
      //   '&:focus': {
      //     width: '20ch',
      //   },
      // },
    },
    // hidden_class: {
    //   // display: 'none',
    // },
    // sticky: {
    //   width: '100%',
    //   paddingTop: '24px',
    //   position: 'fixed',
    //   zIndex: 10,
    // },
    transitionClass: {
      transition: '0.7s',
    },

  }));