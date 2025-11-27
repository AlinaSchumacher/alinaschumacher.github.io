import "./IdCard.css";
import { Paper, Stack, Avatar, Container, Grid } from "@mui/material";

export function IdCard({
  user,
  headerTrigger,
}: {
  user: any;
  headerTrigger: boolean;
}) {
  return (
    <Paper
      className="userCard"
      elevation={8}
      sx={{
        padding: headerTrigger
          ? { xs: "0 2rem", lg: "0 5rem" }
          : { xs: "2rem", lg: "5rem" },
        margin: headerTrigger
          ? { xs: "0 2rem", lg: "0 5rem" }
          : { xs: "2rem", lg: "5rem" },
        width: headerTrigger ? "100vw" : "75vw",
        minHeight: headerTrigger ? "5rem" : "90vh",
        transition: headerTrigger ? "0.3s ease" : "0.5s ease",
        borderRadius: headerTrigger ? 0 : 1,
      }}
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
            height: { xs: 200, lg: 300 },
            width: { xs: 200, lg: 300 },
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
