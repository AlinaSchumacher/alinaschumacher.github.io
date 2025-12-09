import "./App.css";
import user from "./assets/idCard.json";
import { IdCard } from "./assets/Components/IdCard";
import { MyTimeline } from "./assets/Components/MyTimeline";
import {
  AppBar,
  Avatar,
  Box,
  IconButton,
  Slide,
  Toolbar,
  Typography,
  useScrollTrigger,
} from "@mui/material";
import AbcIcon from "@mui/icons-material/Abc";

function App() {
  const scrolled = useScrollTrigger({
    disableHysteresis: true,
    threshold: 500,
    target: document.getElementById("root"),
  });

  var padding = "";

  for (let i = 0; i < 10; i++) {
    padding +=
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.";
  }

  return (
    <>
      <Slide in={scrolled} direction="down">
        <AppBar>
          <Toolbar>
            <IconButton
              onClick={() =>
                // Scroll to the top
                document
                  .getElementsByClassName("userCard")[0]
                  .scrollIntoView({ block: "start", behavior: "smooth" })
              }
            >
              <Avatar alt={user.name} src={"/src/assets/" + user.img}>
                AS
              </Avatar>
            </IconButton>
            <Typography variant="h6" noWrap>
              {user.name}
            </Typography>
            <Box flexGrow={1}></Box>
            <IconButton>
              <AbcIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Slide>
      <IdCard user={user} headerTrigger={scrolled} />
      <MyTimeline />
      <p className="content">{padding}</p>
    </>
  );
}

export default App;
