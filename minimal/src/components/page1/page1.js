import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Autoplay, Pagination, Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "./page1.css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function Page1() {
  SwiperCore.use([Autoplay]);
  return (
    <div className="page1-main-container">
      <Swiper
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        loop={true}
        slidesPerView={3}
        breakpoints={{
          400: {
            slidesPerView: 1,
          },
          620: {
            slidesPerView: 2,
          },
          960: {
            slidesPerView: 3,
          },
        }}
        className="mySwiper"
      >
        <SwiperSlide className="sw-sl">
          <img src={require("../img/sh1.jpg")} />
          <div className="page1-text-div">
            <div className="page1-text-header">Code Design</div>
            <div className="page1-text-body">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="sw-sl">
          <img src={require("../img/sh2.jpg")} />
          <div className="page1-text-div">
            <div className="page1-text-header">Code Design</div>
            <div className="page1-text-body">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="sw-sl">
          <img src={require("../img/sh3.jpg")} />
          <div className="page1-text-div">
            <div className="page1-text-header">Code Design</div>
            <div className="page1-text-body">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="sw-sl">
          <img src={require("../img/sh4.jpg")} />
          <div className="page1-text-div">
            <div className="page1-text-header">Code Design</div>
            <div className="page1-text-body">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="sw-sl">
          <img src={require("../img/sh5.jpg")} />
          <div className="page1-text-div">
            <div className="page1-text-header">Code Design</div>
            <div className="page1-text-body">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Page1;
