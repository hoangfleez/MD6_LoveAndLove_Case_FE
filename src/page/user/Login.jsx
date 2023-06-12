import * as React from "react";
import { Formik } from "formik";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useDispatch } from "react-redux";
import { login } from "../../sevives/useService";

function Copyright(props) {
  return (
      <Typography
          variant="body2"
          color="text.secondary"
          align="center"
          {...props}
      >
        {"Copyright © "}
        <Link color="inherit" href="https://mui.com/">
          Your Website
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Login(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  const dispatch = useDispatch();

  const submit = (user) => {
    console.log(1);
    dispatch(login(user)).then((data) => {
        console.log(data, 55533)
      if (data.payload === "Password is wrong") {
        alert("Mật khẩu không đúng! Hãy nhập lại!");
      } else if(data.payload === "User is not exist") {
        alert("Tài khoản không tồn tại!");
      }
    });
  };

  return (
      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <FavoriteIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Đăng nhập
            </Typography>
            <Formik // Wrap the form with Formik component
                initialValues={{
                  username: "",
                  password: "",
                }}
                onSubmit={(values) => {
                  submit(values);
                }}
            >
              {(formikProps) => (
                  <Box
                      component="form"
                      onSubmit={formikProps.handleSubmit}
                      noValidate
                      sx={{ mt: 1 }}
                  >
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="username"
                        label="Tài khoản"
                        name="username"
                        autoComplete="username"
                        autoFocus
                        {...formikProps.getFieldProps("username")}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Mật khẩu"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        {...formikProps.getFieldProps("password")}
                    />

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                      Đăng nhập
                    </Button>
                    <Grid container>
                      <Grid item xs>
                        <Link href="#" variant="body2">
                          Quên mật khẩu?
                        </Link>
                      </Grid>
                      <Grid item>
                        <Link
                            href="#"
                            variant="body2"
                            onClick={() => {
                              props.setSignIn(true);
                            }}
                        >
                          {"Bạn không có tài khoản? Tạo ngay"}
                        </Link>
                      </Grid>
                    </Grid>
                  </Box>
              )}
            </Formik>
            <Copyright sx={{ mt: 8, mb: 4 }} />
          </Box>
        </Container>
      </ThemeProvider>
  );
}