import { Container, Row, Col } from "react-bootstrap";
import ProductCardVertical from "./productCardVertical";

export default function ProductListVertical() {
  return (
    <Container className="d-flex justify-content-center" style={{ maxWidth: "800px" }}>
      <Row xs={1} md={2} className="justify-content-center">
        {Array.from({ length: 4 }).map((_, idx) => (
          <Col key={idx} xs={6} className="d-flex justify-content-center mb-4">
            <ProductCardVertical />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

