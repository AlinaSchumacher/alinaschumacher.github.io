import "./App.css";
import user from "./assets/idCard.json";
import { IdCard } from "./assets/Components/IdCard";
import { useScrollTrigger } from "@mui/material";

function App() {
  const scrolled = useScrollTrigger({
    disableHysteresis: true,
    threshold: 500,
    target: document.getElementById("root"),
  });

  console.log(scrolled);

  var padding = "";

  for (let i = 0; i < 10; i++) {
    padding +=
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.";
  }

  return (
    <>
      <div className="id">
        <IdCard user={user} headerTrigger={scrolled} />
      </div>
      <div className="scrollStart"></div>
      <p className="content">{padding}</p>
    </>
  );
}

export default App;
