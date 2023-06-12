import { Box } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showUser } from "../../../sevives/useService.js";

const Profile = () => {
    const dispatch = useDispatch();
    const userId = useSelector(({ user }) => user.currentUser.payload.id);
    console.log(userId, 555)
    const profile = useSelector((state) => {
        console.log(state,999888)
        // return state.user.profile.data
    });

    useEffect(() => {
        if (!profile) {
            dispatch(showUser(userId));
        }
    }, [dispatch, profile, userId]);

    if (!profile) {
        return null;
    }

    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    marginTop: "64px",
                    height: "calc(100vh - 64px)",
                }}
            >
                <div>
                    <p>Tên tài khoản: {profile.username}</p>
                    <p>Email: {profile.email}</p>
                    <p>Họ: {profile.firstname}</p>
                    <p>Tên: {profile.lastname}</p>
                    <p>Địa chỉ: {profile.address}</p>
                    <p>Số CCCD: {profile.identityCard}</p>
                    <p>Số Điện thoại: {profile.phoneNumber}</p>
                </div>
            </Box>
        </>
    );
};

export default Profile;