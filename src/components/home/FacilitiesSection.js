import React from 'react';
import {Box, Typography} from "@mui/material";
import Image from 'next/image';

const FacilitiesSection = () => {
    return (
        <Box position={'relative'}>

            <Box sx={{
                '&:before': {
                    content: "''",
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: "100%",
                    background: 'rgba(249, 249, 249, 1)',
                    clipPath: 'ellipse(80% 85% at 50% 0%)',
                    zIndex: '-1',
                },
                py: '5rem',
            }}>

                <Box sx={{
                    maxWidth: '991px',
                    mx: 'auto',
                }}>
                    <Typography sx={{
                        ml: '3rem',
                        mb: '3rem',
                    }} fontWeight={'700'} fontSize={'35px'} variant={'h1'}>
                        What you’ll be getting...
                    </Typography>

                    <Box
                        sx={{
                            height: '50px',
                            background: theme => theme.palette.common.main,
                            borderRadius: '8px',
                            display: "grid",
                            gridTemplateColumns: '1fr 1fr 1fr',
                            gridGap: '1.5rem',
                            padding: '0 1.5rem',
                            mb: "8px",
                        }}
                    >
                        {/* First box for spacing*/}
                        <Box/>

                        {/* Second Box*/}
                        <Box display={'flex'} alignItems={'center'}>
                            <Typography color={'#fff'} variant={'body1'}>
                                Essentials
                            </Typography>
                        </Box>

                        {/* 3rd Box*/}
                        <Box display={'flex'} alignItems={'center'}>
                            <Typography color={'#fff'} variant={'body1'}>
                                Premium
                            </Typography>
                        </Box>

                    </Box>

                    <Box
                        sx={{
                            borderRadius: '12px',
                            border: '1px solid rgba(221, 221, 221, 1)',
                            background: '#fff',
                        }}
                    >

                        {/* 1st Row*/}

                        <Box mx={'1.5rem'} py={'1.5rem'}
                            sx={{
                                borderBottom: "1px solid rgba(245, 245, 245, 1)",
                                display: 'grid',
                                gridTemplateColumns: '1fr 1fr 1fr',
                                gridGap: '1.5rem',
                            }}
                        >
                            <Typography sx={{
                                display: 'flex',
                                alignItems: 'center',
                            }} variant={'body1'}>
                                Rental Database & CRM for <br/>
                                Landlords and Listings and Leads DB
                            </Typography>

                            <Typography sx={{
                                display: 'flex',
                                alignItems: 'center',
                            }} color={'primary'} variant={'body1'}>
                                Free Forever
                            </Typography>

                            <Typography sx={{
                                display: 'flex',
                                alignItems: 'center',
                            }} color={'primary'} variant={'body1'}>
                                Free Forever
                            </Typography>

                        </Box>

                        {/* 2nd Row */}

                        <Box mx={'1.5rem'} py={'1.5rem'}
                             sx={{
                                 borderBottom: "1px solid rgba(245, 245, 245, 1)",
                                 display: 'grid',
                                 gridTemplateColumns: '1fr 1fr 1fr',
                                 gridGap: '1.5rem',
                             }}
                        >
                            <Typography sx={{
                                display: 'flex',
                                alignItems: 'center',
                            }} variant={'body1'}>
                                Automated Lead Qualifying Tool
                            </Typography>

                            <Typography color={'primary'} variant={'body1'}>
                                Free Forever
                            </Typography>

                            <Typography sx={{
                                display: 'flex',
                                alignItems: 'center',
                            }} color={'primary'} variant={'body1'}>
                                Free Forever
                            </Typography>

                        </Box>

                        {/* 3rd Row*/}

                        <Box mx={'1.5rem'} py={'1.5rem'}
                             sx={{
                                 borderBottom: "1px solid rgba(245, 245, 245, 1)",
                                 display: 'grid',
                                 gridTemplateColumns: '1fr 1fr 1fr',
                                 gridGap: '1.5rem',
                             }}
                        >
                            <Typography sx={{
                                display: 'flex',
                                alignItems: 'center',
                            }} variant={'body1'}>
                                Notification and Touch Point Automation
                            </Typography>

                            <Typography color={'primary'} variant={'body1'}>
                               &nbsp;
                            </Typography>

                            <Box sx={{
                                display: 'flex',
                                alignItems: 'center',
                                width: "80px",
                                justifyContent: 'center',
                            }} color={'primary'} variant={'body1'}>
                                <Image
                                    src={'/icons/svg/checkmark.svg'}
                                    width={18}
                                    height={13}
                                />
                            </Box>

                        </Box>

                        {/* 4th Row*/}

                        <Box mx={'1.5rem'} py={'1.5rem'}
                             sx={{
                                 borderBottom: "1px solid rgba(245, 245, 245, 1)",
                                 display: 'grid',
                                 gridTemplateColumns: '1fr 1fr 1fr',
                                 gridGap: '1.5rem',
                             }}
                        >
                            <Typography sx={{
                                display: 'flex',
                                alignItems: 'center',
                            }} variant={'body1'}>
                                Lead Scoring and Listing Matching
                            </Typography>

                            <Typography color={'primary'} variant={'body1'}>
                                &nbsp;
                            </Typography>

                            <Box sx={{
                                display: 'flex',
                                alignItems: 'center',
                                width: "80px",
                                justifyContent: 'center',
                            }} color={'primary'} variant={'body1'}>
                                <Image
                                    src={'/icons/svg/checkmark.svg'}
                                    width={18}
                                    height={13}
                                />
                            </Box>

                        </Box>

                    {/*    5th Row*/}
                        <Box mx={'1.5rem'} py={'1.5rem'}
                             sx={{
                                 borderBottom: "1px solid rgba(245, 245, 245, 1)",
                                 display: 'grid',
                                 gridTemplateColumns: '1fr 1fr 1fr',
                                 gridGap: '1.5rem',
                             }}
                        >
                            <Typography sx={{
                                display: 'flex',
                                alignItems: 'center',
                            }} variant={'body1'}>
                                Renter Sales Identifier
                            </Typography>

                            <Typography color={'primary'} variant={'body1'}>
                                &nbsp;
                            </Typography>

                            <Typography sx={{
                                display: 'flex',
                                alignItems: 'center',
                            }} variant={'body1'}>
                                Coming Soon
                            </Typography>

                        </Box>



                    </Box>

                </Box>

            </Box>
        </Box>
    );
};

export default FacilitiesSection;