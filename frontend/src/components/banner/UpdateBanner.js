import React, { useState } from "react";
import '../../styles/banner/UpdateBanner.css';
import BannerService from "../../services/BannerService";
import * as BiIcons from "react-icons/bi";

function UpdateBanner(props) {

    const [bannerID, setBannerID] = useState('');
    const [sectionID, setSectionID] = useState('');
    const [name, setName] = useState('');
    const [imgUrl, setImgUrl] = useState('');
    const [state, setState] = useState('');
    const [expired, setExpired] = useState('');
    const [userAdd, setUserAdd] = useState('');
    const [userFix, setUserFix] = useState('');
    const [createAt, setCreateAt] = useState('');
    const [modifiedAt, setModifiedAt] = useState('');

    const handleComeBack = () => {
        props.history.push('/banner-manage');
    }

    const handleLogout = () => {
        props.history.push('/home')
    }

    const getImage = (e) => {
        // setFile(e.target.files[0]);
        setImgUrl(URL.createObjectURL(e.target.files[0])); // đặt bản xem trước 
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
        let state = 1;
        let userFix = "Luong Van Minh";
        let modifiedAt = year + "-" + month + "-" + day;
        let id = 7;

        let bannerItem = {
            id: id,
            code: bannerID,
            sectionID: sectionID,
            name: name,
            imgUrl: imgUrl,
            state: state,
            expired: expired,
            userFix: userFix,
            modifiedAt: modifiedAt
        }
        console.log('banner => ', bannerItem);

        BannerService.updateBanner(bannerItem, id).then(res => {
            props.history.push('/banners');
        })
    }

    return (

        <div className="update-banner-container" >
            <div className="top bg-success text-white">Admin</div>
            <div className="container">
                <div className="header-top">
                    <p className="mt-4 text-left"> Admin <BiIcons.BiChevronRight size={20} /> Quản lý banner <BiIcons.BiChevronRight size={20} /> Thêm banner</p>
                </div>
                <hr></hr>
                <div className="main-content">
                    <div className="row">
                        <div className="col-sm-12">
                            <h1>Chỉnh sửa banner</h1>
                        </div>
                        <div className="col-sm-6 left">
                            <form method="post" encType="multipart/form-data">
                                <div className="mt-1 form-group">
                                    <label htmlFor="bannerID">Mã banner</label>
                                    <input className="form-control" id="bannerID" type="text" name="bannerID"
                                        placeholder="ex: 123..."
                                        value={bannerID} onChange={(e) => setBannerID(e.target.value)}
                                    />
                                </div>

                                <div className="mt-2 form-group">
                                    <label htmlFor="sectionID">Mã khu vực</label>
                                    <input className="form-control" type="text" id="sectionID" name="sectionID"
                                        placeholder="ex: 123..."
                                        value={sectionID} onChange={(e) => setSectionID(e.target.value)} />
                                </div>

                                <div className="mt-2 form-group">
                                    <label htmlFor="name">Tên banner</label>
                                    <input className="form-control" type="text" id="name" name="name"
                                        placeholder="ex: quảng cáo cá tháng tư"
                                        value={name} onChange={(e) => setName(e.target.value)} />
                                </div>

                                <div className="mt-2 form-group">
                                    <label htmlFor="expired">Ngày hết hạn banner</label>
                                    <input className="form-control" type="date" id="expired" name="expired"
                                        value={expired} onChange={(e) => setExpired(e.target.value)} />
                                </div>

                                <div className="mt-2 form-group">
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
                                <h1 className="text-center">Ảnh minh họa</h1>
                            </div>
                            <div className="col-sm-12" id="imgFrame">
                                <img className="img-rounded" alt="ảnh banner" />
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


}

export default UpdateBanner;