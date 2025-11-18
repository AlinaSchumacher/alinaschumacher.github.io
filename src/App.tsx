import "./App.css";
import user from "./assets/idCard.json";
import Avatar from "@mui/material/Avatar";
import { Container, Grid, Paper, Stack } from "@mui/material";

function App() {
  return (
    <>
      <Paper
        className="userCard"
        elevation={8}
        sx={{ padding: { lg: "5rem" } }}
      >
        <Stack
          direction={{ sm: "row" }}
          sx={{
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <Avatar
            alt={user.name}
            src={"/src/assets/" + user.img}
            sx={{
              height: { md: 200, lg: 300 },
              width: { md: 200, lg: 300 },
            }}
          >
            AS
          </Avatar>
          <Container sx={{ width: "auto" }}>
            <h1>{user.name}</h1>
            <h2>{user.description}</h2>
          </Container>
        </Stack>
        <Grid
          container
          spacing={2}
          columns={{ sm: 1, md: 2 }}
          sx={{ justifyContent: "space-around", marginTop: 5 }}
        >
          <Grid key={0} size={1}>
            <p>{user.email}</p>
          </Grid>
          <Grid key={1} size={1}>
            <p>{user.mobile}</p>
          </Grid>
          <Grid key={2} size={1}>
            <p>{user.ghub}</p>
          </Grid>
          <Grid key={3} size={1}>
            <p>{user.glab}</p>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}

export default App;
