import "./App.css";
import user from "./assets/idCard.json";
import { IdCard } from "./assets/Components/idCard";
import { AppBar, Avatar, Toolbar, useScrollTrigger } from "@mui/material";

function App() {
  var padding = "";

  for (let i = 0; i < 10; i++) {
    padding +=
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.";
  }

  return (
    <>
      <AppBar position="sticky">
        <Toolbar>
          <Avatar alt={user.name} src={"/src/assets/" + user.img}>
            AS
          </Avatar>
        </Toolbar>
      </AppBar>
      <IdCard user={user} />
      <p>{padding}</p>
    </>
  );
}

export default App;
