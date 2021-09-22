import React from 'react';
import {Box, Typography} from "@mui/material";
import Image from "next/image";
import Rating from "react-rating";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";

const Testimonial = () => {
    return (
        <Box sx={{
            maxWidth:"435px"
        }}>

            <Box
                sx={{
                    alignItems: 'flex-start',
                    gridGap: '1rem',
                    pt: 0,
                }}
                display={'grid'}
                gridTemplateColumns={'auto 1fr'}
            >
                <Box sx={{
                    mt: '6px',
                    '& img': {
                        borderRadius: '10px',
                    }
                }}>
                    <Image src={'/home/profile.png'} width={50} height={50}/>
                </Box>

                <Box>
                    <Typography position={'relative'} px={'1rem'}>
                        <Box component={'span'} position={'absolute'} left={0} top={-5}>
                            <Image src={'/home/startingQuote.svg'} width={12} height={12}/>
                        </Box>
                        It is easy to get lost in all the information you’re dealing with on a day-to-day
                        basis.
                        This helps you stay organized and prioritize your time so that you can be a more
                        efficient agent.
                        <Box component={'span'} pl={'.5rem'}>
                            <Image src={'/home/startingQuote.svg'} width={12} height={12}/>
                        </Box>
                    </Typography>
                </Box>

            </Box>

            <Box sx={{
                margin: '8px 0',
            }}>
                <Rating direction={'ltr'}
                        emptySymbol={<StarBorderIcon sx={{
                            color: theme => theme.palette.primary.main,
                        }}/>}
                        fullSymbol={<StarIcon sx={{
                            color: theme => theme.palette.primary.main,
                        }}/>}
                        fractions={10}
                        readonly
                        initialRating={5}
                />

                <Typography variant={'body1'} fontWeight={'600'} fontSize={'12px'}>
                    - Ian C. <br/>
                    Keller Williams Agent
                </Typography>

            </Box>
        </Box>
    );
};

export default Testimonial;