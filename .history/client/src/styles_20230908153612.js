import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({
  appBar: {
    borderRadius: 15,
    margin: "30px 0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px 0",
  },
  heading: {
    color: "rgba(0,183,255, 1)",
    fontSize: "30px",
  },
  image: {
    marginLeft: "15px",
    width: "40px",
  },
  [theme.breakpoints]
  mainContainer:{
    flexDirection:'column-reverse'
  }
}));
