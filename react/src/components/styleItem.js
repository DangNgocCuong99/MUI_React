import { makeStyles } from "@mui/styles";

const styleItem = makeStyles((theme) => ({
  all: {
    direction: "row",
    height: "100vh",
  },
  main_left: {
    height: "100vh",
    backgroundColor: "#191970",
    display: "flex",
  },
  main_right: {
    direction: "column",
    height: "100vh",
  },
  main_right_top: {
    height: "55vh",
    direction: "row",
  },
  main_right_top_2: {

    direction: "row",
    width: "100vh",
  },
  main_right_top_21: {

    height: "6.7vh",
    direction: "row",
  },
  main_right_top_22: {

    height: "48.3vh",
  },
  main_right_bottom: {
    direction: "row",
    height: "35vh",

  },
  boxItem: {
    display: "flex",
    padding: "10px",
    boxShadow: "0px 0px 15px -10px rgba(0, 0, 0, 0.75)",
  },
}));

export default styleItem;
