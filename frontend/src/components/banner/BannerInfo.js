import "../../styles/banner/BannerInfo.css";
import { Container, Row, Col, Image } from "react-bootstrap";
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

  const [show, setShow] = useState(true);

  const handleShowInfo = (bannerInfo) => {

    alert("thong tin:", bannerInfo.code)
  }


  const updateBanner = () => {
    console.log("Update");
  };

  return (
    <div className="banner-info">
      <Container>
        <Row>
          <Col xs={4} lg={4}>
            <Row>
              <Col xs={6} md={4} lg={4} xl={4} className="detail-info">
                <p>Name</p>
                <p>{bannerInfo.name}</p>
              </Col>
              <Col xs={6} md={4} lg={4} xl={4} className="detail-show">
                <button onClick={(bannerInfo) => handleShowInfo(bannerInfo)}>Hide Show</button>
              </Col>
            </Row>
            <Row>

            </Row>
          </Col>
          <Col lg={7}>
            <Row>
              <Col xs={6} md={10} lg={10} xl={9} className="image-container">
                <Image src="https://mdbootstrap.com/img/new/slides/041.webp" />
              </Col>
              <Col xs={3} md={3} lg={3} xl={2} className="button-choice">
                <button type="button" className="btn btn-secondary"><Link to={updatePage}>Update</Link></button>
                <button type="button" className="btn btn-danger" onClick={deleteConfirmation}>Delete</button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container >
    </div >
    // <div>
    //   <Container>
    //     <table className="table table-striped">
    //       {/* <thead>
    //         <tr>
    //           <th scope="col">Id</th>
    //           <th scope="col">T??n banner</th>
    //           <th scope="col"> H??nh ???nh Banner</th>
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
