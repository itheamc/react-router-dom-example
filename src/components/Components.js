import { withStyles } from '@material-ui/core/styles';
import { Tabs, Tab } from "@material-ui/core";

export const StyledTabs = withStyles({
    indicator: {
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: 'transparent',
      '& > span': {
        width: '100%',
        backgroundColor: '#635ee7',
      },
    },
  })((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);
  
export const StyledTab = withStyles((theme) => ({
    root: {
      textTransform: 'none',
      color: '#fff',
      fontWeight: theme.typography.fontWeightRegular,
      fontSize: theme.typography.pxToRem(15),
      marginRight: theme.spacing(1),
      '&:focus': {
        opacity: 1,
      },
    },
  }))((props) => <Tab {...props} />);

