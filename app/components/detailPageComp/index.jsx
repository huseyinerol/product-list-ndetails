import { Card, Button, Badge, Col, Container } from "react-bootstrap";

export default function detailPageIndex() {
  return (
    <Container className="d-flex justify-content-center mt-4">
      <Col sm={6}>
        <Card
          style={{ boxShadow: "0px 4px 10px rgba(0,0,0,0.1)" }}
          className="p-3"
        >
          <Card.Body>
            <Card.Subtitle className="mb-2 text-primary">Apple</Card.Subtitle>
            <Card.Title className="fw-bold">iPhone 13 128 GB</Card.Title>
            <Badge bg="warning" text="dark" className="mb-3">
              En Popüler Cep Telefonu
            </Badge>
            <div className="text-center mb-4">
              <Card.Img
                src="https://via.placeholder.com/150"
                alt="Product"
                style={{ maxHeight: "150px" }}
              />
            </div>
            <Card.Text className="text-center mb-1">Kapsite seçenekleri:</Card.Text>
            <div className="d-flex justify-content-center mb-3 gap-4">
                <Button variant="outline-secondary" >
                  128 GB
                </Button>
                <Button variant="outline-secondary" >
                  256 GB
                </Button>
                <Button variant="outline-secondary" >
                  512 GB
                </Button>
            </div>
            <Card.Text className="text-center text-muted" style={{ fontSize: "0.9rem" }}>
              132 satıcı içinde kargo dahil en ucuz fiyat seçeneği
            </Card.Text>
            <Card.Text
              className="text-center fw-bold"
              style={{ fontSize: "1.5rem" }}
            >
              20.567,00 TL
            </Card.Text>
            <Card.Text className="text-center text-success fw-semibold">
              Ücretsiz kargo
            </Card.Text>
            <Card.Text
              className="text-center text-muted mt-3"
              style={{ fontSize: "0.8rem" }}
            >
              Son güncelleme: Şimdi
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Container>
  );
}
