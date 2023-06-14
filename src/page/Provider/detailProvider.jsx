import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getProviderDetail} from "../../../services/providerService.js";

const DetailProvider = () => {
    const { id } = useParams();
    const dispatch = useDispatch();


    const detailProviderDetail = useSelector((state) => {
         return state.provider.showOneProvider;
    });

    console.log(detailProviderDetail,777)


    useEffect(() =>{
        dispatch(getProviderDetail(id))
    },[])
    return (
        <>
            <h1>abc</h1>
            <h1>Thông tin</h1>
            <img style={{width:150, height:150, borderRadius: 75}} src={detailProviderDetail.avatar}/>
            <p> Tên: {detailProviderDetail.name}</p>
            <p> Giới tính: {detailProviderDetail.sex}</p>
            <p> Sinh nhật: {detailProviderDetail.dob}</p>
            <p> Quốc tịch: {detailProviderDetail.country}</p>
            <p> Mô tả bản thân: {detailProviderDetail.desc}</p>
            <p> Sở thích: {detailProviderDetail.hobby}</p>
            <p> Chiều cao: {detailProviderDetail.height}</p>
            <p> Cân nặng: {detailProviderDetail.weight}</p>
            <p> Yêu cầu tới người thuê: {detailProviderDetail.height}</p>
            <p> Giá thuê/ 1h: {detailProviderDetail.price}</p>
            <p> Link FaceBook: {detailProviderDetail.linkFB}</p>
            <p> Ngày tham gia: {detailProviderDetail.joinDate}</p>
        </>
    )
}

export default DetailProvider