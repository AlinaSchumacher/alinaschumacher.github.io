import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { StrictMode } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme} defaultMode="dark">
      <App />
    </ThemeProvider>
  </StrictMode>
);
