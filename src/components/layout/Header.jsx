import React from 'react';
import {

    Box, Button,
    Container,
    Stack,
} from "@mui/material";
import ButtonPrimaryText from "../common/buttons/ButtonPrimaryText";
import Image from 'next/image';

const Header = () => {

    return (
        <Box>

            <Container maxWidth={'xl'}>

                <Stack direction={'row'} sx={{
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    height: '100px',
                    background: 'rgba(255, 255, 255, 0.65)',
                    backdropFilter: 'blur(64px)',
                }}>
                    {/* Left Side of header*/}
                    <Stack direction={'row'} spacing={'10px'}>
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <Image src={'/whiteBackground.svg'}
                                // layout={'intrinsic'}
                                   width={167}
                                   height={45}
                                   priority={true}
                            />
                            {/*<Box sx={{width: '8px'}}/>*/}
                            {/*<Image src={'/logoTextDark.svg'}*/}
                            {/*    // layout={'intrinsic'}*/}
                            {/*       width={98.93}*/}
                            {/*       height={16.35}*/}
                            {/*       priority={true}*/}
                            {/*/>*/}

                        </Box>
                        <ButtonPrimaryText>
                            How it works
                        </ButtonPrimaryText>

                        <ButtonPrimaryText>
                            Testimonials
                        </ButtonPrimaryText>

                        <ButtonPrimaryText>
                            Features
                        </ButtonPrimaryText>

                        <ButtonPrimaryText>
                            Product Updates
                        </ButtonPrimaryText>
                    </Stack>

                    {/* Right side of header*/}
                    <Stack spacing={4} alignItems={'center'} direction={'row'}>
                        <Box>
                            <Stack
                                direction={'row'}
                                divider={<Box>|</Box>} spacing={'0px'}
                                alignItems={'center'}
                            >
                                <ButtonPrimaryText sx={{
                                    fontFamily: 'Roboto Slab',
                                    fontWeight: 700,
                                }}>
                                    For Agents
                                </ButtonPrimaryText>
                                {/*<Divider orientation="vertical" variant="middle" flexItem />*/}
                                <ButtonPrimaryText sx={{
                                    fontFamily: 'Roboto Slab',
                                    fontWeight: 700,
                                }}>
                                    For Offices
                                </ButtonPrimaryText>
                            </Stack>
                        </Box>

                        <Box>
                            <Button sx={{
                                height: '50px',
                                textTransform: 'unset',
                            }} color={'primary'} variant={'outlined'}>
                                Sign-Up For Free
                            </Button>
                        </Box>

                    </Stack>

                </Stack>
            </Container>

        </Box>
    );
};

export default Header;