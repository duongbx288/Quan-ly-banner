import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import PaginateList from "../PaginateList";

import '../../styles/banner/ListBannerChoice.css';
import { CheckboxContext } from "../../context/CheckboxContext";
import BannerStatus from "./BannerStatus";
const BASE_URL = "http://localhost:8080/api/banners/page/";

const ListBannerChoice = (props) => {
    const [bannerList, setBannerList] = useState([]);
    const [pageNumber, setPageNumber] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);

    useEffect(() => {
        axios.get(BASE_URL + currentPage).then((response) => {
            // Lấy thông tin banner
            const data = response.data.content;
            // Lấy thông tin tổng số trang 
            const pageNum = response.data.totalPages;
            setBannerList(data);
            setPageNumber(pageNum);
        });
    }, [currentPage]);

    return (
        <div className="banner-list-choice-container">

            <table className="table" >
                <thead>
                    <tr className=" col-12 bg-info">
                        <th className="col-1  text-center" >Mã </th>
                        <th className="col-2  text-center">Tên</th>
                        <th className="col-4  text-center" >Ảnh banner</th>
                        <th className="col-2  text-center" >Tỉ trọng (%)</th>
                        <th className="col-2  text-center" > Thêm</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        bannerList.map((item, index) => 
                            <BannerStatus key={item.id} item={item}/>
                            // <tr className="item" key={item.id} >
                            //     <th className="text-center code" >{item.code}</th>
                            //     <td className="text-center name" >{item.name}</td>
                            //     <td className="text-center image" >
                            //         <img src="https://mdbootstrap.com/img/new/slides/041.webp" width={300} height={80} />
                            //     </td>
                            //     <td className="text-center ">
                            //         <input className="form-control text-center" type="text"
                            //             placeholder="Ví dụ: 10"
                            //         />
                            //     </td>
                            //     <td className="text-center checkbox">
                            //         <input type="checkbox" style={{ transform: "scale(1.5)" }}
                            //             id={item.id}

                            //             onChange={(e) => handleClickBox(e, item.id)}
                            //         />

                            //     </td>
                            // </tr>
                        )
                    }
                </tbody>
            </table>

            <PaginateList currentPage={currentPage} setCurrentPage={setCurrentPage} pageNumber={pageNumber} />
        </div>
    );
};

export default ListBannerChoice;
