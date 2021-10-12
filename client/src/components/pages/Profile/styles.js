// adapted from: https://www.youtube.com/watch?v=ngc9gnGgUdA&list=PL6QREj8te1P7VSwhrMf3D3Xt4V6_SRkhu&index=1
// adapted from: https://www.youtube.com/watch?v=aibtHnbeuio&list=PL6QREj8te1P7VSwhrMf3D3Xt4V6_SRkhu&index=2
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
    width: "650px",
    borderRadius: "90px",
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  buttonSubmit: {
    margin: "10px",
    width: "20%",
    backgroundColor: "rgba(0,183,255, 1)",
    "&:hover": {
      backgroundColor: "#20edfd",
    },
  },
  buttonEdit: {
    margin: "10px",
    width: "20%",
    backgroundColor: "#e4dbe2",
    "&:hover": {
      backgroundColor: "#c1baba",
    },
  },
  alert: {
    width: "-webkit-fill-available",
    marginBottom: "10px",
  },
  title: {
    marginBottom: "10px",
  },
  profileImg: {
    borderRadius: "180px",
    height: "300px",
    width: "300px",
  },
  grid: {
    textAlign: "center",
    margin: "20px 5px",
    backgroundColor: "#00b7ff",
    borderRadius: "10px",
  },
  container: {
    display: "flex",
    justifyContent: "center",
  }  
}));