import React, { useState } from "react";
import '../../styles/banner/UpdateBanner.css';
import BannerService from "../../services/BannerService";
import * as BiIcons from "react-icons/bi";
import { useLocation } from "react-router-dom";


function UpdateBanner(props) {

    // Vấn đề: Access link trực tiếp thì sẽ không có id
    // Lấy thông tin banner được chọn để cho vào state của component Update thông tin
    let data = {}
    const linkState = useLocation();
    console.log(linkState);
    if (typeof linkState.detailInfo !== 'undefined') {

        data = linkState.detailInfo;
        console.log(data);
    }
    //

    const [bannerID, setBannerID] = useState(data.id);
    const [bannerCode, setBannerCode] = useState(data.code);
    const [sectionID, setSectionID] = useState(data.sectionID);
    const [name, setName] = useState(data.name);
    const [imgUrl, setImgUrl] = useState(); // Dùng để show ảnh
    const [imgName, setImgName] = useState(data.imgUrl);
    const [state, setState] = useState(data.state);
    const [expired, setExpired] = useState(data.expired);
    const [userAdd, setUserAdd] = useState(data.userAdd);
    const [userFix, setUserFix] = useState(data.userFix);
    const [createAt, setCreateAt] = useState(data.createAt);
    const [modifiedAt, setModifiedAt] = useState(data.modifiedAt);


    const getImage = (e) => {

        if (e.target.files[0]) {

            setImgUrl(URL.createObjectURL(e.target.files[0])); // đặt bản xem trước 
        } else console.log("file not found");
        // setFile(e.target.files[0]);
        console.log(e.target.files[0].name);
        setImgName(e.target.files[0].name);

    }
    const saveBanner = (e) => {
        e.preventDefault();
        let d = new Date();
        let year = d.getFullYear();
        let month = d.getMonth() + 1;
        if (month < 10) {
            month = '0' + month;
        }
        let day = d.getDate();
        let modifiedAt = year + "-" + month + "-" + day;

        // let state = 1;
        // let userFix = "Luong Van Minh";
        // let id = 7;

        let bannerItem = {
            id: bannerID,
            code: bannerCode,
            sectionID: sectionID,
            name: name,
            imgUrl: imgName,
            state: state,
            expired: expired,
            userFix: userFix,
            modifiedAt: modifiedAt
        }
        console.log('banner => ', bannerItem);

        BannerService.updateBanner(bannerItem, bannerID).then(res => {
            props.history.push('/banner/manage');
        })
    }

    return (
        <div className="update-banner-container mx-3" >
            <div className="header-top">
                <p className="mt-3 text-left">
                    {props.showAdminBoard ?(<span>Admin</span>) : (<span>User</span>)} 
                    <BiIcons.BiChevronRight size={18} />Quản lý banner
                    <BiIcons.BiChevronRight size={18} />Thêm banner
                </p>
            </div>
            <hr/>
            <div className="container">
                <div className="main-content">
                    <div className="row">
                        <div className="col-sm-12 pb-4">
                            <h2>Chỉnh sửa banner</h2>
                        </div>
                        <div className="col-sm-6 left">
                            <form method="post" encType="multipart/form-data">
                                <div className="mt-3 form-group">
                                    <label htmlFor="bannerID">Mã banner</label>
                                    <input className="form-control" id="bannerID" type="text" name="bannerID"
                                        placeholder="ex: 123..."
                                        value={bannerCode} onChange={(e) => setBannerCode(e.target.value)}
                                    />
                                </div>

                                <div className="mt-3 form-group">
                                    <label htmlFor="sectionID">Mã khu vực</label>
                                    <input className="form-control" type="text" id="sectionID" name="sectionID"
                                        placeholder="ex: 123..."
                                        value={sectionID} onChange={(e) => setSectionID(e.target.value)} />
                                </div>

                                <div className="mt-3 form-group">
                                    <label htmlFor="name">Tên banner</label>
                                    <input className="form-control" type="text" id="name" name="name"
                                        placeholder="ex: quảng cáo cá tháng tư"
                                        value={name} onChange={(e) => setName(e.target.value)} />
                                </div>

                                <div className="mt-3 form-group">
                                    <label htmlFor="expired">Ngày hết hạn banner</label>
                                    <input className="form-control" type="date" id="expired" name="expired"
                                        value={expired} onChange={(e) => setExpired(e.target.value)} />
                                </div>

                                <div className="mt-3 form-group">
                                    <label id="upload-label" htmlFor="upload">Chọn Hình Ảnh</label>

                                    <div className="custom-file">
                                        <input id="upload" type="file" className="form-control border-0" accept=".png,.gif,.jpg,.jpeg"
                                            onChange={getImage} />
                                    </div>
                                </div>

                            </form>
                        </div>
                        <div className="col-sm-6 right">
                            <div className="col-sm-12">
                                <h3 className="text-center">Ảnh minh họa</h3>
                            </div>
                            <div className="col-sm-12" id="imgFrame">

                                <img className="img-rounded" alt="ảnh banner" src={imgUrl} />

                            </div>
                            <div className="button">

                                <button type="button" className="btn btn-cancel" name="btncancel">Hủy</button>
                                <button type="submit" className="btn btn-add " name="btnsubmit" onClick={(e) => saveBanner(e)}>Chỉnh sửa</button>

                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>

    );


    const handleComeBack = () => {
        props.history.push('/banner/manage');
    }
    const handleLogout = () => {
        props.history.push('/home')
    }

}



export default UpdateBanner;