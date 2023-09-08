import React, { useEffect, useState } from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@mui/material";
import memories from "./images/photo-frame.png";
import Form from "./components/Form/Form";
import Posts from "./components/Posts/Posts";
import useStyles from "./styles";
import { useDispatch } from "react-redux";
import { getPosts } from "./actions/posts";

function App() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [currentId, setCurrentId] = useState(null);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    dispatch(getPosts());
    window.addEventListener("resize", checkScreenSize);
    checkScreenSize();
    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, [currentId, dispatch]);

  const checkScreenSize = () => {
    setIsSmallScreen(window.innerWidth <= 600);
  };

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">
        PhotoMemo
        </Typography>
        <img className={classes.image} src={memories} alt="memories" />
        <img className={classes.waves} src="./waves" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justifyContent="space-between"
            alignItems="stretched"
            spacing={3}
            className={
              isSmallScreen
                ? classes.mainContainerReverse
                : classes.mainContainer
            }
          >
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
