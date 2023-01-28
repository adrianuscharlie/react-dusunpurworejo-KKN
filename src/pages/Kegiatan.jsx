import React from "react";
import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Carousel from "react-bootstrap/esm/Carousel";
import Thumbnail from "../assets/carousel_dusun/3.jpg";
import { KegiatanDusun } from "../Data";
import ItemKegiatan from "../components/ItemKegiatan";
export default function Kegiatan() {
  return (
    <>
      <section className="kegiatan">
        <Container className="py-5 mt-5">
          <Row className="mb-4 align-items-center flex-lg-row-reverse p-2">
            <Col md={6} sm={12} className="mb-lg-0 pt-5">
              <img src={Thumbnail} className="img-thumbnail" />
            </Col>
            <Col md={6} sm={12} className="mb-lg-0 pt-5 text-start">
              <div className="lc-block mb-3">
                <div contentEditable="rich">
                  <h6 className="h6" style={{ color: "gold" }}>
                    Dusun Purworejo, Semugih
                  </h6>
                  <h1 className="fw-bolder display-2">Kegiatan Rutin Dusun</h1>
                </div>
              </div>
              <div className="lc-block mb-4">
                <div contentEditable="rich">
                  <p className="lead">
                    Walaupun memiliki jumlah KK yang cennderung sedikit, akan
                    tetapi kami memiliki banyak kegiatan rutin yang dilakukan
                    bersama dan kompak. Kegiatan yang ada terdiri dari beberapa kegiatan yang diselenggarakan oleh organisasi di dusun ini seperti PKK, Kelompok Senam, Kelompok Wanita Tani (KWT), Karang Taruna dan RT/RW.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="activities secondary">
        <Container className="py-5 mt-5">
        <Row className="mb-4 align-items-center flex-lg-row-reverse p-2">
            {KegiatanDusun.map((item)=>(
                <ItemKegiatan nama={item.nama} url={item.url} />
            ))}
        </Row>
        </Container>
      </section>
    </>
  );
}
