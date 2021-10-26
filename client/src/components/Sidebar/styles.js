import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '&.MuiTypography-root': {
      color: "white",
    },
    '&.MuiDivider-root': {
      borderColor: "white",
    },
    '&.MuiSvgIcon-root': {
      color: "white",
    },
  },
  text: {
    color: "white",
    textDecoration: "none",
    fontFamily: "Arial",
  },
}));