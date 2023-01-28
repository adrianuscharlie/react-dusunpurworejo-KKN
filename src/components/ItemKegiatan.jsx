import React from "react";
import Col from "react-bootstrap/esm/Col";
export default function ItemKegiatan(props) {
  return (
    <Col md={6} sm={12} className="mb-5">
      <div className="container mb-3 item">
        <img
          height={500}
          width={500}
          className="img-responsive"
          src={props.url}
        ></img>
      </div>
      <div className="container">
        <h1 className="h1" style={{color:"gold"}}>{props.nama}</h1>
      </div>
    </Col>
  );
}
