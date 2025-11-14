import "./App.css";
import Avatar from "@mui/material/Avatar";
import { Container, Paper, Stack } from "@mui/material";

const user = "Alina Schumacher";

function App() {
  return (
    <>
      <Paper className="userCard">
        <Stack direction={"row"} spacing={2} sx={{ alignItems: "center" }}>
          <Avatar
            className="avatar"
            alt={user}
            sx={{ height: 100, width: 100 }}
          >
            AS
          </Avatar>
          <Container>
            <h1>{user}</h1>
            <h2>Absolventin der FH Aachen</h2>
          </Container>
        </Stack>
      </Paper>
    </>
  );
}

export default App;
