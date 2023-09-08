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
    position: "relative",
    // Apply the wave background class to the appBar
    // Set z-index to make sure content appears on top of the waves
    zIndex: 1,
  },
  heading: {
    color: "rgba(0, 183, 255, 1)",
    fontSize: "30px",
    // Adjust positioning if needed
  },
  image: {
    marginLeft: "15px",
    width: "40px",
    // Adjust positioning if needed
  },
  waves: {
    position: "absolute",
    // Set background image property for the waves
    backgroundImage: "url('path-to-your-wave-image.png')",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    // Adjust other background properties as needed (e.g., background-size, background-repeat)
  },
  mainContainer: {
    flexDirection: "row",
  },
  mainContainerReverse: {
    flexDirection: "column-reverse",
  },
}));
