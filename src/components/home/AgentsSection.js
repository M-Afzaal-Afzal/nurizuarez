import React from 'react';
import {Box, Typography} from "@mui/material";
import Container from "@mui/material/Container";
import TestimonialsSection from "./TestimonialsSection";

const AgentsSection = () => {
    return (
        <Box id={'testimonials'} mt={'1rem'} pb={'4rem'}>
            <Container sx={{
                px: {
                    xs: '0',
                    md: '24px',
                }
            }} maxWidth={'xl'}>
                <Typography
                    textAlign={'center'}
                    variant={'h1'}
                    fontWeight={'bold'}
                    sx={{
                        fontSize: {
                            xs: '25px',
                            md: '35px',
                        }
                    }}
                    lineHeight={'44px'}
                >
                    Don’t take our word for it. <br/>
                    <small>Agents using RentBase saved enough time to actually write these reviews:</small>
                </Typography>

                <Box py={'2rem'}>
                    <TestimonialsSection/>
                </Box>

            </Container>
        </Box>
    );
};

export default AgentsSection;
