import React from "react";

import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Proker(props) {
  return (
    <Col md={6} sm={12} className="mb-5">
      <div className="container mb-3 item">
        <img
          height={300}
          width={300}
          className="img-responsive"
          src={props.url}
        ></img>
      </div>
      <div className="container">
        <h1 className="h1 primary">{props.nama}</h1>
        <p className="lead">{props.desc}</p>
      </div>
    </Col>
  );
}
