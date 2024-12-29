import { Card, Badge, Col, Row } from "react-bootstrap";

export default function ProductCardHorizontal() {
  const product = [
    {
      code: 101,
      name: "Iphone 13 128 GB",
      imageUrl: "https://cdn.akakce.com/x/apple/iphone-13.jpg",
      dropRatio: 5,
      price: 20567,
      countOfPrices: 96,
      followCount: 5000,
      url: "https://mock.akakce.dev/product101.json",
    },
  ];
  const item = product[0];
  return (
    <div className="product-card" style={{ margin: "1rem" }}>
      <Card className="shadow-sm border-0">
      <Row>
      <Col xs={4} className="d-flex justify-content-center align-items-center">
      <div className="text-center">
            <Card.Img
              variant="top"
              src={item.imageUrl}
              alt="Ürün Resmi"
              style={{ maxHeight: "150px", objectFit: "contain", marginLeft:"0.75rem" }}
            />
          </div>          
      </Col>
      <Col xs={8}>
        <Card.Body>
          <Badge
            pill
            bg="danger"
            style={{ marginLeft: "-2rem" }}
          >
            %{item.dropRatio}
          </Badge>
          <Card.Title className="mt-3 text-primary">{item.name}</Card.Title>
          <Card.Text>
            <strong style={{ fontSize: "1.5rem" }}>
              {item.price.toLocaleString()} TL
            </strong>
          </Card.Text>
          <Card.Text className="text-muted">
            {item.countOfPrices} satıcı
          </Card.Text>
          <Card.Text className="text-muted">
            {item.followCount}+ takip
          </Card.Text>
        </Card.Body>
        </Col>
        </Row>
      </Card>
    </div>
  );
}
