import { Card, Badge, Col, Row } from "react-bootstrap";
import PropTypes from "prop-types";
import { useNavigate } from "@remix-run/react";

export default function ProductCardHorizontal({ product }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/detail?productUrl=${encodeURIComponent(product.url)}`);
  };
  return (
    <div className="product-card" style={{ margin: "1rem" }} >
      <Card className="shadow-sm border-0" onClick={handleClick}>
      <Row>
      <Col xs={4} className="d-flex justify-content-center align-items-center">
      <div className="text-center">
            <Card.Img
              variant="top"
              src={product.imageUrl}
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
            %{product.dropRatio}
          </Badge>
          <Card.Title className="mt-3 text-primary">{product.name}</Card.Title>
          <Card.Text>
            <strong style={{ fontSize: "1.5rem" }}>
              {product.price.toLocaleString()} TL
            </strong>
          </Card.Text>
          <Card.Text className="text-muted">
            {product.countOfPrices} satıcı
          </Card.Text>
          <Card.Text className="text-muted">
            {product.followCount}+ takip
          </Card.Text>
        </Card.Body>
        </Col>
        </Row>
      </Card>
    </div>
  );
}

ProductCardHorizontal.propTypes = {
  product: PropTypes.shape({
    code: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    dropRatio: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    countOfPrices: PropTypes.number.isRequired,
    followCount: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
};