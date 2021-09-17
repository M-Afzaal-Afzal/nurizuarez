import React from 'react';
import {Box} from "@mui/material";
import Testimonial from "../common/Testimonial";

const TestimonialsSection = () => {
    return (
        <Box>

            <Box display={'grid'}
                 sx={{
                     gridGap:'1.5rem',
                     gridTemplateColumns: '1fr 1fr 1fr',
                     mt: '2rem',
                 }}
                 justifyContent={'center'}
                 alignItems={'center'}
                 flexWrap={'wrap'}
            >

                <Box>
                    <Testimonial/>
                </Box>

                <Box>
                    <Testimonial/>
                </Box>

                <Box>
                    <Testimonial/>
                </Box>

            </Box>

        </Box>
    );
};

export default TestimonialsSection;