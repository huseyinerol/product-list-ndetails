import PropTypes from "prop-types";
import { Card, Badge } from "react-bootstrap";
import { useNavigate } from "@remix-run/react";

export default function ProductCardVertical({ product }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/detail?productUrl=${encodeURIComponent(product.url)}`);
  };

  return (
    <div className="product-card" style={{ width: "18rem", margin: "1rem" }} >
      <Card className="shadow-sm border-0" onClick={handleClick}>
        <Card.Body>
          <Badge
            pill
            bg="danger"
            className="position-absolute top-0 start-0 mt-2 ms-2"
          >
            %{product.dropRatio}
          </Badge>

          <div className="text-center">
            <Card.Img
              variant="top"
              src={product.imageUrl}
              alt="Ürün Resmi"
              style={{ maxHeight: "150px", objectFit: "contain" }}
            />
          </div>
          <Card.Title className="mt-3 text-primary">{product.name}</Card.Title>
          <Card.Text>
            <strong style={{ fontSize: "1.5rem" }}>
              {product.price.toLocaleString()} TL
            </strong>
          </Card.Text>
          <Card.Text className="text-muted">
            {product.countOfPrices} satıcı &gt;
          </Card.Text>
          <Card.Text className="text-muted">
            {product.followCount}+ takip
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

ProductCardVertical.propTypes = {
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