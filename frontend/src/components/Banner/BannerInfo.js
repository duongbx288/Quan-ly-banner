import "../../styles/banner/bannerInfo.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import axios from "axios";
import {Link} from "react-router-dom";
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


  const updateBanner = () => {
    console.log("Update");
  };

  return (
    <div className="banner-info">
      <Container>
        <Row>
          <Col xs={12} lg={5}>
            <Row>
              <Col xs={6} md={4} lg={4} xl={4} className="detail-info">
                <p>Id</p>
                <p>{bannerInfo.code}</p>
              </Col>
              <Col xs={6} md={4} lg={4} xl={4} className="detail-info">
                <p>Name</p>
                <p>{bannerInfo.name}</p>
              </Col>
              <Col xs={6} md={4} lg={4} xl={4} className="detail-info">
                <p>State</p>
                <p>{bannerInfo.state}</p>
              </Col>
              <Col xs={6} md={4} lg={4} xl={4} className="detail-info">
                <p>Created at</p>
                <p>
                  {bannerInfo.createdAt}
                </p>
              </Col>
              <Col xs={6} md={4} lg={4} xl={4} className="detail-info">
                <p>Expired at</p>
                <p>
                  {bannerInfo.expired !== null &&
                  bannerInfo.expired !== undefined
                    ? bannerInfo.expired
                    : "____-__-__"}
                </p>
              </Col>
              <Col xs={6} md={4} lg={4} xl={4} className="detail-info">
                <p>Modified at</p>
                <p>
                  {bannerInfo.modifiedAt !== null &&
                  bannerInfo.modifiedAt !== undefined
                    ? bannerInfo.modifiedAt
                    : "____-__-__"}
                </p>
              </Col>
            </Row>
          </Col>
          <Col lg={7}>
            <Row>
              <Col xs={12} md={10} lg={10} xl={9} className="image-container">
                <Image src="https://mdbootstrap.com/img/new/slides/041.webp" />
              </Col>
              <Col xs={3} md={3} lg={3} xl={2} className="button-choice">
                <button><Link to={updatePage}>Update</Link></button>
                <button onClick={deleteConfirmation}>Delete</button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BannerInfo;
