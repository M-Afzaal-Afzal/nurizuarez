import React from 'react';
import {Box, Container, Divider, IconButton, Stack} from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import ButtonPrimaryText from "../common/buttons/ButtonPrimaryText";

const Footer = () => {
    return (
        <Box sx={{
            height: '100px',
            background: (theme) => theme.palette.common.main,
        }}>
            <Container
                sx={{
                    height: '100%',
                    py: '1rem',
                }}
                maxWidth={'xxl'}

            >
                <Box
                    display={'grid'}
                    height={'100%'}
                    gridTemplateColumns={'auto 1fr auto'}
                    sx={{
                        gridColumnGap:'2rem',
                    }}
                >

                    {/* left icons section*/}
                    <Box display={'grid'}
                         gridTemplateColumns={'1fr 1fr 1fr 1fr'}
                         justifyContent={'center'}
                    >
                        <IconButton>
                            <FacebookIcon fontSize={'40px'} sx={{
                                color: '#fff',
                            }}/>
                        </IconButton>

                        <IconButton>

                            <InstagramIcon fontSize={'40px'} sx={{
                                color: '#fff'
                            }}/>
                        </IconButton>

                        <IconButton>
                            <TwitterIcon fontSize={'40px'} sx={{
                                color: '#fff',
                            }}/>
                        </IconButton>

                        <IconButton>
                            <LinkedInIcon fontSize={'40px'} sx={{
                                color: '#fff',
                            }}/>
                        </IconButton>

                    </Box>

                    {/* Center section*/}
                    <Box>
                        <Box sx={{
                            height: '100%',
                            background: 'rgba(20, 20, 20, 1)',
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
                    <Stack sx={{
                        color: '#fff',
                    }} direction={'row'} spacing={2} justifyContent={'center'} alignItems={'center'}>
                        <Box height={'100%'} display={'flex'} alignItems={'center'}>
                            <Divider sx={{
                                width: '2px',
                                height: '2rem',
                                background: '#fff',
                                my: 'auto',
                            }} flexItem light variant="middle"/>
                        </Box>
                        <ButtonPrimaryText sx={{
                            fontSize: '15px',
                            color: '#fff',
                        }} >
                            Terms
                        </ButtonPrimaryText>
                        <ButtonPrimaryText sx={{
                            fontSize: '15px',
                            color: '#fff',
                        }} >
                            Privacy
                        </ButtonPrimaryText>
                    </Stack>

                </Box>
            </Container>
        </Box>
    )
        ;
};

export default Footer;