import {
  Box,
  Button,
  CardMedia,
  Container,
  FormControl,
  OutlinedInput,
} from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showUser } from "../../../services/useService.js";
import { Link } from "react-router-dom";

const Profile = () => {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");

  const decodedToken = JSON.parse(atob(token.split(".")[1]));
  const userId = decodedToken.idUser;

  const profile = useSelector((state) => {
    if (state.user.profile?.data?.length > 0) {
      return state.user.profile.data[0];
    }
    return null;
  });

  useEffect(() => {
    if (!profile) {
      dispatch(showUser(userId));
    }
  }, [dispatch, profile, userId]);

  return (
    <Container maxWidth="lg" sx={{ marginTop: "70px" }}>
      {profile && (
        <Box sx={{ height: "100vh", display: "flex", width: "100%" }}>
          <Box sx={{ width: "30%" }}>
            {/* <p>
              Ảnh:{" "}
              <img style={{ width: 100, height: 100 }} src={profile.avatar} />
            </p> */}
            <CardMedia
              component="img"
              sx={{ width: 250 }}
              image={profile.avatar}
              alt="Paella dish"
            />
          </Box>

          <Box sx={{ width: "70%" }}>
            <h1>Thông tin tài khoản</h1>
            <FormControl sx={{ width: "45ch" }}>
              Địa chỉ email
              <OutlinedInput placeholder="Địa chỉ email">
                {profile.email}
              </OutlinedInput>
            </FormControl>

            <FormControl sx={{ width: "45ch" }}>
              Họ
              <OutlinedInput placeholder="Họ">
                {profile.firstname}
              </OutlinedInput>
            </FormControl>
            <FormControl sx={{ width: "45ch" }}>
              Tên
              <OutlinedInput placeholder="Tên">
                {profile.lastname}
              </OutlinedInput>
            </FormControl>

            <FormControl sx={{ width: "45ch" }}>
              Địa chỉ
              <OutlinedInput placeholder="Địa chỉ">
                {profile.address}
              </OutlinedInput>
            </FormControl>

            <FormControl sx={{ width: "45ch" }}>
              Số chứng minh thư
              <OutlinedInput placeholder="Số chính minh thư">
                {profile.identityCard}
              </OutlinedInput>
            </FormControl>

            <FormControl sx={{ width: "45ch" }}>
              Số điện thoọi
              <OutlinedInput placeholder="Số điện thọai">
                {profile.phoneNumber}
              </OutlinedInput>
            </FormControl>

            <Link to={`/edit-profile`}>
              <Button variant="contained">Cập nhật</Button>
            </Link>
            <Link to={`/add-provider`}>
              <Button variant="contained">Trở thành nhà cung cấp</Button>
            </Link>
          </Box>

        </Box>
      )}
    </Container>
  );
};

export default Profile;
