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
  hsl(221deg 86% 54%) 0%,
  hsl(226deg 85% 61%) 13%,
  hsl(229deg 85% 65%) 23%,
  hsl(232deg 85% 69%) 33%,
  hsl(234deg 84% 72%) 41%,
  hsl(236deg 84% 75%) 49%,
  hsl(239deg 70% 69%) 57%,
  hsl(243deg 61% 62%) 65%,
  hsl(246deg 55% 54%) 74%,
  hsl(251deg 59% 46%) 85%,
  hsl(257deg 84% 36%) 100%
    )`,
  },
  heading: {
    color: "black",
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
