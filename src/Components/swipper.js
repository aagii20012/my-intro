import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";
import CardComp from "./cardComp";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function swipper({ datas }) {
  return (
    <Swiper
      modules={[Pagination, Navigation, Autoplay]}
      grabCursor
      loop
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      spaceBetween={50}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      slidesPerView={3}>
      {datas
        ? datas.map((data, index) => (
            <SwiperSlide key={"swipper" + index}>
              <CardComp data={data} />
            </SwiperSlide>
          ))
        : "no data"}
    </Swiper>
  );
}

export default swipper;
