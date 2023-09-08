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
    color: "black",
    fontSize: "30px",
  },
  image: {
    marginLeft: "15px",
    width: "40px",
  },
  mainContainer: {
    flexDirection: "row",
  },
  mainContainerReverse: {
    flexDirection: "column-reverse",
  },
}));
