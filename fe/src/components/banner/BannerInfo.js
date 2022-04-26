import "../../styles/banner/BannerInfo.css";
import { Row, Col, Image } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState } from "react";

const BASE_URL = "http://localhost:8080/api/banners/";

const BannerInfo = ({ bannerInfo, bannerList, setBannerList }) => {
  // 'delete' has to remove the item from bannerList too so that
  // the web will change immediately without having to reload the page
  // as {bannerList} contains the list of banner the 'BannerList' component has

  const [detailInfo, setDetailInfo] = useState(bannerInfo);

  const updatePage = {
    pathname: "/banner/update/" + bannerInfo.code,
    detailInfo: detailInfo
  }

  const bannerDetail = {
    pathname: "/banner/detail/" + bannerInfo.code,
    detailInfo: detailInfo
  }
  
  const deleteConfirmation = () => {
    const confirm = window.confirm("Do you want to remove this banner?");
    if (confirm === true) {
      axios
        .delete(BASE_URL + bannerInfo.id)
        .then(() => console.log("Delete successful"));
      //bannerList.filter(info => info.id === bannerInfo.id);
      setBannerList(bannerList.filter(info => info.id !== bannerInfo.id));
    }
  };

  return (
    <div className="banner-info m-4 p-3">
        <Row>
          <Col xs={3} md={3} lg={3} xl={3} className="detail-info">
            <label>NAME</label>
            <p>{bannerInfo.name}</p>
          </Col>
          <Col xs={1} md={1} lg={2} xl={2} className="detail-show d-flex align-items-center justify-content-center">
            <Link type="button" className="btn btn-secondary py-1 px-3" to={bannerDetail}>Show</Link>
          </Col>
          <Col xs={6} md={6} lg={5} xl={5} className="image-container d-flex justify-content-center">
            <Image src="https://mdbootstrap.com/img/new/slides/041.webp" />
          </Col>
          <Col xs={2} md={2} lg={2} xl={2} className="button-choice d-flex flex-column mt-auto p-3">
            <Link type="button" className="btn btn-secondary py-1 px-3" to={updatePage}>Update</Link>
            <button type="button" className="btn btn-danger py-1 px-3" onClick={deleteConfirmation}>Delete</button>
          </Col>
        </Row>
    </div >

    // <div>
    //   <Container>
    //     <table className="table table-striped">
    //       {/* <thead>
    //         <tr>
    //           <th scope="col">Id</th>
    //           <th scope="col">Tên banner</th>
    //           <th scope="col"> HÌnh ảnh Banner</th>
    //           <th scope="col"></th>
    //         </tr>
    //       </thead> */}
    //       <tbody>
    //         <tr>
    //           <th scope="row">1</th>
    //           <td className="name">{bannerInfo.name}</td>
    //           <td className="img"><Image src="https://mdbootstrap.com/img/new/slides/041.webp" /></td>
    //           <td>
    //             <button><Link to={updatePage}>Update</Link></button>
    //             <button onClick={deleteConfirmation}>Delete</button>

    //           </td>
    //         </tr>

    //       </tbody>
    //     </table>
    //   </Container>
    // </div>
  );
};

export default BannerInfo;
