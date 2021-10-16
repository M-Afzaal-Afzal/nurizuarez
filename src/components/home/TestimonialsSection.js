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

                    <Testimonial
                      content="It is easy to get lost in all the information you’re dealing with on a day-to-day basis. This helps you stay organized and prioritize your time so that you can be a more efficient agent."
                      image="/home/ian_cotterell_rentbase_rental_crm_agent.png"
                      name="Ian Cotterell"
                      position="Agent"
                      company="Keller Williams Realty"/>

                    </SwiperSlide>

                    <SwiperSlide>
                    <Testimonial
                      content="Now that I’m using RentBase, I’m never adding a new listing to Airtable again."
                      image="/home/calder_billings_rentbase_rental_crm_agent.png"
                      name="Calder Billings"
                      position="Agent"
                      company="Keller Williams Realty"/>

                    </SwiperSlide>

                    <SwiperSlide>

                    <Testimonial
                      content="... I didn’t realize at the time how spread-out we were through multiple platforms, but RentBase put everything in one place. All of our leads, landlords, documents, and follow-ups are now in one place... "
                      image=""
                      name="Austin Heredia"
                      position="Founder"
                      company="Chicago Rentals / HomeSmart Connect"/>
                      
                    </SwiperSlide>

                </Swiper>

            </Box>

        </Box>
    );
};

export default TestimonialsSection;
