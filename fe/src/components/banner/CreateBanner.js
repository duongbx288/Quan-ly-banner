import React, { useRef, useState } from "react";
import '../../styles/banner/CreateBanner.css';
import BannerService from "../../services/BannerService";
import * as BiIcons from "react-icons/bi";
import Contact from "../../pages/ContactUs";

function CreateBanner(props) {

    const [bannerID, setBannerID] = useState('');
    const [name, setName] = useState('');
    const [expired, setExpired] = useState('');
    const [imgUrl, setImgUrl] = useState('');
    const [imgName, setImgName] = useState('');

    const inputEl = (null); // biến để giới thiệu đầu vào ẩn
    const getImage = (e) => {


        if (e.target.files[0]) {
            setImgUrl(URL.createObjectURL(e.target.files[0]));  //đặt bản xem trước 
        } else console.log("file not found");


        console.log(e.target.files[0].name);
        setImgName(e.target.files[0].name);
    }


    const saveBanner = (e) => {
        e.preventDefault();
        let d = new Date();

        let state = 0;
        let userAdd = "Luong Van Minh";
        let sectionID = 1;

        let bannerItem = {
            sectionID: sectionID,
            code: bannerID,
            name: name,
            imgUrl: imgName,
            state: state,
            userAdd: userAdd,
            createAt: d
        }
        console.log('banner => ', bannerItem);

        BannerService.createBanner(bannerItem).then(res => {
            props.history.push('/banner/manage');
        })
    }
    const handleComeBack = () => {
        props.history.push('/banner/manage');
    }

    return (

        <div className="create-banner-container" >
            <div className="container">
                <div className="header-top">
                    <p className="mt-3 text-left">
                    {props.showAdminBoard ?(<span>Admin</span>) : (<span>User</span>)} 
                    <BiIcons.BiChevronRight size={20} /> Quản lý banner <BiIcons.BiChevronRight size={20} /> Thêm banner</p>
                </div>
                <hr></hr>
                <div className="main-content">
                    <div className="row">
                        <div className="col-sm-12">
                            <h1>Thêm Mới Banner</h1>
                        </div>
                        <div className="col-sm-6 left">
                            <form >
                                <div className="mt-2 form-group">
                                    <label htmlFor="bannerID">Mã banner</label>
                                    <input className="form-control" id="bannerID" type="text" name="bannerID"
                                        placeholder="ex: 123..."
                                        value={bannerID} onChange={(e) => setBannerID(e.target.value)}
                                    />

                                </div>
                                <div className="mt-3 form-group">
                                    <label htmlFor="name">Tên banner</label>
                                    <input className="form-control" type="text" id="name" name="name"
                                        placeholder="ex: quảng cáo cá tháng tư"
                                        value={name} onChange={(e) => setName(e.target.value)} />
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
                                <h1 className="text-center">Ảnh minh họa</h1>
                            </div>
                            <div className="col-sm-12" id="imgFrame">

                                <img className="img-rounded" alt="ảnh banner" src={imgUrl} />
                            </div>
                            <div className="button">
                                <button type="button" className="btn btn-cancel" name="btncancel" >Hủy</button>
                                <button type="submit" className="btn btn-add " name="btnsubmit" onClick={(e) => saveBanner(e)}>Thêm banner</button>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>

    );

}

export default CreateBanner;
