import * as React from "react";
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
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useForm } from "react-hook-form";
import TextFields from "../../components/TextFields";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { pawdRegExp, userName } from "../../utils";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../sevives/useService";
import ErrorIcon from '@mui/icons-material/Error'


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

const schema = yup.object({
  username: yup
    .string()
    .required("Không được để trống!")
    .matches(userName, "Phải có ít nhất 2 ký tự"),
  password: yup
    .string()
    .required("Không được để trống!")
    .matches(pawdRegExp, "Mật khẩu phải có ít nhất từ 6 tới 12 ký tự"),
});

export default function Login(props) {
  const dispatch = useDispatch();

  const [message, setMessage] = React.useState("");

  const {
    handleSubmit,
    reset,
    formState: { errors },
    control,
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = (user) => {
    dispatch(login(user)).then((data) => {
      console.log(data, 666666);
      if (data.payload === "User is not exist") {
        setMessage("Tài khoản không tồn tại! Hãy đăng ký.");
      } else if (data.payload === "Password is wrong") {
        setMessage("Sai mật khẩu hãy kiểm tra lại");
      } else {
        alert("Đăng nhập thành công");
        props.setOpen(false);
        reset();
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
          <Box
            component="form"
            sx={{ mt: 1 }}
            onSubmit={handleSubmit(onSubmit)}
            noValidate
          >
            <TextFields
              errors={errors}
              control={control}
              name="username"
              label="Tên đăng nhập"
            />
            <TextFields
              errors={errors}
              control={control}
              name="password"
              label="Mật khẩu"
              type="password"
            />
            {message ? (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  mt: "6px",
                }}
              >
                <ErrorIcon color="error" sx={{ width: "20px" }} />
                <Typography color="error.main" variant="span" fontSize="14px">
                  {message}
                </Typography>
              </Box>
            ) : (
              ""
            )}
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
                  {"Bạn không có tài khoản?Tạo ngay"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
