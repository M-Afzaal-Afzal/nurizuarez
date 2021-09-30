import React from 'react';
import {Box} from "@mui/material";
import Testimonial from "../common/Testimonial";

// import Swiper core and required modules
import SwiperCore, {
    Pagination
} from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";


// install Swiper modules
SwiperCore.use([Pagination]);


const TestimonialsSection = () => {
    return (
        <Box>

            <Box display={'grid'}
                 // sx={{
                 //     gridGap: '1.5rem',
                 //     gridTemplateColumns: '1fr 1fr 1fr',
                 //     mt: '2rem',
                 // }}
                 // justifyContent={'center'}
                 // alignItems={'center'}
                 // flexWrap={'wrap'}
            >

                <Swiper slidesPerView={'auto'} spaceBetween={6} pagination={{
                    "clickable": true
                }} className="mySwiper">
                    <SwiperSlide>

                            <Testimonial/>

                    </SwiperSlide>

                    <SwiperSlide>

                            <Testimonial/>

                    </SwiperSlide>

                    <SwiperSlide>

                            <Testimonial/>

                    </SwiperSlide>

                </Swiper>

            </Box>

        </Box>
    );
};

export default TestimonialsSection;