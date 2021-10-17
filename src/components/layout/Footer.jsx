import React from 'react';
import {Box, Button, Container, Divider, IconButton, Typography} from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import ButtonPrimaryText from "../common/buttons/ButtonPrimaryText";
import {FaTiktok} from "react-icons/fa";
import {ctaClickHandler} from "../../utils/utils";

const Footer = () => {
    return (
        <Box sx={{
            // height: '100px',
            position: 'relative',
            background: (theme) => theme.palette.common.main,
        }}>
            <Container
                sx={{
                    height: '100%',
                    py: '1.5rem',
                    pb: {
                        xs: '8rem',
                        md: '1.5rem',
                    },
                }}
                maxWidth={'xxl'}

            >
                <Box
                    display={'grid'}
                    height={'100%'}
                    gridTemplateColumns={{
                        xs: '1fr',
                        md: 'auto 1fr auto',
                    }}
                    sx={{
                        gridColumnGap: '2rem',
                        gridRowGap: '1rem',
                        placeItems: {
                            xs: 'center',
                            md: 'unset',
                        },
                    }}
                >

                    {/* left icons section*/}
                    <Box sx={{
                        order: {
                            xs: 10,
                            md: 'unset',
                        },

                    }} display={'grid'}
                         // gridTemplateColumns={'1fr 1fr 1fr 1fr 1fr'}
                         gridTemplateColumns={'1fr 1fr '}
                         justifyContent={'center'}
                    >
                        {/*<IconButton>*/}
                        {/*    <FacebookIcon fontSize={'40px'} sx={{*/}
                        {/*        color: '#fff',*/}
                        {/*    }}/>*/}
                        {/*</IconButton>*/}

                        <IconButton>
                            <a target={'_blank'} href="https://www.instagram.com/therentbase/">
                                <InstagramIcon fontSize={'40px'} sx={{
                                    color: '#fff'
                                }}/>
                            </a>
                        </IconButton>

                        {/*<IconButton>*/}
                        {/*    <TwitterIcon fontSize={'40px'} sx={{*/}
                        {/*        color: '#fff',*/}
                        {/*    }}/>*/}
                        {/*</IconButton>*/}

                        <IconButton>
                            <a target={'_blank'} href="https://www.linkedin.com/company/therentbase">
                                <LinkedInIcon fontSize={'40px'} sx={{
                                    color: '#fff',
                                }}/>
                            </a>
                        </IconButton>

                        {/*<IconButton>*/}
                        {/*    <FaTiktok size={'20.99'} style={{*/}
                        {/*        color: '#fff',*/}
                        {/*    }}/>*/}
                        {/*</IconButton>*/}

                    </Box>

                    {/* Center section*/}
                    <Box>
                        <Box sx={{
                            height: '100%',
                            background: {
                                xs: 'none',
                                // lg:  'rgba(20, 20, 20, 1)'
                            },
                            display: 'grid',
                            justifyContent: 'center',
                            alignContent: 'center',
                            fontSize: '15px',
                            color: '#fff',
                        }}>
                            TheRentBase.com
                        </Box>

                    </Box>

                    {/*     right section     */}
                    <Box sx={{
                        display: 'flex',
                        color: '#fff',
                    }} direction={'row'}
                         spacing={2}
                         justifyContent={'center'}
                         alignItems={'center'}>
                        <Box height={'100%'} display={'flex'} alignItems={'center'}>
                            <Divider sx={{
                                width: '2px',
                                height: '2rem',
                                background: '#fff',
                                my: 'auto',
                                display: {
                                    xs: 'none',
                                    md: 'block',
                                }
                            }} flexItem light variant="middle"/>
                        </Box>
                        <ButtonPrimaryText sx={{
                            fontSize: '15px',
                            color: '#fff',
                        }}>
                            Terms
                        </ButtonPrimaryText>
                        <ButtonPrimaryText sx={{
                            fontSize: '15px',
                            color: '#fff',
                        }}>
                            Privacy
                        </ButtonPrimaryText>
                    </Box>

                </Box>

            </Container>

            {/*    Mobile Sticky footer on bottom */}
            <Box sx={{
                position: 'fixed',
                bottom: 0,
                lef: 0,
                width: '100%',
                zIndex: 300,
                background: 'rgba(255,255,255,0.9)',
                display: {
                    xs: 'flex',
                    md: 'none'
                },
                justifyContent: 'center',
                alignItems: 'center',
                p: '1rem 2rem',
                border: '1px solid #000000',
                flexDirection: 'column',
            }}>
                <Button
                    onClick={ctaClickHandler}
                    sx={{
                    textTransform: 'unset',
                }} fullWidth variant={'contained'} color={'primary'}>
                    Start For Free
                </Button>

                <Typography sx={{
                    pt: '1rem',
                }} textAlign={'center'} variant={'body1'}>
                    No credit card needed. 2 mins signup.
                </Typography>

            </Box>
        </Box>
    );
};

export default Footer;