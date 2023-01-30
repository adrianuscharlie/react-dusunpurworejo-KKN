import React from "react";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Logo from "../assets/logo.png";
import Container from "react-bootstrap/Container";
export default function Footer() {
  return (
    <footer
      className="bg-dark p-4 white-50 text-start"
      style={{ color: "white" }}
    >
      <Container>
        <Row className="p-3">
          <Col md={2} className="mb-3 col-6">
            <img src={Logo} className="img-thumbnail mb-3" alt="logo" />
            <h5 className="ms-3" style={{ color: "gold" }}>
              Dusun Purworejo
            </h5>
          </Col>
          <Col md={4} className="mb-3 col-6">
            <h5 className="h5 mb-3">Tentang Kami</h5>
            <p className="p">
              Jl. Kaliurang Km.17 Pakembinangun, Pakem, Sleman Daerah Istimewa
              Yogyakarta
            </p>
            <p className="lead">
              Untuk informasi lebih lanjut, dapat ditanyakan langsung ke Balai
              Kalurahan Semugih
            </p>
          </Col>
          <Col md={6} className="mb-3 col-6">
            <h5 className="h5 mb-3">Kontak Kami</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <i
                  class="fab fa-whatsapp-square"
                  style={{ fontSize: "30px" }}
                ></i>{" "}
                085292569222 (Ibu Dukuh)
              </li>
              <li className="nav-item mb-2">
                <i
                  class="fab fa-whatsapp-square"
                  style={{ fontSize: "30px" }}
                ></i>{" "}
                081227351293 (Karang Taruna)
              </li>
              <li className="nav-item mb-2">
                <i
                  class="fab fa-whatsapp-square"
                  style={{ fontSize: "30px" }}
                ></i>{" "}
                081381429485 (KKN USD)
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
