import "./App.css";
import user from "./assets/idCard.json";
import { IdCard } from "./assets/Components/IdCard";

function App() {
  var padding = "";

  for (let i = 0; i < 10; i++) {
    padding +=
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.";
  }

  return (
    <>
      <div className="scrollStart"></div>
      <IdCard user={user} />
      <p className="content">{padding}</p>
    </>
  );
}

export default App;
