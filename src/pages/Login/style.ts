import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

export const StyledSwiper = styled(Swiper)`
    .swiper-wrapper{
        padding: 2rem 3rem;
    }
    .swiper-pagination{
        .swiper-pagination-bullet{
            width: 24px;
            height: 24px;
        }
    }
    .swiper-button-prev,
    .swiper-button-next{
        ::after{
            font-size: 16px;
            font-weight: 800;
        }
    }
`