import "./App.css";
import user from "./assets/idCard.json";
// import lang from "./assets/lang.json";
// import Avatar from "@mui/material/Avatar";
// import { Container, Grid, Paper, Stack } from "@mui/material";
import { IdCard } from "./assets/Components/idCard";

function App() {
  return (
    <>
      <IdCard user={user} />
    </>
  );
}

export default App;
