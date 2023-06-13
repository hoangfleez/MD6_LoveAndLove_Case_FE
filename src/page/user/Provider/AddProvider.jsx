import {useState} from "react";
import {useDispatch} from "react-redux";
import { addProvider } from "../../../services/providerService.js";

const AddProvider = () => {
    const [name, setName] = useState({dob,sex,city,country,avatar,height});
    const [dob, setDob] = useState("");
    const [sex, setSex] = useState("");
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    const [avatar, setAvatar] = useState("");
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    const [hobby, setHobby] = useState("");
    const [desc, setDesc] = useState("");
    const [request, setRequest] = useState("");
    const [linkFB, setLinkFB] = useState("");
    const [joinDate, setJoinDate] = useState("");
    const [price, setPrice] = useState("");
    const [ready, setReady] = useState("");
    const [images, setImages] = useState("");
    const [service, setService] = useState("");
    const [user, setUser] = useState("");
    const [status, setStatus] = useState("");

    const dispatch = useDispatch();

    const token = localStorage.getItem("token");
    const decodedToken = JSON.parse(atob(token.split(".")[1]));
    const userId = decodedToken.id;

    const handleSubmitAddProvider = async (event) => {
        event.preventDefault();

        const newProvider = {
            name: name,
            dob: dob,
            sex: sex,
            city: city,
            country: country,
            avatar: avatar,
            height: height,
            weight: weight,
            hobby: hobby,
            desc: desc,
            request: request,
            linkFB: linkFB,
            joinDate: joinDate,
            price: price,
            ready: ready,
            images: images,
            service: service,
            user: userId,
            status: status,
        };
        let res = await dispatch(addProvider(newProvider));
    };


    return (
        <>
            <div>
                <h1>Thêm mới thông tin Provider</h1>
                <p>Thêm mới các thông tin của bạn ở đây</p>
                <form>
                    <div>
                        <label>Tên: </label>
                        <input value={name}
                               onChange={(event) => setName(event.target.value)}
                        />
                    </div>

                    <div>
                        <label>Ngày sinh nhật: </label>
                        <input value={dob}
                               onChange={(event) => setDob(event.target.value)}
                        />
                    </div>

                    <div>
                        <label>Giới tính: </label>
                        <input value={sex}
                               onChange={(event) => setSex(event.target.value)}
                        />
                    </div>

                    <div>
                        <label>Thành phố: </label>
                        <input value={city}
                               onChange={(event) => setCity(event.target.value)}
                        />
                    </div>

                    <div>
                        <label>Quốc tịch: </label>
                        <input value={country}
                               onChange={(event) => setCountry(event.target.value)}
                        />
                    </div>

                    <div>
                        <label>Chiều cao: </label>
                        <input value={height}
                               onChange={(event) => setHeight(event.target.value)}
                        />
                    </div>


                    <div>
                        <label>Cân nặng: </label>
                        <input value={weight}
                               onChange={(event) => setWeight(event.target.value)}
                        />
                    </div>

                    <div>
                        <label>Sở thích: </label>
                        <input value={hobby}
                               onChange={(event) => setHobby(event.target.value)}
                        />
                    </div>

                    <div>
                        <label>Ảnh: </label>
                        <input value={avatar}
                               onChange={(event) => setAvatar(event.target.value)}
                        />
                    </div>

                    <div>
                        <label>Yêu cầu: </label>
                        <input value={request}
                               onChange={(event) => setRequest(event.target.value)}
                        />
                    </div>

                    <div>
                        <label>linkFB: </label>
                        <input value={linkFB}
                               onChange={(event) => setLinkFB(event.target.value)}
                        />
                    </div>

                    <div>
                        <label>Mô tả bản thân: </label>
                        <input value={desc}
                               onChange={(event) => setDesc(event.target.value)}
                        />
                    </div>

                    <div>
                        <label>Ngày tháng: </label>
                        <input value={joinDate}
                               onChange={(event) => setJoinDate(event.target.value)}
                        />
                    </div>

                    <div>
                        <label>Giá: </label>
                        <input value={price}
                               onChange={(event) => setPrice(event.target.value)}
                        />
                    </div>

                    <div>
                        <label>Trạng thái: </label>
                        <input value={ready}
                               onChange={(event) => setReady(event.target.value)}
                        />
                    </div>

                    <div>
                        <label>images: </label>
                        <input value={images}
                               onChange={(event) => setImages(event.target.value)}
                        />
                    </div>

                    <div>
                        <label>service: </label>
                        <input value={service}
                               onChange={(event) => setService(event.target.value)}
                        />
                    </div>

                    <div>
                        <label>user: </label>
                        <input value={user}
                               onChange={(event) => setUser(event.target.value)}
                        />
                    </div>

                    <div>
                        <label>status: </label>
                        <input value={status}
                               onChange={(event) => setStatus(event.target.value)}
                        />
                    </div>

                    <button type="button" onClick={handleSubmitAddProvider}>
                        Cập nhật
                    </button>
                </form>
            </div>
        </>
    )
}

export default AddProvider;


