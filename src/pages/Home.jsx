import React from "react";
import Carousel from "react-bootstrap/Carousel"
import { useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { DusunCarousel } from "../Data";

export default function Home(){
        const [index,setIndex]=useState(0);
        const handleSelect=(selectedIndex,e)=>{
            setIndex(selectedIndex);
        };
    return (
        <>
        <section className=" hero">
            <Carousel activeIndex={index} onSelect={handleSelect}>
               { DusunCarousel.map((img)=>(
                <Carousel.Item className="dusun">
                    <img className="d-block w-100" src={img}/>
                </Carousel.Item>
                ))  } 
            </Carousel>
        </section>
        <section className="profile">
            <Container className="p-5">
            <Row className="align-items-center flex-lg-row p-3">
                <Col md={6} sm={12}>
                    <div className="lc-block position-relative">
                        <img className="img-fluid rounded-shadow" src="https://awsimages.detik.net.id/community/media/visual/2022/11/16/gua-braholo-di-pedukuhan-semugih-kalurahan-semugih-kapanewon-rongkop-kabupaten-gunungkidul-rabu-16112022_169.jpeg?w=1200"/>
                    </div>
                </Col>
                <Col md={6} sm={12} className="mt-5 pt-2 text-start">
                    <h6 className="h6">Sejarah Singkat Dusun</h6>
                    <h2 className="h2"><span style={{color:"gold"}}>Dusun Purworejo</span></h2>
                    <p className="lead">Padukuhan Purworejo ugi sampun lumampah wiwit Paprintahan Desa ingkang
                    1 Jaman lurah R. Mangun Atmojo inkang Nyepeng Dukuh Wonten Purworejo
                    inggih meniko : Ki Harjo Sudarso, Ki Ngadiyono lan Ki Tumino. Dukuh 1
                    ( sepisan ) ngantos Dukuh Kaping 2 ( Kalih ) Anggenipun sami dados
                    dipun angkat dening lurah. Sak sampunipun Meniko Dukuh Ki Tumino kanti
                    tata cara pilihan langsung Masyarakat. Adeging padukuan Purworejo
                    ingkang sepisan wilayahipun ngantos dumugi Ngrombo saklajengipun
                    jamanipun lurah R. Pawiro Atmojo, Ngrombo pun dadosaken Padukuhan
                    piyambak. Kesenian ingkang dipun pepetri wonten ing padukuhan mriki :
                    wayang kulit, Jatilan, Ing Padukuhan Purworejo meniko wonten Fasilitas
                    Ekonomi lan Umum inggih Meniko : Masjid, Balai Padukuhan, Gedung lan
                    Mesin Mokav/Kasava, Kebun Buah, Telaga, Lapangan Olah Raga Lan Kandang
                    Komunal/ Kelompok.</p>
                </Col>
            </Row>
            </Container>
        </section>
        <section className="visi-misi secondary">
            <Container className="p-5">
                <Row className="d-flex align-items-center mb-5">
                    <Col md={6} sm={12} className="mb-3">
                        <h5 className="primary mb-3">Visi Dusun Purworejo</h5>
                        <h2 className="h2">“Terwujudnya masyarakat yang mandiri, sejahtera lahir dan batin
                        berlandaskan iman dan takwa terhadap Tuhan Yang Maha Esa”.</h2>
                    </Col>
                    <Col md={6} sm={12} className="mb-3">
                    <h5 className="h5 primary mb-3">Misi Dusun Purworejo</h5>
                    <ul className="list-group list-group-flush">
                      <li class="list-group-item">
                          Mewujudkan reformasi Birokrasi
                      </li>
                      <li className="list-group-item">
                          Meningkatkan pertumbuhan ekonomi masyarakat
                      </li>
                      <li className="list-group-item">
                          Mewujudkan pengembangan Sumber Daya Manusia (SDM)
                      </li>
                      <li className="list-group-item">
                          Mewujudkan pengembangan Sumber Daya Alam (SDA)
                      </li>
                      <li className="list-group-item">
                          Mewujudkan pemerataan pembangunan dan hasil-hasilnya kepada masyarakat
                      </li>
                      <li className="list-group-item">
                          Menyediakan sarana informasi dan infrastruktur yang dapat mengakses dengan cepat dan jangkauan yang luas
                      </li>
                      <li className="list-group-item">
                          Mewujudkan kehidupan masyarakat yang sehat dan dinamis, kreatif, inofatif dengan produktifitas yang tinggi
                      </li>
                      <li className="list-group-item">
                          Meningkatkan Pembinaan  pengembangan Umat Beragama
                      </li>
                    </ul>
                    </Col>
                </Row>
            </Container>
        </section>
        </>
    )
}