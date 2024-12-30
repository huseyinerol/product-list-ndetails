import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Container } from "react-bootstrap";
import PropTypes from "prop-types";
import ProductCardHorizontal from "./productCardHorizontal";

const ProductListHorizontal = ({ products }) => {
  return (
    <Container>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {products.map((product) => (
          <SwiperSlide key={product.code} className="mb-3">
            <ProductCardHorizontal product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

// PropTypes ile ürünlerin doğrulaması yapılıyor
ProductListHorizontal.propTypes = {
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
};

export default ProductListHorizontal;
