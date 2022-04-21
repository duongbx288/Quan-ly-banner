import '../../styles/section/DisplayBanner.css'
import React, { useRef, useState } from "react";
import BannerService from "../../services/BannerService";
import * as BiIcons from "react-icons/bi";
import Contact from "../../pages/ContactUs";
function DisplayBanner(props) {

    const [a, setA] = useState(0);

    return (
        <>
            <div className="display-banner-container">

                <div className="top bg-success text-white">Admin</div>
                <div className="container">
                    <div className="header-top">
                        <p className="mt-4 text-left"> Admin <BiIcons.BiChevronRight size={20} /> Quản lý hiển thị banner trong khu vực <BiIcons.BiChevronRight size={20} /></p>
                    </div>
                    <hr></hr>
                    <div className="main-content">
                        <div className="row">
                            <div className="col-sm-12">
                                <h1>Quản lý hiển thị banner</h1>
                            </div>
                            <div className=" mt-3 col-sm-6 left">
                                <form >
                                    <div className="mt-2 col-12 form-group">
                                        <div className="col-4">
                                            <label htmlFor="bannerID">Khu vực hiển thị</label>

                                        </div>
                                        <div className="col-8">
                                            <input className="form-control text-center" id="bannerID" type="text" name="bannerID"
                                                value={"123"} disabled
                                            />
                                        </div>

                                    </div>
                                    <div className="mt-3 col-12 form-group">
                                        <div className="col-4">
                                            <label htmlFor="bannerID">Số lượng banner</label>
                                        </div>
                                        <div className="col-8">
                                            <input className="form-control text-center" id="bannerQuantity" type="text"
                                                placeholder="Nhập số lượng (ví dụ 1, 2 ...)"
                                            />
                                        </div>
                                    </div>
                                    <div className="mt-3 col-12 form-group">
                                        <div className="col-4">
                                            <label htmlFor="bannerID">Thời gian hiển thị</label>

                                        </div>
                                        <div className="col-8">
                                            <input className="form-control text-center" id="bannerID" type="text"
                                                placeholder="Nhập số ngày( ví dụ 1, 2 ...)"

                                            />
                                        </div>
                                    </div>
                                    <div className="mt-3 col-12 form-group">
                                        <div className="col-4">
                                            <label htmlFor="bannerID">Hiển thị ngẫu nhiên</label>

                                        </div>

                                        <label className="col-12">
                                            <input type="checkbox" style={{ transform: "scale(1.5)", marginLeft: "5px" }} />
                                            <span className="checkmark"></span>
                                        </label>

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

                                    <button type="button" className="btn btn-cancel" name="btncancel" >Hủy</button>
                                    <button type="submit" className="btn btn-add " name="btnsubmit" >Thêm banner</button>

                                </div>
                            </div>
                        </div>


                    </div>
                </div>


            </div>
        </>
    );
}
export default DisplayBanner;