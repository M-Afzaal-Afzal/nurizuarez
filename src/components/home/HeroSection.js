import React from 'react';
import Container from '@mui/material/Container';
import Typewriter from 'typewriter-effect';
import {Box, IconButton, Typography} from "@mui/material";
import Image from "next/image";
import PrimaryButtonContained from "../common/buttons/PrimaryButtonContained";
import PlayCircleOutlineOutlinedIcon from '@mui/icons-material/PlayCircleOutlineOutlined';
import Rating from 'react-rating';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';

const HeroSection = () => {
    return (
        <Container sx={{
            py: '3rem',
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

                    <Box sx={{
                        alignItems: 'center',
                        gridGap: '1rem',
                    }} mt={'2rem'} display={'grid'} gridTemplateColumns={'auto 1fr'}>
                        <Box sx={{
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
                                It is easy to get lost in all the information you’re dealing with on a day-to-day basis.
                                This helps you stay organized and prioritize your time so that you can be a more
                                efficient agent.
                                <Box component={'span'} pl={'.5rem'}>
                                    <Image src={'/home/startingQuote.svg'} width={12} height={12}/>
                                </Box>
                            </Typography>
                        </Box>

                    </Box>

                    <Box sx={{
                        margin: '1rem 0',
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