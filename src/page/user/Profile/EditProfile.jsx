import {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { editUser, showUser } from "../../../services/useService.js";

const EditProfile = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [address, setAddress] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [identityCard, setIdentityCard] = useState("");
    const [avatar, setAvatar] = useState("");

    const dispatch = useDispatch();

    const token = localStorage.getItem("token");
    const decodedToken = JSON.parse(atob(token.split(".")[1]));
    const userId = decodedToken.id;

    const profile = useSelector((state) => {
        console.log(state)
        if (state.user.profile?.data?.length > 0) {
            return state.user.profile.data[0];
        }
        return null;
    });

    const handleSubmitEditProfile = async(event) => {
        event.preventDefault();
        const editProfile = {
            id : userId,
            username : username,
            password : password,
            firstname : firstname,
            lastname : lastname,
            address : address,
            phoneNumber : phoneNumber,
            email: email,
            identityCard : identityCard,
            avatar : avatar,
        };

        let res = await dispatch(editUser(editProfile));
    };

    useEffect(() => {
        dispatch(showUser(userId));
    }, [dispatch, userId]);

    useEffect(() => {
        if (profile) {
            setUsername(profile.username);
            setPassword(profile.password);
            setFirstname(profile.firstname);
            setLastname(profile.lastname);
            setAddress(profile.address);
            setPhoneNumber(profile.phoneNumber);
            setEmail(profile.email)
            setIdentityCard(profile.identityCard);
            setAvatar(profile.avatar);
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
                        <input value={username}
                         onChange={(event) => setUsername(event.target.value)}
                        />
                    </div>

                    <div>
                        <label>Mật khẩu: </label>
                        <input value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        />
                    </div>

                    <div>
                        <label>Tên: </label>
                        <input value={firstname}
                        onChange={(event) => setFirstname(event.target.value)}
                        />
                    </div>

                    <div>
                        <label>Họ: </label>
                        <input value={lastname}
                        onChange={(event) => setLastname(event.target.value)}
                        />
                    </div>

                    <div>
                        <label>Địa chỉ: </label>
                        <input value={address}
                        onChange={(event) => setAddress(event.target.value)}
                        />
                    </div>

                    <div>
                        <label>Số điện thoại: </label>
                        <input value={phoneNumber}
                        onChange={(event) => setPhoneNumber(event.target.value)}
                        />
                    </div>


                    <div>
                        <label>Email: </label>
                        <input value={email}
                               onChange={(event) => setEmail(event.target.value)}
                        />
                    </div>

                    <div>
                        <label>Số CCCD: </label>
                        <input value={identityCard}
                        onChange={(event) => setIdentityCard(event.target.value)}
                        />
                    </div>

                    <div>
                        <label>Ảnh: </label>
                        <input value={avatar}
                        onChange={(event) => setAvatar(event.target.value)}
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