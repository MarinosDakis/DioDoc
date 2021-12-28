import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
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
  },
  card: {
    width: "400px",
    height: "150px",
    margin: "20px 0px",
    border: "#b5aeae solid 1px",
    boxShadow: "0 4px 5px 1px rgba(0, 0, 0, .2)",
    display: "flex",
  },
  cardContent: {
    width: "280px",
  },
  container: {
    display: "flex",
    justifyContent: "center",
  }
}));