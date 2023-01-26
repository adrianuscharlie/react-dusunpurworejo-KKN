import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "../components/Cards";
import { Data } from "../Data";
import Proker from "../components/Proker";
import { DataProker } from "../Data";
import { KKNCarousel } from "../Data";

export default function KKN() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <>
      <section className="hero">
        <Container className="py-5 mt-5">
          <Row className="mb-4 align-items-center flex-lg-row-reverse p-2">
            <Col md={6} sm={12} className="mb-lg-0 pt-5">
              <Carousel activeIndex={index} onSelect={handleSelect}>
                {KKNCarousel.map((img)=>(
                  <Carousel.Item className="kkn">
                  <img
                    className="img-thumbnail p-5"
                    src={img}
                  />
                </Carousel.Item>
                ))}
              </Carousel>
            </Col>
            <Col md={6} sm={12} className="text-start mt-5">
              <div className="lc-block mb-3">
                <div contentEditable="rich">
                  <h6 className="h6" style={{color:"gold"}}>KKN 65 Universitas Sanata Dharma</h6>
                  <h1 className="fw-bolder display-2">Dusun Purworejo</h1>
                </div>
              </div>
              <div className="lc-block mb-4">
                <div contentEditable="rich">
                  <p className="lead">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                    inventore, placeat incidunt similique nulla id dignissimos
                    ex dicta quod architecto dolores saepe error quis eveniet
                    impedit? Tempore quaerat omnis rerum, sunt nihil animi
                    commodi sed, doloribus est quisquam quas quod optio voluptas
                    magnam ipsum a labore eos quis. Consectetur, magnam?
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="profile secondary">
        <Container className="p-5">
        <h5 className="h5 primary">Perkenalkan, Keluarga Kecil Kami</h5>
        <h1 className="h1 mb-5">Kelompok 74 Purworejo, Semugih</h1>
          <Row className="d-flex align-items-center">
            {Data.map((card) => (
              <Col md={4} sm={12} className="p-3 mb-3 d-flex justify-content-center">
                <Card nama={card.nama} prodi={card.prodi} url={card.url}></Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <section className="proker dark">
      <Container className="p-5">
      <h5 className="h5 primary">Kegiatan kami</h5>
      <h1 className="h1 mb-5">Proker Kami</h1>
      <Row className="d-flex align-items-center">
      {DataProker.map((kegiatan)=>(
        <Proker nama={kegiatan.nama} desc={kegiatan.desc} url={kegiatan.url}/>
      ))}
      </Row>
      </Container>
      </section>
    </>
  );
}
