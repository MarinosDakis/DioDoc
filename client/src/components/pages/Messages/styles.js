// adapted from: https://www.youtube.com/watch?v=ngc9gnGgUdA&list=PL6QREj8te1P7VSwhrMf3D3Xt4V6_SRkhu&index=1
// adapted from: https://www.youtube.com/watch?v=aibtHnbeuio&list=PL6QREj8te1P7VSwhrMf3D3Xt4V6_SRkhu&index=2
import { makeStyles } from '@material-ui/core/styles';
import { margin } from '@mui/system';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
    width: "500px",
    borderRadius: "10px",
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  buttonSubmit: {
    width: "100px",
    backgroundColor: "rgba(0,183,255, 1)",
    "&:hover": {
      backgroundColor: "#20edfd",
    },
  },
  alert: {
    width: "-webkit-fill-available",
    marginBottom: "10px",
  },
  title: {
    marginBottom: "10px",
  },
  grid: {
    textAlign: "center",
    margin: "20px 5px",
    borderRadius: "10px",
  },
  card: {
    display: "flex",
    width: "400px",
    margin: "20px 0px",
  },
  cardContent: {
    width: "280px",
  },
}));