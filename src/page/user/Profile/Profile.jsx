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

  const profile = useSelector((state) => state.user.profile?.data?.[0]);

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
            <CardMedia
                component="img"
                sx={{ width: 250 }}
                image={profile.avatar}
                alt="Avatar"
            />
        </Box>

        <Box sx={{ width: "70%" }}>
            <h1>Thông tin tài khoản</h1>

            <FormControl sx={{ width: "45ch" }}>
                <label>Địa chỉ email</label>
                <OutlinedInput
                value={profile.email}
                readOnly
                placeholder="Địa chỉ email"
            />
            </FormControl>

            <FormControl sx={{ width: "45ch" }}>
                <label>Họ</label>
                <OutlinedInput
                value={profile.firstname}
                readOnly
                placeholder="Họ"
            />
            </FormControl>

            <FormControl sx={{ width: "45ch" }}>
                <label>Tên</label>
                <OutlinedInput
                value={profile.lastname}
                readOnly
                placeholder="Tên"
            />
            </FormControl>

            <FormControl sx={{ width: "45ch" }}>
                <label>Địa chỉ</label>
                <OutlinedInput
                value={profile.address}
                readOnly
                placeholder="Địa chỉ"
            />
            </FormControl>

            <FormControl sx={{ width: "45ch" }}>
                <label>Số chứng minh thư</label>
                <OutlinedInput
                value={profile.identityCard}
                readOnly
                placeholder="Số chứng minh thư"
            />
            </FormControl>

            <FormControl sx={{ width: "45ch" }}>
                <label>Số điện thoại</label>
                <OutlinedInput
                value={profile.phoneNumber}
                readOnly
                placeholder="Số điện thoại"
            />
            </FormControl>

            <Link to={`/edit-profile`}>
            <Button variant="contained">Cập nhật</Button>
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
