import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editUser, showUser } from "../../../services/useService.js";

const EditProfile = () => {
    const [formData, setFormData] = useState({});
    const dispatch = useDispatch();
    const token = localStorage.getItem("token");
    const decodedToken = JSON.parse(atob(token.split(".")[1]));
    const userId = decodedToken.id;

    const profile = useSelector((state) => {
        console.log(state);
        if (state.user.profile?.data?.length > 0) {
            return state.user.profile.data[0];
        }
        return null;
    });

    const handleSubmitEditProfile = async (event) => {
        event.preventDefault();
        const editProfile = {
            id: userId,
            ...formData,
        };
        let res = await dispatch(editUser(editProfile));
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    useEffect(() => {
        dispatch(showUser(userId));
    }, [dispatch, userId]);

    useEffect(() => {
        if (profile) {
            setFormData({
                username: profile.username,
                password: profile.password,
                firstname: profile.firstname,
                lastname: profile.lastname,
                address: profile.address,
                phoneNumber: profile.phoneNumber,
                email: profile.email,
                identityCard: profile.identityCard,
                avatar: profile.avatar,
            });
        }
    }, [profile]);

    return (
        <>
            <div>
                <h1>Cài đặt thông tin cá nhân</h1>
                <p>Thay đổi các thông tin của bạn ở đây</p>
                <form>
                    <div>
                        <label>Tên tài khoản: </label>
                        <input
                            name="username"
                            value={formData.username || ""}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label>Mật khẩu: </label>
                        <input
                            name="password"
                            value={formData.password || ""}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label>Tên: </label>
                        <input
                            name="firstname"
                            value={formData.firstname || ""}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label>Họ: </label>
                        <input
                            name="lastname"
                            value={formData.lastname || ""}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label>Địa chỉ: </label>
                        <input
                            name="address"
                            value={formData.address || ""}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label>Số điện thoại: </label>
                        <input
                            name="phoneNumber"
                            value={formData.phoneNumber || ""}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label>Email: </label>
                        <input
                            name="email"
                            value={formData.email || ""}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label>Số CCCD: </label>
                        <input
                            name="identityCard"
                            value={formData.identityCard || ""}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label>Ảnh: </label>
                        <input
                            name="avatar"
                            value={formData.avatar || ""}
                            onChange={handleChange}
                        />
                    </div>

                    <button type="button" onClick={handleSubmitEditProfile}>
                        Cập nhật
                    </button>
                </form>
            </div>
        </>
    );
};

export default EditProfile;