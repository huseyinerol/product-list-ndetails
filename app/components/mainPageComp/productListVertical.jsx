import { Container, Row, Col, Button } from "react-bootstrap";
import ProductCardVertical from "./productCardVertical";
import PropTypes from "prop-types";

export default function ProductListVertical({ products, nextUrl, loadMore }) {
  return (
    <Container  style={{ maxWidth: "800px", paddingBlockEnd: "1rem" }}>
      <div className="d-flex justify-content-center">
        <Row xs={1} md={2} className="justify-content-center">
          {products.map((product) => (
            <Col key={product.code} xs={6} className="d-flex justify-content-center">
              <ProductCardVertical product={product} />
            </Col>
          ))}
        </Row>
      </div>
      
      {nextUrl && (
        <div className="d-flex justify-content-end mt-3 mb-5 mr-7">
          <Button onClick={loadMore} variant="primary">Sonraki Sayfa</Button>
        </div>
      )}
    </Container>
  );
}

ProductListVertical.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      code: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
      dropRatio: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
      countOfPrices: PropTypes.number.isRequired,
      followCount: PropTypes.number.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
  nextUrl: PropTypes.string,
  loadMore: PropTypes.func.isRequired,
};
