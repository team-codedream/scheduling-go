import React from 'react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

import testImage1 from '../assets/images/signupSwipertestImage1.jpg';
import testImage2 from '../assets/images/signupSwipertestImage2.jpg';
import testImage3 from '../assets/images/signupSwipertestImage3.jpg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function CustomSwiperWithPagination() {
  return (
    <div id="swiper-container" style={{ position: 'relative' }}>
      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        loop={true}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 10000, disableOnInteraction: false }}
        navigation={{
          nextEl: '.custom-swiper-button-next',
          prevEl: '.custom-swiper-button-prev',
        }}
        pagination={{
          el: '.custom-pagination', // 커스텀 페이지네이션 요소의 선택자
          clickable: true,
        }}
      >
        <SwiperSlide>
          <img src={testImage1} alt="slide 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={testImage2} alt="slide 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={testImage3} alt="slide 3" />
        </SwiperSlide>
      </Swiper>

      {/* Swiper 컨테이너 바깥쪽에 네비게이션 버튼 배치 */}
      <FaAngleLeft
        className="custom-swiper-button-prev"
        style={{
          position: 'absolute',
          top: '50%',
          left: '2%',
          transform: 'translateY(-50%)',
          color: '#00FFDE',
          fontSize: '2.5em',
          cursor: 'pointer',
          zIndex: 10
        }}
      />
      <FaAngleRight
        className="custom-swiper-button-next"
        style={{
          position: 'absolute',
          top: '50%',
          right: '2%',
          transform: 'translateY(-50%)',
          color: '#00FFDE',
          fontSize: '2.5em',
          cursor: 'pointer',
          zIndex: 10
        }}
      />

      {/* Swiper 컨테이너 바깥(아래쪽)에 커스텀 페이지네이션 요소 배치 */}
      <div
        className="custom-pagination"
        style={{
          position: 'absolute',
          bottom: '-50px',
          width: '100%',
          textAlign: 'center',
        }}
      />
    </div>
  );
}
