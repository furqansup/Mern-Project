import React from "react";
import useStyles from "./styles";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import DeleteIcon from "@mui/icons-material/Delete";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import moment from "moment";
import { useDispatch } from "react-redux";
import { likePost, deletePost } from "../../../actions/posts";



Post.js:42 Uncaught TypeError: setCurrentId is not a function
    at onClick (Post.js:42:1)
    at HTMLUnknownElement.callCallback (react-dom.development.js:4164:1)
    at Object.invokeGuardedCallbackDev (react-dom.development.js:4213:1)
    at invokeGuardedCallback (react-dom.development.js:4277:1)
    at invokeGuardedCallbackAndCatchFirstError (react-dom.development.js:4291:1)
    at executeDispatch (react-dom.development.js:9041:1)
    at processDispatchQueueItemsInOrder (react-dom.development.js:9073:1)
    at processDispatchQueue (react-dom.development.js:9086:1)
    at dispatchEventsForPlugins (react-dom.development.js:9097:1)
    at react-dom.development.js:9288:1
