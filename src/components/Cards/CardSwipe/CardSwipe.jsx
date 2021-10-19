import SwiperCore, { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

import "./cardSwiper.css";
SwiperCore.use([Pagination]);
const CardSwipe = ({ images }) => {
  return (
    <Swiper
      //   breakpoints={{
      //     // when window width is >= 640px
      //     640: {
      //       width: 640,
      //       slidesPerView: 1,
      //     },
      //     // when window width is >= 768px
      //     768: {
      //       width: 768,
      //       slidesPerView: 2,
      //     },
      //   }}
      // spaceBetween={100}
      // slidesPerView={1}
      // centeredSlides
      // onSlideChange={() => console.log("slide change")}
      // onSwiper={(swiper) => console.log(swiper)}
      // width={100}
      pagination={true}
    >
      {images.map((card) => {
        return (
          <SwiperSlide>
            {
              <div>
                <img src={card.image} />
                {/* <button className="button__for__images">Explore more</button> */}
              </div>
            }
          </SwiperSlide>
        );
      })}

      {/* <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide> */}
    </Swiper>
  );
};

export default CardSwipe;
