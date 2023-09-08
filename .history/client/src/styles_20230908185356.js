import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({
  appBar: {
    borderRadius: 15,
    margin: "30px 0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px 0",
    background: `linear-gradient(
      55deg,
  
    )`,
  },
  heading: {
    color: "black",
    fontSize: "30px",
    fontFamily: "serif",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
  },
  image: {
    width: "40px",
  },
  mainContainer: {
    flexDirection: "row",
  },
  mainContainerReverse: {
    flexDirection: "column-reverse",
  },
}));
