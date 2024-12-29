import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Container } from "react-bootstrap";
import ProductCardHorizontal from "./productCardHorizontal";

export default function ProductListHorizontal() {
  return (
    <Container>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="mb-3"><ProductCardHorizontal /></SwiperSlide>
        <SwiperSlide className="mb-3"><ProductCardHorizontal /></SwiperSlide>
        <SwiperSlide className="mb-3"><ProductCardHorizontal /></SwiperSlide>
        <SwiperSlide className="mb-3"><ProductCardHorizontal /></SwiperSlide>
        <SwiperSlide className="mb-3"><ProductCardHorizontal /></SwiperSlide>
        <SwiperSlide className="mb-3"><ProductCardHorizontal /></SwiperSlide>

      </Swiper>

    </Container>
  );
}

