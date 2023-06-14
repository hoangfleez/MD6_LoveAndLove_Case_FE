import { Box } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showUser } from "../../../services/useService.js";
import { Link, Route, Routes } from "react-router-dom";
import EditProfile from "./EditProfile.jsx";
import AddProvider from "../Provider/AddProvider.jsx";

const Profile = () => {
    const dispatch = useDispatch();
    const token = localStorage.getItem("token");
    const decodedToken = JSON.parse(atob(token.split(".")[1]));
    const userId = decodedToken.id;


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
        <>
            <Box
                sx={{
                    display: "flex",
                    marginTop: "64px",
                    height: "calc(100vh - 64px)",
                }}
            >
                {profile && (
                    <div>
                        <p>
                            Ảnh: <img style={{ width: 100, height: 100 }} src={profile.avatar} />
                        </p>
                        <p>Tên tài khoản: {profile.username}</p>
                        <p>Email: {profile.email}</p>
                        <p>Họ: {profile.firstname}</p>
                        <p>Tên: {profile.lastname}</p>
                        <p>Địa chỉ: {profile.address}</p>
                        <p>Số CCCD: {profile.identityCard}</p>
                        <p>Số Điện thoại: {profile.phoneNumber}</p>
                        <Link to={`/edit-profile`}>
                            <button>Cài đặt</button>
                        </Link>

                        <Link to={`/add-provider`}>
                            <button>Trở thành nhà cung cấp</button>
                        </Link>
                    </div>
                )}
            </Box>
            <Routes>
                <Route exact path="/edit-profile" component={EditProfile} />
                <Route exact path="/add-provider" component={AddProvider} />
            </Routes>
        </>
    );
};

export default Profile;