import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import HobbyCard from "./hobbyCard";

const createData = (title, desc, img) => {
  return {
    title: title,
    desc: desc,
    img: img,
  };
};

const datas = [
  createData(
    "Надад video тоглоом тоглох нь таалагддаг",
    "Надад video тоглоом нь explore хийж хүссэн зүйлсээ хийдэг нь таалагддаг. Заримдаа шинэ зүйлс сураж өөрийнхөө хүссэн хүн байж болно. Мөн үүнээс гадна түүхийн mystery нь таалагддаг",
    "games.jpg"
  ),
  createData(
    "Би anime үзэх дуртай",
    "Анимаас би гол дүрийн сэтгэл хөдлөл, хувь хүний хөгжил нь хэрхэн явагдаж байгаа, зохиолын нууцыг сонирхох дуртай",
    "anime.webp"
  ),
  createData(
    "Би manga унших дуртай ",
    "Manga нь Anime-aas түрүүлж гардаг. Тиймээс anime дээрх үйл явдлыг эсвэл зарим зохилийг гархаас өмнө унших зорилготойгоор анх сонирхож эхэлсэн. Manga-г унших үедээ өөрийгөө яг л хажууд нь байж үзэж байгаар төсөөлөн дүрийн сэтгэл хөдлөл, хувь хүний хөгжил нь хэрхэн явагдаж байгаа, зохиолын нууцыг олж мэдэх, таамаглахын тулд уншдаг",
    "manga.jpg"
  ),
  createData(
    "Надад кино үзэх нь таалагддаг",
    "2 жилийн өмнөөс надад кино үзэх нь таалагдах болсон. Энэ нь recap үзсэнээр эхэлсэн юм. Recap нь богино хэлбэрээр их мэдээллийг өгдөг ингэснээрээ хугацаа ихээр хэмнэх боломжтой байдал нь ихээр таалагддаг юм. Миний хамгийн их дуртай кино бол Good doctor, Doctor house,amphibia,owl house-ууд. Надад киноноос хамгийн таалагддаг зүйлс нь түүх, дүрийн гаргаж буй сэтгэл хөдлөлүүд, үүнээс авж болох сургамжууд байдаг",
    "movie.jpg"
  ),
];

function mySpecialty() {
  return (
    <Container style={contStyle}>
      <h1 className="display-4 mb-5">Миний хобби</h1>
      <Row>
        {datas.map((data, index) => (
          <Col key={"hoobyCard" + index} md={6} lg={3} className="mt-3">
            <HobbyCard data={data} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

const contStyle = {
  position: "relative",
  padding: "20px",
};

export default mySpecialty;
