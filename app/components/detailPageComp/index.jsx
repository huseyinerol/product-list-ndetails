import PropTypes from "prop-types";
import { Card, Button, Badge, Col, Container } from "react-bootstrap";

export default function DetailPageIndex({ product }) {
    return (
      <Container className="d-flex justify-content-center mt-4">
        <Col sm={6}>
          <Card
            style={{ boxShadow: "0px 4px 10px rgba(0,0,0,0.1)" }}
            className="p-3"
          >
            <Card.Body>
              <Card.Subtitle className="mb-2 text-primary">{product.mkName}</Card.Subtitle>
              <Card.Title className="fw-bold">{product.productName}</Card.Title>
              <Badge bg="warning" text="dark" className="mb-3">
                {product.badge}
              </Badge>
              <div className="text-center mb-4">
                <Card.Img
                  src={product.imageUrl}
                  alt="Product"
                  style={{ maxHeight: "150px", objectFit: "contain", marginLeft:"0.75rem" }}
                />
              </div>
              <Card.Text className="text-center mb-1">Kapsite seçenekleri:</Card.Text>
              <div className="d-flex justify-content-center mb-3 gap-4">
                {product.storageOptions.map((option, index) => (
                  <Button key={index} variant="outline-secondary">
                    {option}
                  </Button>
                ))}
              </div>
              <Card.Text className="text-center text-muted" style={{ fontSize: "0.9rem" }}>
                {product.countOfPrices} satıcı içinde kargo dahil en ucuz fiyat seçeneği
              </Card.Text>
              <Card.Text className="text-center fw-bold" style={{ fontSize: "1.5rem" }}>
                {product.price.toLocaleString()} TL
              </Card.Text>
              {product.freeShipping && (
                <Card.Text className="text-center text-success fw-semibold">
                  Ücretsiz kargo
                </Card.Text>
              )}
              <Card.Text className="text-center text-muted mt-3" style={{ fontSize: "0.8rem" }}>
                Son güncelleme: {product.lastUpdate}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Container>
    );
  }

  DetailPageIndex.propTypes = {
    product: PropTypes.shape({
      mkName: PropTypes.string.isRequired,
      productName: PropTypes.string.isRequired,
      badge: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      imageUrl: PropTypes.string.isRequired,
      storageOptions: PropTypes.arrayOf(PropTypes.string).isRequired,
      countOfPrices: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
      freeShipping: PropTypes.bool.isRequired,
      lastUpdate: PropTypes.string.isRequired,
    }).isRequired,
  };