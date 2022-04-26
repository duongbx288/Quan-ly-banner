import '../../styles/section/DisplayBanner.css'
import React, { useEffect, useState } from "react";
import * as BiIcons from "react-icons/bi";
import ListBannerChoice from '../banner/ListBannerChoice';

const BASE_URL = "http://localhost:8080/api/banners/page/";
function DisplayBanner(props) {

    const [randomChecked, setRandomChecked] = useState(true);
    const [percentageChecked, setpercentageChecked] = useState(false);
    const [quantity, setQuantity] = useState(0);
    const handleOnChangeChoice = (e) => {
        if (randomChecked === true) {
            setRandomChecked(false);
            setpercentageChecked(true);
            handleShowListBannerChoice(e);

        }
        else {
            setRandomChecked(true);
            setpercentageChecked(false)
            handleHideListBannerChoice(e);
        }
    }

    const handleShowListBannerChoice = (e) => {
        if (quantity > 0) {
            document.getElementById("showListBannerChoice").style.display = 'block';
        }
        else {
            setpercentageChecked(false);
            setRandomChecked(true);;
            alert("Số lượng banner phải lớn hơn 0");

        }

    }
    const handleHideListBannerChoice = (e) => {
        document.getElementById("showListBannerChoice").style.display = 'none';
    }
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
                            <div className=" mt-3 col-sm-12">
                                <form >
                                    <div className="mt-2 col-12 form-group">
                                        <div className="col-2">
                                            <label htmlFor="bannerID">Khu vực hiển thị</label>

                                        </div>
                                        <div className="col-8">
                                            <input className="form-control text-center" id="bannerID" type="text" name="bannerID"
                                                value={"123"} disabled
                                            />
                                        </div>

                                    </div>
                                    <div className="mt-3 col-12 form-group">
                                        <div className="col-2">
                                            <label htmlFor="bannerID">Số lượng banner</label>
                                        </div>
                                        <div className="col-8">
                                            <input className="form-control text-center" id="bannerQuantity" type="text"
                                                value={quantity} onChange={(e) => setQuantity(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className="mt-3 col-12 form-group">
                                        <div className="col-2">
                                            <label htmlFor="bannerID">Thời gian hiển thị</label>

                                        </div>
                                        <div className="col-8">
                                            <input className="form-control text-center" id="bannerID" type="text"
                                                placeholder="Nhập số ngày( ví dụ 1, 2 ...)"

                                            />
                                        </div>
                                    </div>
                                    <div className="mt-3 col-12 form-group">
                                        <div className="col-2">
                                            <label htmlFor="bannerID">Hiển thị ngẫu nhiên</label>
                                        </div>
                                        <label className="col-1">
                                            <input type="checkbox" checked={randomChecked} style={{ transform: "scale(1.5)", marginLeft: "5px" }}
                                                onChange={(e) => handleOnChangeChoice(e)}
                                            />
                                            <span className="checkmark"></span>
                                        </label>
                                    </div>
                                    <div className="mt-3 col-12 form-group">

                                        <div className="col-2">
                                            <label htmlFor="bannerID">Hiển thị theo tỉ trọng</label>
                                        </div>
                                        <label className="col-1">
                                            <input type="checkbox" style={{ transform: "scale(1.5)", marginLeft: "5px" }}
                                                checked={percentageChecked} onChange={(e) => handleOnChangeChoice(e)} />
                                            <span className="checkmark"></span>
                                        </label>

                                    </div>

                                </form>

                            </div>
                        </div>
                        <div className="mt-3 col-10" id="showListBannerChoice">
                            <ListBannerChoice data={quantity} ></ListBannerChoice>
                        </div>
                        <div className="col-12">

                            <div className="button">

                                <button type="button" className="btn btn-cancel" name="btncancel" >Hủy</button>
                                <button type="submit" className="btn btn-add " name="btnsubmit" >Thêm banner</button>

                            </div>
                        </div>

                    </div>
                </div>


            </div>
        </>
    );
}
export default DisplayBanner;