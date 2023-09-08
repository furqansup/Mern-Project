import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({
  appBar: {
    borderRadius: 15,
    margin: "30px 0",
    display: "flex",        
    justifyContent: "center",
    alignItems: "center",
    padding: "10px 0",
  },
  heading: {
    color: "#0066FF",
    fontSize: "30px",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
  },
  image: {
    // marginLeft: "15px",
    width: "40px",
  },
  mainContainer: {
    flexDirection: "row",
  },
  mainContainerReverse: {
    flexDirection: "column-reverse",
  },
}));
