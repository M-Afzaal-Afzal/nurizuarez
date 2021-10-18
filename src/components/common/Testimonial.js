import React, {useState} from 'react';
import {Box, Typography} from "@mui/material";
import Image from "next/image";
import Rating from "react-rating";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";

const Testimonial = (props) => {

    const [isReadMore,setIsReadMore] = useState(false);

    const toggleIsReadMore = () => {
        setIsReadMore(!isReadMore);
    }

    return (
        <Box sx={{
            height: '100%',
        }}>

            <Box sx={{
                height: '100%',
                width: props.width ? props.width : {
                    xs: "328px",
                    md: "340",
                    lg: '390px',
                },
                display: {
                    xs: 'none',
                    md: 'grid',
                },
                gridTemplateRows: '1fr auto',
            }}
            >

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
                        <img src={props.image || '/home/profile.png'} width={50} height={50}/>
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
                            {props.content}
                            {/*<Box component={'span'} pl={'.5rem'}>*/}
                            <img style={{
                                width: props.isSingleTestimonial ? '20px' : '12px',
                                height: 'auto',
                                display: 'inline-block',
                                paddingLeft: '.5rem',
                            }} src={'/home/startingQuote.svg'}/>
                            {/*</Box>*/}
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
                        - {props.name} <br/>
                        {props.position}, {props.company}
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
                minHeight: '180px',
            }}
            >

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
                        <img src={props.image || '/home/profile.png'} width={50} height={50}/>
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
                            - {props.name} <br/>
                            {props.position}, {props.company}
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

                        {props.content.length > 150 && !isReadMore ? (
                            <>
                                {props.content.substr(0,50)}...
                            </>
                        ) : (
                            <>
                                {props.content}
                            </>
                        ) }
                    </Typography>

                    {
                        !isReadMore && props.content.length > 150 && (
                            <Typography onClick={toggleIsReadMore} sx={{
                                cursor: 'pointer',
                                mt: '8px',
                            }} color={'primary'}>
                                show more
                            </Typography>
                        )
                    }

                    {
                        isReadMore && props.content.length > 150 && (
                            <Typography onClick={toggleIsReadMore} sx={{
                                cursor: 'pointer',
                                mt: '8px',
                            }} color={'primary'}>
                                show less
                            </Typography>
                        )
                    }

                </Box>
            </Box>

        </Box>
    );
};

export default Testimonial;
