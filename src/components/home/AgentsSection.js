import React from 'react';
import {Box, Typography} from "@mui/material";
import Container from "@mui/material/Container";
import TestimonialsSection from "./TestimonialsSection";

const AgentsSection = () => {
    return (
        <Box mt={'1rem'}>
            <Container maxWidth={'xl'}>
                <Typography
                    textAlign={'center'}
                    variant={'h1'}
                    fontWeight={'bold'}
                    fontSize={'35px'}
                    lineHeight={'44px'}
                >
                    Don’t just take it from us. <br/>
                    Take it from agents who are already using RentBase
                </Typography>

                <TestimonialsSection/>

            </Container>
        </Box>
    );
};

export default AgentsSection;