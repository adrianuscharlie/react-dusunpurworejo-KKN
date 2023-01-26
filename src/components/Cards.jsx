import React from "react";
import Card from 'react-bootstrap/Card';

export default function Cards(props){
    return (
        <Card className="p-0">
            <Card.Img src={props.url} height={500} width={500} className="img-responsive"/>
            <Card.Body className="card-content d-flex flex-column align-items-center">
                <Card.Title style={{color:"gold"}}>{props.nama}</Card.Title>
                <Card.Text>{props.prodi}</Card.Text>
            </Card.Body>
        </Card>
    )
}