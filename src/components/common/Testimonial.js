import React from 'react';
import {Box, Typography} from "@mui/material";
import Image from "next/image";
import Rating from "react-rating";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";

const Testimonial = ({text,singleTestimonial}) => {
    return (
        <Box>

            <Box sx={{
                width: {
                    xs: "328px",
                    md: "340",
                    lg: '390px',
                },
                display: {
                    xs: 'none',
                    md: 'block',
                }
            }}>

                {/* Top Section*/}
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
                        <img src={'/home/profile.png'} width={50} height={50}/>
                    </Box>

                    <Box>
                        <Typography sx={{
                            fontSize: {
                                xs: '14px',
                            }
                        }} textAlign={'left'} position={'relative'} px={'1rem'}>
                            <Box component={'span'} position={'absolute'} left={0} top={-5}>
                                <img style={{
                                    width: '12px',
                                    height: 'auto',
                                    marginTop: '8px',
                                }} src={'/home/startingQuote.svg'}/>
                            </Box>
                            {
                                text ? (
                                    <>
                                        {text}
                                    </>
                                ) : (
                                    <>
                                        It is easy to get lost in all the information you’re dealing with on a
                                        day-to-day
                                        basis.
                                        This helps you stay organized and prioritize your time so that you can be a more
                                        efficient agent.
                                    </>
                                )
                            }
                            <Box component={'span'} >
                            <img style={{
                                // width: '12px',
                                width: singleTestimonial ? '' : '12px',
                                // height: '7.9px',
                                display: 'inline-block',
                                paddingLeft: '.5rem',
                            }} src={'/home/startingQuote.svg'}/>
                            </Box>
                        </Typography>
                    </Box>


                </Box>

                {/* Bottom Section*/}
                <Box sx={{
                    margin: '8px 0',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
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


            {/*     Tablet section*/}
            <Box sx={{
                display: {
                    xs: 'block',
                    md: 'none',
                },
                border: '1px solid #000',
                borderRadius: '20px',
                boxShadow: '-2px 4px 7px rgba(0, 0, 0, 0.25)',
                p: {
                    xs: '1rem',
                    md: '1rem',
                },
            }}>

                {/* Top Section*/}
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

                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
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

                        <Typography textAlign={'left'} variant={'body1'} fontWeight={'600'} fontSize={'12px'}>
                            - Ian C. <br/>
                            Keller Williams Agent
                        </Typography>

                    </Box>


                </Box>

                {/* Bottom Section*/}
                <Box sx={{
                    margin: '8px 0',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                }}>
                    <Typography sx={{
                        fontSize: {
                            xs: '14px',
                        }
                    }} textAlign={'left'} position={'relative'}>

                        It is easy to get lost in all the information you’re dealing with on a day-to-day
                        basis. ...
                    </Typography>

                    <Typography sx={{
                        cursor: 'pointer',
                        mt: '8px',
                    }} color={'primary'}>
                        read all
                    </Typography>

                </Box>
            </Box>

        </Box>
    );
};

export default Testimonial;
