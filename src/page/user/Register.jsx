import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import ErrorIcon from '@mui/icons-material/Error'
import TextFields from "../../components/TextFields";
import { userName, pawdRegExp } from "../../utils";
import { register } from "../../sevives/useService";

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
    .matches(userName, "Sai định dạng tài khooản"),
  password: yup
    .string()
    .required("Không được để trống!")
    .matches(pawdRegExp, "Mật khẩu phải có ít nhất từ 6 tới 12 ký tự"),
});

export default function Register(props) {
  const dispatch = useDispatch();

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

  const handleChangeLogin = () => {
    props.setSignIn(false);
  };

  const [message, setMessage] = React.useState("");

  const onSubmit = (user) => {
    console.log(user);
    dispatch(register(user)).then((data) => {
      console.log(data, 2323232);
      if (data.payload === "tai khoan da ton tai") {
        setMessage("Tài khooản đã tồn tại!! Hãy chọn tài khooản khác.");
      } else {
        // handleChangeLogin();
        // reset()
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
            <VolunteerActivismIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Đăng ký
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit(onSubmit)}
            sx={{ mt: 3 }}
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
              fullWidth
              type="submit"
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Đăng ký
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link
                  href="#"
                  variant="body2"
                  onClick={() => {
                    props.setSignIn(false);
                  }}
                >
                  Bạn đã có tài khoản? Đăng nhập ngay.
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
