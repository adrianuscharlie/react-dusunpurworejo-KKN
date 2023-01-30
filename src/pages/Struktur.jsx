import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import struk_img from "../assets/struktur.jpg";

export default function Struktur() {
  return (
    <section className="struktur">
      <Container className="py-5 mt-5">
        <Row className="mb-4 align-items-center flex-lg-row-reverse p-2">
          <Col md={6} sm={12} className="mb-lg-0 pt-5">
            <img src={struk_img} className="img-thumbnail" />
          </Col>
          <Col md={6} sm={12} className="mb-lg-0 pt-5 text-start">
            <div className="lc-block mb-3">
              <div contentEditable="rich">
                <h6 className="h6" style={{ color: "gold" }}>
                  Dusun Purworejo, Semugih
                </h6>
                <h1 className="fw-bolder display-2">
                  Struktur Organisasi Dusun
                </h1>
              </div>
            </div>
            <div className="lc-block mb-4">
              <div contentEditable="rich">
                <p className="lead">
                  Dusun Purworejo memiliki beberapa organisasi yang masih aktif
                  dan berjalan mengadakan berbagai macam kegiatan yang ada. Di
                  Dusun Purworejo terdiri dari 4 RT dan 1 RW, serta memiliki 5
                  Organisasi yang masih aktif dalam menjalankan berbagai macam
                  kegiatan, diantaranya adalah Gapoktan, Kelompok Wanita Tani,
                  Senam, PKK dan juga Karang Taruna.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
