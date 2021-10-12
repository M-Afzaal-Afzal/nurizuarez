import React, {useEffect} from 'react';
import Container from '@mui/material/Container';
import Typewriter from 'typewriter-effect';
import {Box, IconButton, Typography} from "@mui/material";
import Image from "next/image";
import PrimaryButtonContained from "../common/buttons/PrimaryButtonContained";
import PlayCircleOutlineOutlinedIcon from '@mui/icons-material/PlayCircleOutlineOutlined';
import Testimonial from "../common/Testimonial";
import {useInView} from 'react-intersection-observer';
import {useGlobalContext} from "../../../context/GlobalContext";

const HeroSection = () => {

    const {toggleIsNavbarFixed} = useGlobalContext();

    const {ref, inView, entry} = useInView({
        /* Optional options */
        threshold: .7,
    });

    useEffect(() => {
        if (inView) {
            toggleIsNavbarFixed(false);
        } else {
            toggleIsNavbarFixed(true)
        }
    }, [inView])

    return (
        <Container ref={ref} sx={{
            pt: '3rem',
            px: {
                xs: '20px',
                md: '24px',
            },
            pb: {
                xs: '6rem',
                md: 0,
            },
            color: {
                xs: '#fff',
                md: 'rgba(0, 0, 0, 1)',
            },
            position: 'relative',
        }} maxWidth={'xl'}

        >

            <Box display={'grid'} sx={{
                display: "grid",
                gridTemplateColumns: {
                    xs: '1fr',
                    md: '1fr 1fr',
                },
                '&:before': {
                    xs: {
                        content: "''",
                        zIndex: -1,
                        clipPath: 'ellipse(130% 95% at 50% 0%)',
                        position: 'absolute',
                        top: -100,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient(107.88deg, #3B0678 14.09%, #771EB6 65.32%)',

                    },
                    md: {
                        content: 'none',
                    }
                }
            }}>

                {/* Left side*/}
                <Box sx={{
                    textAlign: {
                        xs: 'center',
                        md: "left",
                    },
                }}>
                    <Typography sx={{
                        fontSize: '22px',
                        display: 'flex',
                        direction: 'row',
                        alignItems: 'center',
                        justifyContent: {
                            xs: 'center',
                            md: 'flex-start',
                        }
                    }} variant={'body1'}>
                        Real-Estate &nbsp;
                        <Typewriter
                            options={{
                                strings: ['Agent?', 'Team Lead?'],
                                autoStart: true,
                                loop: true,
                                deleteChars: 5,
                                style: {display: 'inline-block'}
                            }}
                        />
                    </Typography>

                    <Typography
                        sx={{
                            py: '1rem',
                            fontWeight: 'bold',
                            color: {
                                xs: '#fff',
                                md: 'rgba(0, 0, 0, 1)'
                            },
                            fontSize: {
                                xs: '41px',
                                md: '51px',
                                lg: '56px',
                                'xxl': '66px'
                            }
                        }}
                        variant={'h1'}
                    >
                        Open doors. Close deals.
                    </Typography>

                    <Box sx={{
                        fontSize: '22px',
                    }}>
                        RentBase is a data-driven, predictive rentals operating system that {" "}
                        <Box sx={{
                            fontSize: '22px',
                        }} component={'span'} fontWeight={'bold'}>
                        discovers deals
                        </Box> {" "}
                        you never knew you had, while {" "}
                        <Box sx={{
                            fontSize: '22px',
                        }} component={'span'} fontWeight={'bold'}>
                            saving you hours
                        </Box> of work.
                    </Box>

                    {/* Header Buttons Section*/}
                    <Box sx={{
                        display: {
                            xs: 'none',
                            md: 'flex',
                        }
                    }} display={'flex'} alignItems={'center'} pt={'2rem'}>

                        <PrimaryButtonContained>
                            Start for Free
                        </PrimaryButtonContained>

                        <IconButton color={'primary'} size={'large'}>
                            <Box sx={{
                                display: 'grid',
                                gridTemplateColumns: '1fr',
                                gridTemplateRows: '1fr',
                                placeItems: 'center',
                            }}>
                                <Box sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    gridColumn: '1/-1',
                                    gridRow: '1/-1',
                                }}>
                                    <Image priority={true} src={'/icons/png/circle.png'} width={52} height={52}/>
                                </Box>
                                <Box sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    gridColumn: '1/-1',
                                    gridRow: '1/-1',
                                }}>
                                    <Image priority={true} src={'/icons/png/playbtn.png'} width={15} height={17}/>
                                </Box>
                            </Box>
                            {/*<PlayCircleOutlineOutlinedIcon sx={{*/}
                            {/*    width: '52px',*/}
                            {/*    height: '52px',*/}
                            {/*}}/>*/}
                        </IconButton>

                    </Box>

                    <Box sx={{
                        display: {
                            xs: 'none',
                            md: 'flex',
                        }
                    }}>
                        <Typography fontSize={'14px'} variant={'body1'}
                        >
                            Try our essential package for free now, and see why we’re the newest necessity in real estate.
                            <br/>
                            Sign up in minutes, no CC required.
                        </Typography>
                    </Box>

                    {/* user profile card*/}
                    <Box sx={{
                        display: {
                            xs: 'none',
                            md: 'flex',
                        }
                    }} mt={'2rem'}>
                        <Testimonial/>
                    </Box>


                </Box>

                {/* Right image side*/}
                <Box sx={{
                    display: {
                        xs: 'none',
                        md: 'flex',
                    }
                }} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                    <Image src={'/home/heroMobiles.png'}
                           layout={'intrinsic'}
                           width={505.23}
                           height={497.45}
                           priority={true}
                    />
                </Box>

                {/*    Tablet Image Section*/}
                <Box sx={{
                    display: {
                        xs: 'flex',
                        md: 'none',
                    },
                    justifyContent: 'center',
                }}>
                    <Image
                        src={'/home/mocks/tablet/heroTablet.svg'} width={542}
                        height={367}
                    />
                </Box>

            </Box>

        </Container>
    );
};

export default HeroSection;
