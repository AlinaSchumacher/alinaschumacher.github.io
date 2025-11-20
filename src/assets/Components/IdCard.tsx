import "./IdCard.css";
import { Paper, Stack, Avatar, Container, Grid } from "@mui/material";

export function IdCard({ user }: { user: any }) {
  return (
    <Paper
      className="userCard"
      elevation={8}
      sx={{ padding: { xs: "2rem", lg: "5rem" } }}
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
        {Object.entries(user).map((data: any) => {
          if (data[0] != "name" && data[0] != "description" && data[0] != "img")
            return (
              <Grid key={data[0]} size={1}>
                <p className="subtext">{data[0]}</p>
                <p>{data[1]}</p>
              </Grid>
            );
        })}
      </Grid>
    </Paper>
  );
}
