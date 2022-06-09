import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/gaurav1.jpg";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVTR1,
    name: "Gaurav",
    review: "Thi this is good project ,and programming stuff ",
  },
  {
    avatar: AVTR1,
    name: "Gaurav",
    review: "Thi this is good project ,and programming stuff ",
  },
  {
    avatar: AVTR1,
    name: "Gaurav",
    review: "Thi this is good project ,and programming stuff ",
  },
  {
    avatar: AVTR1,
    name: "Gaurav",
    review: "Thi this is good project ,and programming stuff ",
  },
  {
    avatar: AVTR1,
    name: "Gaurav",
    review: "Thi this is good project ,and programming stuff ",
  },
  {
    avatar: AVTR1,
    name: "Gaurav",
    review: "Thi this is good project ,and programming stuff ",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review From The Clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials_container"
        modules={[Pagination, Navigation]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }) => {
          return (
            <SwiperSlide className="testimonial">
              <div className="client_avatar">
                <img src={avatar} alt="Avatar One" />
              </div>
              <h5 className="client_name">{name}</h5>
              <small className="client_review">{review} </small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
