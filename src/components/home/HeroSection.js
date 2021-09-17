import React from 'react';
import Container from '@mui/material/Container';
import Typewriter from 'typewriter-effect';
import {Box, IconButton, Typography} from "@mui/material";
import Image from "next/image";
import PrimaryButtonContained from "../common/buttons/PrimaryButtonContained";
import PlayCircleOutlineOutlinedIcon from '@mui/icons-material/PlayCircleOutlineOutlined';
import Testimonial from "../common/Testimonial";

const HeroSection = () => {
    return (
        <Container sx={{
            pt: '3rem',
        }} maxWidth={'xl'}
        >

            <Box display={'grid'} gridTemplateColumns={'1fr 1fr'}>

                {/* Left side*/}
                <Box>
                    <Typography sx={{
                        fontSize: '22px',
                        display: 'flex',
                        direction: 'row',
                        alignItems: 'center',
                    }} variant={'body1'}>
                        Realestate &nbsp;
                        <Typewriter
                            options={{
                                strings: ['Agent?', 'Manager?'],
                                autoStart: true,
                                loop: true,
                                deleteChars: 5,
                                style: {display: 'inline-block'}
                            }}
                        />
                    </Typography>

                    <Typography
                        sx={{py: '1rem', fontWeight: 'bold'}}
                        variant={'h1'}
                    >
                        Free more time & Close more deals
                    </Typography>

                    <Typography sx={{
                        fontSize: '22px',
                    }} variant={'body1'}>
                        RentBase is your {" "}
                        <Box component={'span'} fontWeight={'bold'}>
                            all-in-on
                        </Box> data-driven operating system enabling {" "}
                        <Box component={'span'} fontWeight={'bold'}>
                            real estate agents
                        </Box> to automate their renal business and unlock future deals
                    </Typography>

                    {/* Header Buttons Section*/}
                    <Box display={'flex'} alignItems={'center'} pt={'2rem'}>

                        <PrimaryButtonContained>
                            Sign-Up For Free
                        </PrimaryButtonContained>

                        <IconButton color={'primary'} size={'large'}>
                            <PlayCircleOutlineOutlinedIcon sx={{
                                width: '52px',
                                height: '52px',
                            }}/>
                        </IconButton>

                    </Box>

                    <Typography fontSize={'14px'} variant={'body1'}>
                        No credit card needed. 2 mins signup.
                    </Typography>

                    {/* user profile card*/}
                    <Box mt={'2rem'}>
                        <Testimonial/>
                    </Box>


                </Box>

                {/* Right image side*/}
                <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
                    <Image src={'/home/heroMobiles.png'}
                           layout={'intrinsic'}
                           width={505.23}
                           height={497.45}
                           priority={true}
                    />
                </Box>

            </Box>

        </Container>
    );
};

export default HeroSection;