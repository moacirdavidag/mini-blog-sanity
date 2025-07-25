import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Box,
  Link as MuiLink,
} from "@mui/material";
import { Link } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <>
      <AppBar position="static" color="default" elevation={0}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <MuiLink
            component={Link}
            to="/"
            underline="none"
            color="inherit"
            sx={{ fontWeight: "bold", fontSize: "1.5rem" }}
          >
            Alimento Diário
          </MuiLink>
          <Typography variant="body2" color="text.secondary">
            Devocionais & Reflexões
          </Typography>
        </Toolbar>
      </AppBar>

      <Container sx={{ py: 4 }}>{children}</Container>

      <Box component="footer" sx={{ mt: 8, py: 3, textAlign: "center" }}>
        <Typography variant="body2" color="text.secondary">
          © {new Date().getFullYear()} Alimento Diário. Todos os direitos
          reservados.
        </Typography>
        <Typography variant="caption" color="text.secondary">
          Desenvolvido por Moacir David
        </Typography>
      </Box>
    </>
  );
};

export default Layout;
