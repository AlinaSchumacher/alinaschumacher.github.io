import "./App.css";
import user from "./assets/idCard.json";
import Avatar from "@mui/material/Avatar";
import { Container, Paper, Stack } from "@mui/material";

function App() {
  return (
    <>
      <Paper className="userCard" elevation={8}>
        <Stack direction={"row"} spacing={2} sx={{ alignItems: "center" }}>
          <Avatar
            className="avatar"
            alt={user.name}
            src="/src/assets/20240104_115047.jpg"
            sx={{ height: 100, width: 100 }}
          >
            AS
          </Avatar>
          <Container>
            <h1>{user.name}</h1>
            <h2>{user.description}</h2>
            <h2>{user.email}</h2>
            <h2>{user.mobile}</h2>
          </Container>
        </Stack>
      </Paper>
    </>
  );
}

export default App;
