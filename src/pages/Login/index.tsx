import React from "react";
import LoginForm from "../../components/LoginForm";
import { Button } from "../../styles/buttons";
import { Container } from "../../styles/global";
import { Link } from "react-router-dom";

import {  SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import { StyledSwiper } from "./style";

const PageLogin = () => {
  return (
    <Container small={true}>
      <LoginForm />
      <Link to="/register">
        <Button tag="button" outline={true} style={{ marginTop: "1rem" }}>
          Cadastre-se
        </Button>
      </Link>
      <>
        <div>
          <StyledSwiper
            navigation={true}
            pagination={true}
            modules={[Navigation, Pagination]}
            slidesPerView={1}
            spaceBetween={10}
            breakpoints={{
              480: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
            }}
            className="mySwiper"
          >
            <SwiperSlide>
              <h1>Hoje é terça-feira!</h1>
            </SwiperSlide>
            <SwiperSlide>
              <h1>Seja feliz!</h1>
            </SwiperSlide>
            <SwiperSlide>
              <h1>Hoje é o meu aniversário!</h1>
            </SwiperSlide>
          </StyledSwiper>
        </div>
      </>
    </Container>
  );
};

export default PageLogin;
